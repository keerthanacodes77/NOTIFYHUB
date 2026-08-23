import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  MessageSquare,
  Send,
  Trash2,
  Eye,
  CheckCircle2,
  Clock,
  User,
  Search,
  RefreshCw,
  CornerDownRight,
} from 'lucide-react';
import { queryService } from '../../services/queryService.js';
import { QueryReplyModal } from '../../components/queries/QueryReplyModal.jsx';
import { ConfirmationDialog } from '../../components/common/ConfirmationDialog.jsx';
import { SearchBar } from '../../components/common/SearchBar.jsx';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { EmptyState } from '../../components/common/EmptyState.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export const AdminQueries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const [replyingQuery, setReplyingQuery] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { addToast } = useToast();

  const fetchQueries = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await queryService.getAll({
        search,
        status: statusFilter !== 'All' ? statusFilter : undefined,
      });
      if (res.success) {
        setQueries(res.queries || []);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load queries.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, [statusFilter]);

  useEffect(() => {
    const timer = setTimeout(fetchQueries, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const handleQuickResolve = async (id) => {
    try {
      await queryService.updateStatus(id, { status: 'RESOLVED' });
      addToast('Query marked as Resolved!', 'success');
      fetchQueries();
    } catch (err) {
      addToast('Failed to update status', 'error');
    }
  };

  const handleDelete = async () => {
    if (!deletingId) return;
    try {
      setSubmitting(true);
      await queryService.delete(deletingId);
      addToast('Query deleted.', 'info');
      setDeletingId(null);
      fetchQueries();
    } catch (err) {
      addToast('Failed to delete query', 'error');
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
            Student Queries & Helpdesk Management
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Review, reply, resolve and manage student academic and administrative inquiries
          </p>
        </div>

        <button onClick={fetchQueries} className="btn-secondary btn-sm" style={{ display: 'flex', gap: '6px' }}>
          <RefreshCw size={14} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Filters & Search */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['All', 'OPEN', 'IN_PROGRESS', 'RESOLVED'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`btn-sm ${statusFilter === st ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              {st === 'All' ? 'All Queries' : st === 'OPEN' ? 'Open' : st === 'IN_PROGRESS' ? 'In Progress' : 'Resolved'}
            </button>
          ))}
        </div>

        <div style={{ minWidth: '280px' }}>
          <SearchBar value={search} onChange={setSearch} placeholder="Search by student name, email, or subject..." />
        </div>
      </div>

      {/* Queries Table */}
      {loading ? (
        <LoadingSpinner text="Retrieving student inquiries..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchQueries} />
      ) : queries.length === 0 ? (
        <EmptyState
          icon={HelpCircle}
          title="No student queries found"
          description="There are currently no queries matching your search criteria."
        />
      ) : (
        <div className="table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Subject & Question</th>
                <th>Status</th>
                <th>Submitted Date</th>
                <th>Admin Response</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((q) => (
                <tr key={q.id}>
                  <td>
                    <div>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block' }}>
                        {q.student?.name || 'Student'}
                      </strong>
                      <span style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)' }}>
                        {q.student?.rollNumber || q.student?.email}
                      </span>
                    </div>
                  </td>

                  <td>
                    <div style={{ maxWidth: '300px' }}>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block' }}>
                        {q.subject}
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {q.message.slice(0, 80)}...
                      </span>
                    </div>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        q.status === 'RESOLVED'
                          ? 'badge-resolved'
                          : q.status === 'IN_PROGRESS'
                          ? 'badge-progress'
                          : 'badge-open'
                      }`}
                    >
                      {q.status}
                    </span>
                  </td>

                  <td>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                      {new Date(q.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                    </span>
                  </td>

                  <td>
                    <div style={{ maxWidth: '220px', fontSize: '0.8rem' }}>
                      {q.response ? (
                        <span style={{ color: '#10b981', fontWeight: 600 }}>
                          ✓ Replied ({new Date(q.respondedAt).toLocaleDateString([], { month: 'short', day: 'numeric' })})
                        </span>
                      ) : (
                        <span style={{ color: '#f59e0b', fontWeight: 600 }}>
                          Pending Answer
                        </span>
                      )}
                    </div>
                  </td>

                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => setReplyingQuery(q)}
                        className="btn-primary btn-sm"
                        style={{ fontSize: '0.76rem' }}
                      >
                        <Send size={13} />
                        <span>{q.response ? 'Edit Reply' : 'Reply'}</span>
                      </button>

                      {q.status !== 'RESOLVED' && (
                        <button
                          onClick={() => handleQuickResolve(q.id)}
                          className="btn-icon btn-secondary btn-icon-sm"
                          title="Mark Resolved"
                          style={{ color: '#10b981' }}
                        >
                          <CheckCircle2 size={14} />
                        </button>
                      )}

                      <button
                        onClick={() => setDeletingId(q.id)}
                        className="btn-icon btn-secondary btn-icon-sm"
                        title="Delete Query"
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

      {/* Reply Modal */}
      <QueryReplyModal
        isOpen={!!replyingQuery}
        onClose={() => setReplyingQuery(null)}
        query={replyingQuery}
        onSuccess={() => fetchQueries()}
      />

      {/* Delete Confirmation */}
      <ConfirmationDialog
        isOpen={!!deletingId}
        onClose={() => setDeletingId(null)}
        onConfirm={handleDelete}
        title="Delete Student Query"
        message="Are you sure you want to delete this student query? The ticket will be permanently removed."
        isDanger={true}
        loading={submitting}
      />
    </div>
  );
};
export default AdminQueries;
