import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
}) => {
  return (
    <div className={`input-with-icon ${className}`} style={{ minWidth: '220px', flex: 1 }}>
      <Search size={16} className="input-icon-left" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="form-input"
        style={{ paddingRight: value ? '34px' : '14px' }}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="input-icon-right"
          style={{ background: 'none', border: 'none', padding: 0, display: 'flex' }}
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
};
export default SearchBar;
