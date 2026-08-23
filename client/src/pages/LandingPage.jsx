import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Megaphone,
  AlertTriangle,
  Calendar,
  MessageSquare,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles,
  Award,
  Globe,
  Flame,
  Layers,
  ChevronRight,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Building2,
} from 'lucide-react';
import { Campus3DVisual } from '../components/3d/Campus3DVisual.jsx';
import { Navbar } from '../components/layout/Navbar.jsx';
import { Footer } from '../components/layout/Footer.jsx';

export const LandingPage = () => {
  const features = [
    {
      icon: Megaphone,
      title: 'Centralized Announcements',
      desc: 'Categorized notices for academics, mid-terms, placements, workshops, and symposiums with instant attachments.',
      color: '#6366f1',
      badge: 'All Departments',
    },
    {
      icon: Flame,
      title: 'Urgent Campus Alerts',
      desc: 'High-priority emergency alerts and critical network/exam updates delivered with visual prominence and instant counters.',
      color: '#ef4444',
      badge: 'Critical Priority',
    },
    {
      icon: Calendar,
      title: 'Interactive Event Calendar',
      desc: 'Synchronized college calendar with registration deadlines, venue navigation, and workshop timelines.',
      color: '#06b6d4',
      badge: 'Live Sync',
    },
    {
      icon: MessageSquare,
      title: 'Student Q&A Helpdesk',
      desc: 'Direct communication channel between students and college administration with status tracking and instant response alerts.',
      color: '#10b981',
      badge: 'Resolved Fast',
    },
    {
      icon: Shield,
      title: 'Role-Based Administration',
      desc: 'Dedicated admin console to publish notices, manage schedules, respond to student queries, and audit system activities.',
      color: '#8b5cf6',
      badge: 'Enterprise Security',
    },
    {
      icon: Zap,
      title: 'Real-Time Telemetry',
      desc: 'Live tracking of server health, database connectivity, and broadcast metrics with zero latency.',
      color: '#f59e0b',
      badge: 'High Performance',
    },
  ];

  const stats = [
    { value: '4,500+', label: 'Active Students', icon: Users },
    { value: '99.9%', label: 'Delivery Uptime', icon: Zap },
    { value: '12+', label: 'Academic Departments', icon: BookOpen },
    { value: '< 2 hrs', label: 'Query Resolution Time', icon: MessageSquare },
  ];

  return (
    <div className="app-container">
      <Navbar />

      {/* Hero Section with Prominently Visible Campus Background */}
      <section
        style={{
          position: 'relative',
          padding: '80px 0 100px',
          overflow: 'hidden',
          backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(10, 15, 29, 0.92) 100%), url('/vignan-campus-hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            {/* Left Content with Frosted Glass Backdrop for crisp readability */}
            <div
              className="glass-card animate-fade-in"
              style={{
                background: 'rgba(15, 23, 42, 0.72)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                padding: '36px',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(99, 102, 241, 0.3)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(99, 102, 241, 0.5)',
                  marginBottom: '18px',
                }}
              >
                <Sparkles size={16} color="#818cf8" />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#c7d2fe', letterSpacing: '0.04em' }}>
                  VIGNAN INSTITUTE OF TECHNOLOGY AND SCIENCE
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                  fontWeight: 900,
                  lineHeight: 1.18,
                  marginBottom: '18px',
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                All Campus Notices,{' '}
                <span
                  style={{
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Events & Alerts.
                </span>{' '}
                Unified in One Hub.
              </h1>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#e2e8f0',
                  lineHeight: 1.6,
                  marginBottom: '28px',
                  maxWidth: '520px',
                  textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                }}
              >
                Official unified portal for Vignan Institute of Technology & Science. Real-time academic circulars, exam schedules, urgent alerts, and interactive student Q&A.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
                <Link to="/student/register" className="btn-primary btn-lg" style={{ boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)' }}>
                  <span>Get Started as Student</span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/admin/login" className="btn-secondary btn-lg" style={{ background: 'rgba(30, 41, 59, 0.85)', backdropFilter: 'blur(8px)', borderColor: 'rgba(255,255,255,0.2)' }}>
                  <Shield size={18} color="#818cf8" />
                  <span>Admin Console</span>
                </Link>
              </div>

              {/* Trust markers */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#34d399" />
                  <span>Verified Student Accounts</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#34d399" />
                  <span>Official Admin Notices</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#34d399" />
                  <span>NAAC 'A++' Accredited</span>
                </div>
              </div>
            </div>

            {/* Right 3D Visual Hub with Translucent Glass */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                height: '460px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                overflow: 'hidden',
                background: 'rgba(15, 23, 42, 0.45)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Campus3DVisual />

              {/* Floating aesthetic chips over the 3D canvas */}
              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'var(--bg-card)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  pointerEvents: 'none',
                }}
              >
                <Flame size={16} color="#ef4444" />
                <div>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#f87171', display: 'block' }}>
                    URGENT ALERT
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                    Campus Maintenance Tonight
                  </span>
                </div>
              </div>

              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '20px',
                  background: 'var(--bg-card)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  pointerEvents: 'none',
                  animationDelay: '1.5s',
                }}
              >
                <Calendar size={16} color="#06b6d4" />
                <div>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#06b6d4', display: 'block' }}>
                    UPCOMING EVENT
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                    HackVortex Hackathon 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Row */}
      <section style={{ padding: '20px 0 60px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid-4">
            {stats.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px 24px',
                    background: 'var(--bg-tertiary)',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--accent-primary-glow)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0, lineHeight: 1.1 }}>
                      {st.value}
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {st.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: 'var(--accent-primary)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              POWERFUL ARCHITECTURE
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '8px', marginBottom: '16px' }}>
              Built for Every College Need
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              Explore how NotifyHub streamlines daily campus life for both students and administration with dedicated workflows.
            </p>
          </div>

          <div className="grid-3">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="card interactive-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '28px',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: 'var(--radius-md)',
                          background: `${feat.color}20`,
                          color: feat.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <span className="category-pill" style={{ fontSize: '0.72rem' }}>
                        {feat.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
                      {feat.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About NotifyHub Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: 'var(--accent-secondary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                ABOUT NOTIFYHUB
              </span>
              <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginTop: '8px', marginBottom: '18px' }}>
                Why Leading Institutions Trust NotifyHub
              </h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                Colleges generate hundreds of circulars, placement notifications, timetable adjustments, and emergency notices each semester. When delivered through fragmented messaging apps, students frequently miss critical application deadlines or exam venue changes.
              </p>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                NotifyHub introduces a clean, accountable, and verifiable channel where every announcement is categorized, timestamped, and archived with official administrative signatures.
              </p>

              <div style={{ display: 'flex', gap: '14px', marginBottom: '24px' }}>
                <Link to="/student/about" className="btn-secondary">
                  <span>Explore Campus Directory</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

              {/* Campus Architecture Card */}
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  position: 'relative',
                  boxShadow: 'var(--shadow-md)',
                  maxHeight: '220px',
                }}
              >
                <img
                  src="/vignan-campus-hero.jpg"
                  alt="Vignan Institute of Technology and Science Campus"
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '12px 18px',
                    background: 'linear-gradient(0deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 60%, transparent 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.92rem', color: '#ffffff', display: 'block' }}>
                      Vignan Institute of Technology and Science
                    </strong>
                    <span style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                      Deshmukhi(V), Pochampally(M), Yadadri-Bhuvanagiri, TS - 508284
                    </span>
                  </div>
                  <span className="badge badge-normal" style={{ fontSize: '0.68rem', background: 'rgba(99, 102, 241, 0.3)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                    NAAC A++
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Interactive Demo Credentials Card */}
            <div
              className="glass-card"
              style={{
                padding: '32px',
                border: '1px solid var(--border-highlight)',
                background: 'var(--bg-card)',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px', color: 'var(--text-primary)' }}>
                Instant Evaluation Access
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Test the live platform with pre-configured realistic student and administrator accounts:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Admin demo block */}
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: '#c084fc', display: 'block' }}>
                      Administrator (Dr. Evelyn Vance)
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                      admin@notifyhub.edu • Pass: Admin@123
                    </span>
                  </div>
                  <Link to="/admin/login" className="btn-primary btn-sm" style={{ background: 'var(--accent-gradient-purple)' }}>
                    Admin Login
                  </Link>
                </div>

                {/* Student demo block */}
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', display: 'block' }}>
                      Student (Aarav Sharma - CSE)
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                      aarav.sharma@student.edu • Pass: Student@123
                    </span>
                  </div>
                  <Link to="/student/login" className="btn-primary btn-sm">
                    Student Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Information & Contact Directory Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: 'var(--accent-primary)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              CAMPUS INFORMATION
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '8px', marginBottom: '14px', color: 'var(--text-primary)' }}>
              VIGNAN INSTITUTE OF TECHNOLOGY AND SCIENCE
            </h2>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Official college location, telephone helplines, and administrative communication channels.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {/* Campus Address Card */}
            <div
              className="card interactive-card"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <MapPin size={24} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Main Campus Address
                </h3>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '6px', fontSize: '0.96rem' }}>
                    VIGNAN INSTITUTE OF TECHNOLOGY AND SCIENCE
                  </strong>
                  Deshmukhi(V), Pochampally(M),<br />
                  Yadadri-Bhuvanagiri District,<br />
                  Telangana - 508284
                </div>
              </div>
              <div
                style={{
                  marginTop: '22px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  color: 'var(--text-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>📍</span>
                <span>Deshmukhi Campus, Pochampally</span>
              </div>
            </div>

            {/* Phone & Helplines Card */}
            <div
              className="card interactive-card"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Phone size={24} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Telephone & Helplines
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '2px' }}>
                      Landline Office:
                    </span>
                    <a
                      href="tel:08685226128"
                      style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}
                    >
                      08685-226128
                    </a>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '2px' }}>
                      Campus Helplines:
                    </span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.05rem' }}>
                      9866399776 / 861
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: '22px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  color: 'var(--text-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>📞</span>
                <span>Administrative & Admissions Support</span>
              </div>
            </div>

            {/* Official Email Directory Card */}
            <div
              className="card interactive-card"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(139, 92, 246, 0.15)',
                    color: '#8b5cf6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Mail size={24} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                  Official Email Directory
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
                  <a
                    href="mailto:principal.vgnt89@gmail.com"
                    style={{
                      color: 'var(--accent-primary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      wordBreak: 'break-all',
                      padding: '4px 0',
                    }}
                  >
                    principal.vgnt89@gmail.com
                  </a>
                  <a
                    href="mailto:principal.vits@gmail.com"
                    style={{
                      color: 'var(--accent-primary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      wordBreak: 'break-all',
                      padding: '4px 0',
                    }}
                  >
                    principal.vits@gmail.com
                  </a>
                  <a
                    href="mailto:principal.vgnt@vignanits.ac.in"
                    style={{
                      color: 'var(--accent-primary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      wordBreak: 'break-all',
                      padding: '4px 0',
                    }}
                  >
                    principal.vgnt@vignanits.ac.in
                  </a>
                </div>
              </div>
              <div
                style={{
                  marginTop: '22px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  color: 'var(--text-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>✉️</span>
                <span>Principal & Administrative Inquiries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default LandingPage;
