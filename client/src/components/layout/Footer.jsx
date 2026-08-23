import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Heart, Shield, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '48px 24px 24px',
        color: 'var(--text-secondary)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '36px',
            marginBottom: '36px',
          }}
        >
          {/* Col 1: About */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <GraduationCap size={20} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                }}
              >
                NotifyHub
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '14px' }}>
              The modern college communication and instant notification platform. Connecting students, faculty, and administrative staff across campus.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
              <Shield size={14} color="#10b981" />
              <span>Campus Security & ISO 27001 Certified System</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <Link to="/student/announcements" style={{ color: 'var(--text-secondary)' }}>
                Announcements Board
              </Link>
              <Link to="/student/urgent-alerts" style={{ color: '#ef4444' }}>
                Urgent Campus Alerts
              </Link>
              <Link to="/student/calendar" style={{ color: 'var(--text-secondary)' }}>
                Academic & Events Calendar
              </Link>
              <Link to="/student/qa" style={{ color: 'var(--text-secondary)' }}>
                Student Helpdesk & Q&A
              </Link>
              <Link to="/student/about" style={{ color: 'var(--text-secondary)' }}>
                About College & Departments
              </Link>
            </div>
          </div>

          {/* Col 3: Portals */}
          <div>
            <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
              Account Portals
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <Link to="/student/login" style={{ color: 'var(--text-secondary)' }}>
                Student Login Portal
              </Link>
              <Link to="/student/register" style={{ color: 'var(--text-secondary)' }}>
                Student Registration
              </Link>
              <Link to="/admin/login" style={{ color: 'var(--accent-primary)' }}>
                Administrator Portal
              </Link>
              <Link to="/student/profile" style={{ color: 'var(--text-secondary)' }}>
                Manage Profile & Password
              </Link>
            </div>
          </div>

          {/* Col 4: Campus Contact */}
          <div>
            <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
              Campus Information
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.86rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px', fontSize: '0.88rem' }}>
                    Vignan Institute of Technology and Science
                  </strong>
                  <span>Deshmukhi(V), Pochampally(M), Yadadri-Bhuvanagiri District, Telangana - 508284</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Phone size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <a href="tel:08685226128" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>
                    08685-226128
                  </a>
                  <span style={{ color: 'var(--text-secondary)' }}>9866399776 / 861</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Mail size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <a href="mailto:principal.vgnt89@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    principal.vgnt89@gmail.com
                  </a>
                  <a href="mailto:principal.vits@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    principal.vits@gmail.com
                  </a>
                  <a href="mailto:principal.vgnt@vignanits.ac.in" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    principal.vgnt@vignanits.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '20px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '0.8rem',
            color: 'var(--text-tertiary)',
          }}
        >
          <div>
            © {new Date().getFullYear()} NotifyHub College Communication Platform. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Campus IT Charter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
