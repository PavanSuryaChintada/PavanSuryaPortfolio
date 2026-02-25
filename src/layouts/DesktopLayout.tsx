import React from 'react';
import Header from '@/components/desktop/Header';
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

/** Modular island: rounded container with #121212, 8px radius, independent scroll */
const Island: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-lg overflow-hidden bg-[#121212] min-h-0 flex flex-col ${className}`}>
    {children}
  </div>
);

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children, isLoading = false }) => {
  return (
    <div className="flex h-screen w-full flex-col bg-[#000000]">
      {/* Top bar: fixed header, solid black */}
      <Header />
      {/* 8px gap below header, 8px horizontal padding; grid with 8px gap between islands */}
      <div className="flex-1 min-h-0 pt-2 px-2 flex flex-col">
        <div className="grid flex-1 min-h-0 grid-cols-[260px_1fr_320px] gap-2 lg:grid-cols-[60px_1fr] xl:grid-cols-[260px_1fr_320px]">
          {/* Left island: Your Library / Sidebar */}
          <Island>
            {isLoading ? <SkeletonLeftSidebar /> : <Sidebar />}
          </Island>

          {/* Center island: Main content */}
          <Island>
            <main
              data-scroll-container="main"
              className="flex-1 min-h-0 flex flex-col overflow-y-auto pb-[90px]"
            >
              <div className="flex-1">{children}</div>
              {!isLoading && (
                <div className="px-6 pb-12 pt-10">
                  <Footer />
                </div>
              )}
            </main>
          </Island>

          {/* Right island: Profile panel */}
          <Island>
            {isLoading ? <SkeletonRightSidebar /> : <RightSidebar />}
          </Island>
        </div>
      </div>

      {/* Player Bar */}
      {isLoading ? <SkeletonPlayerBar /> : <PlayerBar />}
    </div>
  );
};

export default DesktopLayout;
