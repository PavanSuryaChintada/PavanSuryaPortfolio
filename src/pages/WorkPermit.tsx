import React from 'react';
import Header from '@/components/desktop/Header';

const WorkPermit: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#050505] to-[#020202]">
      <Header />
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col items-center gap-8 px-6 pb-20 pt-14">
        <h1 className="text-3xl font-semibold text-white">Work Permit</h1>
        <p className="text-[#dcdcdc] text-center max-w-xl">
          Details about visa, right-to-work, and authorization will be added here.
        </p>
      </main>
    </div>
  );
};

export default WorkPermit;
