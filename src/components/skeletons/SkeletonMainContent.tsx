import React from 'react';
import SkeletonCard from './SkeletonCard';

/**
 * Skeleton placeholder for main content area
 * Matches Home.tsx layout: header, filter pills, and card grid
 */
const SkeletonMainContent: React.FC = () => {
  return (
    <div className="flex h-full flex-col min-h-0 bg-gradient-to-b from-[#303030] to-[#121212]">
      <div className="flex-1 overflow-y-auto">
        {/* Main Content - header is in layout */}
        <div className="px-6 pb-8 pt-6">
          {/* Filter Pills skeleton */}
          <div className="flex items-center gap-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-24 bg-[#282828] rounded-full skeleton-shimmer"
              />
            ))}
          </div>

          {/* Featured Section - 2x3 Grid */}
          <section className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </section>

          {/* Made For You Section */}
          <section className="mb-12">
            {/* Section header */}
            <div className="flex items-center justify-between mb-6">
              <div className="h-8 w-48 bg-[#282828] rounded skeleton-shimmer" />
              <div className="h-6 w-16 bg-[#282828] rounded skeleton-shimmer" />
            </div>
            
            {/* Horizontal scrolling cards */}
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <SkeletonCard key={i} size="large" />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMainContent;
