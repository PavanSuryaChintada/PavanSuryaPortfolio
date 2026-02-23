import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/desktop/Header';
import type { LucideIcon } from 'lucide-react';
import { Briefcase, Users, Code, Award, Megaphone, BookOpen, Trophy } from 'lucide-react';

interface TimelineEvent {
  title: string;
  organization: string;
  dateRange: string;
  category: 'all' | 'college-work';
  icon: LucideIcon;
}

const Professional: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'college-work'>('all');
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardHeights, setCardHeights] = useState<number[]>([]);
  const [cardTops, setCardTops] = useState<number[]>([]);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [revealReady, setRevealReady] = useState(false);

  // Measure card heights to precisely align timeline dots to card vertical centers
  useEffect(() => {
    const measure = () => {
      const heights: number[] = [];
      const tops: number[] = [];
      cardRefs.current.forEach((el) => {
        if (el) {
          heights.push(el.getBoundingClientRect().height);
          tops.push(el.offsetTop);
        } else {
          heights.push(120);
          tops.push(0);
        }
      });
      setCardHeights(heights);
      setCardTops(tops);
      const bottoms = tops.map((t, i) => t + (heights[i] ?? 0));
      const maxBottom = bottoms.length ? Math.max(...bottoms) : 0;
      setContainerHeight(maxBottom + 40); // smaller breathing room at bottom
    };
    // measure now and on next frame for precision after layout settles
    measure();
    requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [activeFilter]);

  // Phase 1: Jump to the bottom instantly on mount
  useEffect(() => {
    const jumpToBottom = () => {
      // Use documentElement for cross-browser consistency in SPAs
      const h = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      window.scrollTo({ top: h, left: 0, behavior: 'auto' });
    };
    // Ensure layout is ready before jumping
    requestAnimationFrame(() => {
      requestAnimationFrame(jumpToBottom);
      // after jump, mark ready to start reveal animations
      setTimeout(() => setRevealReady(true), 0);
    });
  }, []);

  const timelineEvents: TimelineEvent[] = [
    { title: 'Web Developer / AI Solutions Intern', organization: 'Scomedia (Yashray Foundation)', dateRange: 'Aug 2025 - Jan 2026', category: 'all', icon: Code },
    { title: 'Growth Intern / Zonal Head', organization: 'Student Tribe', dateRange: 'July 2025 - Present', category: 'all', icon: Users },
    { title: 'Web Developer', organization: 'Moons - The Creative Minds', dateRange: 'June 2024 - June 2025', category: 'all', icon: Code },
    { title: 'Research And Development Intern', organization: 'RGUKT Srikakulam', dateRange: 'Dec 2024 - Feb 2025', category: 'college-work', icon: BookOpen },
    { title: 'Public Relations Manager', organization: 'Students Gymkhana Center (SGC) RGUKT', dateRange: 'May 2024 - Apr 2025', category: 'college-work', icon: Megaphone },
    { title: 'General Secretary', organization: 'Digital Literacy Club', dateRange: 'July 2024 - Sep 2024', category: 'college-work', icon: Award },
    { title: 'Executive Member', organization: 'Digital Literacy Club', dateRange: 'Jan 2024 - July 2024', category: 'college-work', icon: Users },
    { title: 'Executive Member', organization: 'Electronics Club, SGC RGUKT Srikakulam', dateRange: 'Sep 2023 - July 2024', category: 'college-work', icon: Users },
    { title: 'Student Ambassador', organization: 'StudyWithUs', dateRange: 'Dec 2022 - Apr 2023', category: 'college-work', icon: Award },
    { title: 'Incharge', organization: 'English Literary Club', dateRange: 'Oct 2022 - June 2023', category: 'college-work', icon: BookOpen },
    { title: 'Student Teaching (C Language)', organization: 'StudyWithUs', dateRange: 'Oct 2022 - Dec 2022', category: 'college-work', icon: BookOpen },
    { title: 'Volunteer', organization: 'English Literary Club', dateRange: 'July 2022 - Oct 2022', category: 'college-work', icon: Users },
  ];

  const filteredEvents = activeFilter === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === 'college-work');

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />
      
      <div className="px-6 pb-8 pt-6">
        {/* Filter Pills */}
        <div className="flex gap-2 mb-8 ml-4">
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

        <div
          className="relative max-w-7xl mx-auto py-12"
          style={{ minHeight: `${containerHeight}px`}}
        >
          {/* Central Timeline Path */}
          <svg key={cardHeights.join(',') + cardTops.join(',')} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
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
              d="M 512 80 L 512 250 L 420 350 L 420 550 L 550 680 L 550 980 L 450 1100 L 450 1440"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              filter="url(#glow)"
              className="drop-shadow-[0_0_10px_hsl(var(--spotify-green))]"
            />
            {/* Extend line further downward irrespective of dot position */}
            <path
              d={`M 450 1440 L 450 1610`}
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              filter="url(#glow)"
              className="drop-shadow-[0_0_10px_hsl(var(--spotify-green))]"
            />
            
            {/* Timeline nodes */}
            <circle cx="512" cy="80" r="20" fill="hsl(var(--bg-card))" stroke="hsl(var(--spotify-green))" strokeWidth="3" />
            {filteredEvents.map((ev, index) => {
              // Derive dot Y from the actual card's offsetTop + half of measured card height
              const measuredTop = cardTops[index] ?? (140 + (index * 100));
              const halfHeight = (cardHeights[index] ?? 120) / 2;
              let cy = measuredTop + halfHeight;
              // If this is the ScoMedia card, its card was moved up; keep the dot in original place
              const isScoMediaDot = (ev?.organization?.includes('Scomedia')) || (ev?.title?.includes('AI Solutions Intern'));
              if (isScoMediaDot) {
                const scoNudge = 35;
                cy += scoNudge; 
              }
              // Nudge Student Tribe dot slightly downward
              const isStudentTribeDot = ev?.title === 'Growth Intern / Zonal Head' && ev?.organization === 'Student Tribe';
              if (isStudentTribeDot) {
                cy += 40;
              }
              // Nudge MOONS dot slightly downward
              const isMoonsDot = ev?.title === 'Web Developer' && ev?.organization?.includes('Moons');
              if (isMoonsDot) {
                cy += 42;
              }
              // Keep PRM (SGC-RGUKT) dot stationary when its card is nudged up
              const isPRMDot = ev?.title === 'Public Relations Manager' && ev?.organization?.includes('SGC');
              if (isPRMDot) {
                const prmNudge = 44 // must match PRM card upward nudge below
                cy += prmNudge;
              }
              // Keep General Secretary (Digital Literacy Club) dot stationary when its card is nudged up
              const isGenSecDot = ev?.title === 'General Secretary' && ev?.organization === 'Digital Literacy Club';
              if (isGenSecDot) {
                const genSecNudge = 40; // must match General Secretary card upward nudge
                cy += genSecNudge;
              }
              // Keep Executive Member (Digital Literacy Club) dot stationary when its card is nudged up
              const isExecDLCDot = ev?.title === 'Executive Member' && ev?.organization === 'Digital Literacy Club';
              if (isExecDLCDot) {
                const execNudge = 36; // must match Exec card upward nudge
                cy += execNudge;
              }
              // Nudge Executive Member (Electronics Club) dot slightly downward
              const isExecElectronicsDot = ev?.title === 'Executive Member' && ev?.organization?.includes('Electronics');
              if (isExecElectronicsDot) {
                cy += 40;
              }
              // Nudge Student Ambassador (StudyWithUs) dot slightly downward
              const isStudentAmbDot = ev?.title === 'Student Ambassador' && ev?.organization === 'StudyWithUs';
              if (isStudentAmbDot) {
                cy += 46;
              }
              // Nudge Student Teaching (C Language) dot slightly downward
              const isStudentTeachingDot = ev?.title === 'Student Teaching (C Language)' && ev?.organization?.includes('StudyWithUs');
              if (isStudentTeachingDot) {
                cy += 40;
              }
              // Nudge Incharge (English Literary Club) dot slightly downward
              const isInchargeDot = ev?.title === 'Incharge' && ev?.organization === 'English Literary Club';
              if (isInchargeDot) {
                cy += 40;
              }
              // Nudge Volunteer (English Literary Club) dot slightly downward
              const isVolunteerDot = ev?.title === 'Volunteer' && ev?.organization === 'English Literary Club';
              if (isVolunteerDot) {
                cy += 42;
              }
              // Nudge R&D (RGUKT) dot slightly downward
              const isRandDDot = ev?.title === 'Research And Development Intern' && ev?.organization?.includes('RGUKT');
              if (isRandDDot) {
                cy += 40;
              }
              // Apply small visual bias when the timeline is diagonal (to account for stroke/glow thickness)
              if (cy > 550 && cy < 680) {
                cy -= 4; // diagonal segment between (420,550) and (550,680)
              } else if (cy > 980 && cy < 1100) {
                cy -= 4; // diagonal segment between (550,980) and (450,1100)
              }
              const xForY = (y: number) => {
                if (y <= 250) return 512;
                if (y <= 350) return 512 + (y - 250) * ((420 - 512) / (350 - 250));
                if (y <= 550) return 420;
                if (y <= 680) return 420 + (y - 550) * ((550 - 420) / (680 - 550));
                if (y <= 980) return 550;
                if (y <= 1100) return 550 + (y - 980) * ((450 - 550) / (1100 - 980));
                return 450;
              };
              const cx = xForY(cy);
              return (
                <circle 
                  key={index} 
                  cx={cx} 
                  cy={cy} 
                  r="12" 
                  fill="hsl(var(--spotify-green))" 
                  stroke="hsl(var(--spotify-green))" 
                  strokeWidth="3" 
                />
              );
            })}
            <circle cx="450" cy="1540" r="20" fill="hsl(var(--bg-card))" stroke="hsl(var(--spotify-green))" strokeWidth="3" />
          </svg>

          {/* Timeline Content Cards */}
          <div
            className="relative"
            style={{ minHeight: `${containerHeight}px`, paddingBottom: '48px' }}
          >
            {/* Start Node */}
            <div className="absolute" style={{ top: '-70px', left: '510px', transform: 'translateX(-50%)' }}>
              <div className="flex items-center gap-4">
                <span className="text-spotify-green text-lg font-bold">2025</span>
                <div className="w-12 h-12 rounded-full border-2 border-spotify-green bg-bg-card flex items-center justify-center">
                  <Plus />
                </div>
                <span className="text-spotify-green text-lg font-bold">Present</span>
              </div>
            </div>

            {/* Event Cards */}
            {filteredEvents.map((event, index) => {
              const Icon = event.icon;
              const topPositions = [140, 240, 340, 440, 640, 740, 840, 940, 1040, 1140, 1240, 1340, 1440];
              const isLeft = index % 2 === 0;
              // Nudge cards away from the center line to avoid touching it
              // Special-case adjustment: move 'Web Developer' (MOONS) slightly left
              const isMoons = event.title === 'Web Developer' && event.organization?.includes('Moons');
              // Move the two shown left cards a bit further left
              const isStudentAmbassador = event.title === 'Student Ambassador';
              const isStudentTeaching = event.title === 'Student Teaching (C Language)';
              const isScoMedia = (event.organization?.includes('Scomedia')) || (event.title?.includes('AI Solutions Intern'));
              const isStudentTribe = event.title === 'Growth Intern / Zonal Head' && event.organization === 'Student Tribe';
              const isRandD = event.title === 'Research And Development Intern' && event.organization?.includes('RGUKT');
              const isPRM = event.title === 'Public Relations Manager' && event.organization?.includes('SGC');
              const isGenSec = event.title === 'General Secretary' && event.organization === 'Digital Literacy Club';
              const isExecDLC = event.title === 'Executive Member' && event.organization === 'Digital Literacy Club';
              const isExecElec = event.title === 'Executive Member' && event.organization?.includes('Electronics');
              const isIncharge = event.title === 'Incharge' && event.organization === 'English Literary Club';
              const isVolunteer = event.title === 'Volunteer' && event.organization === 'English Literary Club';
              const leftPosition = isLeft
                ? (isScoMedia ? '170px' : (isStudentAmbassador ? '120px' : (isStudentTeaching ? '118px' : (isStudentTribe ? '8px' : (isPRM ? '216px' : (isGenSec ? '12px' : (isExecDLC ? '216px' : (isMoons ? '92px' : '20px'))))))))
                : (isMoons ? '500px' : (isStudentTribe ? '490px' : (isRandD ? '490px' : (isPRM ? '690px' : (isGenSec ? '576px' : (isExecDLC ? '670px' : (isExecElec ? '562px' : (isIncharge ? '482px' : (isVolunteer ? '486px' : '600px')))))))));
              const baseTop = topPositions[index] || 140 + (index * 100);
              const scoNudge = 40;
              const computedTop = isScoMedia ? baseTop - scoNudge : (isPRM ? baseTop - 28 : (isGenSec ? baseTop - 24 : (isExecDLC ? baseTop - 16 : baseTop)));
              
              return (
                <div 
                  ref={(el) => (cardRefs.current[index] = el)}
                  key={index} 
                  className="absolute" 
                  style={{ 
                    top: `${computedTop}px`, 
                    left: leftPosition, 
                    width: '300px' 
                  }}
                >
                  <motion.div
                    key={`card-${index}-${revealReady ? 'ready' : 'pre'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: Math.min(index * 0.12, 1.2) }}
                    className="bg-bg-card/80 backdrop-blur-sm border-2 border-spotify-green/50 rounded-2xl p-5 shadow-lg hover:border-spotify-green transition-all"
                  >
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
                  </motion.div>
                </div>
              );
            })}

            {/* End Node */}
            <div className="absolute" style={{ top: `${filteredEvents.length * 120 + 100}px`, left: '452px', transform: 'translateX(-50%)' }}>
              <div className="items-center" style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', columnGap: '1rem', alignItems: 'center', justifyItems: 'center' }}>
                <span className="text-spotify-green text-lg font-bold justify-self-end">2020</span>
                <div className="w-12 h-12 rounded-full border-2 border-spotify-green bg-bg-card flex items-center justify-center">
                  <Pause />
                </div>
                <span className="text-spotify-green text-lg font-bold justify-self-start">Start</span>
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