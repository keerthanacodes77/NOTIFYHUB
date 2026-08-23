import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EventDetailModal } from './EventDetailModal.jsx';

export const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);
  const eventDate = new Date(event.date);

  const monthName = eventDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  const dayNumber = eventDate.getDate();
  const dayOfWeek = eventDate.toLocaleString('default', { weekday: 'short' });

  return (
    <>
      <div
        className="card interactive-card"
        onClick={() => setShowModal(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'var(--bg-card)',
          gap: '16px',
        }}
      >
        <div>
          {/* Header with Date Chip */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '12px' }}>
            <div
              style={{
                width: '54px',
                height: '60px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--accent-gradient)',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px var(--accent-primary-glow)',
              }}
            >
              <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.05em' }}>
                {monthName}
              </span>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, lineHeight: 1 }}>
                {dayNumber}
              </span>
              <span style={{ fontSize: '0.62rem', opacity: 0.85 }}>
                {dayOfWeek}
              </span>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              {event.registrationEnabled && (
                <span className="badge badge-open" style={{ marginBottom: '6px', fontSize: '0.68rem' }}>
                  <CheckCircle2 size={11} /> Registration Open
                </span>
              )}
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1.35,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {event.title}
              </h3>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.86rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '14px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {event.description}
          </p>

          {/* Quick info list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={14} color="var(--accent-secondary)" />
              <span>{event.startTime} - {event.endTime}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={14} color="#f59e0b" />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {event.venue}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(true);
          }}
          className="btn-secondary btn-sm"
          style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}
        >
          <span>Event Details</span>
          <ArrowRight size={14} />
        </button>
      </div>

      <EventDetailModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        event={event}
      />
    </>
  );
};
export default EventCard;
