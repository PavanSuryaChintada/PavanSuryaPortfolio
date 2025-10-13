import React from 'react';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-bg-elevated backdrop-blur-md border-b border-bg-highlight">
      {/* Left: Name */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-text-base hover:text-spotify-green transition-smooth cursor-pointer">
          CHINTADA PAVAN SURYA
        </h1>
      </div>

      {/* Right: User Controls */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-2 bg-text-base text-bg-base text-sm font-semibold rounded-full hover:scale-105 transition-smooth border-2 border-spotify-green">
          Resume
        </button>
        <button className="px-6 py-2 border border-text-base text-text-base text-sm font-semibold rounded-full hover:scale-105 transition-smooth">
          LinkedIn
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-bg-highlight flex items-center justify-center hover:scale-105 transition-smooth">
          <img src="/src/assets/avatar.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
