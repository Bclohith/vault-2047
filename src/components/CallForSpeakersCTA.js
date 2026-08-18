import React from 'react';
import Image from 'next/image';

export default function CallForSpeakersCTA() {
  return (
    <div className="w-full relative bg-gray-950 overflow-hidden py-20 lg:py-32 flex justify-center items-center">
      
      {/* Decorative Corner vector */}
      <div className="absolute top-[10%] left-[5%] md:left-[10%] lg:left-[15%] w-20 h-24 md:w-28 md:h-32 opacity-50 z-0 rotate-180">
        <Image src="/assets/speakers/vector_19.svg" alt="Corner Decoration" fill className="object-contain" />
      </div>

      <div className="w-full max-w-[1200px] p-8 md:p-12 lg:p-16 relative z-10 bg-gradient-to-br from-gray-950/40 to-teal-900/60 flex flex-col lg:flex-row justify-start items-stretch gap-12 border border-teal-800/30 backdrop-blur-sm mx-6">
        
        {/* Left Content Area */}
        <div className="flex-1 flex flex-col justify-between items-start gap-12">
          
          {/* Header */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
              <span className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Orbitron'] leading-tight">Looking to share your<br/></span>
              <span className="text-amber-700 text-3xl md:text-4xl lg:text-5xl font-semibold font-['Orbitron'] leading-tight">perspective?</span>
            </div>
            <div className="text-white text-base md:text-lg font-medium font-['IBM_Plex_Sans'] max-w-[485px] leading-relaxed opacity-90">
              Vault2047 is looking for leaders driving real change in cyber-defense, policy, and digital security.
            </div>
          </div>
          
          {/* List Items */}
          <div className="w-full flex flex-col gap-4">
            
            <div className="w-full max-w-[500px] bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex items-stretch h-[60px] group cursor-default">
              <div className="w-[60px] h-full bg-teal-800 flex items-center justify-center shrink-0">
                <div className="w-6 h-6 relative">
                  <Image src="/assets/speakers/icon_insights.svg" alt="Share Strategic Insights" fill className="object-contain" />
                </div>
              </div>
              <div className="flex-1 px-4 flex items-center">
                <span className="text-white text-sm md:text-base font-normal font-['IBM_Plex_Sans'] group-hover:text-amber-500 transition-colors">Share Strategic Insights</span>
              </div>
            </div>
            
            <div className="w-full max-w-[500px] bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex items-stretch h-[60px] group cursor-default">
              <div className="w-[60px] h-full bg-teal-800 flex items-center justify-center shrink-0">
                <div className="w-6 h-6 relative">
                  <Image src="/assets/speakers/icon_handshake.svg" alt="Lead High-Impact Discussions" fill className="object-contain" />
                </div>
              </div>
              <div className="flex-1 px-4 flex items-center">
                <span className="text-white text-sm md:text-base font-normal font-['IBM_Plex_Sans'] group-hover:text-amber-500 transition-colors">Lead High-Impact Discussions</span>
              </div>
            </div>
            
            <div className="w-full max-w-[500px] bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex items-stretch h-[60px] group cursor-default">
              <div className="w-[60px] h-full bg-teal-800 flex items-center justify-center shrink-0">
                <div className="w-6 h-6 relative">
                  <Image src="/assets/speakers/icon_global.svg" alt="Contribute to National Frameworks" fill className="object-contain" />
                </div>
              </div>
              <div className="flex-1 px-4 flex items-center">
                <span className="text-white text-sm md:text-base font-normal font-['IBM_Plex_Sans'] group-hover:text-amber-500 transition-colors">Contribute to National and Global Cyber Frameworks</span>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Right Image & Button Area */}
        <div className="w-full lg:w-[450px] flex flex-col gap-0 shrink-0">
          <div className="w-full aspect-[5/4] md:aspect-[4/3] lg:aspect-[4/3] relative border border-zinc-600/50 bg-black/40 overflow-hidden">
            <Image src="/assets/speakers/speaker_cta_bg.jpg" alt="Speaker CTA" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-multiply pointer-events-none"></div>
          </div>
          <button className="w-full py-5 bg-amber-700 hover:bg-amber-600 transition-colors flex justify-center items-center cursor-pointer">
            <span className="text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans'] uppercase tracking-wider">Apply to Speak</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}