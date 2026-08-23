import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Plus,
  Send,
  HelpCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import { queryService } from '../../services/queryService.js';
import { QueryCard } from '../../components/queries/QueryCard.jsx';
import { Modal } from '../../components/common/Modal.jsx';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { EmptyState } from '../../components/common/EmptyState.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';
import { useToast } from '../../context/ToastContext.jsx';

export const StudentQA = () => {
  const [queries, setQueries] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToast } = useToast();

  const fetchQueries = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await queryService.getAll({
        status: statusFilter !== 'All' ? statusFilter : undefined,
      });
      if (res.success) {
        setQueries(res.queries || []);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load your queries.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, [statusFilter]);

  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) {
      addToast('Please enter both subject and message.', 'warning');
      return;
    }

    try {
      setSubmitting(true);
      const res = await queryService.create({ subject, message });
      if (res.success) {
        addToast('Query submitted successfully! Admin will respond soon.', 'success');
        setSubject('');
        setMessage('');
        setShowModal(false);
        fetchQueries();
      }
    } catch (err) {
      addToast(err.message || 'Failed to submit query', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const statusOptions = ['All', 'OPEN', 'IN_PROGRESS', 'RESOLVED'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
            Student Q&A & Support Desk
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Submit questions regarding electives, fees, hostels, or exams directly to college administration
          </p>
        </div>

        <button onClick={() => setShowModal(true)} className="btn-primary" style={{ display: 'flex', gap: '8px' }}>
          <Plus size={18} />
          <span>Ask a Question</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {statusOptions.map((st) => (
          <button
            key={st}
            onClick={() => setStatusFilter(st)}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.84rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              border: statusFilter === st ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
              background: statusFilter === st ? 'var(--accent-gradient)' : 'var(--bg-secondary)',
              color: statusFilter === st ? '#ffffff' : 'var(--text-secondary)',
              boxShadow: statusFilter === st ? '0 4px 12px var(--accent-primary-glow)' : 'none',
              transition: 'all var(--transition-fast)',
            }}
          >
            {st === 'All' ? 'All Queries' : st === 'OPEN' ? 'Open' : st === 'IN_PROGRESS' ? 'In Progress' : 'Resolved'}
          </button>
        ))}
      </div>

      {/* Queries List */}
      {loading ? (
        <LoadingSpinner text="Retrieving query history..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchQueries} />
      ) : queries.length === 0 ? (
        <EmptyState
          icon={MessageSquare}
          title={statusFilter === 'All' ? 'No Queries Submitted Yet' : `No ${statusFilter} queries found`}
          description="Have a question about courses, exams, or campus facilities? Submit your query to get official guidance from administration."
          action={
            <button onClick={() => setShowModal(true)} className="btn-primary btn-sm">
              <Plus size={14} />
              <span>Ask Your First Question</span>
            </button>
          }
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {queries.map((q) => (
            <QueryCard key={q.id} query={q} />
          ))}
        </div>
      )}

      {/* Ask Question Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Submit a Query to Administration"
        maxWidth="580px"
        footer={
          <>
            <button onClick={() => setShowModal(false)} className="btn-secondary" disabled={submitting}>
              Cancel
            </button>
            <button onClick={handleSubmitQuery} className="btn-primary" disabled={submitting}>
              <Send size={15} />
              <span>{submitting ? 'Submitting...' : 'Submit Query'}</span>
            </button>
          </>
        }
      >
        <form onSubmit={handleSubmitQuery} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Subject / Query Topic</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Elective Course Slot Prerequisite Issue"
              className="form-input"
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Detailed Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Provide complete details including semester, course code, hostel block, or reference number..."
              className="form-textarea"
              required
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default StudentQA;
