import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownCircle, Briefcase, Eye, Code, Mountain } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

const Header: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateShadows = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    updateShadows();
    const handler = () => updateShadows();
    window.addEventListener('resize', handler);
    // Observe content size changes inside the scroller
    const ro = new ResizeObserver(handler);
    if (scrollRef.current) ro.observe(scrollRef.current);
    return () => {
      window.removeEventListener('resize', handler);
      ro.disconnect();
    };
  }, []);

  const { selectedProfile } = useAppContext();
  
  // Get the appropriate icon based on the selected profile
  const getProfileIcon = () => {
    switch (selectedProfile) {
      case 'recruiter':
        return <Briefcase className="w-5 h-5 text-text-base" />;
      case 'stalker':
        return <Eye className="w-5 h-5 text-text-base" />;
      case 'developer':
        return <Code className="w-5 h-5 text-text-base" />;
      case 'adventurer':
        return <Mountain className="w-5 h-5 text-text-base" />;
      default:
        return <Briefcase className="w-5 h-5 text-text-base" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 px-3 sm:px-6 py-3 sm:py-4 bg-bg-elevated backdrop-blur-md border-b border-bg-highlight">
      {/* Left: Name */}
      <div className="flex items-center min-w-0 flex-1">
        <h1 className="truncate text-lg sm:text-2xl font-bold text-text-base hover:text-spotify-green transition-smooth cursor-pointer">
          CHINTADA PAVAN SURYA
        </h1>
      </div>

      {/* Right: User Controls */}
      <div className="relative w-full sm:w-auto overflow-hidden">
        <div
          ref={scrollRef}
          onScroll={updateShadows}
          className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap justify-end sm:justify-end px-2 scroll-smooth"
        >
          <a href="https://github.com/PavanSuryaChintada" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 whitespace-nowrap px-3 sm:px-6 py-2 bg-text-base text-bg-base text-xs sm:text-sm font-semibold rounded-full hover:scale-105 transition-smooth">
            <ArrowDownCircle className="h-4 w-4" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pavan-surya-chintada" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap px-3 sm:px-6 py-2 border border-text-base text-text-base text-xs sm:text-sm font-semibold rounded-full hover:scale-105 transition-smooth">
            LinkedIn
          </a>
          <div className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-bg-highlight items-center justify-center hover:scale-105 transition-smooth">
            {getProfileIcon()}
          </div>
        </div>
        {showLeft && (
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-bg-elevated to-transparent" />
        )}
        {showRight && (
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-bg-elevated to-transparent" />
        )}
      </div>
    </header>
  );
};

export default Header;
