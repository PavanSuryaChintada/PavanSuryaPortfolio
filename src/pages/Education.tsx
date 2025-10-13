import React from 'react';
import Header from '@/components/desktop/Header';
import { GraduationCap, Book, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Education: React.FC = () => {
  const navigate = useNavigate();

  const educationData = [
    {
      degree: 'Bachelor of Technology',
      institution: 'RGUKT Srikakulam',
      period: 'Aug 2023 - July 2027',
      icon: GraduationCap,
      description: 'Pursuing B.Tech with focus on advanced engineering concepts and practical applications.'
    },
    {
      degree: 'Pre University Course',
      institution: 'RGUKT Srikakulam',
      period: 'Dec 2022 - Aug 2023',
      icon: Book,
      description: 'Foundation course in science and mathematics.'
    },
    {
      degree: "NxtWave's CCBP 4.0 Academy",
      institution: 'Online',
      period: 'Aug 2023 - Aug 2027',
      icon: Award,
      description: 'Comprehensive full-stack development program.'
    },
    {
      degree: '10th Grade',
      institution: 'Zphs Gundugolanu',
      period: 'Oct 2020 - May 2021',
      icon: Book,
      description: 'Secondary school education with distinction.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />
      
      <div className="px-6 pb-8 pt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-text-base text-4xl font-bold">Education</h1>
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="border-spotify-green text-spotify-green hover:bg-spotify-green hover:text-black"
            >
              Back
            </Button>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
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
                      <h3 className="text-text-base text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-spotify-green text-sm font-medium mb-2">{edu.institution}</p>
                      <p className="text-text-subdued text-sm mb-3">{edu.period}</p>
                      <p className="text-text-base text-sm">{edu.description}</p>
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

export default Education;