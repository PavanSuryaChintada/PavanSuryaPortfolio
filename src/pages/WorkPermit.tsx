import React from 'react';
import Header from '@/components/desktop/Header';
import { Mail, Smartphone, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkPermit: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
      <Header />
      <main className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-5xl px-6 py-8">
        <div className="w-full">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-[#b3b3b3] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </button>
          
          {/* Profile Header */}
          <div className="flex items-end space-x-6 mb-8">
            <div className="w-48 h-48 bg-gradient-to-br from-[#1DB954] to-[#1a5b3a] rounded-lg shadow-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-white/70 tracking-widest">WORK PERMIT & AVAILABILITY</span>
              <h1 className="text-3xl md:text-[3.6rem] font-bold text-white mt-2 mb-4 tracking-tight leading-tight">Work Authorization</h1>
              <div className="flex items-center">
                <div className="w-10 h-1 bg-[#1DB954] mr-2"></div>
                <span className="text-sm font-medium text-[#1DB954] tracking-wider">WORK STATUS</span>
              </div>
              <div className="mt-2 flex items-center space-x-4 text-sm text-[#b3b3b3]">
                <span>Freelance Designer & Developer</span>
                <span>•</span>
                <span>Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#181818] rounded-lg p-6">

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="space-y-6 text-[#e0e0e0]">
              <p className="text-lg leading-relaxed">
                I'm a Freelance Designer and Developer based in Andhra Pradesh, India, open to creative collaborations across India. I work with flexible hours to suit client requirements and project timelines, ensuring clear communication and quality results.
              </p>
              
              <p className="text-lg leading-relaxed">
                Fully authorized to work in India, I'm available for freelance, contract-based, and remote projects, and open to exploring international opportunities that align with my professional goals.
              </p>

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-[#282828]">
                <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a 
                      href="mailto:chintadapavansurya@gmail.com" 
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      chintadapavansurya@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                    <a 
                      href="tel:+919014404898" 
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      +91 90144 04898
                    </a>
                  </div>
                </div>
              </div>

              {/* Work Authorization Badge */}
              <div className="space-y-4">
                <div className="p-4 bg-[#282828] rounded-lg border border-[#333333]">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Work Authorization</h3>
                      <p className="text-sm text-gray-400">Authorized to work in India</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-[#282828] rounded-lg border border-[#333333]">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Remote Work</h3>
                      <p className="text-sm text-gray-400">Authorized to work remotely for international clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
      </main>
    </div>
  );
};

export default WorkPermit;
