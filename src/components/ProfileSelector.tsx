import React, { useState } from 'react';
import { Briefcase, Eye, Code, Mountain } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

/** Spotify-style logo: three curved sound wave lines */
const SpotifyStyleLogo: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
    <path d="M6 12c0 0 2-2 6-2s6 2 6 2" />
    <path d="M4 14c0 0 3-3 8-3s8 3 8 3" />
    <path d="M8 10c0 0 2-1 4-1s4 1 4 1" />
  </svg>
);

interface ExperienceButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ExperienceButton: React.FC<ExperienceButtonProps> = ({ label, icon, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full max-w-[360px] flex items-center justify-center gap-4 py-3.5 px-5 rounded-full
      bg-transparent border border-[#535353] text-[#ffffff] font-semibold text-base
      hover:border-white hover:scale-[1.02] active:scale-[0.98]
      transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
  >
    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#ffffff]" aria-hidden>
      {icon}
    </span>
    <span className="flex-1 text-center whitespace-nowrap">{label}</span>
    {/* Spacer for visual balance so text stays centered */}
    <span className="w-6 h-6 flex-shrink-0" aria-hidden />
  </button>
);

const ProfileSelector: React.FC = () => {
  const { setSelectedProfile } = useAppContext();
  const [isExiting, setIsExiting] = useState(false);

  const handleProfileSelect = (profile: 'recruiter' | 'stalker' | 'developer' | 'adventurer') => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedProfile(profile);
    }, 400);
  };

  const experiences = [
    { id: 'recruiter' as const, label: 'Continue as Recruiter', icon: <Briefcase size={24} strokeWidth={2} /> },
    { id: 'developer' as const, label: 'Continue as Developer', icon: <Code size={24} strokeWidth={2} /> },
    { id: 'adventurer' as const, label: 'Continue as Adventurer', icon: <Mountain size={24} strokeWidth={2} /> },
    { id: 'stalker' as const, label: 'Continue as Stalker', icon: <Eye size={24} strokeWidth={2} /> },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212] transition-opacity duration-400 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center w-full max-w-[360px] px-6">
        {/* Spotify-style header */}
        <SpotifyStyleLogo className="w-10 h-10 mb-8 text-[#ffffff]" />
        <h1 className="font-bold text-center mb-10 tracking-tight text-[#ffffff] whitespace-nowrap text-[2rem]" style={{ fontFamily: '"Montserrat", "Circular Std", -apple-system, sans-serif' }}>
          Welcome back
        </h1>

        {/* Stack of pill buttons */}
        <div className="flex flex-col items-center gap-3 w-full">
          {experiences.map((exp) => (
            <ExperienceButton
              key={exp.id}
              label={exp.label}
              icon={exp.icon}
              onClick={() => handleProfileSelect(exp.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSelector;
