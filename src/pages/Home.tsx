import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import ContentCard from '@/components/desktop/ContentCard';
import Header from '@/components/desktop/Header';
import FilterPills from '@/components/desktop/FilterPills';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useColorExtractor } from '@/hooks/use-color-extractor';
import { AnimatePresence, motion } from 'framer-motion';

const Home: React.FC = () => {
  const { selectedProfile } = useAppContext();
  const navigate = useNavigate();
  const { gradientColor, extractColor, clearColor, setColor } = useColorExtractor();
  const [activeFilter, setActiveFilter] = useState('Professional');
  const [showSeeAll, setShowSeeAll] = useState(false);
  const displayProfile = selectedProfile
    ? selectedProfile.charAt(0).toUpperCase() + selectedProfile.slice(1)
    : 'You';

  const allPlaylists = [
    { title: 'Education', subtitle: 'Academic background', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=300&fit=crop', category: 'professional', link: '/education', colorHsl: '141 50% 20%' }, // Spotify Green
    { title: 'Languages', subtitle: 'Communication skills', imageUrl: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=300&h=300&fit=crop', category: 'professional', link: '/languages', colorHsl: '205 30% 18%' }, // Teal/Blue
    { title: 'Honors & Awards', subtitle: 'Achievements', imageUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300&h=300&fit=crop', category: 'professional', link: '/awards', colorHsl: '40 45% 25%' }, // Gold
    { title: 'Volunteering', subtitle: 'Community service', imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop', category: 'professional', link: '/professional', colorHsl: '260 25% 15%' }, // Purple
    { title: 'Music', subtitle: 'Personal interests', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop', category: 'personal', link: '/', colorHsl: '180 25% 20%' }, // Pink
    { title: 'Art', subtitle: 'Creative pursuits', imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=300&h=300&fit=crop', category: 'personal', link: '/', colorHsl: '15 30% 22%' }, // Orange
  ];

  const filteredPlaylists = activeFilter === 'All' 
    ? allPlaylists 
    : allPlaylists.filter(p => p.category === activeFilter.toLowerCase());

  const madeForYouItems = [
    { title: 'Work Permit', subtitle: 'Visa & Authorization', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop', link: '/' },
    { title: 'Skills', subtitle: 'Technical expertise', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop', link: '/skills' },
    { title: 'Experience', subtitle: 'Work history', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', link: '/work-experience' },
    { title: 'Certifications', subtitle: 'Credentials', imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop', link: '/certifications' },
    { title: 'Recommendations', subtitle: 'Testimonials', imageUrl: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=400&fit=crop', link: '/' },
    { title: 'Projects', subtitle: 'Portfolio', imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop', link: '/' },
    { title: 'Contact Me', subtitle: 'Get in touch', imageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=400&fit=crop', link: '/contact' },
  ];

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="min-h-screen transition-all duration-500"
      style={{
        background: gradientColor 
          ? `linear-gradient(180deg, hsl(${gradientColor}) 0%, hsl(var(--gradient-bottom)) 300px)`
          : 'linear-gradient(180deg, hsl(var(--gradient-top)) 0%, hsl(var(--gradient-bottom)) 300px)'
      }}
    >
      <Header />

      {/* Main Content */}
      <div className="px-6 pb-8 pt-6">
        <AnimatePresence mode="wait">
          {!showSeeAll && (
            <motion.div
              key="home-main"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FilterPills activeFilter={activeFilter} onFilterChange={setActiveFilter} />

              {/* Featured Section - 2x3 Grid */}
              <section className="mb-12">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredPlaylists.map((playlist, index) => (
                    <div key={index} onClick={() => navigate(playlist.link)} className="cursor-pointer">
                      <ContentCard
                        title={playlist.title}
                        subtitle={playlist.subtitle}
                        imageUrl={playlist.imageUrl}
                        suppressHoverBackground={false}
                        hoverColorHsl={playlist.colorHsl}
                        onHover={() => setColor(playlist.colorHsl)}
                        onLeave={clearColor}
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Made For You Section */}
              <section className="mb-12 group/carousel">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-text-base text-2xl font-bold">Made For {displayProfile}</h2>
                  <button onClick={() => setShowSeeAll(true)} className="text-text-subdued hover:text-text-base text-sm font-bold transition-smooth">
                    See all
                  </button>
                </div>
                <div className="relative">
                  <div 
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {madeForYouItems.map((item, index) => (
                      <div key={index} className="flex-none w-[calc(25%-12px)] cursor-pointer" onClick={() => navigate(item.link)}>
                        <ContentCard
                          title={item.title}
                          subtitle={item.subtitle}
                          imageUrl={item.imageUrl}
                          size="large"
                          suppressHoverBackground
                          onHover={extractColor}
                          onLeave={clearColor}
                        />
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => scroll('left')}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-smooth hover:bg-black z-10"
                  >
                    <ChevronLeft size={24} className="text-white" />
                  </button>
                  <button 
                    onClick={() => scroll('right')}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-smooth hover:bg-black z-10"
                  >
                    <ChevronRight size={24} className="text-white" />
                  </button>
                </div>
              </section>
            </motion.div>
          )}

          {showSeeAll && (
            <motion.div
              key="see-all"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="min-h-[70vh]"
            >
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => setShowSeeAll(false)} className="flex items-center gap-2 text-text-subdued hover:text-text-base transition-smooth">
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>
                <h2 className="text-text-base text-2xl font-bold">Made For {displayProfile}</h2>
                <div />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {madeForYouItems.map((item, index) => (
                  <div key={index} className="cursor-pointer" onClick={() => navigate(item.link)}>
                    <ContentCard
                      title={item.title}
                      subtitle={item.subtitle}
                      imageUrl={item.imageUrl}
                      size="large"
                      suppressHoverBackground
                      onHover={extractColor}
                      onLeave={clearColor}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
