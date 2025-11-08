import React from 'react';

/**
 * Skeleton placeholder for ProfileSelector component
 * Matches the "Choose Your Experience" section layout
 * - Main heading placeholder
 * - 4 experience card placeholders (Recruiter, Stalker, Developer, Adventurer)
 * - Each card has circular icon and text label placeholders
 */
const SkeletonExperienceSelector: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-base">
      {/* Heading Placeholder */}
      <div 
        className="bg-[#282828] rounded-lg mb-[5vh] skeleton-shimmer"
        style={{ 
          width: 'clamp(300px, 50vw, 600px)', 
          height: 'clamp(40px, 3.5vw, 64px)' 
        }}
      />
      
      {/* Experience Cards Grid */}
      <div className="flex gap-[2vw] justify-center px-4 max-w-6xl">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center bg-[#282828] rounded-lg p-6 aspect-[3/4] max-w-[200px] w-full ring-1 ring-border-subtle skeleton-shimmer"
          >
            {/* Icon Placeholder - Circular */}
            <div className="w-16 h-16 rounded-full bg-[#1a1a1a] mb-4" />
            
            {/* Text Label Placeholder */}
            <div className="w-3/4 h-5 bg-[#1a1a1a] rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonExperienceSelector;
