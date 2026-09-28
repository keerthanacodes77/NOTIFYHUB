import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Search,
  CheckCircle,
  Plus,
  Flame,
  LayoutGrid,
  List,
} from 'lucide-react';
import { eventService } from '../../services/eventService.js';
import { EventCard } from '../../components/events/EventCard.jsx';
import { EventDetailModal } from '../../components/events/EventDetailModal.jsx';
import { SearchBar } from '../../components/common/SearchBar.jsx';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { EmptyState } from '../../components/common/EmptyState.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';

export const StudentEventsCalendar = () => {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [viewMode, setViewMode] = useState('calendar'); // 'calendar' or 'list'
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await eventService.getAll({ search });
      if (res.success) {
        setEvents(res.events || []);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load calendar events.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [search]);

  // Calendar calculations
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const todayMonth = () => setCurrentDate(new Date());

  const getEventsForDay = (day) => {
    return events.filter((e) => {
      const d = new Date(e.date);
      return d.getDate() === day && d.getMonth() === month && d.getFullYear() === year;
    });
  };

  const selectedDayEvents = selectedDay ? getEventsForDay(selectedDay) : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
            College Events Calendar
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Interactive timeline of technical hackathons, guest lectures, cultural fests & sports
          </p>
        </div>

        {/* View mode toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setViewMode('calendar')}
            className={`btn-sm ${viewMode === 'calendar' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ display: 'flex', gap: '6px' }}
          >
            <CalendarIcon size={14} />
            <span>Calendar View</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ display: 'flex', gap: '6px' }}
          >
            <List size={14} />
            <span>List View</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ maxWidth: '420px' }}>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search events by name, venue or organizer..."
        />
      </div>

      {loading ? (
        <LoadingSpinner text="Loading campus event calendar..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchEvents} />
      ) : viewMode === 'list' ? (
        /* List View */
        events.length === 0 ? (
          <EmptyState
            icon={CalendarIcon}
            title="No events scheduled"
            description="There are no upcoming college events matching your search."
          />
        ) : (
          <div className="grid-3" style={{ gap: '20px' }}>
            {events.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        )
      ) : (
        /* Interactive Calendar Grid View */
        <div className="grid-2" style={{ gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)', gap: '24px' }}>
          {/* Left: Monthly Interactive Calendar Card */}
          <div className="card" style={{ padding: '24px', background: 'var(--bg-secondary)' }}>
            {/* Calendar Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                {monthNames[month]} {year}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button onClick={todayMonth} className="btn-secondary btn-sm">
                  Today
                </button>
                <button onClick={prevMonth} className="btn-icon btn-secondary btn-icon-sm" aria-label="Previous month">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={nextMonth} className="btn-icon btn-secondary btn-icon-sm" aria-label="Next month">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Days of Week */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '8px',
                textAlign: 'center',
                marginBottom: '10px',
                fontWeight: 700,
                fontSize: '0.78rem',
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
              }}
            >
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} style={{ padding: '4px' }}>{d}</div>
              ))}
            </div>

            {/* Day Cells */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
              {/* Empty leading padding days */}
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} style={{ height: '76px' }} />
              ))}

              {/* Month days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dayEvents = getEventsForDay(day);
                const isToday =
                  day === new Date().getDate() &&
                  month === new Date().getMonth() &&
                  year === new Date().getFullYear();
                const isSelected = selectedDay === day;

                return (
                  <div
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    style={{
                      height: '76px',
                      padding: '8px',
                      borderRadius: 'var(--radius-md)',
                      background: isSelected
                        ? 'var(--accent-primary-glow)'
                        : isToday
                        ? 'var(--bg-tertiary)'
                        : 'var(--bg-card)',
                      border: isSelected
                        ? '2px solid var(--accent-primary)'
                        : isToday
                        ? '1px solid var(--accent-secondary)'
                        : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.borderColor = 'var(--border-highlight)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected && !isToday) e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: isToday || isSelected ? 800 : 500,
                          color: isToday ? 'var(--accent-secondary)' : 'var(--text-primary)',
                        }}
                      >
                        {day}
                      </span>
                      {isToday && (
                        <span style={{ fontSize: '0.62rem', fontWeight: 800, color: 'var(--accent-secondary)' }}>
                          TODAY
                        </span>
                      )}
                    </div>

                    {dayEvents.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {dayEvents.slice(0, 2).map((ev) => (
                          <div
                            key={ev.id}
                            style={{
                              fontSize: '0.68rem',
                              fontWeight: 600,
                              padding: '2px 4px',
                              borderRadius: '4px',
                              background: 'var(--accent-primary)',
                              color: '#ffffff',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {ev.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <span style={{ fontSize: '0.62rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                            +{dayEvents.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Day Events Inspector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="card" style={{ background: 'var(--bg-secondary)', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                  {selectedDay
                    ? `Events on ${monthNames[month]} ${selectedDay}, ${year}`
                    : `Upcoming Month Highlights (${monthNames[month]})`}
                </h3>
                {selectedDay && (
                  <button onClick={() => setSelectedDay(null)} className="btn-outline btn-sm">
                    Show All
                  </button>
                )}
              </div>

              {(selectedDay ? selectedDayEvents : events).length === 0 ? (
                <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--text-secondary)' }}>
                  <CalendarIcon size={32} color="var(--text-tertiary)" style={{ margin: '0 auto 8px', opacity: 0.5 }} />
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>
                    {selectedDay
                      ? `No campus events scheduled for ${monthNames[month]} ${selectedDay}.`
                      : 'No events scheduled for this month.'}
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {(selectedDay ? selectedDayEvents : events).map((evt) => (
                    <div
                      key={evt.id}
                      onClick={() => setSelectedEvent(evt)}
                      className="interactive-card"
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                        <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 6px', color: 'var(--text-primary)' }}>
                          {evt.title}
                        </h4>
                        {evt.registrationEnabled && (
                          <span className="badge badge-open" style={{ fontSize: '0.65rem' }}>
                            Register
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0 0 10px', lineHeight: 1.4 }}>
                        {evt.description.slice(0, 100)}...
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.76rem', color: 'var(--text-tertiary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} />
                          <span>{evt.startTime} - {evt.endTime}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={12} />
                          <span>{evt.venue}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Event Details Modal */}
      <EventDetailModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent}
      />
    </div>
  );
};
export default StudentEventsCalendar;
