import { useEffect, useState } from 'react';
import { useScrollProgress } from '@/hooks/use-scroll-progress';

const TOTAL_DURATION = 225; // 3 minutes and 45 seconds in seconds

export function NowPlayingBar() {
  const scrollProgress = useScrollProgress();
  const [currentTime, setCurrentTime] = useState(0);

  // Update current time based on scroll progress
  useEffect(() => {
    const timeInSeconds = Math.round((scrollProgress / 100) * TOTAL_DURATION);
    setCurrentTime(timeInSeconds);
  }, [scrollProgress]);

  // Format seconds to MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-neutral-800 z-50">
      <div className="container mx-auto px-4 py-2">
        {/* Progress bar */}
        <div className="w-full h-1 bg-neutral-700 rounded-full mb-2 overflow-hidden">
          <div 
            className="h-full bg-[#1DB954] transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
            aria-valuenow={scrollProgress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>

        {/* Time display */}
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <span>{formatTime(currentTime)}</span>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Now Playing</span>
            <div className="h-2 w-2 rounded-full bg-[#1DB954] animate-pulse" />
          </div>
          <span>3:45</span>
        </div>
      </div>
    </div>
  );
}
