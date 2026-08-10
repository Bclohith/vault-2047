import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Vault Themes 2026 - Vault 2047",
  description: "Agenda and Themes for Vault 2047.",
};

export default function ThemesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start">

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[500px] px-6 lg:px-32 flex flex-col justify-center items-center gap-6 overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
             <Image 
                src="/assets/themes/themes-hero-bg.jpg" 
                alt="Themes Background" 
                fill 
                className="object-cover opacity-80" 
             />
             {/* Gradient overlay to ensure text readability */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#040b0e]/70 via-[#040b0e]/30 to-[#040b0e]" />
          </div>

          <div className="relative z-10 w-full max-w-[1184px] text-center justify-start text-[#B86A2E] text-base md:text-lg font-bold font-['IBM_Plex_Sans'] uppercase tracking-[2px] md:tracking-widest">
            Agenda / Themes
          </div>
          
          <div className="relative z-10 w-full self-stretch flex justify-center items-center gap-2.5 mt-2">
            <div className="flex-1 text-center justify-center text-white text-3xl md:text-5xl font-bold font-['Orbitron'] leading-tight drop-shadow-lg">
              Where Cyber-Resilience is Built, <br className="hidden md:block" />Not Discussed.
            </div>
          </div>
          
          <div className="relative z-10 w-full max-w-[900px] self-stretch text-center justify-center mx-auto mt-4 text-white text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2px] md:tracking-[3.06px]">
            Defining the Future of Cyber-Defense, Policy, and Digital Trust
          </div>
          
          <div className="relative z-10 w-full max-w-[800px] self-stretch text-center justify-center mx-auto mt-2 text-white/90 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
            Vault2047 brings together the world’s foremost cyber leaders, policymakers, and innovators to address the most critical challenges shaping global cyber-resilience.
          </div>
          
        </div>

      </main>
    </div>
  );
}
