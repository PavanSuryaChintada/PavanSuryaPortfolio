import React, { useState } from 'react';
import { Play, SkipBack, SkipForward, Shuffle, Repeat, Volume2, ListMusic, Mic2, MonitorSpeaker } from 'lucide-react';
import { Heart } from 'lucide-react';
import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { useAppContext } from '@/contexts/AppContext';

const PlayerBar: React.FC = () => {
  const scrollProgress = useScrollProgress();
  const { sidebarScrollProgress } = useAppContext();
  
  // Interactive states
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffleActive, setIsShuffleActive] = useState(false);
  const [isRepeatActive, setIsRepeatActive] = useState(false);
  const [isLyricsActive, setIsLyricsActive] = useState(false);
  const [isQueueActive, setIsQueueActive] = useState(false);
  const [isConnectActive, setIsConnectActive] = useState(false);
  
  // Convert scroll progress (0-100) to time format
  const totalSeconds = 225; // 3:45 in seconds
  const currentSeconds = Math.floor((scrollProgress / 100) * totalSeconds);
  const currentMinutes = Math.floor(currentSeconds / 60);
  const remainingSeconds = currentSeconds % 60;
  const formattedTime = `${currentMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[90px] z-[100] bg-bg-elevated border-t border-border-subtle px-4 flex items-center justify-between">
      {/* Left: Track Info with Album Art */}
      <div className="flex items-center gap-4 w-[30%] min-w-[180px]">
        <div className="w-14 h-14 bg-bg-highlight rounded overflow-hidden flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop"
            alt="Album Art"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-text-base text-sm font-semibold truncate">Bella Ciao</p>
          <p className="text-text-subdued text-xs truncate">El Profesor, Berlin</p>
        </div>
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="flex-shrink-0 transition-smooth hover:scale-110"
        >
          <Heart 
            size={16} 
            className={`${isLiked ? 'fill-spotify-green text-spotify-green' : 'text-text-subdued hover:text-text-base'} transition-all duration-200`}
          />
        </button>
      </div>

      {/* Center: Player Controls */}
      <div className="flex flex-col items-center gap-2 w-[40%] max-w-[722px]">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsShuffleActive(!isShuffleActive)}
            className={`${isShuffleActive ? 'text-spotify-green' : 'text-text-subdued hover:text-text-base'} transition-smooth`}
          >
            <Shuffle size={16} />
          </button>
          <button className="text-text-subdued hover:text-text-base transition-smooth">
            <SkipBack size={16} />
          </button>
          <button className="w-8 h-8 bg-text-base rounded-full flex items-center justify-center hover:scale-105 transition-smooth">
            <Play size={14} fill="black" color="black" />
          </button>
          <button className="text-text-subdued hover:text-text-base transition-smooth">
            <SkipForward size={16} />
          </button>
          <button 
            onClick={() => setIsRepeatActive(!isRepeatActive)}
            className={`${isRepeatActive ? 'text-spotify-green' : 'text-text-subdued hover:text-text-base'} transition-smooth`}
          >
            <Repeat size={16} />
          </button>
        </div>
        <div className="flex items-center gap-2 w-full">
          <span className="text-text-subdued text-xs font-medium w-10 text-right">{formattedTime}</span>
          <div className="flex-1 h-1 bg-border-subtle rounded-full relative group cursor-pointer">
            <div 
              className="absolute h-full rounded-full transition-smooth"
              style={{ 
                width: `${scrollProgress}%`,
                backgroundColor: 'hsl(var(--spotify-green))'
              }}
            ></div>
            <div 
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-text-base rounded-full opacity-0 group-hover:opacity-100 transition-smooth"
              style={{ left: `${scrollProgress}%` }}
            ></div>
          </div>
          <span className="text-text-subdued text-xs font-medium w-10">3:45</span>
        </div>
      </div>

      {/* Right: Additional Controls */}
      <div className="flex items-center gap-3 w-[30%] justify-end min-w-[180px]">
        <button 
          onClick={() => setIsLyricsActive(!isLyricsActive)}
          className={`${isLyricsActive ? 'text-spotify-green' : 'text-text-subdued hover:text-text-base'} transition-smooth`}
        >
          <Mic2 size={16} />
        </button>
        <button 
          onClick={() => setIsQueueActive(!isQueueActive)}
          className={`${isQueueActive ? 'text-spotify-green' : 'text-text-subdued hover:text-text-base'} transition-smooth`}
        >
          <ListMusic size={16} />
        </button>
        <button 
          onClick={() => setIsConnectActive(!isConnectActive)}
          className={`${isConnectActive ? 'text-spotify-green' : 'text-text-subdued hover:text-text-base'} transition-smooth`}
        >
          <MonitorSpeaker size={16} />
        </button>
        <div className="flex items-center gap-2">
          <Volume2 size={16} className="text-text-subdued" />
          <div className="w-24 h-1 bg-border-subtle rounded-full relative group cursor-pointer">
            <div 
              className="absolute h-full rounded-full transition-smooth"
              style={{ 
                width: `${sidebarScrollProgress}%`,
                backgroundColor: 'hsl(var(--spotify-green))'
              }}
            ></div>
            <div 
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-text-base rounded-full opacity-0 group-hover:opacity-100 transition-smooth"
              style={{ left: `${sidebarScrollProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PlayerBar;
