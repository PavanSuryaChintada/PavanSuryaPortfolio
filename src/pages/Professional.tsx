import React, { useState } from 'react';
import Header from '@/components/desktop/Header';
import { Briefcase, Users, Code, Award, Megaphone, BookOpen, Trophy } from 'lucide-react';

interface TimelineEvent {
  title: string;
  organization: string;
  dateRange: string;
  category: 'all' | 'college-work';
  icon: any;
}

const Professional: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'college-work'>('all');

  const timelineEvents: TimelineEvent[] = [
    { title: 'Web Developer / AI Solutions Intern', organization: 'ScoMedia', dateRange: 'Aug 2025 - Present', category: 'all', icon: Code },
    { title: 'Growth Intern / Zonal Head', organization: 'Student Tribe', dateRange: 'July 2025 - Present', category: 'all', icon: Users },
    { title: 'Web Developer', organization: 'MOONS', dateRange: 'June 2024 - Aug 2025', category: 'all', icon: Code },
    { title: 'Research And Development Intern', organization: 'RGUKT', dateRange: 'Dec 2024 - Feb 2025', category: 'college-work', icon: BookOpen },
    { title: 'Public Relations Manager', organization: 'SGC-RGUKT', dateRange: 'May 2024 - Apr 2025', category: 'college-work', icon: Megaphone },
    { title: 'General Secretary', organization: 'Digital Literacy Club', dateRange: 'July 2024 - Sep 2024', category: 'college-work', icon: Award },
    { title: 'Executive Member', organization: 'Digital Literacy Club', dateRange: 'Jan 2024 - July 2024', category: 'college-work', icon: Users },
    { title: 'National Declamation Participant', organization: 'NYF 2024', dateRange: '2024', category: 'college-work', icon: Trophy },
    { title: 'Executive Member', organization: 'Electronics Club', dateRange: 'Sep 2023 - July 2024', category: 'college-work', icon: Users },
    { title: 'Student Ambassador', organization: 'StudyWithUs', dateRange: 'Dec 2022 - Apr 2023', category: 'college-work', icon: Award },
    { title: 'Incharge', organization: 'English Literary Club', dateRange: 'Oct 2022 - June 2023', category: 'college-work', icon: BookOpen },
    { title: 'Student Teaching (C Language)', organization: 'RGUKT', dateRange: 'Oct 2022 - Dec 2022', category: 'college-work', icon: BookOpen },
    { title: 'Volunteer', organization: 'English Literary Club', dateRange: 'July 2022 - Oct 2022', category: 'college-work', icon: Users },
    { title: 'National Declamation Participant', organization: 'NYF 2022 & 2023', dateRange: '2022-2023', category: 'college-work', icon: Trophy },
  ];

  const filteredEvents = activeFilter === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === 'college-work');

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />
      
      <div className="px-6 pb-8 pt-6">
        {/* Filter Pills */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
              activeFilter === 'all'
                ? 'bg-text-base text-bg-base'
                : 'bg-bg-elevated text-text-base hover:bg-bg-card'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('college-work')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
              activeFilter === 'college-work'
                ? 'bg-text-base text-bg-base'
                : 'bg-bg-elevated text-text-base hover:bg-bg-card'
            }`}
          >
            College & Work
          </button>
        </div>

        <div className="relative max-w-7xl mx-auto py-12">
          {/* Central Timeline Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--spotify-green))" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(var(--spotify-green))" stopOpacity="0.6" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main vertical timeline with angular turns */}
            <path
              d="M 512 80 L 512 250 L 420 350 L 420 550 L 550 680 L 550 980 L 450 1100 L 450 1400"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              className="drop-shadow-[0_0_10px_hsl(var(--spotify-green))]"
            />
            
            {/* Timeline nodes */}
            <circle cx="512" cy="80" r="20" fill="hsl(var(--bg-card))" stroke="hsl(var(--spotify-green))" strokeWidth="3" />
            {filteredEvents.map((_, index) => {
              const yPositions = [180, 280, 380, 480, 580, 680, 780, 880, 980, 1080, 1180, 1280, 1380];
              const xPositions = [512, 420, 420, 420, 550, 550, 550, 550, 450, 450, 450, 450, 450];
              return (
                <circle 
                  key={index} 
                  cx={xPositions[index] || 450} 
                  cy={yPositions[index] || 80 + (index * 100)} 
                  r="12" 
                  fill="hsl(var(--spotify-green))" 
                  stroke="hsl(var(--spotify-green))" 
                  strokeWidth="3" 
                />
              );
            })}
            <circle cx="450" cy="1400" r="20" fill="hsl(var(--bg-card))" stroke="hsl(var(--spotify-green))" strokeWidth="3" />
          </svg>

          {/* Timeline Content Cards */}
          <div className="relative" style={{ minHeight: `${filteredEvents.length * 120 + 200}px` }}>
            {/* Start Node */}
            <div className="absolute" style={{ top: '40px', left: '50%', transform: 'translateX(-50%)' }}>
              <div className="flex items-center gap-4">
                <span className="text-spotify-green text-lg font-bold">2022</span>
                <div className="w-12 h-12 rounded-full border-2 border-spotify-green bg-bg-card flex items-center justify-center">
                  <Plus />
                </div>
                <span className="text-spotify-green text-lg font-bold">Start</span>
              </div>
            </div>

            {/* Event Cards */}
            {filteredEvents.map((event, index) => {
              const Icon = event.icon;
              const topPositions = [140, 240, 340, 440, 640, 740, 840, 940, 1040, 1140, 1240, 1340, 1440];
              const isLeft = index % 2 === 0;
              const leftPosition = isLeft ? '50px' : '580px';
              
              return (
                <div 
                  key={index} 
                  className="absolute" 
                  style={{ 
                    top: `${topPositions[index] || 140 + (index * 100)}px`, 
                    left: leftPosition, 
                    width: '420px' 
                  }}
                >
                  <div className="bg-bg-card/80 backdrop-blur-sm border-2 border-spotify-green/50 rounded-2xl p-5 shadow-lg hover:border-spotify-green transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="text-spotify-green" size={20} />
                          <h3 className="text-text-base font-bold text-sm">{event.title}</h3>
                        </div>
                        <p className="text-text-base text-xs mb-1">{event.organization}</p>
                        <p className="text-text-subdued text-xs">{event.dateRange}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End Node */}
            <div className="absolute" style={{ top: `${filteredEvents.length * 120 + 100}px`, left: '50%', transform: 'translateX(-50%)' }}>
              <div className="flex items-center gap-4">
                <span className="text-spotify-green text-lg font-bold">2025</span>
                <div className="w-12 h-12 rounded-full border-2 border-spotify-green bg-bg-card flex items-center justify-center">
                  <Pause />
                </div>
                <span className="text-spotify-green text-lg font-bold">Present</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Icons used
const Plus = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-spotify-green">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Pause = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-spotify-green">
    <rect x="6" y="4" width="4" height="16" rx="1"></rect>
    <rect x="14" y="4" width="4" height="16" rx="1"></rect>
  </svg>
);

export default Professional;