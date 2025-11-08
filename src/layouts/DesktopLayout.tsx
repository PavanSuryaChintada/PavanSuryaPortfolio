import React from 'react';
import Sidebar from '@/components/desktop/Sidebar';
import PlayerBar from '@/components/desktop/PlayerBar';
import RightSidebar from '@/components/desktop/RightSidebar';
import Footer from '@/components/Footer';
import {
  SkeletonLeftSidebar,
  SkeletonRightSidebar,
  SkeletonPlayerBar
} from '@/components/skeletons';

interface DesktopLayoutProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children, isLoading = false }) => {
  return (
    <div className="flex h-screen w-full flex-col bg-bg-base">
      {/* Responsive three-column grid layout */}
      <div className="grid flex-1 min-h-0 grid-cols-[260px_1fr_320px] overflow-hidden lg:grid-cols-[60px_1fr] xl:grid-cols-[260px_1fr_320px]">
        {/* Left Sidebar - Skeleton or Real */}
        {isLoading ? <SkeletonLeftSidebar /> : <Sidebar />}
        
        {/* Main Content Area */}
        <main
          data-scroll-container="main"
          className="col-start-2 flex flex-col overflow-y-auto pb-[90px]"
        >
          <div className="flex-1">{children}</div>
          {!isLoading && (
            <div className="px-6 pb-12 pt-10">
              <Footer />
            </div>
          )}
        </main>
        
        {/* Right Sidebar - Skeleton or Real */}
        {isLoading ? <SkeletonRightSidebar /> : <RightSidebar />}
      </div>
      
      {/* Player Bar - Skeleton or Real */}
      {isLoading ? <SkeletonPlayerBar /> : <PlayerBar />}
    </div>
  );
};

export default DesktopLayout;
