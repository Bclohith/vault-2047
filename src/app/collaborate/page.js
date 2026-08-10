import React from 'react';
import EcosystemHeroBackground from "../../components/EcosystemHeroBackground";

export const metadata = {
  title: "Collaborate - Vault 2047",
  description: "Collaborate at Vault 2047",
};

export default function CollaboratePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start">
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[400px] md:h-[500px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden">
          
          {/* Interactive Canvas Background */}
          <EcosystemHeroBackground />

          <div className="w-full max-w-[1200px] px-6 lg:px-32 flex flex-col items-center gap-6 relative z-10 pointer-events-none">
            <div className="w-full text-center text-white/80 text-sm md:text-base lg:text-lg font-bold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-widest">
              Collaborate
            </div>
            
            <div className="w-full flex justify-center items-center">
              <h1 className="max-w-[1073px] text-center text-white text-3xl md:text-5xl lg:text-[52px] font-bold font-['Orbitron'] leading-snug md:leading-tight">
                Join Forces with Vault 2047
              </h1>
            </div>
          </div>
        </div>

        {/* Placeholder for content */}
        <div className="w-full px-6 py-24 flex justify-center items-center bg-[#0a0a0a]">
          <p className="text-white/60 text-lg font-['IBM_Plex_Sans']">Content coming soon...</p>
        </div>

      </main>
    </div>
  );
}
