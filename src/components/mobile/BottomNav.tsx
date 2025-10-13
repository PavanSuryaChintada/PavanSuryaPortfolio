import React from 'react';
import { Home, Search, Library, User } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/search', label: 'Search', icon: Search },
    { path: '/library', label: 'Library', icon: Library },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[99] h-[65px] bg-gradient-nav backdrop-blur-[10px] flex justify-around items-center">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPath === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center gap-1"
          >
            <Icon
              size={24}
              className={isActive ? 'text-text-base' : 'text-text-subdued'}
            />
            <span className={`text-[10px] ${isActive ? 'text-text-base' : 'text-text-subdued'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
