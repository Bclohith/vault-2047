import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Startups - Vault 2047",
  description: "Attend or Exhibit as a Startup at Vault 2047",
};

export default function StartupsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start">
        
        {/* Basic Placeholder Hero for Startups */}
        <div className="w-full relative self-stretch h-[400px] md:h-[500px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden">
          
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex justify-center items-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-[#040b0e] to-[#040b0e]"></div>
          </div>

          <div className="w-full max-w-[1200px] px-6 lg:px-32 flex flex-col items-center gap-6 relative z-10 pointer-events-none">
            
            <div className="w-full text-center text-white/80 text-sm md:text-base lg:text-lg font-bold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-widest">
              Startups <span className="text-[#B86A2E]">|</span> Overview
            </div>
            
            <div className="w-full flex justify-center items-center">
              <h1 className="max-w-[1073px] text-center text-white text-3xl md:text-5xl lg:text-[52px] font-bold font-['Orbitron'] leading-snug md:leading-tight">
                Empowering the Next Generation of Cyber Innovation
              </h1>
            </div>
            
          </div>
        </div>

        {/* Content Placeholder */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-neutral-900 flex flex-col justify-start items-center min-h-[400px]">
          <div className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-8">
            <h2 className="text-white text-2xl font-['Orbitron'] text-center">More details coming soon...</h2>
            <p className="text-white/60 text-center font-['IBM_Plex_Sans']">Please provide the design for the content of this page.</p>
          </div>
        </div>

      </main>
    </div>
  );
}