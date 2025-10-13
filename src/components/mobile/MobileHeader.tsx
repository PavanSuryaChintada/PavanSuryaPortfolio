import React from 'react';
import { Search } from 'lucide-react';

const MobileHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-bg-elevated backdrop-blur-md border-b border-bg-highlight px-4 py-3">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subdued" size={18} />
        <input
          type="text"
          placeholder="What do you want to play?"
          className="w-full pl-10 pr-4 py-2.5 bg-bg-base text-text-base placeholder:text-text-subdued rounded-md border-none outline-none focus:ring-1 focus:ring-border-base transition-smooth text-sm"
        />
      </div>
    </header>
  );
};

export default MobileHeader;
