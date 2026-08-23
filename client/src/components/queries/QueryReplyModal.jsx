import React, { useState, useEffect } from 'react';
import { Send, User, MessageSquare } from 'lucide-react';
import { Modal } from '../common/Modal.jsx';
import { queryService } from '../../services/queryService.js';
import { useToast } from '../../context/ToastContext.jsx';

export const QueryReplyModal = ({ isOpen, onClose, query, onSuccess }) => {
  const [response, setResponse] = useState('');
  const [status, setStatus] = useState('RESOLVED');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    if (query) {
      setResponse(query.response || '');
      setStatus(query.status === 'OPEN' ? 'RESOLVED' : query.status);
    }
  }, [query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!response.trim()) {
      addToast('Please enter a reply response.', 'warning');
      return;
    }

    try {
      setLoading(true);
      const res = await queryService.reply(query.id, { response, status });
      if (res.success) {
        addToast('Reply submitted and student notified!', 'success');
        onSuccess(res.query);
        onClose();
      }
    } catch (err) {
      addToast(err.message || 'Failed to submit response', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (!query) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Reply to Student Query"
      maxWidth="620px"
      footer={
        <>
          <button onClick={onClose} className="btn-secondary" disabled={loading}>
            Cancel
          </button>
          <button onClick={handleSubmit} className="btn-primary" disabled={loading}>
            <Send size={15} />
            <span>{loading ? 'Sending...' : 'Send Response & Notify Student'}</span>
          </button>
        </>
      }
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Student Query Box */}
        <div
          style={{
            padding: '14px 16px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-color)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <User size={15} color="var(--accent-primary)" />
            <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
              {query.student?.name || 'Student'} ({query.student?.email || 'N/A'})
            </strong>
          </div>
          <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '4px 0 6px', color: 'var(--text-primary)' }}>
            {query.subject}
          </h4>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
            {query.message}
          </p>
        </div>

        {/* Status selection */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Set Query Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-select"
          >
            <option value="RESOLVED">Resolved (Query answered & closed)</option>
            <option value="IN_PROGRESS">In Progress (Under investigation / review)</option>
            <option value="OPEN">Open (Pending)</option>
          </select>
        </div>

        {/* Reply Message */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">Administrator Response</label>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            rows={5}
            placeholder="Type your official administrative answer to the student here..."
            className="form-textarea"
            required
          />
        </div>
      </form>
    </Modal>
  );
};
export default QueryReplyModal;
