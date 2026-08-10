import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Sponsors - Vault 2047",
  description: "Strategic Partners of Vault 2047",
};

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start">
        
        {/* Sub Navbar (Above Hero) */}
        <div className="w-full bg-[#0a0a0a] z-40 flex justify-center shadow-lg border-b border-white/5">
          <div className="w-full max-w-[1200px] px-6 overflow-x-auto no-scrollbar flex justify-start md:justify-center items-center gap-8 md:gap-16">
            <button className="text-[#B86A2E] text-xs md:text-sm font-bold uppercase tracking-widest py-5 md:py-6 whitespace-nowrap transition-colors border-b-2 border-[#B86A2E]">
              Sponsors
            </button>
            <button className="text-white/70 hover:text-[#B86A2E] text-xs md:text-sm font-bold uppercase tracking-widest py-5 md:py-6 whitespace-nowrap transition-colors border-b-2 border-transparent hover:border-[#B86A2E]">
              Exhibitors
            </button>
            <button className="text-white/70 hover:text-[#B86A2E] text-xs md:text-sm font-bold uppercase tracking-widest py-5 md:py-6 whitespace-nowrap transition-colors border-b-2 border-transparent hover:border-[#B86A2E]">
              Media Partners
            </button>
            <button className="text-white/70 hover:text-[#B86A2E] text-xs md:text-sm font-bold uppercase tracking-widest py-5 md:py-6 whitespace-nowrap transition-colors border-b-2 border-transparent hover:border-[#B86A2E]">
              Association Partners
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[400px] md:h-[500px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden">
          
          {/* Background Texture (Network Pattern) */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex justify-center items-center">
            {/* Using a subtle radial gradient and noise/network if available, otherwise just dark */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-[#040b0e] to-[#040b0e]"></div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-16 left-8 md:top-24 md:left-24 w-12 h-12 md:w-20 md:h-20 border-t-[8px] border-l-[8px] border-[#B86A2E] opacity-80"></div>
          <div className="absolute bottom-16 right-8 md:bottom-24 md:right-24 w-12 h-12 md:w-20 md:h-20 border-b-[8px] border-r-[8px] border-[#B86A2E] opacity-80"></div>

          <div className="w-full max-w-[1200px] px-6 lg:px-32 flex flex-col items-center gap-6 relative z-10 pointer-events-none">
            
            <div className="w-full text-center text-white/80 text-sm md:text-base lg:text-lg font-bold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-widest">
              Ecosystem <span className="text-[#B86A2E]">|</span> Sponsors
            </div>
            
            <div className="w-full flex flex-col justify-center items-center gap-6">
              <h1 className="text-center text-white text-3xl md:text-5xl lg:text-6xl font-bold font-['Orbitron']">
                Strategic Partners of
              </h1>
              
              {/* Logo */}
              <div className="relative w-48 h-16 md:w-72 md:h-24 mt-2">
                <Image 
                  src="/assets/logo.svg" 
                  alt="Vault 2047 Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* Placeholder for actual sponsors content */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-[#0a0a0a] flex flex-col justify-start items-center overflow-hidden min-h-[400px]">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-8 md:gap-12">
            <h2 className="text-white text-2xl md:text-3xl font-semibold font-['IBM_Plex_Sans']">Our Strategic Sponsors</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Sponsor Cards Placeholder */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="h-40 bg-white/5 border border-white/10 flex justify-center items-center rounded-sm">
                  <span className="text-white/30 font-['IBM_Plex_Sans'] uppercase tracking-widest text-sm">Sponsor Logo</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
