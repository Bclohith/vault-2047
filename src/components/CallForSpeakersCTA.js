import React from 'react';
import Image from 'next/image';

export default function CallForSpeakersCTA() {
  return (
    <div className="w-full px-6 md:px-16 lg:px-28 py-16 md:py-24 bg-[#040b0e] flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1200px] relative">
        
        {/* SVG Corner Decoration */}
        <div className="absolute -top-8 -left-8 w-24 h-24 z-0 pointer-events-none">
          <Image src="/assets/themes/themes-corner.svg" alt="Corner Decoration" fill className="object-contain" />
        </div>

        {/* Main Content Box */}
        <div className="w-full relative z-10 bg-gradient-to-br from-[#040b0e] to-[#0D6665]/50 border border-white/5 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-8">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-between items-start gap-10">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-1">
                <span className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Orbitron'] tracking-wide">Looking to share your</span>
                <span className="text-[#B86A2E] text-3xl md:text-4xl lg:text-5xl font-semibold font-['Orbitron'] tracking-wide">perspective?</span>
              </div>
              <div className="text-white/90 text-base md:text-lg font-medium font-['IBM_Plex_Sans'] max-w-[485px] leading-relaxed">
                Vault2047 is looking for leaders driving real change in cyber-defense, policy, and digital security.
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              
              {/* List Item 1 */}
              <div className="w-full max-w-[500px] bg-white/5 border border-white/5 flex items-center h-[60px] group hover:bg-white/10 transition-colors">
                <div className="h-full aspect-square bg-[#0D6665] flex items-center justify-center p-4">
                  <Image src="/assets/themes/insight-icon.svg" alt="Insight" width={24} height={24} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 px-5 text-white/90 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] group-hover:text-white transition-colors">
                  Share Strategic Insights
                </div>
              </div>

              {/* List Item 2 */}
              <div className="w-full max-w-[500px] bg-white/5 border border-white/5 flex items-center h-[60px] group hover:bg-white/10 transition-colors">
                <div className="h-full aspect-square bg-[#0D6665] flex items-center justify-center p-4">
                  <Image src="/assets/themes/handshake-icon.svg" alt="Handshake" width={24} height={24} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 px-5 text-white/90 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] group-hover:text-white transition-colors">
                  Lead High-Impact Discussions
                </div>
              </div>

              {/* List Item 3 */}
              <div className="w-full max-w-[500px] bg-white/5 border border-white/5 flex items-center h-[60px] group hover:bg-white/10 transition-colors">
                <div className="h-full aspect-square bg-[#0D6665] flex items-center justify-center p-4">
                  <Image src="/assets/themes/global-icon.svg" alt="Global" width={24} height={24} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 px-5 text-white/90 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] group-hover:text-white transition-colors">
                  Contribute to National and Global Cyber Frameworks
                </div>
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[400px] xl:w-[450px] flex flex-col gap-0 flex-shrink-0 mx-auto lg:mx-0 relative">
            
            <div className="w-full aspect-[5/4] md:aspect-[4/3] lg:aspect-[5/4] relative z-10">
              <Image src="/assets/themes/themes-speaker-img.jpg" alt="Speaker" fill className="object-cover" />
            </div>
            <button className="w-full py-5 bg-[#B86A2E] hover:bg-[#9a5624] transition-colors text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans'] uppercase tracking-wider relative z-10">
              Apply to Speak
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}