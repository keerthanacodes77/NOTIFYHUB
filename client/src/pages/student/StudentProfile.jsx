import React, { useState } from 'react';
import {
  User,
  Mail,
  Hash,
  Building2,
  Calendar,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  KeyRound,
  CheckCircle2,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export const StudentProfile = () => {
  const { user, changePassword } = useAuth();
  const { addToast } = useToast();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
    const res = await changePassword({
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
    setLoading(false);

    if (res.success) {
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '900px' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
          Student Profile & Security
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
          Manage your verified student credentials and account security
        </p>
      </div>

      <div className="grid-2" style={{ gap: '24px' }}>
        {/* Profile Card */}
        <div className="card" style={{ background: 'var(--bg-secondary)', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--accent-gradient)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                fontWeight: 900,
                boxShadow: '0 4px 14px var(--accent-primary-glow)',
              }}
            >
              {user?.name ? user.name.charAt(0) : 'S'}
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                {user?.name}
              </h2>
              <span className="badge badge-normal" style={{ marginTop: '4px' }}>
                Verified Student
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', display: 'block' }}>Email Address</span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{user?.email}</strong>
            </div>

            <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', display: 'block' }}>Roll Number</span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{user?.rollNumber || 'Not assigned'}</strong>
            </div>

            <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', display: 'block' }}>Department / Branch</span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{user?.department || 'General'}</strong>
            </div>

            <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', display: 'block' }}>Academic Year</span>
              <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{user?.year || 'Current Student'}</strong>
            </div>
          </div>
        </div>

        {/* Change Password Form Card */}
        <div className="card" style={{ background: 'var(--bg-secondary)', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-primary-glow)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <KeyRound size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                Change Password
              </h3>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)' }}>
                Keep your student account secure
              </span>
            </div>
          </div>

          <form onSubmit={handlePasswordSubmit}>
            <div className="form-group">
              <label className="form-label">Current Password</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-icon-left" />
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="input-icon-right"
                  style={{ background: 'none', border: 'none', display: 'flex' }}
                >
                  {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">New Password</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-icon-left" />
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Min 6 characters"
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="input-icon-right"
                  style={{ background: 'none', border: 'none', display: 'flex' }}
                >
                  {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
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
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', marginTop: '6px' }}
            >
              {loading ? 'Updating Password...' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default StudentProfile;
