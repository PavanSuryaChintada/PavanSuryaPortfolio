import React from 'react';
import Header from '@/components/desktop/Header';
import { Award, Code, Cog, FileSpreadsheet, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Certifications: React.FC = () => {
  const navigate = useNavigate();

  const certifications = [
    {
      title: 'Responsive Web Design using Flexbox',
      issuer: 'NxtWave CCBP Academy',
      icon: Code,
      category: 'Web Development'
    },
    {
      title: 'Build Your Own Responsive Website',
      issuer: 'NxtWave CCBP Academy',
      icon: Code,
      category: 'Web Development'
    },
    {
      title: 'Build Your Own Dynamic Web Application',
      issuer: 'NxtWave CCBP Academy',
      icon: Code,
      category: 'Web Development'
    },
    {
      title: 'Developer Foundations',
      issuer: 'NxtWave CCBP Academy',
      icon: Code,
      category: 'Web Development'
    },
    {
      title: 'Introduction to Databases',
      issuer: 'NxtWave CCBP Academy',
      icon: Code,
      category: 'Databases'
    },
    {
      title: 'Automation Workflow Workshop',
      issuer: 'CCBP Academy',
      icon: Cog,
      category: 'Automation'
    },
    {
      title: 'Dynamic Website Creation',
      issuer: 'CCBP Academy',
      icon: Code,
      category: 'Web Development'
    },
    {
      title: 'Advanced JavaScript',
      issuer: 'CCBP Academy',
      icon: Code,
      category: 'Web Development'
    },
    {
      title: 'Node.js Development',
      issuer: 'CCBP Academy',
      icon: Code,
      category: 'Backend'
    },
    {
      title: 'Microsoft Excel Beginner to Expert',
      issuer: 'Udemy',
      icon: FileSpreadsheet,
      category: 'Productivity'
    },
    {
      title: 'Scuba Diving',
      issuer: 'Ministry of Youth Affairs & Sports, Govt. of India',
      icon: Waves,
      category: 'Personal Development'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />
      
      <div className="px-6 pb-8 pt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-text-base text-4xl font-bold">Certifications</h1>
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="border-spotify-green text-spotify-green hover:bg-spotify-green hover:text-black"
            >
              Back
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={index}
                  className="bg-bg-card rounded-lg p-6 border border-bg-highlight hover:border-spotify-green/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-spotify-green/10 flex items-center justify-center group-hover:bg-spotify-green/20 transition-colors">
                      <Icon className="text-spotify-green" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-2 py-1 bg-spotify-green/10 rounded text-spotify-green text-xs font-medium mb-2">
                        {cert.category}
                      </div>
                      <h3 className="text-text-base text-lg font-bold mb-1">{cert.title}</h3>
                      <p className="text-text-subdued text-sm">{cert.issuer}</p>
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

export default Certifications;