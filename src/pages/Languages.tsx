import React from 'react';
import Header from '@/components/desktop/Header';
import { Languages as LanguagesIcon } from 'lucide-react';
import BackButton from '@/components/ui/BackButton';

const Languages: React.FC = () => {

  const languages = [
    {
      language: 'Telugu',
      proficiency: 'Native or Bilingual',
      level: 100
    },
    {
      language: 'English',
      proficiency: 'Professional Working',
      level: 85
    }
  ];

  return (
    <div className="min-h-screen bg-bg-base">
      <Header />
      
      <div className="px-6 pb-8 pt-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-text-base text-4xl font-bold">Languages</h1>
            <BackButton />
          </div>

          <div className="space-y-6">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className="bg-bg-card rounded-lg p-6 border border-bg-highlight hover:border-spotify-green/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-spotify-green/10 flex items-center justify-center group-hover:bg-spotify-green/20 transition-colors">
                    <LanguagesIcon className="text-spotify-green" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-text-base text-xl font-bold mb-2">{lang.language}</h3>
                    <p className="text-text-subdued text-sm mb-3">{lang.proficiency}</p>
                    <div className="w-full bg-bg-highlight rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-spotify-green rounded-full transition-all"
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;