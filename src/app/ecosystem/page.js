import React from 'react';

export const metadata = {
  title: "Ecosystem - Vault 2047",
  description: "Where Cyber Leadership Meets Global Collaboration",
};

export default function EcosystemPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start">
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[350px] md:h-[400px] px-6 lg:px-32 bg-[#040b0e] flex flex-col justify-center items-center gap-6 overflow-hidden">
          
          {/* Background Image with Mix-Blend */}
          <img 
            src="/Vault-2047/assets/ecosystem/eco-hero-bg.png" 
            alt="Ecosystem Background" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-lighten opacity-60 z-0 pointer-events-none"
          />

          <div className="w-full max-w-[1200px] flex flex-col items-center gap-5 relative z-10">
            <div className="w-full text-center text-white/80 text-sm md:text-base lg:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-widest">
              Ecosystem
            </div>
            
            <div className="w-full flex justify-center items-center gap-2.5">
              <h1 className="text-center leading-snug md:leading-tight">
                <span className="text-white text-3xl md:text-5xl font-bold font-['Orbitron'] block md:inline">Where Cyber Leadership Meets </span>
                <span className="hidden md:inline"><br /></span>
                <span className="text-[#B86A2E] text-3xl md:text-5xl font-bold font-['Orbitron'] block md:inline">Global Collaboration</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Placeholder for future content */}
        <div className="w-full max-w-[1200px] py-24 px-6 md:px-16 flex flex-col items-center justify-center min-h-[400px]">
           <div className="text-white/50 font-['IBM_Plex_Sans'] text-lg">
             Ecosystem content sections coming soon...
           </div>
        </div>

      </main>
    </div>
  );
}