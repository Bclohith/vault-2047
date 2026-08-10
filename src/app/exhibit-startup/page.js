import React from 'react';
import StartupHeroBackground from "../../components/StartupHeroBackground";

export const metadata = {
  title: "Exhibit as a Startup - Vault 2047",
  description: "Exhibit your startup solutions at Vault 2047.",
};

export default function ExhibitStartupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start">
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[400px] md:h-[500px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden">
          
          <StartupHeroBackground />

          <div className="w-full max-w-[1200px] px-6 lg:px-32 flex flex-col items-center gap-5 relative z-10 pointer-events-none">
            
            <div className="w-full text-center text-white/80 text-sm md:text-base lg:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-widest">
              Startup / Exhibit as Startup
            </div>
            
            <div className="w-full flex justify-center items-center">
              <h1 className="max-w-[1073px] text-center text-white text-3xl md:text-5xl lg:text-[52px] font-bold font-['Orbitron'] leading-snug md:leading-tight">
                Showcase your Solutions, Attract Investors &amp; Enterprise Buyers
              </h1>
            </div>
            
          </div>
        </div>

      </main>
    </div>
  );
}
