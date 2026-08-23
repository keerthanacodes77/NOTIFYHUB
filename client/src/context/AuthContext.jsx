import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService.js';
import { useToast } from './ToastContext.jsx';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  const fetchUser = async () => {
    try {
      const res = await authService.getMe();
      if (res.success && res.user) {
        setUser(res.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async ({ email, password, requiredRole }) => {
    try {
      const res = await authService.login({ email, password, requiredRole });
      if (res.success && res.user) {
        setUser(res.user);
        addToast(`Welcome back, ${res.user.name}!`, 'success');
        return { success: true, user: res.user };
      }
      return { success: false, message: res.message || 'Login failed' };
    } catch (err) {
      const msg = err.message || 'Invalid email or password.';
      addToast(msg, 'error');
      return { success: false, message: msg };
    }
  };

  const register = async (userData) => {
    try {
      const res = await authService.register(userData);
      if (res.success && res.user) {
        setUser(res.user);
        addToast('Registration successful! Welcome to NotifyHub.', 'success');
        return { success: true, user: res.user };
      }
      return { success: false, message: res.message || 'Registration failed' };
    } catch (err) {
      const msg = err.message || 'Registration failed. Please check your inputs.';
      addToast(msg, 'error');
      return { success: false, message: msg };
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      addToast('You have been logged out safely.', 'info');
    } catch (err) {
      setUser(null);
    }
  };

  const changePassword = async ({ currentPassword, newPassword, confirmNewPassword }) => {
    try {
      const res = await authService.changePassword({ currentPassword, newPassword, confirmNewPassword });
      if (res.success) {
        addToast('Password updated successfully!', 'success');
        return { success: true };
      }
      return { success: false, message: res.message };
    } catch (err) {
      const msg = err.message || 'Failed to update password.';
      addToast(msg, 'error');
      return { success: false, message: msg };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        role: user?.role,
        isAdmin: user?.role === 'ADMIN',
        isStudent: user?.role === 'STUDENT',
        login,
        register,
        logout,
        refreshUser: fetchUser,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
