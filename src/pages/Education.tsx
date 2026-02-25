import React from 'react';
import { GraduationCap, Book, Award } from 'lucide-react';
import BackButton from '@/components/ui/BackButton';

const Education: React.FC = () => {

  const educationData = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering (ECE)',
      institution: 'RGUKT-IIIT Srikakulam, Srikakulam',
      period: '2023 - 2027',
      icon: GraduationCap,
      description: 'Pursuing B.Tech with 7.8 CGPA. Focus on advanced engineering concepts, IoT, and embedded systems.'
    },
    {
      degree: 'Industry Ready Certification in Full-Stack Development',
      institution: 'NxtWave Disruptive Technologies',
      period: 'Aug 2023 - Present',
      icon: Award,
      description: 'Comprehensive full-stack development program covering MERN stack, REST APIs, and modern web technologies.'
    },
    {
      degree: 'Intermediate (MBiPC)',
      institution: 'RGUKT-IIIT Srikakulam, Srikakulam',
      period: '2021 - 2023',
      icon: Book,
      description: 'Pre-university course in science and mathematics. 9.12 CGPA.'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'ZPHS Gundugolanu, Eluru',
      period: '2020 - 2021',
      icon: Book,
      description: 'Secondary school education with 97.17% distinction.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-base">
      <div className="px-6 pb-8 pt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-text-base text-4xl font-bold">Education</h1>
            <BackButton />
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