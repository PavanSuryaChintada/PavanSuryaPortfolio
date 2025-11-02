import React from 'react';
import { BsFillPlayFill, BsShuffle, BsThreeDots, BsListUl } from 'react-icons/bs';
import { FiPlusCircle, FiDownload } from 'react-icons/fi';

interface ActionBarProps {
  onViewToggle: () => void;
  currentView: 'list' | 'compact';
  isShuffled: boolean;
  onShuffleToggle: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({ 
  onViewToggle, 
  currentView, 
  isShuffled, 
  onShuffleToggle 
}) => {
  return (
    <div className="flex items-center justify-between w-full h-16 px-4">
      <div className="flex items-center space-x-4">
        {/* Play Button */}
        <button 
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1DB954] text-black hover:scale-105 transition-transform duration-200 focus:outline-none"
          aria-label="Play"
        >
          <BsFillPlayFill className="w-8 h-8 ml-1" />
        </button>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-6 text-2xl">
          <div className="relative group">
            <button 
              className={`flex flex-col items-center ${isShuffled ? 'text-[#1DB954]' : 'text-[#b3b3b3] hover:text-white'} transition-colors duration-200`}
              onClick={onShuffleToggle}
              aria-label={isShuffled ? 'Disable shuffle' : 'Enable shuffle'}
            >
              <BsShuffle className="w-5 h-5" />
              {isShuffled && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#1DB954] rounded-full"></div>
              )}
            </button>
          </div>
          <button 
            className="text-[#b3b3b3] hover:text-white transition-colors duration-200"
            aria-label="Add to playlist"
          >
            <FiPlusCircle />
          </button>
          <button 
            className="text-[#b3b3b3] hover:text-white transition-colors duration-200"
            aria-label="Download"
          >
            <FiDownload />
          </button>
          <button 
            className="text-[#b3b3b3] hover:text-white transition-colors duration-200"
            aria-label="More options"
          >
            <BsThreeDots />
          </button>
        </div>
      </div>
      
      {/* View Toggle */}
      <button 
        className="flex items-center text-sm font-semibold text-[#b3b3b3] hover:text-white transition-colors duration-200"
        aria-label={`View as ${currentView}`}
        onClick={onViewToggle}
      >
        {currentView === 'list' ? (
          <BsListUl className="mr-2 text-lg" />
        ) : (
          <div className="mr-2 flex flex-col justify-between w-5 h-4">
            <div className="w-full h-0.5 bg-[#b3b3b3] rounded-full"></div>
            <div className="w-full h-0.5 bg-[#b3b3b3] rounded-full"></div>
            <div className="w-full h-0.5 bg-[#b3b3b3] rounded-full"></div>
          </div>
        )}
        {currentView === 'list' ? 'List' : 'Compact'}
      </button>
    </div>
  );
};

export default ActionBar;
