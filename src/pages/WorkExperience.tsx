import React from 'react';
import { Briefcase, Code, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WorkExperience: React.FC = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      title: 'Web Developer / AI Solutions Intern',
      company: 'Scomedia (Yashray Foundation)',
      period: 'Aug 2025 - Jan 2026',
      icon: Code,
      description: 'Design and maintain web platforms, support AI-driven workflow automation, and collaborate with remote teams in a flexible work environment.'
    },
    {
      title: 'Growth Intern / Zonal Head',
      company: 'Student Tribe',
      period: 'July 2025 - Present',
      icon: Users,
      description: 'Advancing mission to empower students through curated opportunities, practical industry exposure, and collaborative growth. Bridge academic learning and real-world applications.'
    },
    {
      title: 'Web Developer',
      company: 'Moons - The Creative Minds',
      period: 'June 2024 - June 2025',
      icon: Code,
      description: 'Designed and developed official startup website, delivering multiple client projects across India within two weeks. Applied technical expertise for efficient, timely, high-quality execution.'
    },
    {
      title: 'Research And Development Intern',
      company: 'Rajiv Gandhi University of Knowledge Technologies, Srikakulam',
      period: 'Dec 2024 - Feb 2025',
      icon: BookOpen,
      description: 'Contributed to design and development of star-shaped cross-defected ground circular ring metamaterial microstrip patch antenna. Gained hands-on experience with HFSS software and research paper publishing.'
    },
  ];

  return (
    <div className="min-h-screen bg-bg-base">
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
                  className="bg-bg-card rounded-[6px] p-6 border border-bg-highlight hover:border-spotify-green/50 transition-all group"
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