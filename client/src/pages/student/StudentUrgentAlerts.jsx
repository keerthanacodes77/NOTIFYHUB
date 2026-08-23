import React, { useState, useEffect } from 'react';
import { Flame, ShieldAlert, AlertTriangle, ArrowRight, RefreshCw, Calendar, Clock } from 'lucide-react';
import { announcementService } from '../../services/announcementService.js';
import { AnnouncementDetailModal } from '../../components/announcements/AnnouncementDetailModal.jsx';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { EmptyState } from '../../components/common/EmptyState.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';

export const StudentUrgentAlerts = () => {
  const [urgentAlerts, setUrgentAlerts] = useState([]);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUrgentAlerts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await announcementService.getAll({ priority: 'URGENT' });
      if (res.success) {
        setUrgentAlerts(res.announcements || []);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load urgent campus alerts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrgentAlerts();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Page Banner */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.16) 0%, rgba(245, 158, 11, 0.1) 100%)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          padding: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(239, 68, 68, 0.25)',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <ShieldAlert size={26} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 900, margin: 0, color: '#f87171' }}>
              Urgent Campus Broadcasts
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
              Time-critical notices, emergency advisories, network maintenance & immediate campus updates
            </p>
          </div>
        </div>

        <button onClick={fetchUrgentAlerts} className="btn-secondary btn-sm" style={{ display: 'flex', gap: '6px' }}>
          <RefreshCw size={14} />
          <span>Refresh Feed</span>
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <LoadingSpinner text="Checking for active urgent broadcasts..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchUrgentAlerts} />
      ) : urgentAlerts.length === 0 ? (
        <EmptyState
          icon={ShieldAlert}
          title="No Active Urgent Alerts"
          description="There are currently no high-priority emergency notices published by college administration. All campus systems are normal."
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {urgentAlerts.map((alert) => (
            <div
              key={alert.id}
              className="card animate-pulse-glow"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid rgba(239, 68, 68, 0.45)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <span className="badge badge-urgent">
                  <Flame size={13} /> URGENT BROADCAST
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} />
                    <span>{new Date(alert.createdAt).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}</span>
                  </div>
                  {alert.deadline && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ef4444', fontWeight: 600 }}>
                      <Clock size={13} />
                      <span>Deadline: {new Date(alert.deadline).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>

              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                {alert.title}
              </h2>

              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {alert.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => setSelectedAlert(alert)}
                  className="btn-danger btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>View Complete Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <AnnouncementDetailModal
        isOpen={!!selectedAlert}
        onClose={() => setSelectedAlert(null)}
        announcement={selectedAlert}
      />
    </div>
  );
};
export default StudentUrgentAlerts;
