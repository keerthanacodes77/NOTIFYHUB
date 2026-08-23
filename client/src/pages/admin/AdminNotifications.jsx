import React, { useState, useEffect } from 'react';
import {
  Bell,
  CheckCheck,
  Clock,
  ExternalLink,
  Flame,
  MessageSquare,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { notificationService } from '../../services/notificationService.js';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { EmptyState } from '../../components/common/EmptyState.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
            System Notifications & Alerts Log
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Monitor automated system broadcast triggers and student reply alerts
          </p>
        </div>

        <button onClick={handleMarkAllRead} className="btn-secondary btn-sm" style={{ display: 'flex', gap: '6px' }}>
          <CheckCheck size={16} />
          <span>Mark All Read</span>
        </button>
      </div>

      {loading ? (
        <LoadingSpinner text="Fetching notification logs..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchNotifications} />
      ) : notifications.length === 0 ? (
        <EmptyState
          icon={Bell}
          title="No notifications"
          description="System notifications and student alerts will appear here."
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '16px 20px',
                background: notif.read ? 'var(--bg-card)' : 'var(--bg-elevated)',
                border: notif.read ? '1px solid var(--border-color)' : '1px solid var(--border-highlight)',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
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
                  <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                    {notif.title}
                  </h4>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)' }}>
                    {new Date(notif.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                  {notif.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AdminNotifications;
