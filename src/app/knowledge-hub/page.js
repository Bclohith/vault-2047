import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Knowledge Hub - Vault 2047",
  description: "Knowledge Hub - Vault 2047",
};

export default function KnowledgeHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start">
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[320px] md:h-[400px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/Vault-2047/assets/knowledge-hub/hero-bg.png" 
              alt="Knowledge Hub Background" 
              className="w-full h-full object-cover mix-blend-screen opacity-50" 
            />
          </div>

          {/* Content */}
          <div className="w-full max-w-[1200px] px-6 lg:px-32 flex flex-col items-center gap-5 relative z-10 pointer-events-none">
            <div className="w-full text-center text-white/80 text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-widest">
              Knowledge Hub
            </div>
            
            <div className="w-full flex justify-center items-center gap-2.5">
              <h1 className="max-w-[1073px] text-center text-white text-4xl md:text-5xl font-bold font-['Orbitron']">
                Knowledge Hub
              </h1>
            </div>
          </div>

        </div>

        {/* Content placeholder for the future */}
        <div className="w-full px-6 py-24 flex justify-center items-center">
          <p className="text-white/60 text-lg font-['IBM_Plex_Sans']">More content coming soon...</p>
        </div>

      </main>
    </div>
  );
}
