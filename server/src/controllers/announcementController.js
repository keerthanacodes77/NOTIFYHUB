import { prisma } from '../config/prisma.js';
import { logActivity } from '../utils/activityLogger.js';

export const getAllAnnouncements = async (req, res, next) => {
  try {
    const { search, category, priority, status, department, year, limit } = req.query;
    const isStudent = req.user?.role === 'STUDENT';

    let announcements = await prisma.announcement.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit ? parseInt(limit, 10) : undefined,
    });

    // Students only see published announcements
    if (isStudent) {
      announcements = announcements.filter(a => a.status === 'PUBLISHED');
    } else if (status) {
      announcements = announcements.filter(a => a.status === status);
    }

    if (category && category !== 'All') {
      announcements = announcements.filter(
        a => a.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (priority && priority !== 'All') {
      announcements = announcements.filter(
        a => a.priority.toUpperCase() === priority.toUpperCase()
      );
    }

    if (department && department !== 'All') {
      announcements = announcements.filter(
        a => a.department === 'All' || a.department === department
      );
    }

    if (year && year !== 'All') {
      announcements = announcements.filter(
        a => a.year === 'All' || a.year === year
      );
    }

    if (search) {
      const q = search.toLowerCase();
      announcements = announcements.filter(
        a =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      );
    }

    return res.status(200).json({
      success: true,
      count: announcements.length,
      announcements,
    });
  } catch (error) {
    next(error);
  }
};

export const getAnnouncementById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const announcement = await prisma.announcement.findUnique({
      where: { id },
    });

    if (!announcement) {
      return res.status(404).json({
        success: false,
        message: 'Announcement not found.',
      });
    }

    if (req.user?.role === 'STUDENT' && announcement.status !== 'PUBLISHED') {
      return res.status(403).json({
        success: false,
        message: 'This announcement is not published.',
      });
    }

    return res.status(200).json({
      success: true,
      announcement,
    });
  } catch (error) {
    next(error);
  }
};

export const createAnnouncement = async (req, res, next) => {
  try {
    const {
      title,
      description,
      category,
      priority = 'NORMAL',
      status = 'PUBLISHED',
      department = 'All',
      year = 'All',
      deadline,
    } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: 'Title, description, and category are required.',
      });
    }

    let attachment = null;
    let attachmentName = null;
    let attachmentSize = null;

    if (req.file) {
      attachment = `/uploads/${req.file.filename}`;
      attachmentName = req.file.originalname;
      attachmentSize = req.file.size;
    }

    const announcement = await prisma.announcement.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        category: category.trim(),
        priority: priority.toUpperCase(),
        status: status.toUpperCase(),
        department: department.trim(),
        year: year.trim(),
        deadline: deadline ? new Date(deadline) : null,
        attachment,
        attachmentName,
        attachmentSize,
        createdBy: req.user.id,
      },
    });

    // If published and priority is URGENT or IMPORTANT, notify all students
    if (announcement.status === 'PUBLISHED') {
      const students = await prisma.user.findMany({
        where: { role: 'STUDENT' },
      });

      const notifType = announcement.priority === 'URGENT' ? 'URGENT_ALERT' : 'ANNOUNCEMENT';
      const prefix = announcement.priority === 'URGENT' ? '🚨 [Urgent Alert] ' : '📢 [New Notice] ';

      for (const student of students) {
        await prisma.notification.create({
          data: {
            title: `${prefix}${announcement.title}`,
            message: announcement.description.slice(0, 120) + (announcement.description.length > 120 ? '...' : ''),
            type: notifType,
            read: false,
            link: announcement.priority === 'URGENT' ? '/student/urgent-alerts' : '/student/announcements',
            userId: student.id,
          },
        });
      }
    }

    await logActivity({
      action: 'ANNOUNCEMENT_CREATED',
      entityType: 'Announcement',
      entityId: announcement.id,
      details: `Created announcement "${announcement.title}" (${announcement.priority} - ${announcement.status}).`,
      adminId: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: 'Announcement created successfully!',
      announcement,
    });
  } catch (error) {
    next(error);
  }
};

export const updateAnnouncement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      category,
      priority,
      status,
      department,
      year,
      deadline,
    } = req.body;

    const existing = await prisma.announcement.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Announcement not found.',
      });
    }

    const updateData = {};
    if (title) updateData.title = title.trim();
    if (description) updateData.description = description.trim();
    if (category) updateData.category = category.trim();
    if (priority) updateData.priority = priority.toUpperCase();
    if (status) updateData.status = status.toUpperCase();
    if (department) updateData.department = department.trim();
    if (year) updateData.year = year.trim();
    if (deadline !== undefined) updateData.deadline = deadline ? new Date(deadline) : null;

    if (req.file) {
      updateData.attachment = `/uploads/${req.file.filename}`;
      updateData.attachmentName = req.file.originalname;
      updateData.attachmentSize = req.file.size;
    }

    const updated = await prisma.announcement.update({
      where: { id },
      data: updateData,
    });

    // If status changed from draft to published, send notification
    if (existing.status !== 'PUBLISHED' && updated.status === 'PUBLISHED') {
      const students = await prisma.user.findMany({ where: { role: 'STUDENT' } });
      for (const student of students) {
        await prisma.notification.create({
          data: {
            title: `📢 ${updated.title}`,
            message: updated.description.slice(0, 120),
            type: updated.priority === 'URGENT' ? 'URGENT_ALERT' : 'ANNOUNCEMENT',
            read: false,
            link: '/student/announcements',
            userId: student.id,
          },
        });
      }
    }

    await logActivity({
      action: 'ANNOUNCEMENT_UPDATED',
      entityType: 'Announcement',
      entityId: updated.id,
      details: `Updated announcement "${updated.title}". Status: ${updated.status}.`,
      adminId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: 'Announcement updated successfully.',
      announcement: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAnnouncement = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existing = await prisma.announcement.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Announcement not found.',
      });
    }

    await prisma.announcement.delete({
      where: { id },
    });

    await logActivity({
      action: 'ANNOUNCEMENT_DELETED',
      entityType: 'Announcement',
      entityId: id,
      details: `Deleted announcement "${existing.title}".`,
      adminId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: 'Announcement deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};
