import React from 'react';
import Sidebar from '@/components/desktop/Sidebar';
import PlayerBar from '@/components/desktop/PlayerBar';
import RightSidebar from '@/components/desktop/RightSidebar';

interface DesktopLayoutProps {
  children: React.ReactNode;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-bg-base">
      {/* Responsive three-column grid layout */}
      <div className="grid grid-cols-[260px_1fr_320px] lg:grid-cols-[60px_1fr] xl:grid-cols-[260px_1fr_320px] min-h-screen">
        <Sidebar />
        <main className="col-start-2 pb-[90px] overflow-y-auto">
          {children}
        </main>
        <RightSidebar />
      </div>
      <PlayerBar />
    </div>
  );
};

export default DesktopLayout;
