import React, { useRef, useEffect, useState } from 'react';
import { Check, Mail, Linkedin, Github, MessageCircle, PanelRight, MoreHorizontal, Maximize2 } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const RightSidebar: React.FC = () => {
  const sidebarRef = useRef<HTMLElement>(null);
  const { setSidebarScrollProgress } = useAppContext();
  const [isTopCardHovered, setIsTopCardHovered] = useState(false);
  const [isHoveringPanel, setIsHoveringPanel] = useState(false);

  useEffect(() => {
    const element = sidebarRef.current;
    if (!element) return;

    const calculateScrollProgress = () => {
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;
      
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      
      setSidebarScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    calculateScrollProgress();
    element.addEventListener('scroll', calculateScrollProgress, { passive: true });

    return () => {
      element.removeEventListener('scroll', calculateScrollProgress);
    };
  }, [setSidebarScrollProgress]);

  return (
    <aside
      ref={sidebarRef}
      className="w-full h-full min-h-0 bg-transparent overflow-y-auto relative lg:hidden xl:block"
      onMouseEnter={() => setIsHoveringPanel(true)}
      onMouseLeave={() => setIsHoveringPanel(false)}
    >
      {/* Sticky header: About Me + icons (icons only visible when cursor is over this panel) */}
      <div className="sticky top-0 z-10 flex items-center justify-between gap-2 px-4 pt-4 pb-2 rounded-t-[8px] bg-[#121212] min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          <button type="button" className="flex-shrink-0 text-[#b3b3b3] hover:text-white transition-colors p-1" aria-label="Expand panel">
            <PanelRight size={20} />
          </button>
          <h2 className="text-white text-2xl font-bold truncate">About Me</h2>
        </div>
        <div
          className={`flex items-center gap-1 flex-shrink-0 transition-opacity duration-200 ${
            isHoveringPanel ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button type="button" className="text-[#b3b3b3] hover:text-white transition-colors p-1" aria-label="More options">
            <MoreHorizontal size={20} />
          </button>
          <button type="button" className="text-[#b3b3b3] hover:text-white transition-colors p-1" aria-label="Fullscreen">
            <Maximize2 size={20} />
          </button>
        </div>
      </div>
      <div className="space-y-4 px-4 pb-4 pt-2">
        {/* Top Card - Artist Info / About the Artist (with hover state) */}
        <div 
          className="relative"
          onMouseEnter={() => setIsTopCardHovered(true)}
          onMouseLeave={() => setIsTopCardHovered(false)}
        >
          {/* Default Artist Info Card */}
          <Card 
            className={`bg-bg-card border-border-subtle transition-opacity duration-500 ${
              isTopCardHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <CardContent className="p-4">
              <div className="aspect-square bg-bg-elevated rounded-lg mb-3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
                  alt="Artist"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-text-base font-bold text-lg mb-1">Pavan Surya Chintada</h3>
              <p className="text-text-subdued text-xs mb-2">Full-Stack Developer</p>
              <p className="text-text-subdued text-sm mb-3 line-clamp-3">
                EC undergrad & MERN full-stack developer. Skilled in React, Node.js, Python, AI automation. National-level declamation participant.
              </p>
              <Button variant="outline" className="w-full">Follow</Button>
            </CardContent>
          </Card>

          {/* Hover State - About the Artist Card */}
          <Card 
            className={`absolute inset-0 bg-bg-card border-border-subtle overflow-hidden transition-opacity duration-500 ${
              isTopCardHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <CardContent className="p-0 h-full relative">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
                  alt="About the artist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-between p-4">
                {/* Top Section - Scrolling Title */}
                <div className="overflow-hidden">
                  <div className="animate-marquee whitespace-nowrap">
                    <h2 className="text-white text-2xl font-bold inline-block">
                      Full-Stack Developer&nbsp;&nbsp;&nbsp;&nbsp;Full-Stack Developer&nbsp;&nbsp;&nbsp;&nbsp;
                    </h2>
                  </div>
                  
                  {/* Green Checkmark */}
                  <div className="inline-flex items-center gap-2 bg-spotify-green/20 backdrop-blur-sm px-3 py-1.5 rounded-full mt-3">
                    <div className="w-5 h-5 rounded-full bg-spotify-green flex items-center justify-center">
                      <Check size={14} className="text-black font-bold" />
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Artist Name and About */}
                <div>
                  <p className="text-white text-lg font-semibold mb-3">Pavan Surya Chintada</p>
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-white text-xs font-bold mb-1.5">About</h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      EC undergrad learning MERN full-stack at NxtWave. Skilled in React, Node.js, Express, Python, SQL, and AI workflow automation. Curious about IoT & embedded systems. National-level elocution participant.
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/10">
                      <a href="https://wa.me/919014404898" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-spotify-green transition-colors">
                        <MessageCircle size={18} />
                      </a>
                      <a href="https://github.com/PavanSuryaChintada" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-spotify-green transition-colors">
                        <Github size={18} />
                      </a>
                      <a href="mailto:pavansuryachintada@gmail.com" className="text-white/70 hover:text-spotify-green transition-colors">
                        <Mail size={18} />
                      </a>
                      <a href="https://www.linkedin.com/in/pavan-surya-chintada" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-spotify-green transition-colors">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credits – Spotify-style sub-card */}
        <div className="rounded-[6px] p-4 bg-[#242424]">
          <h3 className="text-white font-bold text-sm mb-3">Credits</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-between gap-2">
              <span className="text-[#b3b3b3] text-[11px]">Main Developer</span>
              <span className="text-white text-[13px] font-medium truncate">Pavan Surya Chintada</span>
            </li>
            <li className="flex items-center justify-between gap-2">
              <span className="text-[#b3b3b3] text-[11px]">Design</span>
              <span className="text-white text-[13px] font-medium truncate">Pavan Surya Chintada</span>
            </li>
          </ul>
        </div>

        {/* Next in queue – Spotify-style sub-card */}
        <div className="rounded-[6px] p-4 bg-[#242424]">
          <h3 className="text-white font-bold text-sm mb-3">Next in queue</h3>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#333333] overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=40&h=40&fit=crop"
                alt="Next track"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-white text-[13px] font-medium truncate">Money Heist Theme</p>
              <p className="text-[#b3b3b3] text-[11px] truncate">El Profesor</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
