import React, { useState } from 'react';
import Header from '@/components/desktop/Header';
import { Play, Clock, Code2, Atom, Cloud, Container, Cog, ChevronUp, ChevronDown } from 'lucide-react';
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

  const sortedData = [...skillsData].sort((a, b) => {
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
    <div className="min-h-screen bg-bg-base">
      <Header />
      <div className="px-6 pb-8 pt-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-spotify-green flex items-center justify-center">
              <Play className="w-8 h-8 text-black fill-black ml-1" />
            </div>
            <h1 className="text-text-base text-5xl font-bold">My Expertise</h1>
          </div>

          {/* Table */}
          <div className="bg-bg-base rounded-lg overflow-hidden">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
