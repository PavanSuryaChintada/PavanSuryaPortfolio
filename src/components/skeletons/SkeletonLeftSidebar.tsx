import React from 'react';

/**
 * Skeleton placeholder for Left Sidebar
 * Matches Sidebar.tsx layout: nav links + playlist items
 */
const SkeletonLeftSidebar: React.FC = () => {
  return (
    <aside className="w-full h-full min-h-0 bg-transparent p-6 lg:p-2 xl:p-6 overflow-y-auto">
      {/* Nav links skeleton */}
      <nav className="mb-8">
        <ul className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="w-6 h-6 bg-[#282828] rounded skeleton-shimmer" />
              <div className="h-4 bg-[#282828] rounded w-24 lg:hidden xl:block skeleton-shimmer" />
            </li>
          ))}
        </ul>
      </nav>

      {/* Create Playlist button skeleton */}
      <div className="border-t border-border-subtle pt-4 lg:hidden xl:block mb-6">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 bg-[#282828] rounded skeleton-shimmer" />
          <div className="h-4 bg-[#282828] rounded w-32 skeleton-shimmer" />
        </div>
      </div>

      {/* Playlists skeleton */}
      <div className="border-t border-border-subtle pt-4 lg:hidden xl:block">
        <ul className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <li key={i}>
              <div className="h-4 bg-[#282828] rounded w-full skeleton-shimmer" />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SkeletonLeftSidebar;
