import React, { useState, useEffect } from 'react';
import {
  Activity,
  Search,
  Filter,
  Clock,
  Shield,
  RefreshCw,
  FileText,
  User,
} from 'lucide-react';
import { activityService } from '../../services/activityService.js';
import { SearchBar } from '../../components/common/SearchBar.jsx';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { EmptyState } from '../../components/common/EmptyState.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';

export const AdminActivityLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [entityFilter, setEntityFilter] = useState('All');

  const fetchLogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await activityService.getAll({
        entityType: entityFilter !== 'All' ? entityFilter : undefined,
        limit: 100,
      });
      if (res.success) {
        setLogs(res.logs || []);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to load activity logs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [entityFilter]);

  const filteredLogs = logs.filter((l) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      l.action.toLowerCase().includes(q) ||
      (l.details && l.details.toLowerCase().includes(q)) ||
      (l.admin?.name && l.admin.name.toLowerCase().includes(q))
    );
  });

  const entityTypes = ['All', 'Announcement', 'Event', 'Query', 'Auth', 'Settings'];

  const getActionBadgeColor = (action) => {
    if (action.includes('DELETED')) return 'badge-urgent';
    if (action.includes('CREATED') || action.includes('PUBLISHED') || action.includes('RESOLVED')) return 'badge-resolved';
    if (action.includes('LOGIN')) return 'badge-normal';
    return 'badge-progress';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
            Administrative Activity Audit Logs
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Comprehensive immutable audit trail of administrative modifications, broadcasts, and ticket resolutions
          </p>
        </div>

        <button onClick={fetchLogs} className="btn-secondary btn-sm" style={{ display: 'flex', gap: '6px' }}>
          <RefreshCw size={14} />
          <span>Refresh Logs</span>
        </button>
      </div>

      {/* Filter and Search */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
          {entityTypes.map((et) => (
            <button
              key={et}
              onClick={() => setEntityFilter(et)}
              className={`btn-sm ${entityFilter === et ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              {et}
            </button>
          ))}
        </div>

        <div style={{ minWidth: '280px' }}>
          <SearchBar value={search} onChange={setSearch} placeholder="Search action, details, or admin name..." />
        </div>
      </div>

      {/* Logs Table */}
      {loading ? (
        <LoadingSpinner text="Retrieving audit trail..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchLogs} />
      ) : filteredLogs.length === 0 ? (
        <EmptyState
          icon={Activity}
          title="No activity logs match filter"
          description="Administrative actions (creating notices, responding to queries, logins) will be recorded here automatically."
        />
      ) : (
        <div className="table-container">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Action & Entity</th>
                <th>Administrator</th>
                <th>Details / Change Summary</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span className={`badge ${getActionBadgeColor(log.action)}`} style={{ fontSize: '0.7rem' }}>
                        {log.action}
                      </span>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)' }}>
                        Target: <strong>{log.entityType}</strong>
                      </span>
                    </div>
                  </td>

                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: 'var(--accent-gradient-purple)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                        }}
                      >
                        {log.admin?.name ? log.admin.name.charAt(0) : 'A'}
                      </div>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {log.admin?.name || 'Administrator'}
                      </span>
                    </div>
                  </td>

                  <td>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4, maxWidth: '460px' }}>
                      {log.details || 'No additional parameters.'}
                    </p>
                  </td>

                  <td>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>
                        {new Date(log.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                      </strong>
                      <span>{new Date(log.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default AdminActivityLogs;
