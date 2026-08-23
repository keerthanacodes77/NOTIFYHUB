import React, { useState, useEffect } from 'react';
import {
  Megaphone,
  Plus,
  Edit2,
  Trash2,
  Eye,
  Archive,
  Send,
  Download,
  FileText,
  Search,
  Flame,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Upload,
} from 'lucide-react';
import { announcementService } from '../../services/announcementService.js';
import { Modal } from '../../components/common/Modal.jsx';
import { ConfirmationDialog } from '../../components/common/ConfirmationDialog.jsx';
import { AnnouncementDetailModal } from '../../components/announcements/AnnouncementDetailModal.jsx';
import { SearchBar } from '../../components/common/SearchBar.jsx';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { EmptyState } from '../../components/common/EmptyState.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [statusTab, setStatusTab] = useState('ALL');

  // Modals state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [viewingAnnouncement, setViewingAnnouncement] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Academic',
    priority: 'NORMAL',
    status: 'PUBLISHED',
    department: 'All',
    year: 'All',
    deadline: '',
    file: null,
  });

  const { addToast } = useToast();

  const categories = ['Academic', 'Examination', 'Placement', 'Workshop', 'Event', 'General'];
  const departments = ['All', 'Computer Science & Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering', 'Electrical & Electronics'];
  const years = ['All', '1st Year', '2nd Year', '3rd Year', '4th Year'];

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await announcementService.getAll({
        search,
        status: statusTab !== 'ALL' ? statusTab : undefined,
      });
      if (res.success) {
        setAnnouncements(res.announcements || []);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load announcements.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, [statusTab]);

  useEffect(() => {
    const timer = setTimeout(fetchAnnouncements, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const handleOpenCreate = () => {
    setEditingAnnouncement(null);
    setFormData({
      title: '',
      description: '',
      category: 'Academic',
      priority: 'NORMAL',
      status: 'PUBLISHED',
      department: 'All',
      year: 'All',
      deadline: '',
      file: null,
    });
    setShowCreateModal(true);
  };

  const handleOpenEdit = (ann) => {
    setEditingAnnouncement(ann);
    setFormData({
      title: ann.title || '',
      description: ann.description || '',
      category: ann.category || 'Academic',
      priority: ann.priority || 'NORMAL',
      status: ann.status || 'PUBLISHED',
      department: ann.department || 'All',
      year: ann.year || 'All',
      deadline: ann.deadline ? new Date(ann.deadline).toISOString().split('T')[0] : '',
      file: null,
    });
    setShowCreateModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      addToast('Title and description are required.', 'warning');
      return;
    }

    try {
      setSubmitting(true);
      const body = new FormData();
      body.append('title', formData.title);
      body.append('description', formData.description);
      body.append('category', formData.category);
      body.append('priority', formData.priority);
      body.append('status', formData.status);
      body.append('department', formData.department);
      body.append('year', formData.year);
      if (formData.deadline) body.append('deadline', formData.deadline);
      if (formData.file) body.append('attachment', formData.file);

      if (editingAnnouncement) {
        await announcementService.update(editingAnnouncement.id, body);
        addToast('Announcement updated successfully!', 'success');
      } else {
        await announcementService.create(body);
        addToast('Announcement broadcast created successfully!', 'success');
      }

      setShowCreateModal(false);
      fetchAnnouncements();
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
      await announcementService.delete(deletingId);
      addToast('Announcement deleted successfully.', 'info');
      setDeletingId(null);
      fetchAnnouncements();
    } catch (err) {
      addToast(err.message || 'Failed to delete announcement', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleQuickStatus = async (ann, newStatus) => {
    try {
      const body = new FormData();
      body.append('status', newStatus);
      await announcementService.update(ann.id, body);
      addToast(`Announcement status changed to ${newStatus}.`, 'success');
      fetchAnnouncements();
    } catch (err) {
      addToast('Failed to update status', 'error');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
            Announcement Management
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Publish, edit, broadcast and archive verified college notices and urgent alerts
          </p>
        </div>

        <button onClick={handleOpenCreate} className="btn-primary" style={{ background: 'var(--accent-gradient-purple)' }}>
          <Plus size={18} />
          <span>New Announcement</span>
        </button>
      </div>

      {/* Tabs & Search */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['ALL', 'PUBLISHED', 'DRAFT', 'ARCHIVED'].map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusTab(tab)}
              className={`btn-sm ${statusTab === tab ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ minWidth: '280px' }}>
          <SearchBar value={search} onChange={setSearch} placeholder="Search title or category..." />
        </div>
      </div>

      {/* Announcements Table */}
      {loading ? (
        <LoadingSpinner text="Fetching announcements database..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchAnnouncements} />
      ) : announcements.length === 0 ? (
        <EmptyState
          icon={Megaphone}
          title="No announcements found"
          description="Create your first notice or adjust status filters above."
          action={
            <button onClick={handleOpenCreate} className="btn-primary btn-sm">
              <Plus size={14} /> Create Notice
            </button>
          }
        />
      ) : (
        <div className="table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Title & Category</th>
                <th>Priority</th>
                <th>Audience</th>
                <th>Status</th>
                <th>Published Date</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((ann) => (
                <tr key={ann.id}>
                  <td>
                    <div style={{ maxWidth: '340px' }}>
                      <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)', display: 'block' }}>
                        {ann.title}
                      </strong>
                      <span className="category-pill" style={{ marginTop: '4px', fontSize: '0.72rem' }}>
                        {ann.category}
                      </span>
                    </div>
                  </td>

                  <td>
                    {ann.priority === 'URGENT' ? (
                      <span className="badge badge-urgent">
                        <Flame size={11} /> Urgent
                      </span>
                    ) : ann.priority === 'IMPORTANT' ? (
                      <span className="badge badge-important">
                        <AlertTriangle size={11} /> Important
                      </span>
                    ) : (
                      <span className="badge badge-normal">Normal</span>
                    )}
                  </td>

                  <td>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {ann.department} • {ann.year}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        ann.status === 'PUBLISHED'
                          ? 'badge-resolved'
                          : ann.status === 'DRAFT'
                          ? 'badge-progress'
                          : 'badge-normal'
                      }`}
                    >
                      {ann.status}
                    </span>
                  </td>

                  <td>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
                      {new Date(ann.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </td>

                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => setViewingAnnouncement(ann)}
                        className="btn-icon btn-secondary btn-icon-sm"
                        title="View Notice Details"
                      >
                        <Eye size={14} />
                      </button>

                      <button
                        onClick={() => handleOpenEdit(ann)}
                        className="btn-icon btn-secondary btn-icon-sm"
                        title="Edit Notice"
                      >
                        <Edit2 size={14} />
                      </button>

                      {ann.status === 'DRAFT' && (
                        <button
                          onClick={() => handleQuickStatus(ann, 'PUBLISHED')}
                          className="btn-icon btn-secondary btn-icon-sm"
                          title="Publish Now"
                          style={{ color: '#10b981' }}
                        >
                          <Send size={14} />
                        </button>
                      )}

                      {ann.status === 'PUBLISHED' && (
                        <button
                          onClick={() => handleQuickStatus(ann, 'ARCHIVED')}
                          className="btn-icon btn-secondary btn-icon-sm"
                          title="Archive Notice"
                          style={{ color: '#f59e0b' }}
                        >
                          <Archive size={14} />
                        </button>
                      )}

                      <button
                        onClick={() => setDeletingId(ann.id)}
                        className="btn-icon btn-secondary btn-icon-sm"
                        title="Delete Notice"
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

      {/* Create / Edit Announcement Modal */}
      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title={editingAnnouncement ? 'Edit College Announcement' : 'Create New College Announcement'}
        maxWidth="680px"
        footer={
          <>
            <button onClick={() => setShowCreateModal(false)} className="btn-secondary" disabled={submitting}>
              Cancel
            </button>
            <button onClick={handleSubmit} className="btn-primary" disabled={submitting} style={{ background: 'var(--accent-gradient-purple)' }}>
              {submitting ? 'Saving...' : editingAnnouncement ? 'Update Notice' : 'Publish Announcement'}
            </button>
          </>
        }
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Announcement Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Autumn 2026 Examination Schedule & Hall Allocation"
              className="form-input"
              required
            />
          </div>

          <div className="grid-2" style={{ gap: '14px' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="form-select"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Priority Level</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="form-select"
              >
                <option value="NORMAL">Normal</option>
                <option value="IMPORTANT">Important</option>
                <option value="URGENT">Urgent (Broadcasts Emergency Alert)</option>
              </select>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '14px' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Target Department</label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="form-select"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Target Academic Year</label>
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="form-select"
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '14px' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Publication Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="form-select"
              >
                <option value="PUBLISHED">Published (Visible to students immediately)</option>
                <option value="DRAFT">Draft (Saved privately)</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Action Deadline (Optional)</label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Description & Notice Body</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={5}
              placeholder="Full announcement text, instructions, and requirements..."
              className="form-textarea"
              required
            />
          </div>

          {/* Attachment Upload */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Attach PDF / Document (Max 15MB)</label>
            <input
              type="file"
              onChange={(e) => setFormData({ ...formData, file: e.target.files[0] || null })}
              className="form-input"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png,.zip"
            />
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmationDialog
        isOpen={!!deletingId}
        onClose={() => setDeletingId(null)}
        onConfirm={handleDelete}
        title="Delete Announcement"
        message="Are you sure you want to permanently delete this announcement? This action is irreversible and will be logged in the audit trail."
        isDanger={true}
        loading={submitting}
      />

      {/* Details View Modal */}
      <AnnouncementDetailModal
        isOpen={!!viewingAnnouncement}
        onClose={() => setViewingAnnouncement(null)}
        announcement={viewingAnnouncement}
      />
    </div>
  );
};
export default AdminAnnouncements;
