import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Megaphone,
  CalendarCheck,
  AlertTriangle,
  HelpCircle,
  CheckCircle2,
  Activity,
  Plus,
  ArrowRight,
  Flame,
  Clock,
  Sparkles,
  Send,
  MessageSquare,
} from 'lucide-react';
import { announcementService } from '../../services/announcementService.js';
import { eventService } from '../../services/eventService.js';
import { queryService } from '../../services/queryService.js';
import { activityService } from '../../services/activityService.js';
import { healthService } from '../../services/healthService.js';
import { QueryReplyModal } from '../../components/queries/QueryReplyModal.jsx';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';

export const AdminOverview = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalAnnouncements: 0,
    publishedAnnouncements: 0,
    upcomingEvents: 0,
    urgentAlerts: 0,
    openQueries: 0,
    resolvedQueries: 0,
  });

  const [recentAnnouncements, setRecentAnnouncements] = useState([]);
  const [pendingQueries, setPendingQueries] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [replyingQuery, setReplyingQuery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOverviewData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [annRes, evtRes, qryRes, actRes, healthRes] = await Promise.all([
        announcementService.getAll(),
        eventService.getAll({ upcoming: 'true' }),
        queryService.getAll(),
        activityService.getAll({ limit: 6 }),
        healthService.getHealth(),
      ]);

      if (annRes.success) {
        const anns = annRes.announcements || [];
        setRecentAnnouncements(anns.slice(0, 4));

        const totalAnn = anns.length;
        const pubAnn = anns.filter(a => a.status === 'PUBLISHED').length;
        const urgAnn = anns.filter(a => a.priority === 'URGENT').length;

        setStats(prev => ({
          ...prev,
          totalAnnouncements: totalAnn,
          publishedAnnouncements: pubAnn,
          urgentAlerts: urgAnn,
        }));
      }

      if (evtRes.success) {
        setStats(prev => ({
          ...prev,
          upcomingEvents: (evtRes.events || []).length,
        }));
      }

      if (qryRes.success) {
        const qrys = qryRes.queries || [];
        const open = qrys.filter(q => q.status === 'OPEN').length;
        const resolved = qrys.filter(q => q.status === 'RESOLVED').length;
        setPendingQueries(qrys.filter(q => q.status === 'OPEN' || q.status === 'IN_PROGRESS').slice(0, 4));

        setStats(prev => ({
          ...prev,
          openQueries: open,
          resolvedQueries: resolved,
        }));
      }

      if (actRes.success) {
        setRecentActivities(actRes.logs || []);
      }

      if (healthRes.success && healthRes.services?.database) {
        setStats(prev => ({
          ...prev,
          totalStudents: Math.max(1, (healthRes.services.database.totalUsers || 4) - 1),
        }));
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load administrative overview.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOverviewData();
  }, []);

  if (loading) return <LoadingSpinner text="Compiling admin dashboard telemetry..." />;
  if (error) return <ErrorState message={error} onRetry={fetchOverviewData} />;

  const statCards = [
    { label: 'Total Enrolled Students', value: stats.totalStudents, icon: Users, color: '#6366f1' },
    { label: 'Published Notices', value: stats.publishedAnnouncements, icon: Megaphone, color: '#10b981' },
    { label: 'Upcoming Events', value: stats.upcomingEvents, icon: CalendarCheck, color: '#06b6d4' },
    { label: 'Urgent Alerts Active', value: stats.urgentAlerts, icon: Flame, color: '#ef4444' },
    { label: 'Pending Student Queries', value: stats.openQueries, icon: HelpCircle, color: '#f59e0b' },
    { label: 'Resolved Queries', value: stats.resolvedQueries, icon: CheckCircle2, color: '#10b981' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Header Banner */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.18) 0%, rgba(99, 102, 241, 0.12) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.35)',
          padding: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Sparkles size={16} color="#c084fc" />
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#c084fc', textTransform: 'uppercase' }}>
              Administration & Governance Console
            </span>
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
            Administrative Control Center
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Broadcast college notices, monitor events, answer student queries, and audit system activities.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Link to="/admin/announcements" className="btn-primary" style={{ background: 'var(--accent-gradient-purple)' }}>
            <Plus size={16} />
            <span>Create Notice</span>
          </Link>
          <Link to="/admin/events" className="btn-secondary">
            <CalendarCheck size={16} />
            <span>Schedule Event</span>
          </Link>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid-3" style={{ gap: '20px' }}>
        {statCards.map((sc, i) => {
          const Icon = sc.icon;
          return (
            <div
              key={i}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-tertiary)', display: 'block', marginBottom: '4px' }}>
                  {sc.label}
                </span>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)', lineHeight: 1 }}>
                  {sc.value}
                </h3>
              </div>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: `${sc.color}18`,
                  color: sc.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Split Grid: Pending Queries & Recent Announcements */}
      <div className="grid-2" style={{ gap: '28px', alignItems: 'flex-start' }}>
        {/* Left Column: Pending Queries requiring Admin Attention */}
        <div className="card" style={{ background: 'var(--bg-secondary)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={20} color="#f59e0b" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                Pending Student Queries
              </h3>
            </div>
            <Link to="/admin/queries" style={{ fontSize: '0.82rem', fontWeight: 700 }}>
              Manage All ({stats.openQueries})
            </Link>
          </div>

          {pendingQueries.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '32px', color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={32} color="#10b981" style={{ margin: '0 auto 8px' }} />
              <p style={{ margin: 0, fontSize: '0.9rem' }}>All student queries have been responded to!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {pendingQueries.map((q) => (
                <div
                  key={q.id}
                  style={{
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      {q.student?.name || 'Student'} ({q.student?.rollNumber || q.student?.email})
                    </strong>
                    <span className="badge badge-open" style={{ fontSize: '0.65rem' }}>
                      {q.status}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                    {q.subject}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 10px', lineHeight: 1.4 }}>
                    {q.message.slice(0, 110)}...
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={() => setReplyingQuery(q)} className="btn-primary btn-sm" style={{ fontSize: '0.76rem' }}>
                      <Send size={13} /> Reply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Recent Administrative Activities Audit Feed */}
        <div className="card" style={{ background: 'var(--bg-secondary)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={20} color="var(--accent-primary)" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                Recent Audit Trail Logs
              </h3>
            </div>
            <Link to="/admin/activity-logs" style={{ fontSize: '0.82rem', fontWeight: 700 }}>
              View All Logs
            </Link>
          </div>

          {recentActivities.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '32px', color: 'var(--text-secondary)' }}>
              No audit logs recorded yet.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {recentActivities.map((act) => (
                <div
                  key={act.id}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    borderLeft: '3px solid var(--accent-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                      {act.action}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                      {new Date(act.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.4 }}>
                    {act.details}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <QueryReplyModal
        isOpen={!!replyingQuery}
        onClose={() => setReplyingQuery(null)}
        query={replyingQuery}
        onSuccess={() => fetchOverviewData()}
      />
    </div>
  );
};
export default AdminOverview;
