import React, { useState } from 'react';
import { Play, SkipBack, SkipForward, Shuffle, Repeat, Volume2, ListMusic, Mic2, MonitorSpeaker, Maximize2, Check, Heart } from 'lucide-react';
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
  
  // Constants for format
  const totalSeconds = 225; // 3:45
  const currentSeconds = Math.floor((scrollProgress / 100) * totalSeconds);
  const currentMinutes = Math.floor(currentSeconds / 60);
  const remainingSeconds = currentSeconds % 60;
  const formattedTime = `${currentMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  
  const iconSize = 16;
  const utilityIconSize = 18; /* Right section: consistent size for mic, queue, device, volume, fullscreen */

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 w-full h-20 z-[100] bg-[#000000] rounded-none flex items-center justify-between overflow-hidden border-0"
      style={{ margin: 0 }}
    >
      {/* LEFT SECTION: Now Playing Info */}
      <div className="flex items-center flex-1 min-w-0 justify-start pl-4">
        <div className="flex items-center min-w-0 w-full">
          {/* Album Art */}
          <div className="w-[56px] h-[56px] rounded-[4px] overflow-hidden flex-shrink-0 bg-[#282828] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop"
              alt="Album Art"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Metadata + Tick Group - Pushed right to align with top card edge */}
          <div className="flex items-center ml-4 flex-1 min-w-0">
            <div className="min-w-0 flex flex-col justify-center">
              <p className="text-[#ffffff] text-[14px] font-medium truncate hover:underline cursor-pointer leading-tight">
                Bella Ciao
              </p>
              <p className="text-[#b3b3b3] text-[11px] truncate hover:underline hover:text-[#ffffff] cursor-pointer leading-tight mt-1">
                El Profesor, Berlin
              </p>
            </div>

            {/* Green tick moved right to align with the sidebar/main panel vertical line */}
            <div className="ml-8 flex items-center justify-center flex-shrink-0">
              <div className="w-4 h-4 rounded-full flex items-center justify-center bg-[#1db954]">
                <Check size={10} strokeWidth={4} className="text-[#000000]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CENTER SECTION: Heart + Playback Controls */}
      <div className="flex flex-col items-center justify-center gap-2 flex-1 min-w-0 max-w-[722px]">
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setIsLiked(!isLiked)}
            className="flex items-center justify-center transition-transform active:scale-90 mr-1"
            aria-label={isLiked ? 'Remove from Your Library' : 'Save to Your Library'}
          >
            <Heart
              size={iconSize}
              className={`${isLiked ? 'fill-[#1db954] text-[#1db954]' : 'text-[#b3b3b3] hover:text-[#ffffff]'} transition-colors duration-200`}
            />
          </button>
          
          <button
            onClick={() => setIsShuffleActive(!isShuffleActive)}
            className={`${isShuffleActive ? 'text-[#1db954] after:content-["•"] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 relative' : 'text-[#b3b3b3] hover:text-[#ffffff]'} transition-colors`}
          >
            <Shuffle size={iconSize} />
          </button>
          
          <button className="text-[#b3b3b3] hover:text-[#ffffff] transition-colors">
            <SkipBack size={20} fill="currentColor" />
          </button>
          
          <button className="w-8 h-8 bg-[#ffffff] rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform flex-shrink-0">
            <Play size={20} fill="#000000" color="#000000" className="ml-0.5" />
          </button>
          
          <button className="text-[#b3b3b3] hover:text-[#ffffff] transition-colors">
            <SkipForward size={20} fill="currentColor" />
          </button>
          
          <button
            onClick={() => setIsRepeatActive(!isRepeatActive)}
            className={`${isRepeatActive ? 'text-[#1db954] relative after:content-["•"] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2' : 'text-[#b3b3b3] hover:text-[#ffffff]'} transition-colors`}
          >
            <Repeat size={iconSize} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full max-w-[600px]">
          <span className="text-[#b3b3b3] text-[11px] min-w-[40px] text-right tabular-nums">
            {formattedTime}
          </span>
          <div className="flex-1 h-1 bg-[#4d4d4d] rounded-full relative group/progress cursor-pointer">
            <div
              className="absolute h-full rounded-full bg-[#ffffff] group-hover/progress:bg-[#1db954]"
              style={{ width: `${scrollProgress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#ffffff] rounded-full opacity-0 group-hover/progress:opacity-100 shadow-xl"
              style={{ left: `${scrollProgress}%` }}
            />
          </div>
          <span className="text-[#b3b3b3] text-[11px] min-w-[40px] tabular-nums">
            3:45
          </span>
        </div>
      </div>

      {/* RIGHT SECTION: Utility Controls – consistent icon size, even spacing */}
      <div className="flex items-center justify-end gap-4 flex-1 min-w-0 pr-4">
        <button
          onClick={() => setIsLyricsActive(!isLyricsActive)}
          className={`${isLyricsActive ? 'text-[#1db954]' : 'text-[#b3b3b3] hover:text-[#ffffff]'} transition-colors`}
        >
          <Mic2 size={utilityIconSize} />
        </button>
        
        <button
          onClick={() => setIsQueueActive(!isQueueActive)}
          className={`${isQueueActive ? 'text-[#1db954]' : 'text-[#b3b3b3] hover:text-[#ffffff]'} transition-colors`}
        >
          <ListMusic size={utilityIconSize} />
        </button>
        
        <button
          onClick={() => setIsConnectActive(!isConnectActive)}
          className={`${isConnectActive ? 'text-[#1db954]' : 'text-[#b3b3b3] hover:text-[#ffffff]'} transition-colors`}
        >
          <MonitorSpeaker size={utilityIconSize} />
        </button>
        
        <div className="flex items-center gap-2 group/vol w-[140px] min-w-0">
          <Volume2 size={utilityIconSize} className="text-[#b3b3b3] group-hover/vol:text-[#ffffff]" />
          <div className="flex-1 h-1 bg-[#4d4d4d] rounded-full relative cursor-pointer">
            <div
              className="absolute h-full rounded-full bg-[#ffffff] group-hover/vol:bg-[#1db954]"
              style={{ width: `${sidebarScrollProgress}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#ffffff] rounded-full opacity-0 group-hover/vol:opacity-100"
              style={{ left: `${sidebarScrollProgress}%` }}
            />
          </div>
        </div>
        
        <button className="text-[#b3b3b3] hover:text-[#ffffff] transition-colors">
          <Maximize2 size={utilityIconSize} />
        </button>
      </div>
    </footer>
  );
};

export default PlayerBar;