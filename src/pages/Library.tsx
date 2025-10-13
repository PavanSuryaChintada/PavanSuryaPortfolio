import React from 'react';
import Header from '@/components/desktop/Header';
import { useAppContext } from '@/contexts/AppContext';

const Library = () => {
  const { selectedProfile } = useAppContext();

  return (
    <div className="bg-gradient-content min-h-screen">
      <Header />
      <div className="px-6 py-6">
        <h1 className="text-text-base font-bold text-4xl mb-8">Your Library</h1>
        <div className="space-y-4">
          <div className="bg-bg-card p-4 rounded-lg hover:bg-bg-card-hover transition-smooth cursor-pointer">
            <h3 className="text-text-base font-semibold mb-1">Liked Songs</h3>
            <p className="text-text-subdued text-sm">Playlist • 42 songs</p>
          </div>
          <div className="bg-bg-card p-4 rounded-lg hover:bg-bg-card-hover transition-smooth cursor-pointer">
            <h3 className="text-text-base font-semibold mb-1">My Projects</h3>
            <p className="text-text-subdued text-sm">Playlist • {selectedProfile}</p>
          </div>
          <div className="bg-bg-card p-4 rounded-lg hover:bg-bg-card-hover transition-smooth cursor-pointer">
            <h3 className="text-text-base font-semibold mb-1">Skills & Tech Stack</h3>
            <p className="text-text-subdued text-sm">Playlist • 15 items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
