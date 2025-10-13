import React, { useState } from 'react';
import { Play, Heart } from 'lucide-react';
import FullScreenPlayer from './FullScreenPlayer';

const MiniPlayer: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsFullScreen(true)}
        className="fixed bottom-[65px] left-2 right-2 z-[98] h-[60px] bg-bg-card-hover rounded p-2 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-smooth"
      >
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 bg-bg-base rounded"></div>
          <div className="flex-1 min-w-0">
            <p className="text-text-base text-sm font-semibold truncate">Current Track</p>
            <p className="text-text-subdued text-xs truncate">Artist Name</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={(e) => e.stopPropagation()}
            className="text-text-subdued hover:text-text-base transition-smooth"
          >
            <Heart size={20} />
          </button>
          <button 
            onClick={(e) => e.stopPropagation()}
            className="w-10 h-10 bg-text-base rounded-full flex items-center justify-center"
          >
            <Play size={16} fill="black" color="black" />
          </button>
        </div>
      </div>
      
      {isFullScreen && <FullScreenPlayer onClose={() => setIsFullScreen(false)} />}
    </>
  );
};

export default MiniPlayer;
