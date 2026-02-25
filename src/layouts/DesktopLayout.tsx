import React, { useRef, useCallback } from 'react';
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

/** Sidebar & Right Panel: 8px radius, solid #121212, 8px gutter between sections */
const Island: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-[8px] overflow-hidden bg-[#121212] min-h-0 flex flex-col ${className}`}>
    {children}
  </div>
);

/** Center panel: 8px radius, top-to-bottom gradient (#1e1e1e → #121212) */
const CenterIsland: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="rounded-[8px] overflow-hidden min-h-0 flex flex-col bg-gradient-to-b from-[#1e1e1e] to-[#121212]">
    {children}
  </div>
);

const FOOTER_HEIGHT_PX = 80;
const GUTTER_PX = 8;

const SCROLLBAR_VISIBLE_MS = 1500;

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children, isLoading = false }) => {
  const mainRef = useRef<HTMLElement>(null);
  const scrollbarTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onMainScroll = useCallback(() => {
    const el = mainRef.current;
    if (!el) return;
    el.classList.add('scrollbar-visible');
    if (scrollbarTimeoutRef.current) clearTimeout(scrollbarTimeoutRef.current);
    scrollbarTimeoutRef.current = setTimeout(() => {
      el.classList.remove('scrollbar-visible');
      scrollbarTimeoutRef.current = null;
    }, SCROLLBAR_VISIBLE_MS);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col bg-[#000000]">
      {/* Top bar: fixed header, solid black */}
      <Header />
      {/* 8px gutter on all sides: pt/px = 8px; pb = 8px gap above footer + footer height so island bottom corners are visible */}
      <div
        className="flex-1 min-h-0 flex flex-col"
        style={{
          paddingTop: GUTTER_PX,
          paddingLeft: GUTTER_PX,
          paddingRight: GUTTER_PX,
          paddingBottom: FOOTER_HEIGHT_PX,
        }}
      >
        <div className="grid flex-1 min-h-0 grid-cols-[260px_1fr_320px] gap-2 lg:grid-cols-[60px_1fr] xl:grid-cols-[260px_1fr_320px]" style={{ gap: GUTTER_PX }}>
          {/* Left island: Your Library / Sidebar */}
          <Island>
            {isLoading ? <SkeletonLeftSidebar /> : <Sidebar />}
          </Island>

          {/* Center island: Main content with gradient */}
          <CenterIsland>
            <main
              ref={mainRef}
              data-scroll-container="main"
              className="spotify-scroll flex-1 min-h-0 flex flex-col overflow-y-scroll pb-20"
              onScroll={onMainScroll}
            >
              <div className="flex-1">{children}</div>
              {!isLoading && (
                <div className="px-6 pb-12 pt-10">
                  <Footer />
                </div>
              )}
            </main>
          </CenterIsland>

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
