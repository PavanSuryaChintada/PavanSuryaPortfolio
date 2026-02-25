import React from 'react';
import { Code2, Boxes, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SkillsDetails: React.FC = () => {
  const navigate = useNavigate();

  const skillsCategories = [
    {
      category: 'Top Skills',
      skills: ['Tailwind CSS', 'API Keys', 'MCP'],
      icon: Zap,
      color: 'spotify-green'
    },
    {
      category: 'Programming',
      skills: ['C', 'C++', 'Python'],
      icon: Code2,
      color: 'spotify-green'
    },
    {
      category: 'Web Stack',
      skills: ['Front End (Dynamic & Responsive)', 'Backend (Node, Express)', 'SQL RDBMS'],
      icon: Boxes,
      color: 'spotify-green'
    },
    {
      category: 'Automation',
      skills: ['n8n'],
      icon: Database,
      color: 'spotify-green'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-base">
      <div className="px-6 pb-8 pt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-text-base text-4xl font-bold">Skills & Expertise</h1>
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="border-spotify-green text-spotify-green hover:bg-spotify-green hover:text-black"
            >
              Back
            </Button>
          </div>

          <div className="space-y-6">
            {skillsCategories.map((category, index) => {
              const Icon = category.icon;
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
                      <h3 className="text-text-base text-xl font-bold mb-4">{category.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-2 bg-spotify-green/10 text-text-base rounded-full text-sm font-medium hover:bg-spotify-green/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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

export default SkillsDetails;