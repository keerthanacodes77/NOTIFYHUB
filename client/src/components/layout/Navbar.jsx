import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  LogOut,
  User,
  Shield,
  Menu,
  ChevronDown,
  GraduationCap,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';

export const Navbar = ({ onToggleSidebar = null }) => {
  const { user, isAuthenticated, isAdmin, isStudent, logout } = useAuth();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    setProfileMenuOpen(false);
    await logout();
    navigate('/');
  };

  return (
    <header
      style={{
        height: '70px',
        background: 'var(--bg-glass-strong)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}
    >
      {/* Brand & Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="btn-icon btn-secondary"
            style={{ width: '38px', height: '38px' }}
            aria-label="Toggle navigation"
          >
            <Menu size={20} />
          </button>
        )}

        <Link
          to={isAuthenticated ? (isAdmin ? '/admin/overview' : '/student/home') : '/'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 12px var(--accent-primary-glow)',
            }}
          >
            <GraduationCap size={22} />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.28rem',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              NotifyHub
            </span>
            <span style={{ fontSize: '0.66rem', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Campus Portal
            </span>
          </div>
        </Link>
      </div>

      {/* Right controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Authenticated User Menu */}
        {isAuthenticated ? (
          <div ref={profileMenuRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                color: 'var(--text-primary)',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isAdmin ? 'var(--accent-gradient-purple)' : 'var(--accent-gradient)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                }}
              >
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>

              <div style={{ textAlign: 'left', display: 'none', minWidth: '80px' }} className="nav-user-text">
                <span style={{ fontSize: '0.84rem', fontWeight: 700, display: 'block', lineHeight: 1.2 }}>
                  {user?.name?.split(' ')[0]}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                  {isAdmin ? 'Administrator' : user?.rollNumber || 'Student'}
                </span>
              </div>

              <ChevronDown size={14} color="var(--text-tertiary)" />
            </button>

            {/* Profile Dropdown */}
            {profileMenuOpen && (
              <div
                className="animate-scale-in"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  width: '240px',
                  background: 'var(--bg-dropdown)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 1000,
                  overflow: 'hidden',
                }}
              >
                <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-tertiary)' }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    {user?.name}
                  </p>
                  <p style={{ margin: '2px 0 0', fontSize: '0.76rem', color: 'var(--text-tertiary)' }}>
                    {user?.email}
                  </p>
                  <div style={{ marginTop: '6px' }}>
                    <span className={`badge ${isAdmin ? 'badge-urgent' : 'badge-normal'}`} style={{ fontSize: '0.68rem' }}>
                      {user?.role}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '6px' }}>
                  {isStudent && (
                    <Link
                      to="/student/profile"
                      onClick={() => setProfileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 12px',
                        fontSize: '0.86rem',
                        color: 'var(--text-primary)',
                        borderRadius: 'var(--radius-sm)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-tertiary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <User size={16} />
                      <span>Student Profile</span>
                    </Link>
                  )}

                  {isAdmin && (
                    <Link
                      to="/admin/settings"
                      onClick={() => setProfileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 12px',
                        fontSize: '0.86rem',
                        color: 'var(--text-primary)',
                        borderRadius: 'var(--radius-sm)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-tertiary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <Shield size={16} />
                      <span>Admin Settings</span>
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 12px',
                      fontSize: '0.86rem',
                      color: '#ef4444',
                      background: 'none',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* When not logged in: only a single clean Login link */
          <Link
            to="/student/login"
            className="btn-primary btn-md"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 18px',
              fontSize: '0.88rem',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <User size={16} />
            <span>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Navbar;
