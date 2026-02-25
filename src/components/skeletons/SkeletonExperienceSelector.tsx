import React from 'react';

/**
 * Skeleton placeholder for ProfileSelector component
 * Matches the Spotify-style "Welcome back" / experience selector layout
 * - Logo placeholder, "Welcome back" heading placeholder
 * - 4 horizontal pill-button placeholders stacked vertically
 */
const SkeletonExperienceSelector: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212]">
      <div className="flex flex-col items-center w-full max-w-[360px] px-6">
        {/* Logo placeholder */}
        <div className="w-10 h-10 rounded-full bg-[#282828] mb-8 skeleton-shimmer" />
        {/* "Welcome back" heading placeholder */}
        <div
          className="bg-[#282828] rounded-lg mb-10 skeleton-shimmer"
          style={{ width: 200, height: 36 }}
        />

        {/* Stack of pill button placeholders */}
        <div className="flex flex-col items-center gap-3 w-full">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-full max-w-[360px] h-12 rounded-full bg-[#282828] border border-[#535353] skeleton-shimmer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonExperienceSelector;
