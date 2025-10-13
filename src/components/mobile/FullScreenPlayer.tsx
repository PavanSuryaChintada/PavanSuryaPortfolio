import React from 'react';
import { ChevronDown, MoreHorizontal, Heart, Shuffle, SkipBack, Play, SkipForward, Repeat } from 'lucide-react';

interface FullScreenPlayerProps {
  onClose: () => void;
}

const FullScreenPlayer: React.FC<FullScreenPlayerProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-bg-base flex flex-col animate-slide-in-up">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={onClose} className="text-text-base">
          <ChevronDown size={28} />
        </button>
        <span className="text-text-subdued text-xs">Playing from Liked Songs</span>
        <button className="text-text-base">
          <MoreHorizontal size={24} />
        </button>
      </div>

      {/* Album Art */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-sm aspect-square bg-bg-card rounded-lg"></div>
      </div>

      {/* Track Info */}
      <div className="px-6 pb-4">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h2 className="text-text-base font-bold text-2xl mb-1">Current Track</h2>
            <p className="text-text-subdued text-base">Artist Name</p>
          </div>
          <button className="text-text-subdued hover:text-text-base transition-smooth">
            <Heart size={28} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-2">
          <div className="w-full h-1 bg-bg-card-hover rounded-full">
            <div className="w-1/3 h-full bg-text-base rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between text-text-subdued text-xs mb-6">
          <span>1:23</span>
          <span>3:45</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8">
          <button className="text-text-subdued hover:text-text-base transition-smooth">
            <Shuffle size={24} />
          </button>
          <button className="text-text-base">
            <SkipBack size={32} fill="currentColor" />
          </button>
          <button className="w-16 h-16 bg-text-base rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <Play size={24} fill="black" color="black" />
          </button>
          <button className="text-text-base">
            <SkipForward size={32} fill="currentColor" />
          </button>
          <button className="text-text-subdued hover:text-text-base transition-smooth">
            <Repeat size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPlayer;
