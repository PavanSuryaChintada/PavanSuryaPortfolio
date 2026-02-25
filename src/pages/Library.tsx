import React from 'react';
import { Link } from 'react-router-dom';
const Library = () => {
  return (
    <div className="bg-gradient-content min-h-screen">
      <div className="px-6 py-6">
        <h1 className="text-text-base font-bold text-4xl mb-8">Your Library</h1>
        <div className="space-y-4">
          <Link to="/projects" className="block bg-bg-card p-4 rounded-lg hover:bg-bg-card-hover transition-smooth cursor-pointer">
            <h3 className="text-text-base font-semibold mb-1">My Projects</h3>
            <p className="text-text-subdued text-sm">AI Recruitment Pipeline, STEGO-CHATS, X Clone Backend, Industry Projects</p>
          </Link>
          <Link to="/skills" className="block bg-bg-card p-4 rounded-lg hover:bg-bg-card-hover transition-smooth cursor-pointer">
            <h3 className="text-text-base font-semibold mb-1">Skills & Tech Stack</h3>
            <p className="text-text-subdued text-sm">React, Node.js, Python, n8n, PostgreSQL, MongoDB</p>
          </Link>
          <a href="https://github.com/PavanSuryaChintada" target="_blank" rel="noopener noreferrer" className="block bg-bg-card p-4 rounded-lg hover:bg-bg-card-hover transition-smooth cursor-pointer">
            <h3 className="text-text-base font-semibold mb-1">GitHub</h3>
            <p className="text-text-subdued text-sm">18 repositories • PavanSuryaChintada</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Library;
