import React from 'react';
import { Filter } from 'lucide-react';

export const FilterDropdown = ({
  label,
  value,
  onChange,
  options = [],
  icon: Icon = Filter,
}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {label && (
        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>
          {label}:
        </span>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-select"
        style={{
          padding: '8px 12px',
          fontSize: '0.86rem',
          borderRadius: 'var(--radius-md)',
          minWidth: '130px',
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FilterDropdown;
