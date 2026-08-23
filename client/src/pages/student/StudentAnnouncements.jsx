import React, { useState, useEffect } from 'react';
import {
  Megaphone,
  Search,
  Filter,
  Flame,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';
import { announcementService } from '../../services/announcementService.js';
import { AnnouncementCard } from '../../components/announcements/AnnouncementCard.jsx';
import { SearchBar } from '../../components/common/SearchBar.jsx';
import { FilterDropdown } from '../../components/common/FilterDropdown.jsx';
import { LoadingSpinner } from '../../components/common/LoadingSpinner.jsx';
import { EmptyState } from '../../components/common/EmptyState.jsx';
import { ErrorState } from '../../components/common/ErrorState.jsx';

export const StudentAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [priority, setPriority] = useState('All');

  const categories = [
    'All',
    'Academic',
    'Examination',
    'Placement',
    'Workshop',
    'Event',
    'General',
  ];

  const priorityOptions = [
    { value: 'All', label: 'All Priorities' },
    { value: 'URGENT', label: 'Urgent Priority' },
    { value: 'IMPORTANT', label: 'Important Notice' },
    { value: 'NORMAL', label: 'Normal' },
  ];

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await announcementService.getAll({
        search,
        category: category !== 'All' ? category : undefined,
        priority: priority !== 'All' ? priority : undefined,
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
  }, [category, priority]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAnnouncements();
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Page Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--text-primary)' }}>
            College Announcements
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Verified circulars, exam notifications, placement notices and campus alerts
          </p>
        </div>

        <button onClick={fetchAnnouncements} className="btn-secondary btn-sm" style={{ display: 'flex', gap: '6px' }}>
          <RefreshCw size={14} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Category Pills Bar */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '6px',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              border: category === cat ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
              background: category === cat ? 'var(--accent-gradient)' : 'var(--bg-secondary)',
              color: category === cat ? '#ffffff' : 'var(--text-secondary)',
              boxShadow: category === cat ? '0 4px 12px var(--accent-primary-glow)' : 'none',
              transition: 'all var(--transition-fast)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search & Priority Controls */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
        }}
      >
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by title, description or keywords..."
        />

        <FilterDropdown
          value={priority}
          onChange={setPriority}
          options={priorityOptions}
          label="Priority"
        />
      </div>

      {/* Announcements Content */}
      {loading ? (
        <LoadingSpinner text="Fetching verified announcements..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchAnnouncements} />
      ) : announcements.length === 0 ? (
        <EmptyState
          icon={Megaphone}
          title="No announcements match your filter"
          description="Try selecting a different category or clearing search terms to see more circulars."
          action={
            <button
              onClick={() => {
                setCategory('All');
                setPriority('All');
                setSearch('');
              }}
              className="btn-primary btn-sm"
            >
              Reset Filters
            </button>
          }
        />
      ) : (
        <div className="grid-2" style={{ gap: '20px' }}>
          {announcements.map((ann) => (
            <AnnouncementCard key={ann.id} announcement={ann} onRefresh={fetchAnnouncements} />
          ))}
        </div>
      )}
    </div>
  );
};
export default StudentAnnouncements;
