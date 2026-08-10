"use client";

import React from 'react';
import MatrixHeroBackground from '../../components/MatrixHeroBackground';

export default function BeMediaPartnerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <main className="flex-grow flex flex-col items-center justify-start">
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch min-h-[400px] md:min-h-[500px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden py-16">
          
          {/* Animated Matrix Background */}
          <MatrixHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 to-[#0a0a0a] pointer-events-none z-0" />
          
          <div className="w-full max-w-[1200px] px-6 relative z-10 flex flex-col justify-center items-center gap-6">
            <div className="text-center text-white/80 text-sm md:text-base font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[0.15em]">
              Collaborate / Be a Media Partner
            </div>
            
            <h1 className="max-w-[900px] text-center text-white text-3xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] leading-tight">
              Amplify the Global Cyber Narrative
            </h1>
            
            <p className="max-w-[800px] text-center text-white/90 text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] leading-relaxed">
              Partner with Vault2047 to Shape the Future of Digital Security
            </p>
          </div>
        </div>

        {/* Placeholder for future sections */}
        <div className="w-full px-6 md:px-12 py-24 bg-gray-950 flex flex-col justify-center items-center border-b border-white/5">
           <h2 className="text-white/60 text-2xl font-['Orbitron']">Media Partner Content Coming Soon...</h2>
        </div>

      </main>
    </div>
  );
}
