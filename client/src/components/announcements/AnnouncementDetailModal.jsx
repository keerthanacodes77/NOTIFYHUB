import React from 'react';
import {
  Calendar,
  Clock,
  Download,
  FileText,
  Building2,
  Users,
  AlertTriangle,
  Flame,
  CheckCircle,
  Share2,
} from 'lucide-react';
import { Modal } from '../common/Modal.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export const AnnouncementDetailModal = ({ isOpen, onClose, announcement }) => {
  const { addToast } = useToast();

  if (!announcement) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${announcement.title}\n\n${announcement.description}\n\nNotifyHub College Platform`
      );
      addToast('Announcement details copied to clipboard!', 'info');
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'URGENT':
        return (
          <span className="badge badge-urgent">
            <Flame size={13} /> Urgent Alert
          </span>
        );
      case 'IMPORTANT':
        return (
          <span className="badge badge-important">
            <AlertTriangle size={13} /> Important Notice
          </span>
        );
      default:
        return (
          <span className="badge badge-normal">
            <CheckCircle size={13} /> Standard Announcement
          </span>
        );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Announcement Details"
      maxWidth="680px"
      footer={
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <button onClick={handleShare} className="btn-secondary btn-sm" style={{ display: 'flex', gap: '6px' }}>
            <Share2 size={15} />
            <span>Copy & Share</span>
          </button>
          <button onClick={onClose} className="btn-primary btn-sm">
            Close Notice
          </button>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {/* Header badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          {getPriorityBadge(announcement.priority)}
          <span className="category-pill">{announcement.category}</span>
          {announcement.department && (
            <span className="category-pill" style={{ background: 'transparent' }}>
              <Building2 size={13} /> {announcement.department}
            </span>
          )}
          {announcement.year && (
            <span className="category-pill" style={{ background: 'transparent' }}>
              <Users size={13} /> {announcement.year}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
          {announcement.title}
        </h2>

        {/* Metadata info strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '12px 16px',
            background: 'var(--bg-tertiary)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={15} color="var(--accent-primary)" />
            <span>
              Published: <strong>{new Date(announcement.createdAt).toLocaleDateString([], { dateStyle: 'long' })}</strong>
            </span>
          </div>

          {announcement.deadline && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444' }}>
              <Clock size={15} />
              <span>
                Action Deadline: <strong>{new Date(announcement.deadline).toLocaleDateString([], { dateStyle: 'medium' })}</strong>
              </span>
            </div>
          )}
        </div>

        {/* Description Body */}
        <div
          style={{
            fontSize: '0.96rem',
            lineHeight: 1.7,
            color: 'var(--text-primary)',
            whiteSpace: 'pre-line',
            padding: '4px 0',
          }}
        >
          {announcement.description}
        </div>

        {/* Attachment Card */}
        {announcement.attachmentName && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 18px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-highlight)',
              background: 'var(--bg-elevated)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  padding: '8px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-primary-glow)',
                  color: 'var(--accent-primary)',
                }}
              >
                <FileText size={20} />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                  {announcement.attachmentName}
                </p>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)' }}>
                  {announcement.attachmentSize
                    ? `${(announcement.attachmentSize / 1024).toFixed(1)} KB`
                    : 'Downloadable attachment'}
                </span>
              </div>
            </div>

            <a
              href={announcement.attachment || '#'}
              download={announcement.attachmentName}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-sm"
              style={{ textDecoration: 'none' }}
            >
              <Download size={14} />
              <span>Download</span>
            </a>
          </div>
        )}
      </div>
    </Modal>
  );
};
export default AnnouncementDetailModal;
