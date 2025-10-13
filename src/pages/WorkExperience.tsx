import React from 'react';
import Header from '@/components/desktop/Header';
import { Briefcase, Code, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WorkExperience: React.FC = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      title: 'Web Developer / AI Solutions Intern',
      company: 'ScoMedia',
      period: 'Aug 2025 - Present',
      icon: Code,
      description: 'Developing AI-powered web solutions and implementing modern web technologies.'
    },
    {
      title: 'Growth Intern / Zonal Head',
      company: 'Student Tribe',
      period: 'July 2025 - Present',
      icon: Users,
      description: 'Leading regional growth initiatives and managing student engagement programs.'
    },
    {
      title: 'Web Developer',
      company: 'MOONS',
      period: 'June 2024 - Aug 2025',
      icon: Code,
      description: 'Built responsive web applications and maintained existing codebases.'
    },
    {
      title: 'Research And Development Intern',
      company: 'RGUKT',
      period: 'Dec 2024 - Feb 2025',
      icon: BookOpen,
      description: 'Conducted research on emerging technologies and developed proof-of-concept projects.'
    },
  ];

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />
      
      <div className="px-6 pb-8 pt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-text-base text-4xl font-bold">Work Experience</h1>
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="border-spotify-green text-spotify-green hover:bg-spotify-green hover:text-black"
            >
              Back
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div 
                  key={index}
                  className="bg-bg-card rounded-lg p-6 border border-bg-highlight hover:border-spotify-green/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-spotify-green/10 flex items-center justify-center group-hover:bg-spotify-green/20 transition-colors">
                      <Icon className="text-spotify-green" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-text-base text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-spotify-green text-sm font-medium mb-2">{exp.company}</p>
                      <p className="text-text-subdued text-sm mb-3">{exp.period}</p>
                      <p className="text-text-base text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;