import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  CheckCheck,
  Clock,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Calendar,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { notificationService } from '../../services/notificationService.js';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { EmptyState } from '../../components/common/EmptyState.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export const StudentNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await notificationService.getMyNotifications({ limit: 50 });
      if (res.success) {
        setNotifications(res.notifications || []);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load notifications.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleMarkAllRead = async () => {
    try {
      await notificationService.markAllAsRead();
      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
      addToast('All notifications marked as read', 'info');
    } catch (err) {
      addToast('Failed to mark all as read', 'error');
    }
  };

  const handleItemClick = async (notif) => {
    if (!notif.read) {
      try {
        await notificationService.markAsRead(notif.id);
        setNotifications(prev => prev.map(n => n.id === notif.id ? { ...n, read: true } : n));
      } catch (err) {
        console.error(err);
      }
    }
    if (notif.link) {
      navigate(notif.link);
    }
  };

  const getNotifIcon = (type) => {
    switch (type) {
      case 'URGENT_ALERT':
        return <Flame size={18} color="#ef4444" />;
      case 'EVENT':
        return <Calendar size={18} color="#06b6d4" />;
      case 'QUERY_REPLY':
        return <MessageSquare size={18} color="#10b981" />;
      default:
        return <Bell size={18} color="#6366f1" />;
    }
  };

  const unreadTotal = notifications.filter(n => !n.read).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
            Notifications Center
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Instant alerts for new notices, urgent campus updates, and administrator responses
          </p>
        </div>

        {unreadTotal > 0 && (
          <button onClick={handleMarkAllRead} className="btn-secondary btn-sm" style={{ display: 'flex', gap: '6px' }}>
            <CheckCheck size={16} />
            <span>Mark All as Read ({unreadTotal})</span>
          </button>
        )}
      </div>

      {loading ? (
        <LoadingSpinner text="Fetching your notifications..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchNotifications} />
      ) : notifications.length === 0 ? (
        <EmptyState
          icon={Bell}
          title="No Notifications Found"
          description="You don't have any notifications right now. New notices and administrative query replies will appear here."
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => handleItemClick(notif)}
              className="card interactive-card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '18px 20px',
                background: notif.read ? 'var(--bg-card)' : 'var(--bg-elevated)',
                border: notif.read ? '1px solid var(--border-color)' : '1px solid var(--border-highlight)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {getNotifIcon(notif.type)}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: notif.read ? 600 : 800, color: 'var(--text-primary)', margin: 0 }}>
                    {notif.title}
                  </h4>
                  {!notif.read && (
                    <span className="badge badge-normal" style={{ fontSize: '0.66rem' }}>
                      NEW
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '6px 0 8px', lineHeight: 1.5 }}>
                  {notif.message}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: 'var(--text-tertiary)' }}>
                  <Clock size={12} />
                  <span>{new Date(notif.createdAt).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default StudentNotifications;
