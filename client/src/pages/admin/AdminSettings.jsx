import React, { useState, useEffect } from 'react';
import {
  Settings,
  User,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Server,
  Database,
  Activity,
  Cpu,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Sun,
  Moon,
  Zap,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { healthService } from '../../services/healthService.js';

export const AdminSettings = () => {
  const { user, changePassword } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { addToast } = useToast();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  const [systemHealth, setSystemHealth] = useState(null);
  const [healthLoading, setHealthLoading] = useState(true);

  const fetchHealth = async () => {
    try {
      setHealthLoading(true);
      const res = await healthService.getHealth();
      if (res.success) {
        setSystemHealth(res);
      }
    } catch (err) {
      console.error('Failed to get system health:', err);
    } finally {
      setHealthLoading(false);
    }
  };

  useEffect(() => {
    fetchHealth();
    const interval = setInterval(fetchHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      addToast('New password must be at least 6 characters.', 'warning');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      addToast('New passwords do not match.', 'error');
      return;
    }

    setPasswordLoading(true);
    const res = await changePassword({ currentPassword, newPassword, confirmNewPassword });
    setPasswordLoading(false);

    if (res.success) {
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '1080px' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
          Administrator Settings & System Status
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
          Manage administrator credentials, application preferences, and live telemetry
        </p>
      </div>

      {/* Row 1: Profile & Password */}
      <div className="grid-2" style={{ gap: '24px', alignItems: 'flex-start' }}>
        {/* Admin Profile */}
        <div className="card" style={{ background: 'var(--bg-secondary)', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--accent-gradient-purple)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 900,
                boxShadow: '0 4px 14px rgba(139, 92, 246, 0.4)',
              }}
            >
              {user?.name ? user.name.charAt(0) : 'A'}
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                {user?.name}
              </h2>
              <span className="badge badge-urgent" style={{ marginTop: '4px' }}>
                System Administrator
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', display: 'block' }}>Email Address</span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{user?.email}</strong>
            </div>

            <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', display: 'block' }}>Department / Role</span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{user?.department || 'Dean of Student Affairs'}</strong>
            </div>
          </div>

          {/* Preferences */}
          <h4 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
            Interface Preferences
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {theme === 'dark' ? <Moon size={18} color="#6366f1" /> : <Sun size={18} color="#f59e0b" />}
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Color Theme: {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </div>
            <button onClick={toggleTheme} className="btn-secondary btn-sm">
              Toggle Theme
            </button>
          </div>
        </div>

        {/* Change Admin Password */}
        <div className="card" style={{ background: 'var(--bg-secondary)', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Shield size={22} color="#c084fc" />
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                Change Admin Password
              </h3>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)' }}>
                Elevated credentials security
              </span>
            </div>
          </div>

          <form onSubmit={handlePasswordSubmit}>
            <div className="form-group">
              <label className="form-label">Current Password</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-icon-left" />
                <input
                  type={showCurrent ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Current admin password"
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="input-icon-right"
                  style={{ background: 'none', border: 'none', display: 'flex' }}
                >
                  {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">New Password</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-icon-left" />
                <input
                  type={showNew ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Min 6 characters"
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="input-icon-right"
                  style={{ background: 'none', border: 'none', display: 'flex' }}
                >
                  {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Confirm New Password</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-icon-left" />
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={passwordLoading}
              className="btn-primary"
              style={{ width: '100%', marginTop: '6px', background: 'var(--accent-gradient-purple)' }}
            >
              {passwordLoading ? 'Updating...' : 'Update Admin Password'}
            </button>
          </form>
        </div>
      </div>

      {/* Row 2: Live System Status & Telemetry */}
      <div className="card" style={{ background: 'var(--bg-secondary)', padding: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Server size={22} color="#10b981" />
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                Live System Health & Infrastructure Telemetry
              </h3>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                Real-time metrics from Node.js runtime, PostgreSQL database & REST endpoints
              </span>
            </div>
          </div>

          <button onClick={fetchHealth} className="btn-secondary btn-sm" style={{ display: 'flex', gap: '6px' }}>
            <RefreshCw size={14} className={healthLoading ? 'animate-spin' : ''} />
            <span>Poll Health</span>
          </button>
        </div>

        {systemHealth ? (
          <div className="grid-3" style={{ gap: '18px' }}>
            {/* Server Service */}
            <div style={{ padding: '18px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Express Server</span>
                <span className="badge badge-resolved" style={{ fontSize: '0.68rem' }}>
                  <CheckCircle2 size={10} /> {systemHealth.services?.server?.status}
                </span>
              </div>
              <div style={{ fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-primary)' }}>
                <div><strong>Port:</strong> {systemHealth.services?.server?.port}</div>
                <div><strong>Uptime:</strong> {systemHealth.uptime?.formatted}</div>
                <div><strong>Node:</strong> {systemHealth.system?.nodeVersion}</div>
              </div>
            </div>

            {/* Database Service */}
            <div style={{ padding: '18px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Database Engine</span>
                <span className="badge badge-resolved" style={{ fontSize: '0.68rem' }}>
                  <CheckCircle2 size={10} /> {systemHealth.services?.database?.status}
                </span>
              </div>
              <div style={{ fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-primary)' }}>
                <div><strong>Provider:</strong> PostgreSQL / Prisma</div>
                <div><strong>Announcements:</strong> {systemHealth.services?.database?.totalAnnouncements}</div>
                <div><strong>Registered Users:</strong> {systemHealth.services?.database?.totalUsers}</div>
              </div>
            </div>

            {/* System Resources */}
            <div style={{ padding: '18px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-secondary)' }}>System Resources</span>
                <span className="badge badge-resolved" style={{ fontSize: '0.68rem' }}>
                  <Zap size={10} /> {systemHealth.services?.api?.latencyMs}ms LATENCY
                </span>
              </div>
              <div style={{ fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--text-primary)' }}>
                <div><strong>Heap Used:</strong> {systemHealth.system?.heapUsedMB} MB</div>
                <div><strong>CPU Cores:</strong> {systemHealth.system?.cpuCount} Cores</div>
                <div><strong>Platform:</strong> {systemHealth.system?.platform}</div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-tertiary)' }}>
            Polling system health...
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminSettings;
