import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export const ErrorState = ({
  title = 'Unable to connect to server',
  message = 'An unexpected error occurred while loading data.',
  onRetry = null,
}) => {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '48px 24px',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        background: 'rgba(239, 68, 68, 0.04)',
      }}
    >
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'rgba(239, 68, 68, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '14px',
          color: '#ef4444',
        }}
      >
        <AlertCircle size={26} />
      </div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f87171', marginBottom: '6px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '400px', marginBottom: onRetry ? '18px' : '0' }}>
        {message}
      </p>
      {onRetry && (
        <button onClick={onRetry} className="btn-secondary btn-sm" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <RefreshCw size={14} />
          <span>Retry</span>
        </button>
      )}
    </div>
  );
};
export default ErrorState;
