import React, { useState, useEffect } from 'react';
import {
  CalendarCheck,
  Plus,
  Edit2,
  Trash2,
  Eye,
  Calendar,
  Clock,
  MapPin,
  Users,
  Search,
  RefreshCw,
  Upload,
  CheckCircle,
} from 'lucide-react';
import { eventService } from '../../services/eventService.js';
import { Modal } from '../../components/common/Modal.jsx';
import { ConfirmationDialog } from '../../components/common/ConfirmationDialog.jsx';
import { EventDetailModal } from '../../components/events/EventDetailModal.jsx';
import { SearchBar } from '../../components/common/SearchBar.jsx';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { EmptyState } from '../../components/common/EmptyState.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  // Modals state
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [viewingEvent, setViewingEvent] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '09:00 AM',
    endTime: '05:00 PM',
    venue: '',
    organizer: '',
    registrationEnabled: false,
    registrationDeadline: '',
    file: null,
  });

  const { addToast } = useToast();

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
      setError(err.message || 'Failed to load events.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchEvents, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const handleOpenCreate = () => {
    setEditingEvent(null);
    setFormData({
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      startTime: '09:00 AM',
      endTime: '05:00 PM',
      venue: '',
      organizer: 'Department of Student Affairs',
      registrationEnabled: false,
      registrationDeadline: '',
      file: null,
    });
    setShowModal(true);
  };

  const handleOpenEdit = (evt) => {
    setEditingEvent(evt);
    setFormData({
      title: evt.title || '',
      description: evt.description || '',
      date: evt.date ? new Date(evt.date).toISOString().split('T')[0] : '',
      startTime: evt.startTime || '09:00 AM',
      endTime: evt.endTime || '05:00 PM',
      venue: evt.venue || '',
      organizer: evt.organizer || '',
      registrationEnabled: Boolean(evt.registrationEnabled),
      registrationDeadline: evt.registrationDeadline
        ? new Date(evt.registrationDeadline).toISOString().split('T')[0]
        : '',
      file: null,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.date || !formData.venue || !formData.organizer) {
      addToast('Please fill all mandatory event fields.', 'warning');
      return;
    }

    try {
      setSubmitting(true);
      const body = new FormData();
      body.append('title', formData.title);
      body.append('description', formData.description);
      body.append('date', formData.date);
      body.append('startTime', formData.startTime);
      body.append('endTime', formData.endTime);
      body.append('venue', formData.venue);
      body.append('organizer', formData.organizer);
      body.append('registrationEnabled', formData.registrationEnabled);
      if (formData.registrationDeadline) {
        body.append('registrationDeadline', formData.registrationDeadline);
      }
      if (formData.file) {
        body.append('attachment', formData.file);
      }

      if (editingEvent) {
        await eventService.update(editingEvent.id, body);
        addToast('Event updated successfully!', 'success');
      } else {
        await eventService.create(body);
        addToast('New event scheduled and published to student calendar!', 'success');
      }

      setShowModal(false);
      fetchEvents();
    } catch (err) {
      addToast(err.message || 'Operation failed', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingId) return;
    try {
      setSubmitting(true);
      await eventService.delete(deletingId);
      addToast('Event deleted successfully.', 'info');
      setDeletingId(null);
      fetchEvents();
    } catch (err) {
      addToast(err.message || 'Failed to delete event', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
            Events Management & Scheduling
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Schedule hackathons, technical symposiums, sports meets and guest lectures
          </p>
        </div>

        <button onClick={handleOpenCreate} className="btn-primary" style={{ background: 'var(--accent-gradient-purple)' }}>
          <Plus size={18} />
          <span>Schedule New Event</span>
        </button>
      </div>

      {/* Search */}
      <div style={{ maxWidth: '420px' }}>
        <SearchBar value={search} onChange={setSearch} placeholder="Search events by title, venue or organizer..." />
      </div>

      {/* Events Table */}
      {loading ? (
        <LoadingSpinner text="Loading events roster..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchEvents} />
      ) : events.length === 0 ? (
        <EmptyState
          icon={CalendarCheck}
          title="No events scheduled"
          description="Click 'Schedule New Event' to post the first campus event."
          action={
            <button onClick={handleOpenCreate} className="btn-primary btn-sm">
              <Plus size={14} /> Schedule Event
            </button>
          }
        />
      ) : (
        <div className="table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date & Time</th>
                <th>Venue</th>
                <th>Organizer</th>
                <th>Registration</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((evt) => (
                <tr key={evt.id}>
                  <td>
                    <div style={{ maxWidth: '300px' }}>
                      <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)', display: 'block' }}>
                        {evt.title}
                      </strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                        {evt.description.slice(0, 70)}...
                      </span>
                    </div>
                  </td>

                  <td>
                    <div style={{ fontSize: '0.84rem' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>
                        {new Date(evt.date).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                      </strong>
                      <span style={{ color: 'var(--text-tertiary)', fontSize: '0.76rem' }}>
                        {evt.startTime} - {evt.endTime}
                      </span>
                    </div>
                  </td>

                  <td>
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                      {evt.venue}
                    </span>
                  </td>

                  <td>
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                      {evt.organizer}
                    </span>
                  </td>

                  <td>
                    {evt.registrationEnabled ? (
                      <span className="badge badge-open" style={{ fontSize: '0.68rem' }}>
                        <CheckCircle size={10} /> Open
                      </span>
                    ) : (
                      <span className="badge badge-normal" style={{ fontSize: '0.68rem' }}>
                        Closed / Walk-in
                      </span>
                    )}
                  </td>

                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => setViewingEvent(evt)}
                        className="btn-icon btn-secondary btn-icon-sm"
                        title="View Details"
                      >
                        <Eye size={14} />
                      </button>

                      <button
                        onClick={() => handleOpenEdit(evt)}
                        className="btn-icon btn-secondary btn-icon-sm"
                        title="Edit Event"
                      >
                        <Edit2 size={14} />
                      </button>

                      <button
                        onClick={() => setDeletingId(evt.id)}
                        className="btn-icon btn-secondary btn-icon-sm"
                        title="Delete Event"
                        style={{ color: '#ef4444' }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Create / Edit Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={editingEvent ? 'Edit College Event' : 'Schedule New College Event'}
        maxWidth="680px"
        footer={
          <>
            <button onClick={() => setShowModal(false)} className="btn-secondary" disabled={submitting}>
              Cancel
            </button>
            <button onClick={handleSubmit} className="btn-primary" disabled={submitting} style={{ background: 'var(--accent-gradient-purple)' }}>
              {submitting ? 'Saving...' : editingEvent ? 'Update Event' : 'Publish to Calendar'}
            </button>
          </>
        }
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Event Name / Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. National Hackathon HackVortex 2026"
              className="form-input"
              required
            />
          </div>

          <div className="grid-3" style={{ gap: '12px' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Event Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="form-input"
                required
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Start Time</label>
              <input
                type="text"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                placeholder="09:00 AM"
                className="form-input"
                required
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">End Time</label>
              <input
                type="text"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                placeholder="05:00 PM"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="grid-2" style={{ gap: '14px' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Venue / Hall Location</label>
              <input
                type="text"
                value={formData.venue}
                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                placeholder="Main Auditorium / Seminar Hall 2"
                className="form-input"
                required
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Organizing Society / Dept</label>
              <input
                type="text"
                value={formData.organizer}
                onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
                placeholder="CSE Society & ACM Chapter"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="grid-2" style={{ gap: '14px', alignItems: 'center' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Enable Student Online Registration?</label>
              <select
                value={formData.registrationEnabled ? 'true' : 'false'}
                onChange={(e) => setFormData({ ...formData, registrationEnabled: e.target.value === 'true' })}
                className="form-select"
              >
                <option value="false">No (Open / Walk-in Entry)</option>
                <option value="true">Yes (Online Registration Required)</option>
              </select>
            </div>

            {formData.registrationEnabled && (
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Registration Deadline</label>
                <input
                  type="date"
                  value={formData.registrationDeadline}
                  onChange={(e) => setFormData({ ...formData, registrationDeadline: e.target.value })}
                  className="form-input"
                />
              </div>
            )}
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Event Description & Agenda</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              placeholder="Provide event details, speaker profiles, eligibility, and rules..."
              className="form-textarea"
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Event Poster / Brochure Attachment (Optional)</label>
            <input
              type="file"
              onChange={(e) => setFormData({ ...formData, file: e.target.files[0] || null })}
              className="form-input"
              accept=".pdf,.png,.jpg,.jpeg,.zip"
            />
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={!!deletingId}
        onClose={() => setDeletingId(null)}
        onConfirm={handleDelete}
        title="Delete Campus Event"
        message="Are you sure you want to cancel and delete this event? It will be removed from the college calendar."
        isDanger={true}
        loading={submitting}
      />

      {/* Event Details Inspector */}
      <EventDetailModal
        isOpen={!!viewingEvent}
        onClose={() => setViewingEvent(null)}
        event={viewingEvent}
      />
    </div>
  );
};
export default AdminEvents;
