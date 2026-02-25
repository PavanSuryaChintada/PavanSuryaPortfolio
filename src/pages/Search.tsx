import React from 'react';

const Search = () => {
  return (
    <div className="bg-gradient-content min-h-screen">
      <div className="px-6 py-6">
        <h1 className="text-text-base font-bold text-4xl mb-8">Search</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Search categories placeholder */}
          <div className="bg-bg-card p-4 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-text-base font-bold">Podcasts</span>
          </div>
          <div className="bg-bg-card p-4 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-text-base font-bold">Made For You</span>
          </div>
          <div className="bg-bg-card p-4 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-text-base font-bold">Charts</span>
          </div>
          <div className="bg-bg-card p-4 rounded-lg aspect-square flex items-center justify-center">
            <span className="text-text-base font-bold">New Releases</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
