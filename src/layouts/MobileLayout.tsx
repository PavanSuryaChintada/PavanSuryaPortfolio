import React from 'react';
import MiniPlayer from '@/components/mobile/MiniPlayer';
import BottomNav from '@/components/mobile/BottomNav';
import MobileHeader from '@/components/mobile/MobileHeader';

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full pb-[150px]">
      <MobileHeader />
      <main className="px-4 pt-4">
        {children}
      </main>
      <MiniPlayer />
      <BottomNav />
    </div>
  );
};

export default MobileLayout;
