import React from 'react';
import { Play } from 'lucide-react';

interface ContentCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  size?: 'normal' | 'large';
  onHover?: (imageUrl: string | undefined) => void;
  onLeave?: () => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, subtitle, imageUrl, size = 'normal', onHover, onLeave }) => {
  return (
    <div 
      className="bg-bg-card rounded-lg p-4 transition-smooth hover:bg-bg-card-hover group cursor-pointer"
      onMouseEnter={() => onHover?.(imageUrl)}
      onMouseLeave={() => onLeave?.()}
    >
      <div className="relative mb-4">
        <div className={`${size === 'large' ? 'aspect-[16/9]' : 'aspect-square'} bg-bg-highlight rounded-md overflow-hidden`}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-bg-elevated rounded"></div>
            </div>
          )}
        </div>
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-smooth shadow-lg hover:scale-105 hover:bg-spotify-green-hover">
          <Play size={20} fill="black" color="black" />
        </button>
      </div>
      <h3 className="text-text-base font-bold mb-1 truncate">{title}</h3>
      <p className="text-text-subdued text-sm truncate">{subtitle}</p>
    </div>
  );
};

export default ContentCard;
