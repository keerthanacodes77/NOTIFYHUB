import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle,
  AlertCircle,
  Download,
  FileText,
  Share2,
} from 'lucide-react';
import { Modal } from '../common/Modal.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export const EventDetailModal = ({ isOpen, onClose, event }) => {
  const { addToast } = useToast();

  if (!event) return null;

  const isPast = new Date(event.date) < new Date();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Campus Event Information"
      maxWidth="660px"
      footer={
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(`${event.title}\nDate: ${new Date(event.date).toLocaleDateString()}\nVenue: ${event.venue}\nNotifyHub`);
                addToast('Event details copied to clipboard!', 'info');
              }
            }}
            className="btn-secondary btn-sm"
            style={{ display: 'flex', gap: '6px' }}
          >
            <Share2 size={15} />
            <span>Share Event</span>
          </button>
          <button onClick={onClose} className="btn-primary btn-sm">
            Close
          </button>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {/* Status Chip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className={`badge ${isPast ? 'badge-normal' : 'badge-important'}`}>
            {isPast ? 'Past Event' : 'Upcoming Event'}
          </span>
          {event.registrationEnabled && (
            <span className="badge badge-open">
              <CheckCircle size={12} /> Registration Open
            </span>
          )}
        </div>

        {/* Title */}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
          {event.title}
        </h2>

        {/* Details Grid Box */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            padding: '16px',
            background: 'var(--bg-tertiary)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={18} color="var(--accent-primary)" />
            <div>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', display: 'block' }}>Date</span>
              <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                {new Date(event.date).toLocaleDateString([], { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
              </strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Clock size={18} color="var(--accent-secondary)" />
            <div>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', display: 'block' }}>Time</span>
              <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                {event.startTime} - {event.endTime}
              </strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MapPin size={18} color="#f59e0b" />
            <div>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', display: 'block' }}>Venue</span>
              <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                {event.venue}
              </strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Users size={18} color="#10b981" />
            <div>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', display: 'block' }}>Organizer</span>
              <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                {event.organizer}
              </strong>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h4 style={{ fontSize: '0.96rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
            About this Event
          </h4>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
            {event.description}
          </p>
        </div>

        {/* Registration Deadline if enabled */}
        {event.registrationEnabled && event.registrationDeadline && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#fbbf24',
              fontSize: '0.86rem',
            }}
          >
            <AlertCircle size={18} />
            <span>
              Registration closes on: <strong>{new Date(event.registrationDeadline).toLocaleDateString([], { dateStyle: 'medium' })}</strong>
            </span>
          </div>
        )}

        {/* Attachment if present */}
        {event.attachmentName && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-elevated)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={18} color="var(--accent-primary)" />
              <div>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                  {event.attachmentName}
                </p>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)' }}>Event Attachment Brochure</span>
              </div>
            </div>
            <a
              href={event.attachment || '#'}
              download={event.attachmentName}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
            >
              <Download size={14} /> Download
            </a>
          </div>
        )}
      </div>
    </Modal>
  );
};
export default EventDetailModal;
