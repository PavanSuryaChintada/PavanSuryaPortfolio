import React, { useRef, useEffect, useState } from 'react';
import { User, Check, Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const RightSidebar: React.FC = () => {
  const sidebarRef = useRef<HTMLElement>(null);
  const { setSidebarScrollProgress } = useAppContext();
  const [isTopCardHovered, setIsTopCardHovered] = useState(false);

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
      className="w-[320px] h-[calc(100vh-90px)] bg-bg-elevated overflow-y-auto fixed right-0 top-0 p-4 lg:hidden xl:block"
    >
      {/* User Profile Avatar */}
      <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bg-highlight flex items-center justify-center text-text-base hover:scale-105 transition-smooth z-10">
        <User size={18} />
      </button>

      <div className="mt-8 space-y-4">
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
              <h3 className="text-text-base font-bold text-lg mb-1">Manu Pilas</h3>
              <p className="text-text-subdued text-xs mb-2">12,345,678 monthly listeners</p>
              <p className="text-text-subdued text-sm mb-3 line-clamp-3">
                A revolutionary anthem that has become synonymous with resistance and freedom.
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
                      Casa de Papel/ Money H&nbsp;&nbsp;&nbsp;&nbsp;Casa de Papel/ Money H&nbsp;&nbsp;&nbsp;&nbsp;
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
                  <p className="text-white text-lg font-semibold mb-3">Manu Pilas</p>
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                    <h3 className="text-white text-xs font-bold mb-1.5">About the artist</h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      A revolutionary anthem that has become synonymous with resistance and freedom. 
                      Originally an Italian folk song, it gained worldwide recognition through 
                      its powerful use in popular culture.
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/10">
                      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-spotify-green transition-colors">
                        <MessageCircle size={18} />
                      </a>
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-spotify-green transition-colors">
                        <Github size={18} />
                      </a>
                      <a href="mailto:" className="text-white/70 hover:text-spotify-green transition-colors">
                        <Mail size={18} />
                      </a>
                      <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-spotify-green transition-colors">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credits Card - Always Visible */}
        <Card className="bg-bg-card border-border-subtle">
          <CardContent className="p-4">
            <h3 className="text-text-base font-bold text-sm mb-2">Credits</h3>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-bg-elevated overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=48&h=48&fit=crop"
                  alt="Artist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-text-base text-sm font-medium">Manu Pilas</p>
                <p className="text-text-subdued text-xs">Main Artist, Composer</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">Follow</Button>
          </CardContent>
        </Card>

        {/* Next in Queue Card - Always Visible */}
        <Card className="bg-bg-card border-border-subtle">
          <CardContent className="p-4">
            <h3 className="text-text-base font-bold text-sm mb-3">Next in queue</h3>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-bg-elevated overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=48&h=48&fit=crop"
                  alt="Next track"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-text-base text-sm font-medium">Money Heist Theme</p>
                <p className="text-text-subdued text-xs">El Profesor</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
};

export default RightSidebar;
