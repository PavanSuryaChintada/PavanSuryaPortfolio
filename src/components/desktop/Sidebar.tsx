import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/professional', label: 'Professional', icon: Search },
    { path: '/skills', label: 'Skills', icon: Library },
    { path: '/hire', label: 'Hire Me', icon: Plus },
    { path: '/work-permit', label: 'Work Permit', icon: Heart },
  ];

  const playlists = [
    'Featured Projects',
    'Skills & Tech Stack',
    'Work Experience',
    'Education',
    'Contact Info',
  ];

  return (
    <aside className="w-[260px] lg:w-[60px] xl:w-[260px] h-[calc(100vh-90px)] bg-bg-sidebar fixed left-0 top-0 p-6 lg:p-2 xl:p-6 overflow-y-auto">
      <nav className="mb-8">
        <ul className="space-y-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentPath === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-4 lg:justify-center xl:justify-start transition-smooth group relative ${
                    isActive ? 'text-text-base' : 'text-text-subdued hover:text-text-base'
                  }`}
                  title={link.label}
                >
                  <Icon size={24} />
                  <span className="font-bold text-sm lg:hidden xl:inline">{link.label}</span>
                  {/* Tablet tooltip */}
                  <span className="hidden lg:block xl:hidden absolute left-full ml-4 px-3 py-2 bg-bg-card text-text-base text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border-subtle pt-4 lg:hidden xl:block">
        <button className="flex items-center gap-4 text-text-subdued hover:text-text-base transition-smooth mb-6 w-full">
          <Plus size={24} />
          <span className="font-bold text-sm">Create Playlist</span>
        </button>
      </div>

      <div className="border-t border-border-subtle pt-4 lg:hidden xl:block">
        <ul className="space-y-3">
          {playlists.map((playlist, index) => (
            <li key={index}>
              <button className="text-text-subdued hover:text-text-base transition-smooth text-sm text-left w-full">
                {playlist}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
