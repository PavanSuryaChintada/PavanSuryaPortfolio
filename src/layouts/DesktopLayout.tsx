import React from 'react';
import Sidebar from '@/components/desktop/Sidebar';
import PlayerBar from '@/components/desktop/PlayerBar';
import RightSidebar from '@/components/desktop/RightSidebar';
import Footer from '@/components/Footer';

interface DesktopLayoutProps {
  children: React.ReactNode;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-col bg-bg-base">
      {/* Responsive three-column grid layout */}
      <div className="grid flex-1 min-h-0 grid-cols-[260px_1fr_320px] overflow-hidden lg:grid-cols-[60px_1fr] xl:grid-cols-[260px_1fr_320px]">
        <Sidebar />
        <main
          data-scroll-container="main"
          className="col-start-2 flex flex-col overflow-y-auto pb-[90px]"
        >
          <div className="flex-1">{children}</div>
          <div className="px-6 pb-12 pt-10">
            <Footer />
          </div>
        </main>
        <RightSidebar />
      </div>
      <PlayerBar />
    </div>
  );
};

export default DesktopLayout;
