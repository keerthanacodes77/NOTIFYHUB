import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, ChevronRight, Flame, ShieldAlert, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { announcementService } from '../../services/announcementService.js';

export const UrgentAlertDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [urgentAlerts, setUrgentAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const fetchUrgentAlerts = async () => {
    try {
      setLoading(true);
      const res = await announcementService.getAll({ priority: 'URGENT', limit: 5 });
      if (res.success) {
        setUrgentAlerts(res.announcements || []);
      }
    } catch (err) {
      console.error('Failed to load urgent alerts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrgentAlerts();
    const interval = setInterval(fetchUrgentAlerts, 20000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (urgentAlerts.length === 0) return null;

  return (
    <div className="urgent-alert-dropdown-wrapper" ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-sm animate-pulse-glow"
        style={{
          background: 'rgba(239, 68, 68, 0.18)',
          color: '#f87171',
          border: '1px solid rgba(239, 68, 68, 0.5)',
          borderRadius: 'var(--radius-full)',
          padding: '6px 12px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontWeight: 700,
          cursor: 'pointer',
        }}
        title="Urgent Campus Alerts"
      >
        <Flame size={15} color="#ef4444" />
        <span style={{ fontSize: '0.8rem' }}>
          {urgentAlerts.length} Urgent {urgentAlerts.length === 1 ? 'Alert' : 'Alerts'}
        </span>
      </button>

      {isOpen && (
        <div
          className="animate-scale-in"
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            right: '0',
            width: '380px',
            maxWidth: '90vw',
            background: 'var(--bg-dropdown)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-glow-urgent)',
            zIndex: 1000,
            overflow: 'hidden',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '14px 18px',
              borderBottom: '1px solid rgba(239, 68, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(239, 68, 68, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert size={18} color="#ef4444" />
              <span style={{ fontWeight: 800, fontSize: '0.92rem', color: '#f87171', letterSpacing: '0.02em' }}>
                URGENT CAMPUS BROADCASTS
              </span>
            </div>
            <span className="badge badge-urgent" style={{ fontSize: '0.68rem' }}>
              Active
            </span>
          </div>

          {/* Alert list */}
          <div style={{ maxHeight: '320px', overflowY: 'auto' }}>
            {urgentAlerts.map((alert) => (
              <div
                key={alert.id}
                onClick={() => {
                  setIsOpen(false);
                  navigate('/student/urgent-alerts');
                }}
                style={{
                  padding: '14px 18px',
                  borderBottom: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  background: 'transparent',
                  transition: 'background var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(239, 68, 68, 0.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                    {alert.title}
                  </h4>
                  <ChevronRight size={16} color="var(--text-tertiary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                </div>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    margin: '6px 0 8px',
                    lineHeight: 1.35,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {alert.description}
                </p>
                <div style={{ fontSize: '0.72rem', color: '#f87171', fontWeight: 600 }}>
                  Posted {new Date(alert.createdAt).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '12px',
              textAlign: 'center',
              borderTop: '1px solid var(--border-color)',
              background: 'var(--bg-tertiary)',
            }}
          >
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/student/urgent-alerts');
              }}
              className="btn-danger btn-sm"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            >
              <span>View all urgent broadcasts</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default UrgentAlertDropdown;
