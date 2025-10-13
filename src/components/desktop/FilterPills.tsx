import React from 'react';

interface FilterPillsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterPills: React.FC<FilterPillsProps> = ({ activeFilter, onFilterChange }) => {
  const filters = ['All', 'Professional', 'Personal'];

  return (
    <div className="flex items-center gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth ${
            activeFilter === filter
              ? 'bg-text-base text-bg-base'
              : 'bg-bg-highlight text-text-base hover:bg-bg-card-hover'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterPills;
