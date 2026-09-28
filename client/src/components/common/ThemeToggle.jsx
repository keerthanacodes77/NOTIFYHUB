import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext.jsx';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`btn-icon btn-secondary ${className}`}
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
      aria-label="Toggle Theme"
      style={{
        width: '38px',
        height: '38px',
        borderRadius: 'var(--radius-md)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease',
      }}
    >
      {theme === 'dark' ? (
        <Sun size={18} color="#f59e0b" className="animate-scale-in" />
      ) : (
        <Moon size={18} color="#6366f1" className="animate-scale-in" />
      )}
    </button>
  );
};
export default ThemeToggle;
