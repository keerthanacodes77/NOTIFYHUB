import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Download,
  FileText,
  AlertTriangle,
  Flame,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { AnnouncementDetailModal } from './AnnouncementDetailModal.jsx';

export const AnnouncementCard = ({ announcement, onRefresh }) => {
  const [showDetail, setShowDetail] = useState(false);

  const isUrgent = announcement.priority === 'URGENT';
  const isImportant = announcement.priority === 'IMPORTANT';

  const getPriorityBadge = () => {
    if (isUrgent) {
      return (
        <span className="badge badge-urgent">
          <Flame size={12} /> Urgent Alert
        </span>
      );
    }
    if (isImportant) {
      return (
        <span className="badge badge-important">
          <AlertTriangle size={12} /> Important
        </span>
      );
    }
    return (
      <span className="badge badge-normal">
        <CheckCircle2 size={12} /> Normal
      </span>
    );
  };

  return (
    <>
      <div
        className={`card interactive-card ${isUrgent ? 'animate-pulse-glow' : ''}`}
        onClick={() => setShowDetail(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          border: isUrgent
            ? '1px solid rgba(239, 68, 68, 0.45)'
            : isImportant
            ? '1px solid rgba(245, 158, 11, 0.35)'
            : '1px solid var(--border-color)',
          background: isUrgent
            ? 'linear-gradient(180deg, rgba(239, 68, 68, 0.08) 0%, var(--bg-card) 100%)'
            : 'var(--bg-card)',
        }}
      >
        <div>
          {/* Top row: Category & Priority */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
              gap: '8px',
            }}
          >
            <span className="category-pill">{announcement.category}</span>
            {getPriorityBadge()}
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '10px',
              lineHeight: 1.4,
            }}
          >
            {announcement.title}
          </h3>

          {/* Description preview */}
          <p
            style={{
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '16px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {announcement.description}
          </p>
        </div>

        {/* Footer info & action */}
        <div>
          {/* Metadata row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              paddingTop: '12px',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.78rem',
              color: 'var(--text-tertiary)',
              marginBottom: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={13} />
              <span>{new Date(announcement.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' })}</span>
            </div>

            {announcement.deadline && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ef4444', fontWeight: 600 }}>
                <Clock size={13} />
                <span>Due {new Date(announcement.deadline).toLocaleDateString([], { month: 'short', day: 'numeric' })}</span>
              </div>
            )}

            {announcement.attachmentName && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-secondary)' }}>
                <FileText size={13} />
                <span>Attachment</span>
              </div>
            )}
          </div>

          {/* Action button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDetail(true);
            }}
            className="btn-outline btn-sm"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              borderColor: isUrgent ? 'rgba(239, 68, 68, 0.4)' : undefined,
              color: isUrgent ? '#f87171' : undefined,
            }}
          >
            <span>View Full Details</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <AnnouncementDetailModal
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
        announcement={announcement}
      />
    </>
  );
};
export default AnnouncementCard;
