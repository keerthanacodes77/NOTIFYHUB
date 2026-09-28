import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Megaphone,
  Calendar,
  AlertTriangle,
  MessageSquare,
  Bell,
  ArrowRight,
  Flame,
  Clock,
  Building2,
  Sparkles,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import { announcementService } from '../../services/announcementService.js';
import { eventService } from '../../services/eventService.js';
import { AnnouncementCard } from '../../components/announcements/AnnouncementCard.jsx';
import { EventCard } from '../../components/events/EventCard.jsx';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';

export const StudentHome = () => {
  const { user } = useAuth();
  const [announcements, setAnnouncements] = useState([]);
  const [urgentAlerts, setUrgentAlerts] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [annRes, evtRes] = await Promise.all([
        announcementService.getAll({ limit: 8 }),
        eventService.getAll({ upcoming: 'true', limit: 3 }),
      ]);

      if (annRes.success) {
        const allAnn = annRes.announcements || [];
        setAnnouncements(allAnn.slice(0, 4));
        setUrgentAlerts(allAnn.filter((a) => a.priority === 'URGENT'));
      }

      if (evtRes.success) {
        setEvents(evtRes.events || []);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load home dashboard data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const quickActions = [
    {
      to: '/student/announcements',
      title: 'View Announcements',
      desc: 'Browse academic, placement & exam circulars',
      icon: Megaphone,
      color: '#6366f1',
    },
    {
      to: '/student/calendar',
      title: 'Events Calendar',
      desc: 'Track hackathons, workshops & sports',
      icon: Calendar,
      color: '#06b6d4',
    },
    {
      to: '/student/qa',
      title: 'Ask a Question',
      desc: 'Submit queries directly to college administration',
      icon: MessageSquare,
      color: '#10b981',
    },
    {
      to: '/student/notifications',
      title: 'Notifications Feed',
      desc: 'Check live status updates & response alerts',
      icon: Bell,
      color: '#f59e0b',
    },
  ];

  if (loading) return <LoadingSpinner text="Loading your student dashboard..." />;
  if (error) return <ErrorState message={error} onRetry={fetchData} />;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* 1. Welcome Banner */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.12) 100%)',
          border: '1px solid var(--border-highlight)',
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
            <Sparkles size={16} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase' }}>
              Student Portal Overview
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, marginBottom: '6px', color: 'var(--text-primary)' }}>
            Welcome back, {user?.name}!
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
            <span><strong>Roll No:</strong> {user?.rollNumber || 'N/A'}</span>
            <span>•</span>
            <span><strong>Dept:</strong> {user?.department || 'Engineering'}</span>
            <span>•</span>
            <span><strong>Year:</strong> {user?.year || 'Current'}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Link to="/student/qa" className="btn-primary">
            <MessageSquare size={16} />
            <span>Ask Admin a Query</span>
          </Link>
        </div>
      </div>

      {/* 2. Urgent Alerts Section if present */}
      {urgentAlerts.length > 0 && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Flame size={20} color="#ef4444" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f87171', margin: 0 }}>
                High-Priority Urgent Alerts
              </h2>
            </div>
            <Link to="/student/urgent-alerts" style={{ fontSize: '0.84rem', fontWeight: 700, color: '#ef4444' }}>
              View all ({urgentAlerts.length})
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {urgentAlerts.map((alert) => (
              <div
                key={alert.id}
                className="card animate-pulse-glow"
                style={{
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(239, 68, 68, 0.2)',
                      color: '#ef4444',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Flame size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      {alert.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                      {alert.description.slice(0, 140)}...
                    </p>
                  </div>
                </div>

                <Link to="/student/urgent-alerts" className="btn-danger btn-sm">
                  <span>Read Notice</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Quick Actions Cards */}
      <div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)' }}>
          Quick Action Shortcuts
        </h2>
        <div className="grid-4">
          {quickActions.map((qa, i) => {
            const Icon = qa.icon;
            return (
              <Link
                key={i}
                to={qa.to}
                className="card interactive-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  textDecoration: 'none',
                  background: 'var(--bg-card)',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    background: `${qa.color}18`,
                    color: qa.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                    {qa.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                    {qa.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 4. Latest Announcements & Upcoming Events Grid */}
      <div className="grid-2" style={{ alignItems: 'flex-start', gap: '32px' }}>
        {/* Left Column: Announcements */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Recent Announcements
            </h2>
            <Link to="/student/announcements" style={{ fontSize: '0.84rem', fontWeight: 700 }}>
              View All Notices
            </Link>
          </div>

          {announcements.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '36px', color: 'var(--text-secondary)' }}>
              No announcements published currently.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {announcements.map((ann) => (
                <AnnouncementCard key={ann.id} announcement={ann} onRefresh={fetchData} />
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Upcoming Events */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Upcoming Events & Calendar
            </h2>
            <Link to="/student/calendar" style={{ fontSize: '0.84rem', fontWeight: 700 }}>
              Full Calendar
            </Link>
          </div>

          {events.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '36px', color: 'var(--text-secondary)' }}>
              No upcoming campus events scheduled.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {events.map((evt) => (
                <EventCard key={evt.id} event={evt} />
              ))}
            </div>
          )}

          {/* College Information Widget */}
          <div
            className="card"
            style={{
              marginTop: '24px',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Building2 size={18} color="var(--accent-primary)" />
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                Campus Dean Helpline
              </h4>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>
              For urgent administrative guidance, student welfare requests, or medical support:
            </p>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              Phone: 08685-226128, 9866399776 / 861 | Email: principal.vgnt@vignanits.ac.in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentHome;
