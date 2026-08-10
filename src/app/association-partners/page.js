import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import EcosystemHeroBackground from "../../components/EcosystemHeroBackground";

export const metadata = {
  title: "Association Partners - Vault 2047",
  description: "Uniting the Forces Behind Cyber-Resilience",
};

export default function AssociationPartnersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        {/* Sub-Navigation */}
        <div className="w-full bg-[#040b0e] border-b border-white/10 sticky top-[72px] z-40 flex justify-center items-center overflow-x-auto hide-scrollbar">
          <div className="flex justify-center items-center gap-2 md:gap-8 min-w-max px-6">
            
            <Link href="/sponsors" className="px-4 py-4 border-b-4 border-transparent hover:border-teal-500/50 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group">
              <div className="text-white/70 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight group-hover:text-white transition-colors">Sponsors</div>
            </Link>
            
            <Link href="/exhibitors" className="px-4 py-4 border-b-4 border-transparent hover:border-teal-500/50 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group">
              <div className="text-white/70 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight group-hover:text-white transition-colors">Exhibitors</div>
            </Link>
            
            <Link href="/media-partners" className="px-4 py-4 border-b-4 border-transparent hover:border-teal-500/50 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group">
              <div className="text-white/70 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight group-hover:text-white transition-colors">Media Partners</div>
            </Link>
            
            <Link href="/association-partners" className="px-4 py-4 border-b-4 border-teal-500 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors">
              <div className="text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight">Association Partners</div>
            </Link>
            
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[400px] md:h-[500px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden">
          
          {/* Interactive Canvas Background */}
          <EcosystemHeroBackground />

          {/* Corner Accents */}
          <div className="absolute top-16 left-8 md:top-24 md:left-24 w-12 h-12 md:w-20 md:h-20 border-t-[8px] border-l-[8px] border-[#B86A2E] opacity-80"></div>
          <div className="absolute bottom-16 right-8 md:bottom-24 md:right-24 w-12 h-12 md:w-20 md:h-20 border-b-[8px] border-r-[8px] border-[#B86A2E] opacity-80"></div>

          <div className="w-full max-w-[1200px] px-6 lg:px-32 flex flex-col items-center gap-6 relative z-10 pointer-events-none">
            
            <div className="w-full text-center text-white/80 text-sm md:text-base lg:text-lg font-bold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-widest">
              Ecosystem <span className="text-[#B86A2E]">|</span> Association Partners
            </div>
            
            <div className="w-full flex justify-center items-center">
              <h1 className="max-w-[1073px] text-center text-white text-3xl md:text-5xl lg:text-[52px] font-bold font-['Orbitron'] leading-snug md:leading-tight">
                Uniting the Forces Behind Cyber-Resilience
              </h1>
            </div>
            
          </div>
        </div>

        {/* Association Partners Grid Section */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-neutral-900 flex flex-col justify-start items-center overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-16 md:gap-20">
            
            <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Orbitron']">
              Meet the Associations Powering the Cyber Ecosystem
            </h2>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {[11, 10, 9, 8, 7, 6].map((num) => (
                <div key={num} className="w-full h-48 md:h-64 bg-white outline outline-1 outline-offset-[-1px] outline-neutral-700 flex justify-center items-center p-12 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-shadow cursor-pointer">
                  <img className="max-w-[80%] max-h-[80%] object-contain" src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`} alt={`Association Partner ${num}`} />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Join Us CTA Section */}
        <div className="w-full relative px-6 md:px-12 lg:px-28 py-16 md:py-32 bg-[#040b0e] flex justify-center items-center overflow-hidden">
          
          {/* Corner Accents */}
          <div className="absolute top-8 left-8 md:top-16 md:left-24 w-16 h-16 md:w-28 md:h-32 border-t-[12px] border-l-[12px] border-[#B86A2E] opacity-70"></div>
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-24 w-16 h-16 md:w-32 md:h-36 border-b-[12px] border-r-[12px] border-[#B86A2E] opacity-70"></div>

          {/* Main Card */}
          <div className="w-full max-w-[1200px] relative overflow-hidden flex flex-col justify-end items-center bg-black/20 outline outline-1 outline-white/10">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/Vault-2047/assets/ecosystem/eco-join-bg.jpg" alt="Audience" className="w-full h-full object-cover opacity-40 mix-blend-lighten" />
            </div>
            
            {/* Teal Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D6665]/90 via-[#0D6665]/40 to-transparent"></div>

            {/* Content */}
            <div className="relative z-20 w-full px-6 py-12 md:py-16 lg:py-20 flex flex-col justify-center items-center gap-8 md:gap-11">
              
              {/* Join Us Badge */}
              <div className="flex justify-center items-center gap-4">
                <div className="w-8 md:w-11 h-px bg-teal-500"></div>
                <div className="text-white text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-[3.60px]">Join us</div>
                <div className="w-8 md:w-11 h-px bg-teal-500"></div>
              </div>
              
              <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Orbitron']">
                Looking to Join the Ecosystem?
              </h2>
              
              <p className="w-full max-w-[742px] text-center text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Connect with the leaders, innovators, and decision-makers shaping the future of cyber-resilience.
              </p>
              
              <button className="px-8 py-4 bg-[#B86A2E] hover:bg-[#9a5624] transition-colors flex justify-center items-center shadow-lg">
                <span className="text-white text-base font-medium font-['IBM_Plex_Sans'] tracking-wide">Get Your Pass</span>
              </button>
              
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
