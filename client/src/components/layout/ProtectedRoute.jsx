import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { LoadingSpinner } from '../common/LoadingSpinner.jsx';

export const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <LoadingSpinner text="Authenticating session..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    const isTargetingAdmin = location.pathname.startsWith('/admin');
    return <Navigate to={isTargetingAdmin ? '/admin/login' : '/student/login'} state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    // If student tries to visit admin page, redirect to student home
    if (user?.role === 'STUDENT') {
      return <Navigate to="/student/home" replace />;
    }
    // If admin tries to visit student page, redirect to admin overview
    if (user?.role === 'ADMIN') {
      return <Navigate to="/admin/overview" replace />;
    }
  }

  return children;
};
export default ProtectedRoute;
