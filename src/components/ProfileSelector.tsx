import React, { useState } from 'react';
import { Briefcase, Eye, Code, Mountain } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

interface ProfileCardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col items-center justify-center bg-bg-card-hover rounded-lg cursor-pointer transition-smooth p-6 aspect-[3/4] max-w-[200px] w-full
      ring-1 ring-border-subtle hover:ring-2 hover:ring-spotify-green/60 focus-visible:ring-2 focus-visible:ring-spotify-green outline-none
      hover:shadow-[0_0_24px_0_hsl(var(--spotify-green)/0.35)] hover:scale-[1.06] hover:-translate-y-1"
    >
      <div className="text-text-base group-hover:text-spotify-green transition-smooth mb-4 scale-150">
        {icon}
      </div>
      <h3 className="text-text-base group-hover:text-spotify-green transition-smooth font-semibold text-lg text-center">{title}</h3>
    </div>
  );
};

const ProfileSelector: React.FC = () => {
  const { setSelectedProfile } = useAppContext();
  const [isExiting, setIsExiting] = useState(false);

  const handleProfileSelect = (profile: 'recruiter' | 'stalker' | 'developer' | 'adventurer') => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedProfile(profile);
    }, 400);
  };

  const profiles = [
    {
      id: 'recruiter' as const,
      title: 'Recruiter',
      icon: <Briefcase size={48} />,
    },
    {
      id: 'stalker' as const,
      title: 'Stalker',
      icon: <Eye size={48} />,
    },
    {
      id: 'developer' as const,
      title: 'Developer',
      icon: <Code size={48} />,
    },
    {
      id: 'adventurer' as const,
      title: 'Adventurer',
      icon: <Mountain size={48} />,
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-base transition-smooth-400 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="text-text-base font-bold mb-[5vh] text-center px-4" style={{ fontSize: 'clamp(32px, 3.5vw, 56px)', letterSpacing: '-0.04em' }}>
        Choose Your Experience
      </h1>
      <div className="flex gap-[2vw] justify-center px-4 max-w-6xl">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            title={profile.title}
            icon={profile.icon}
            onClick={() => handleProfileSelect(profile.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileSelector;
