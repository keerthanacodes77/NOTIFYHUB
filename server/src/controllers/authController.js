import bcrypt from 'bcryptjs';
import { prisma } from '../config/prisma.js';
import { generateToken, getCookieOptions } from '../utils/jwt.js';
import { logActivity } from '../utils/activityLogger.js';

export const register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, rollNumber, department, year } = req.body;

    if (!name || !email || !password || !confirmPassword || !rollNumber || !department || !year) {
      return res.status(400).json({
        success: false,
        message: 'All fields (Name, Email, Password, Confirm Password, Roll Number, Department, Year) are required.',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long.',
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match.',
      });
    }

    const existingEmail = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email address already exists.',
      });
    }

    const existingRoll = await prisma.user.findUnique({
      where: { rollNumber: rollNumber.trim() },
    });

    if (existingRoll) {
      return res.status(400).json({
        success: false,
        message: 'An account with this Roll Number already exists.',
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        passwordHash,
        role: 'STUDENT',
        rollNumber: rollNumber.trim(),
        department: department.trim(),
        year: year.trim(),
      },
    });

    // Create a welcome notification
    await prisma.notification.create({
      data: {
        title: '🎓 Welcome to NotifyHub!',
        message: `Welcome ${user.name}! Your student account is now active. Check announcements, events, and college notices.`,
        type: 'SYSTEM',
        read: false,
        link: '/student/home',
        userId: user.id,
      },
    });

    const token = generateToken(user);
    res.cookie('token', token, getCookieOptions());

    const { passwordHash: _, ...safeUser } = user;
    return res.status(201).json({
      success: true,
      message: 'Student registration successful!',
      user: safeUser,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password, requiredRole } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required.',
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    if (requiredRole && user.role !== requiredRole) {
      return res.status(403).json({
        success: false,
        message: `Unauthorized portal. This login is for ${requiredRole} accounts only.`,
      });
    }

    const token = generateToken(user);
    res.cookie('token', token, getCookieOptions());

    if (user.role === 'ADMIN') {
      await logActivity({
        action: 'ADMIN_LOGIN',
        entityType: 'Auth',
        entityId: user.id,
        details: `Administrator ${user.name} logged in.`,
        adminId: user.id,
      });
    }

    const { passwordHash: _, ...safeUser } = user;
    return res.status(200).json({
      success: true,
      message: `Welcome back, ${user.name}!`,
      user: safeUser,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    if (req.user?.role === 'ADMIN') {
      await logActivity({
        action: 'ADMIN_LOGOUT',
        entityType: 'Auth',
        entityId: req.user.id,
        details: `Administrator ${req.user.name} logged out.`,
        adminId: req.user.id,
      });
    }

    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      path: '/',
    });

    return res.status(200).json({
      success: true,
      message: 'Logged out successfully.',
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Not authenticated.',
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    const { passwordHash: _, ...safeUser } = user;
    return res.status(200).json({
      success: true,
      user: safeUser,
    });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;
    const userId = req.user.id;

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: 'Current password, new password, and confirmation are required.',
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters long.',
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: 'New passwords do not match.',
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect current password.',
      });
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });

    if (user.role === 'ADMIN') {
      await logActivity({
        action: 'ADMIN_PASSWORD_CHANGED',
        entityType: 'Settings',
        entityId: user.id,
        details: `Administrator ${user.name} changed their password.`,
        adminId: user.id,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Password updated successfully.',
    });
  } catch (error) {
    next(error);
  }
};
