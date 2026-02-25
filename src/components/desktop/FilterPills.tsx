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
              ? 'bg-[#ffffff] text-[#000000]'
              : 'bg-[#282828] text-[#ffffff] hover:bg-[#3e3e3e]'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterPills;
