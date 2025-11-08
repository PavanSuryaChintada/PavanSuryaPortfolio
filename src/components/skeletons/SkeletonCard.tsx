import React from 'react';

interface SkeletonCardProps {
  size?: 'normal' | 'large';
}

/**
 * Skeleton placeholder for ContentCard component
 * Matches the exact layout: image, title, subtitle
 */
const SkeletonCard: React.FC<SkeletonCardProps> = ({ size = 'normal' }) => {
  return (
    <div className="bg-bg-card rounded-lg p-4">
      {/* Image skeleton */}
      <div className={`${size === 'large' ? 'aspect-[4/3]' : 'aspect-square'} bg-[#282828] rounded-md mb-4 skeleton-shimmer`} />
      
      {/* Title skeleton */}
      <div className="h-5 bg-[#282828] rounded w-3/4 mb-2 skeleton-shimmer" />
      
      {/* Subtitle skeleton */}
      <div className="h-4 bg-[#282828] rounded w-1/2 skeleton-shimmer" />
    </div>
  );
};

export default SkeletonCard;
