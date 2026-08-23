import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { ToastProvider } from './context/ToastContext.jsx';
import { ProtectedRoute } from './components/layout/ProtectedRoute.jsx';

// Public Pages
import { LandingPage } from './pages/LandingPage.jsx';
import { StudentRegister } from './pages/auth/StudentRegister.jsx';
import { StudentLogin } from './pages/auth/StudentLogin.jsx';
import { AdminLogin } from './pages/auth/AdminLogin.jsx';

// Student Portal
import { StudentDashboardLayout } from './pages/student/StudentDashboardLayout.jsx';
import { StudentHome } from './pages/student/StudentHome.jsx';
import { StudentAnnouncements } from './pages/student/StudentAnnouncements.jsx';
import { StudentUrgentAlerts } from './pages/student/StudentUrgentAlerts.jsx';
import { StudentEventsCalendar } from './pages/student/StudentEventsCalendar.jsx';
import { StudentNotifications } from './pages/student/StudentNotifications.jsx';
import { StudentQA } from './pages/student/StudentQA.jsx';
import { AboutCollege } from './pages/student/AboutCollege.jsx';
import { StudentProfile } from './pages/student/StudentProfile.jsx';

// Admin Portal
import { AdminDashboardLayout } from './pages/admin/AdminDashboardLayout.jsx';
import { AdminOverview } from './pages/admin/AdminOverview.jsx';
import { AdminAnnouncements } from './pages/admin/AdminAnnouncements.jsx';
import { AdminEvents } from './pages/admin/AdminEvents.jsx';
import { AdminQueries } from './pages/admin/AdminQueries.jsx';
import { AdminNotifications } from './pages/admin/AdminNotifications.jsx';
import { AdminActivityLogs } from './pages/admin/AdminActivityLogs.jsx';
import { AdminSettings } from './pages/admin/AdminSettings.jsx';

export const App = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/student/register" element={<StudentRegister />} />
              <Route path="/student/login" element={<StudentLogin />} />
              <Route path="/admin/login" element={<AdminLogin />} />

              {/* Student Portal Protected Routes */}
              <Route
                path="/student"
                element={
                  <ProtectedRoute allowedRoles={['STUDENT']}>
                    <StudentDashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="/student/home" replace />} />
                <Route path="home" element={<StudentHome />} />
                <Route path="announcements" element={<StudentAnnouncements />} />
                <Route path="urgent-alerts" element={<StudentUrgentAlerts />} />
                <Route path="calendar" element={<StudentEventsCalendar />} />
                <Route path="notifications" element={<StudentNotifications />} />
                <Route path="qa" element={<StudentQA />} />
                <Route path="about" element={<AboutCollege />} />
                <Route path="profile" element={<StudentProfile />} />
              </Route>

              {/* Admin Portal Protected Routes */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute allowedRoles={['ADMIN']}>
                    <AdminDashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="/admin/overview" replace />} />
                <Route path="overview" element={<AdminOverview />} />
                <Route path="announcements" element={<AdminAnnouncements />} />
                <Route path="events" element={<AdminEvents />} />
                <Route path="queries" element={<AdminQueries />} />
                <Route path="notifications" element={<AdminNotifications />} />
                <Route path="activity-logs" element={<AdminActivityLogs />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};
export default App;
