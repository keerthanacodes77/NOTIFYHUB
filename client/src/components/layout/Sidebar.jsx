import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Home,
  Megaphone,
  Calendar,
  AlertTriangle,
  Bell,
  MessageSquare,
  Building,
  User,
  LayoutDashboard,
  CalendarCheck,
  HelpCircle,
  FileText,
  Activity,
  Settings,
  LogOut,
  X,
  GraduationCap,
  ShieldAlert,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export const Sidebar = ({ isOpen, onClose }) => {
  const { user, isAdmin, isStudent, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const studentLinks = [
    { to: '/student/home', label: 'Home', icon: Home },
    { to: '/student/announcements', label: 'Announcements', icon: Megaphone },
    { to: '/student/calendar', label: 'Calendar & Events', icon: Calendar },
    { to: '/student/urgent-alerts', label: 'Urgent Alerts', icon: ShieldAlert, highlight: true },
    { to: '/student/notifications', label: 'Notifications', icon: Bell },
    { to: '/student/qa', label: 'Student Q&A', icon: MessageSquare },
    { to: '/student/about', label: 'About College', icon: Building },
    { to: '/student/profile', label: 'My Profile', icon: User },
  ];

  const adminLinks = [
    { to: '/admin/overview', label: 'Overview', icon: LayoutDashboard },
    { to: '/admin/announcements', label: 'Announcements', icon: Megaphone },
    { to: '/admin/events', label: 'Events Management', icon: CalendarCheck },
    { to: '/admin/queries', label: 'Student Queries', icon: HelpCircle },
    { to: '/admin/notifications', label: 'Notifications', icon: Bell },
    { to: '/admin/activity-logs', label: 'Activity Logs', icon: Activity },
    { to: '/admin/settings', label: 'Settings & Health', icon: Settings },
  ];

  const links = isAdmin ? adminLinks : studentLinks;

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 95,
          }}
        />
      )}

      <aside className={`portal-sidebar ${isOpen ? 'open' : ''}`}>
        {/* Sidebar Header */}
        <div
          style={{
            padding: '20px 22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: 'var(--radius-sm)',
                background: isAdmin ? 'var(--accent-gradient-purple)' : 'var(--accent-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <GraduationCap size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
                {isAdmin ? 'Admin Portal' : 'Student Portal'}
              </h2>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                NotifyHub v1.0
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-icon btn-secondary btn-icon-sm"
            style={{ display: isOpen ? 'flex' : 'none' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* User preview banner */}
        <div
          style={{
            padding: '14px 18px',
            margin: '12px 14px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-color)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: isAdmin ? 'var(--accent-gradient-purple)' : 'var(--accent-gradient)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.9rem',
                flexShrink: 0,
              }}
            >
              {user?.name ? user.name.charAt(0) : 'U'}
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {user?.name}
              </p>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-secondary)',
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {isAdmin ? 'System Administrator' : user?.rollNumber || user?.department || 'Student'}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation items */}
        <nav style={{ padding: '0 12px', flex: 1, overflowY: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 700 : 500,
                    textDecoration: 'none',
                    color: isActive
                      ? '#ffffff'
                      : link.highlight
                      ? '#f87171'
                      : 'var(--text-secondary)',
                    background: isActive
                      ? link.highlight
                        ? '#ef4444'
                        : isAdmin
                        ? 'var(--accent-primary)'
                        : 'var(--accent-primary)'
                      : link.highlight
                      ? 'rgba(239, 68, 68, 0.08)'
                      : 'transparent',
                    boxShadow: isActive ? '0 4px 12px var(--accent-primary-glow)' : 'none',
                    transition: 'all var(--transition-fast)',
                  })}
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Logout bottom button */}
        <div style={{ padding: '16px', borderTop: '1px solid var(--border-color)' }}>
          <button
            onClick={handleLogout}
            className="btn-outline"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#ef4444',
              borderColor: 'rgba(239, 68, 68, 0.3)',
            }}
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
