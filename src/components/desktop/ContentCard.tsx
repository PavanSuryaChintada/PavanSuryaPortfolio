import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface ContentCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  size?: 'normal' | 'large';
  onHover?: (imageUrl: string | undefined) => void;
  onLeave?: () => void;
  hoverColorHsl?: string; // e.g., '141 73% 42%'
  disableHover?: boolean;
  suppressHoverBackground?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, subtitle, imageUrl, size = 'normal', onHover, onLeave, hoverColorHsl = '141 73% 42%', disableHover = false, suppressHoverBackground = true }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
      className="group relative bg-[#181818] rounded-[6px] p-4 cursor-pointer"
      onMouseEnter={() => { 
        if (!disableHover) { 
          if (!suppressHoverBackground) setHovered(true);
          if (!suppressHoverBackground) onHover?.(imageUrl);
        }
      }}
      onMouseLeave={() => { 
        if (!disableHover) { 
          if (!suppressHoverBackground) setHovered(false);
          if (!suppressHoverBackground) onLeave?.();
        }
      }}
      style={{
        backgroundImage: !disableHover && !suppressHoverBackground && hovered
          ? `radial-gradient(120% 120% at 50% 0%, hsl(${hoverColorHsl} / 0.14) 0%, transparent 70%)`
          : undefined,
      }}
    >
      <div className="relative mb-4">
        <div className={`${size === 'large' ? 'aspect-[4/3]' : 'aspect-square'} bg-[#282828] rounded-[6px] overflow-hidden`}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 bg-bg-elevated rounded"></div>
            </div>
          )}
        </div>
        {!disableHover && (
          <button className="absolute bottom-2 right-2 w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-smooth shadow-lg hover:scale-105 hover:bg-spotify-green-hover">
            <Play size={20} fill="black" color="black" />
          </button>
        )}
      </div>
      <h3 className="text-[#ffffff] transition-smooth font-bold mb-1 truncate text-sm">{title}</h3>
      <p className="text-[#b3b3b3] text-xs truncate">{subtitle}</p>
    </div>
  );
};

export default ContentCard;
