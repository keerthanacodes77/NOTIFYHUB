import React from 'react';
import { MessageSquare, Clock, User, CheckCircle2, ShieldCheck, CornerDownRight } from 'lucide-react';

export const QueryCard = ({ query, onReply = null, isAdmin = false }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'RESOLVED':
        return (
          <span className="badge badge-resolved">
            <CheckCircle2 size={12} /> Resolved
          </span>
        );
      case 'IN_PROGRESS':
        return (
          <span className="badge badge-progress">
            <Clock size={12} /> In Progress
          </span>
        );
      default:
        return (
          <span className="badge badge-open">
            <MessageSquare size={12} /> Open
          </span>
        );
    }
  };

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        background: 'var(--bg-card)',
        border: query.status === 'OPEN' ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid var(--border-color)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
          {query.subject}
        </h4>
        {getStatusBadge(query.status)}
      </div>

      {/* Message content */}
      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line' }}>
        {query.message}
      </p>

      {/* Meta strip */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          fontSize: '0.78rem',
          color: 'var(--text-tertiary)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={13} />
            <span>Submitted: {new Date(query.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>

          {isAdmin && query.student && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-primary)' }}>
              <User size={13} />
              <span>{query.student.name} ({query.student.rollNumber || query.student.email})</span>
            </div>
          )}
        </div>

        {isAdmin && (
          <button onClick={() => onReply(query)} className="btn-primary btn-sm">
            <span>{query.response ? 'Update Response' : 'Reply to Query'}</span>
          </button>
        )}
      </div>

      {/* Admin response thread if answered */}
      {query.response && (
        <div
          style={{
            marginTop: '6px',
            padding: '14px 16px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-elevated)',
            borderLeft: '4px solid var(--accent-primary)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <ShieldCheck size={16} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
              Administrator Response
            </span>
            {query.respondedAt && (
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', marginLeft: 'auto' }}>
                {new Date(query.respondedAt).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
              </span>
            )}
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.55, margin: 0, whiteSpace: 'pre-line' }}>
            {query.response}
          </p>
        </div>
      )}
    </div>
  );
};
export default QueryCard;
