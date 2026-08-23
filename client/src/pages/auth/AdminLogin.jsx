import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  KeyRound,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.jsx';
import { Navbar } from '../../components/layout/Navbar.jsx';
import { Footer } from '../../components/layout/Footer.jsx';

export const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide administrative credentials.');
      return;
    }

    setLoading(true);
    const res = await login({ email, password, requiredRole: 'ADMIN' });
    setLoading(false);

    if (res.success) {
      const from = location.state?.from?.pathname || '/admin/overview';
      navigate(from, { replace: true });
    } else {
      setError(res.message || 'Administrative login failed. Access denied.');
    }
  };

  const handleFillDemoAdmin = () => {
    setEmail('admin@notifyhub.edu');
    setPassword('Admin@123');
    setError('');
  };

  return (
    <div className="app-container">
      <Navbar />
      <div
        className="main-content"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 20px',
          background: 'radial-gradient(circle at top center, rgba(139, 92, 246, 0.12) 0%, transparent 65%)',
        }}
      >
        <div
          className="glass-card animate-scale-in"
          style={{
            width: '100%',
            maxWidth: '460px',
            padding: '36px',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--accent-gradient-purple)',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
                boxShadow: '0 4px 16px rgba(139, 92, 246, 0.4)',
              }}
            >
              <ShieldCheck size={28} />
            </div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '6px', color: 'var(--text-primary)' }}>
              Administrator Portal
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Restricted management console for college administrators & deans
            </p>
          </div>

          {/* Quick Demo Autofill button */}
          <div
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <KeyRound size={16} color="#c084fc" />
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Demo Admin Account
              </span>
            </div>
            <button
              type="button"
              onClick={handleFillDemoAdmin}
              className="btn-primary btn-sm"
              style={{ background: 'var(--accent-gradient-purple)', fontSize: '0.74rem' }}
            >
              Fill Credentials
            </button>
          </div>

          {error && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                color: '#f87171',
                fontSize: '0.88rem',
                marginBottom: '20px',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <label className="form-label">Administrator Email</label>
              <div className="input-with-icon">
                <Mail size={16} className="input-icon-left" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="admin@notifyhub.edu"
                  className="form-input"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label">Admin Master Password</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-icon-left" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter administrative password"
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="input-icon-right"
                  style={{ background: 'none', border: 'none', display: 'flex' }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary btn-lg"
              style={{
                width: '100%',
                marginTop: '10px',
                background: 'var(--accent-gradient-purple)',
              }}
            >
              {loading ? 'Verifying Admin Token...' : 'Access Admin Dashboard'}
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Switch to student */}
          <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            Are you a student?{' '}
            <Link to="/student/login" style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>
              Switch to Student Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AdminLogin;
