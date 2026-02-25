import React from 'react';
import { Trophy, Award as AwardIcon, Medal } from 'lucide-react';
import BackButton from '@/components/ui/BackButton';

const Awards: React.FC = () => {

  const awards = [
    {
      title: 'District Declamation 1st Prize',
      event: 'Department of Youth Services, Srikakulam (Sep 2024)',
      icon: Trophy,
      level: 'Gold'
    },
    {
      title: 'State Declamation 1st Prize',
      event: 'Department of Youth Services, Andhra Pradesh (Dec 2022)',
      icon: Trophy,
      level: 'Gold'
    },
    {
      title: 'National Declamation (NYF) Participant',
      event: 'National Youth Festival 2024, Nashik, Maharashtra',
      icon: Medal,
      level: 'National'
    },
    {
      title: 'Declamation 3rd Prize',
      event: 'NYKS Srikakulam - Selected to Nationals (Jun 2023)',
      icon: AwardIcon,
      level: 'Bronze'
    },
    {
      title: 'PPT First Prize',
      event: 'Techniverse 2k24',
      icon: Trophy,
      level: 'Gold'
    },
    {
      title: '24-Hour Nonstop Coding Challenge',
      event: 'First year engineering - Motivated 10+ peers',
      icon: Medal,
      level: 'Achievement'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-base">
      <div className="px-6 pb-8 pt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-text-base text-4xl font-bold">Honors & Awards</h1>
            <BackButton />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
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
                      <div className="inline-block px-2 py-1 bg-spotify-green/10 rounded text-spotify-green text-xs font-medium mb-2">
                        {award.level}
                      </div>
                      <h3 className="text-text-base text-lg font-bold mb-1">{award.title}</h3>
                      <p className="text-text-subdued text-sm">{award.event}</p>
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

export default Awards;