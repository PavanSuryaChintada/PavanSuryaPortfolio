import React from 'react';

/**
 * Skeleton placeholder for Player Bar
 * Matches PlayerBar.tsx layout: track info, controls, volume
 */
const SkeletonPlayerBar: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[90px] z-[100] bg-bg-elevated border-t border-border-subtle px-4 flex items-center justify-between">
      {/* Left: Track Info with Album Art */}
      <div className="flex items-center gap-4 w-[30%] min-w-[180px]">
        <div className="w-14 h-14 bg-[#282828] rounded skeleton-shimmer flex-shrink-0" />
        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-4 bg-[#282828] rounded w-32 skeleton-shimmer" />
          <div className="h-3 bg-[#282828] rounded w-24 skeleton-shimmer" />
        </div>
        <div className="w-4 h-4 bg-[#282828] rounded skeleton-shimmer flex-shrink-0" />
      </div>

      {/* Center: Player Controls */}
      <div className="flex flex-col items-center gap-2 w-[40%] max-w-[722px]">
        <div className="flex items-center gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`${i === 2 ? 'w-8 h-8 rounded-full' : 'w-4 h-4'} bg-[#282828] skeleton-shimmer`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 w-full">
          <div className="h-3 bg-[#282828] rounded w-10 skeleton-shimmer" />
          <div className="flex-1 h-1 bg-[#282828] rounded-full skeleton-shimmer" />
          <div className="h-3 bg-[#282828] rounded w-10 skeleton-shimmer" />
        </div>
      </div>

      {/* Right: Additional Controls */}
      <div className="flex items-center gap-3 w-[30%] justify-end min-w-[180px]">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-[#282828] rounded skeleton-shimmer" />
        ))}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#282828] rounded skeleton-shimmer" />
          <div className="w-24 h-1 bg-[#282828] rounded-full skeleton-shimmer" />
        </div>
      </div>
    </footer>
  );
};

export default SkeletonPlayerBar;
