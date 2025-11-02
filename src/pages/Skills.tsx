import React, { useState } from 'react';
import Header from '@/components/desktop/Header';
import { Play, Clock, Code2, Atom, Cloud, Container, Cog, ChevronUp, ChevronDown, ArrowLeft, Check, ListMusic, LayoutGrid } from 'lucide-react';
import ActionBar from '@/components/ActionBar';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface SkillData {
  id: number;
  icon: React.ReactNode;
  skill: string;
  subtitle: string;
  category: string;
  experience: string;
  progress: number;
}

type SortKey = 'id' | 'skill' | 'category' | 'experience' | 'progress';
type SortOrder = 'asc' | 'desc';

const Skills: React.FC = () => {
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [selectedSkill, setSelectedSkill] = useState<SkillData | null>(null);
  const [view, setView] = useState<'list' | 'compact'>('list');
  const [showViewMenu, setShowViewMenu] = useState(false);
  const [displayedSkills, setDisplayedSkills] = useState<SkillData[]>([]);
  const [isShuffled, setIsShuffled] = useState(false);

  // Initialize displayedSkills with skillsData
  React.useEffect(() => {
    setDisplayedSkills([...skillsData]);
  }, []);

  const handleShuffleToggle = () => {
    if (isShuffled) {
      // Reset to original order
      setDisplayedSkills([...skillsData]);
      setIsShuffled(false);
    } else {
      // Shuffle the skills
      const shuffled = [...skillsData].sort(() => Math.random() - 0.5);
      setDisplayedSkills(shuffled);
      setIsShuffled(true);
    }
  };

  const skillsData: SkillData[] = [
    { id: 1, icon: <Code2 className="w-8 h-8 text-blue-400" />, skill: 'Python', subtitle: 'Anirudh Raviguage', category: 'Backend', experience: '1 Year', progress: 20 },
    { id: 2, icon: <Atom className="w-8 h-8 text-cyan-400" />, skill: 'React', subtitle: 'Anirudh Ravichan...', category: 'Backend', experience: '2 Years', progress: 40 },
    { id: 3, icon: <Cog className="w-8 h-8 text-cyan-400" />, skill: 'React', subtitle: 'Programming Language', category: 'Backend', experience: '2 Years', progress: 40 },
    { id: 4, icon: <Atom className="w-8 h-8 text-cyan-400" />, skill: 'React', subtitle: 'Anirudh Framework', category: 'Frontend', experience: '2 Years', progress: 40 },
    { id: 5, icon: <Cloud className="w-8 h-8 text-orange-400" />, skill: 'AWS', subtitle: 'Thaman S, Silamb...', category: 'Expert', experience: '2+ Years', progress: 50 },
    { id: 6, icon: <Container className="w-8 h-8 text-blue-500" />, skill: 'Docker', subtitle: 'Anirudh Ravichan...', category: 'Advrend', experience: '8 Years', progress: 100 },
    { id: 7, icon: <Container className="w-8 h-8 text-green-500" />, skill: 'EyOps', subtitle: 'Dagrend', category: 'Devops', experience: '7 Years', progress: 90 },
  ];

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = [...displayedSkills].sort((a, b) => {
    if (!sortKey) return 0;
    
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    const aString = String(aValue);
    const bString = String(bValue);
    return sortOrder === 'asc' 
      ? aString.localeCompare(bString)
      : bString.localeCompare(aString);
  });

  const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
    if (sortKey !== columnKey) return null;
    return sortOrder === 'asc' ? <ChevronUp className="w-4 h-4 inline ml-1" /> : <ChevronDown className="w-4 h-4 inline ml-1" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1f1f1f] to-[#121212]">
      <Header />
      <div className="relative z-10 px-8 py-6">
        {/* Expertise Header with two columns */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col">
            {/* Two-column layout */}
            <div className="flex gap-6">
              {/* Left column - Icon */}
              <div className="w-48 flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-[#1DB954] to-[#1a5b3a] shadow-2xl rounded-md flex items-center justify-center">
                  <Code2 className="w-24 h-24 text-white" />
                </div>
              </div>
              
              {/* Right column - Text content */}
              <div className="flex-1">
                <span className="text-xs font-semibold text-white/70 tracking-widest">SKILLS & EXPERTISE</span>
                <h1 className="text-7xl font-bold text-white mt-2 mb-4 tracking-tight">My Expertise</h1>
                <div className="flex items-center">
                  <div className="w-10 h-1 bg-[#1DB954] mr-2"></div>
                  <span className="text-sm font-medium text-[#1DB954] tracking-wider">MY SKILLS</span>
                </div>
                <p className="text-white/70 text-sm mt-2 max-w-2xl leading-relaxed">
                  A collection of my technical skills and expertise across various technologies and frameworks that I've mastered over the years.
                </p>
              </div>
            </div>
            
            {/* Action Bar - Full width below both columns */}
            <div className="mt-8 w-full relative">
              <ActionBar 
                onViewToggle={() => setShowViewMenu(!showViewMenu)}
                currentView={view}
                isShuffled={isShuffled}
                onShuffleToggle={handleShuffleToggle}
              />
              
              {/* View Dropdown Menu */}
              {showViewMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-[#282828] rounded-md shadow-2xl z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-[#3e3e3e]">
                    <h3 className="text-white text-sm font-semibold">View as</h3>
                  </div>
                  <div 
                    className="px-4 py-3 hover:bg-[#3e3e3e] cursor-pointer flex items-center justify-between"
                    onClick={() => {
                      setView('list');
                      setShowViewMenu(false);
                    }}
                  >
                    <div className="flex items-center">
                      <ListMusic className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-white text-sm">List</span>
                    </div>
                    {view === 'list' && <Check className="w-4 h-4 text-spotify-green" />}
                  </div>
                  <div 
                    className="px-4 py-3 hover:bg-[#3e3e3e] cursor-pointer flex items-center justify-between"
                    onClick={() => {
                      setView('compact');
                      setShowViewMenu(false);
                    }}
                  >
                    <div className="flex items-center">
                      <LayoutGrid className="w-4 h-4 mr-3 text-gray-400" />
                      <span className="text-white text-sm">Compact</span>
                    </div>
                    {view === 'compact' && <Check className="w-4 h-4 text-spotify-green" />}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-0 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {!selectedSkill && view === 'list' && (
              <motion.div
                key="skills-list"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-bg-base rounded-lg overflow-hidden"
              >
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-bg-highlight hover:bg-transparent">
                      <TableHead 
                        className="text-text-subdued font-semibold cursor-pointer hover:text-spotify-green transition-colors w-16"
                        onClick={() => handleSort('id')}
                      >
                        <span className={sortKey === 'id' ? 'text-spotify-green' : ''}>
                          #<SortIcon columnKey="id" />
                        </span>
                      </TableHead>
                      <TableHead 
                        className="text-text-subdued font-semibold cursor-pointer hover:text-spotify-green transition-colors"
                        onClick={() => handleSort('skill')}
                      >
                        <span className={sortKey === 'skill' ? 'text-spotify-green border-b-2 border-spotify-green pb-2' : ''}>
                          Skill/Technology<SortIcon columnKey="skill" />
                        </span>
                      </TableHead>
                      <TableHead 
                        className="text-text-subdued font-semibold cursor-pointer hover:text-spotify-green transition-colors"
                        onClick={() => handleSort('category')}
                      >
                        <span className={sortKey === 'category' ? 'text-spotify-green' : ''}>
                          Category<SortIcon columnKey="category" />
                        </span>
                      </TableHead>
                      <TableHead 
                        className="text-text-subdued font-semibold cursor-pointer hover:text-spotify-green transition-colors"
                        onClick={() => handleSort('experience')}
                      >
                        <span className={sortKey === 'experience' ? 'text-spotify-green' : ''}>
                          Years of Experience<SortIcon columnKey="experience" />
                        </span>
                      </TableHead>
                      <TableHead className="text-text-subdued font-semibold w-48">
                        <Clock className="w-5 h-5" />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedData.map((skill) => (
                      <TableRow 
                        key={skill.id} 
                        onClick={() => setSelectedSkill(skill)}
                        className="border-b border-bg-highlight hover:bg-[#282828] transition-colors cursor-pointer group"
                      >
                        <TableCell className="text-text-subdued font-medium">
                          {skill.id}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                              {skill.icon}
                            </div>
                            <div>
                              <div className="text-text-base font-semibold">{skill.skill}</div>
                              <div className="text-text-subdued text-sm">{skill.subtitle}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-text-subdued">
                          {skill.category}
                        </TableCell>
                        <TableCell className="text-text-subdued">
                          {skill.experience}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <span className="text-text-subdued text-sm min-w-[3rem]">
                              {skill.experience.includes('Year') ? skill.experience.replace(' Experience', '').replace('Years', ':00').replace('Year', ':00').replace('2+', '2') : '2:00'}
                            </span>
                            <Progress 
                              value={skill.progress} 
                              className="h-1 flex-1 bg-bg-highlight"
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            )}

            {view === 'compact' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-[#121212] rounded-lg overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-[#282828]">
                  <div className="grid grid-cols-12 gap-4 text-xs text-[#b3b3b3] font-medium">
                    <div className="col-span-1">#</div>
                    <div className="col-span-5">TITLE</div>
                    <div className="col-span-4">CATEGORY</div>
                    <div className="col-span-2 flex justify-end">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-[#282828]">
                  {skillsData.map((skill, index) => (
                    <div 
                      key={skill.id}
                      className="px-6 py-3 hover:bg-[#282828] group cursor-pointer transition-colors"
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-1 text-[#b3b3b3] text-sm group-hover:text-white">
                          {index + 1}
                        </div>
                        <div className="col-span-5 flex items-center">
                          <div className="w-10 h-10 bg-[#282828] rounded flex items-center justify-center mr-3">
                            {React.cloneElement(skill.icon as React.ReactElement, { 
                              className: 'w-5 h-5 text-white' 
                            })}
                          </div>
                          <div>
                            <div className="text-white font-medium group-hover:text-spotify-green">
                              {skill.skill}
                            </div>
                            <div className="text-xs text-[#b3b3b3] group-hover:text-white">
                              {skill.subtitle}
                            </div>
                          </div>
                        </div>
                        <div className="col-span-4 text-sm text-[#b3b3b3] group-hover:text-white">
                          {skill.category}
                        </div>
                        <div className="col-span-2 text-right text-sm text-[#b3b3b3] group-hover:text-white">
                          {skill.experience}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {selectedSkill && (
              <motion.div
                key="skill-detail"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-bg-base rounded-xl border border-bg-highlight p-6"
              >
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="flex items-center gap-2 text-text-subdued hover:text-text-base transition-colors mb-4"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-bg-highlight flex items-center justify-center">
                    {selectedSkill.icon}
                  </div>
                  <div>
                    <div className="text-text-base text-2xl font-bold">{selectedSkill.skill}</div>
                    <div className="text-text-subdued">{selectedSkill.category} • {selectedSkill.experience}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-text-subdued text-sm min-w-[3rem]">
                      {selectedSkill.experience.includes('Year') ? selectedSkill.experience.replace(' Experience', '').replace('Years', ':00').replace('Year', ':00').replace('2+', '2') : '2:00'}
                    </span>
                    <Progress value={selectedSkill.progress} className="h-1 flex-1 bg-bg-highlight" />
                  </div>
                </div>
                <div className="text-text-subdued text-sm">
                  Detailed overview coming soon. This section can include proficiency notes, recent projects, and resources.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Skills;
