import React from 'react';
import Header from '@/components/desktop/Header';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
      <Header />
      <div className="px-6 pb-8 pt-6">
        <h1 className="text-text-base text-4xl font-bold mb-8">Contact Me</h1>
        <p className="text-text-subdued">Contact page content coming soon...</p>
      </div>
    </div>
  );
};

export default Contact;
