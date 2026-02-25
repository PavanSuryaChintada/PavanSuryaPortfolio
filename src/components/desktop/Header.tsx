import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Home,
  Search,
  Download,
  Bell,
  Users,
  Briefcase,
  Eye,
  Code,
  Mountain,
  LayoutGrid,
} from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

/** Spotify-style logo: three curved sound wave lines */
const SpotifyStyleLogo: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M6 12c0 0 2-2 6-2s6 2 6 2" />
    <path d="M4 14c0 0 3-3 8-3s8 3 8 3" />
    <path d="M8 10c0 0 2-1 4-1s4 1 4 1" />
  </svg>
);

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { selectedProfile } = useAppContext();

  const getProfileIcon = () => {
    switch (selectedProfile) {
      case 'recruiter':
        return <Briefcase className="w-5 h-5" />;
      case 'stalker':
        return <Eye className="w-5 h-5" />;
      case 'developer':
        return <Code className="w-5 h-5" />;
      case 'adventurer':
        return <Mountain className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <header className="relative flex-shrink-0 flex items-center justify-between gap-4 h-14 px-4 sm:px-6 bg-[#000000] z-50">
      {/* Left: Spotify-style logo */}
      <div className="flex items-center min-w-0 flex-shrink-0 z-10">
        <Link
          to="/"
          className="flex items-center justify-center w-10 h-10 rounded-full text-[#ffffff] hover:opacity-90 transition-opacity"
          aria-label="Home"
        >
          <SpotifyStyleLogo className="w-8 h-8" />
        </Link>
      </div>

      {/* Center: Home button + pill search bar (absolutely centered in header) */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex items-center justify-center gap-2 pointer-events-none w-full max-w-[600px] mx-auto">
        <div className="flex items-center gap-2 pointer-events-auto">
          <Link
            to="/"
            className="flex-shrink-0 w-10 h-10 rounded-full bg-[#121212] text-[#ffffff] flex items-center justify-center hover:bg-[#282828] transition-colors"
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </Link>
          <button
            type="button"
            onClick={() => navigate('/search')}
            className="flex items-center gap-3 h-10 pl-4 pr-3 py-2 rounded-full bg-[#242424] text-[#b3b3b3] hover:bg-[#2a2a2a] hover:text-[#ffffff] transition-colors text-left min-w-[280px]"
          >
            <Search className="w-5 h-5 flex-shrink-0 text-current" />
            <span className="truncate text-sm font-medium">What do you want to play?</span>
            <LayoutGrid className="w-5 h-5 flex-shrink-0 text-current opacity-70" />
          </button>
        </div>
      </div>

      {/* Right: Install App, GitHub, LinkedIn, Bell, What's New, Profile */}
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 z-10">
        <a
          href="#"
          className="flex items-center gap-2 whitespace-nowrap px-3 py-2 rounded-full bg-[#121212] text-[#ffffff] text-xs font-semibold hover:bg-[#282828] hover:scale-105 transition-all"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Install App</span>
        </a>
        <a
          href="https://github.com/PavanSuryaChintada"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 whitespace-nowrap px-3 py-2 rounded-full border border-[#535353] text-[#ffffff] text-xs font-semibold hover:border-[#ffffff] hover:scale-105 transition-all"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/pavan-surya-chintada"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 whitespace-nowrap px-3 py-2 rounded-full border border-[#535353] text-[#ffffff] text-xs font-semibold hover:border-[#ffffff] hover:scale-105 transition-all"
        >
          LinkedIn
        </a>
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full text-[#ffffff] hover:bg-[#282828] transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full text-[#ffffff] hover:bg-[#282828] transition-colors"
          aria-label="What's New"
        >
          <Users className="w-5 h-5" />
        </button>
        <div
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#282828] text-[#ffffff] overflow-hidden hover:bg-[#333333] transition-colors"
          title={selectedProfile ? `Viewing as ${selectedProfile}` : 'Profile'}
        >
          {getProfileIcon()}
        </div>
      </div>
    </header>
  );
};

export default Header;
