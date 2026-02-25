import React from 'react';

/**
 * Skeleton placeholder for Right Sidebar
 * Matches RightSidebar.tsx layout: user avatar, artist card, credits, queue
 */
const SkeletonRightSidebar: React.FC = () => {
  return (
    <aside className="w-full h-full min-h-0 bg-transparent overflow-y-auto relative p-4 lg:hidden xl:block">
      {/* User Profile Avatar skeleton */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#282828] skeleton-shimmer z-10" />

      <div className="mt-8 space-y-4">
        {/* Top Card - Artist Info skeleton */}
        <div className="bg-bg-card border border-border-subtle rounded-lg p-4">
          {/* Image skeleton */}
          <div className="aspect-square bg-[#282828] rounded-lg mb-3 skeleton-shimmer" />
          
          {/* Artist name */}
          <div className="h-6 bg-[#282828] rounded w-3/4 mb-2 skeleton-shimmer" />
          
          {/* Listeners count */}
          <div className="h-3 bg-[#282828] rounded w-1/2 mb-2 skeleton-shimmer" />
          
          {/* Description */}
          <div className="space-y-2 mb-3">
            <div className="h-3 bg-[#282828] rounded w-full skeleton-shimmer" />
            <div className="h-3 bg-[#282828] rounded w-full skeleton-shimmer" />
            <div className="h-3 bg-[#282828] rounded w-2/3 skeleton-shimmer" />
          </div>
          
          {/* Follow button */}
          <div className="h-8 bg-[#282828] rounded w-full skeleton-shimmer" />
        </div>

        {/* Credits Card skeleton */}
        <div className="bg-bg-card border border-border-subtle rounded-lg p-4">
          <div className="h-5 bg-[#282828] rounded w-20 mb-3 skeleton-shimmer" />
          
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-[#282828] skeleton-shimmer" />
            <div className="flex-1">
              <div className="h-4 bg-[#282828] rounded w-3/4 mb-2 skeleton-shimmer" />
              <div className="h-3 bg-[#282828] rounded w-1/2 skeleton-shimmer" />
            </div>
          </div>
          
          <div className="h-8 bg-[#282828] rounded w-full skeleton-shimmer" />
        </div>

        {/* Next in Queue Card skeleton */}
        <div className="bg-bg-card border border-border-subtle rounded-lg p-4">
          <div className="h-5 bg-[#282828] rounded w-32 mb-3 skeleton-shimmer" />
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-[#282828] skeleton-shimmer" />
            <div className="flex-1">
              <div className="h-4 bg-[#282828] rounded w-3/4 mb-2 skeleton-shimmer" />
              <div className="h-3 bg-[#282828] rounded w-1/2 skeleton-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SkeletonRightSidebar;
