import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import EcosystemHeroBackground from '../../components/EcosystemHeroBackground';

export const metadata = {
  title: "Sponsors - Vault 2047",
  description: "Strategic Partners of Vault2047.",
};

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        {/* Sub-Navigation */}
        <div className="w-full bg-[#040b0e] border-b border-white/10 sticky top-[72px] z-40 flex justify-center items-center overflow-x-auto hide-scrollbar">
          <div className="flex justify-center items-center gap-2 md:gap-8 min-w-max px-6">
            
            <Link href="/sponsors" className="px-4 py-4 border-b-4 border-teal-500 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors">
              <div className="text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight">Sponsors</div>
            </Link>
            
            <Link href="/exhibitors" className="px-4 py-4 border-b-4 border-transparent hover:border-teal-500/50 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group">
              <div className="text-white/70 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight group-hover:text-white transition-colors">Exhibitors</div>
            </Link>
            
            <Link href="/media-partners" className="px-4 py-4 border-b-4 border-transparent hover:border-teal-500/50 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group">
              <div className="text-white/70 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight group-hover:text-white transition-colors">Media Partners</div>
            </Link>
            
            <Link href="/association-partners" className="px-4 py-4 border-b-4 border-transparent hover:border-teal-500/50 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group">
              <div className="text-white/70 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight group-hover:text-white transition-colors">Association Partners</div>
            </Link>
            
          </div>
        </div>
        
        {/* Sponsors Hero Section */}
        <div className="w-full relative self-stretch h-[320px] md:h-[450px] px-6 lg:px-32 bg-[#040b0e] flex flex-col justify-center items-center gap-5 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0 bg-black">
             <EcosystemHeroBackground />
             <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] to-transparent z-10 pointer-events-none" />
          </div>
          
          {/* Corner Brackets */}
          <div className="hidden lg:block absolute top-12 left-[20%] w-20 h-24 border-t-[12px] border-l-[12px] border-[#925422] opacity-60 z-10" />
          <div className="hidden lg:block absolute bottom-12 right-[20%] w-20 h-24 border-b-[12px] border-r-[12px] border-[#925422] opacity-60 z-10" />

          <div className="w-full max-w-[1200px] flex flex-col items-center gap-5 relative z-10 pointer-events-none">
            
            <div className="w-full text-center text-white/80 text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[4px] md:tracking-widest">
              Ecosystem / Sponsors
            </div>
            
            <div className="w-full flex justify-center items-center mt-2">
              <h1 className="max-w-[1073px] text-center text-white text-3xl md:text-5xl lg:text-[52px] font-bold font-['Orbitron'] leading-snug md:leading-tight drop-shadow-[0_0_15px_rgba(13,102,101,0.5)]">
                Strategic Partners of
              </h1>
            </div>
            
            {/* Custom Graphic from Snippet */}
            <div className="w-64 h-32 relative mt-4 scale-75 md:scale-100">
              <div className="w-8 h-9 left-[165.44px] top-[22.49px] absolute bg-[#925422]" />
              <div className="w-8 h-9 left-[183.43px] top-[22.49px] absolute bg-[#925422]" />
              <div className="w-10 h-9 left-[115.72px] top-[22.49px] absolute bg-teal-800" />
              <div className="w-12 h-9 left-[22.50px] top-[22.49px] absolute bg-teal-800" />
              <div className="w-12 h-9 left-[61.97px] top-[22.49px] absolute bg-teal-800" />
              <div className="w-5 h-2.5 left-[219.27px] top-[22.49px] absolute bg-teal-800" />
              <div className="w-7 h-9 left-[202.03px] top-[71.72px] absolute bg-teal-800" />
              <div className="w-8 h-9 left-[143.54px] top-[71.77px] absolute bg-teal-800" />
              <div className="w-9 h-9 left-[86.40px] top-[71.77px] absolute bg-teal-800" />
              <div className="w-9 h-9 left-[29.92px] top-[71.77px] absolute bg-teal-800" />
            </div>

          </div>
        </div>

        {/* Meet the Partners Section */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-neutral-900 flex flex-col justify-center items-center gap-16 overflow-hidden border-t border-white/5">
          
          <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Orbitron']">
            Meet the Partners Driving Cyber-Resilience
          </h2>
          
          <div className="w-full max-w-[1200px] flex flex-col gap-16 lg:gap-20">
            
            {/* Powered By */}
            <div className="w-full flex flex-col justify-start items-center gap-8 md:gap-12">
              <div className="w-full flex justify-center items-center gap-6">
                <div className="flex-1 h-px bg-amber-700/60" />
                <span className="text-amber-500 text-lg md:text-xl font-semibold font-['IBM_Plex_Sans'] tracking-widest uppercase">Powered By</span>
                <div className="flex-1 h-px bg-amber-700/60" />
              </div>
              <div className="w-full h-64 md:h-96 relative bg-white border border-neutral-700 flex justify-center items-center rounded-sm shadow-xl hover:shadow-[0_0_30px_rgba(184,106,46,0.3)] transition-shadow duration-300">
                <Image src="/Vault-2047/assets/brands/brand-6.png" alt="Powered By Partner" fill className="object-contain p-12 md:p-24" />
              </div>
            </div>

            {/* Lead Sponsors */}
            <div className="w-full flex flex-col justify-start items-center gap-8 md:gap-12">
              <div className="w-full flex justify-center items-center gap-6">
                <div className="flex-1 h-px bg-teal-800/60" />
                <span className="text-teal-500 text-lg md:text-xl font-semibold font-['IBM_Plex_Sans'] tracking-widest uppercase">Lead Sponsors</span>
                <div className="flex-1 h-px bg-teal-800/60" />
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="w-full h-48 md:h-80 relative bg-white border border-neutral-700 flex justify-center items-center rounded-sm hover:shadow-[0_0_20px_rgba(13,102,101,0.2)] transition-shadow duration-300">
                  <Image src="/Vault-2047/assets/brands/brand-3.png" alt="Lead Sponsor 1" fill className="object-contain p-10 md:p-16" />
                </div>
                <div className="w-full h-48 md:h-80 relative bg-white border border-neutral-700 flex justify-center items-center rounded-sm hover:shadow-[0_0_20px_rgba(13,102,101,0.2)] transition-shadow duration-300">
                  <Image src="/Vault-2047/assets/brands/brand-4.png" alt="Lead Sponsor 2" fill className="object-contain p-10 md:p-16" />
                </div>
              </div>
            </div>

            {/* Platinum */}
            <div className="w-full flex flex-col justify-start items-center gap-8 md:gap-12">
              <div className="w-full flex justify-center items-center gap-6">
                <div className="flex-1 h-px bg-stone-500/30" />
                <span className="text-neutral-400 text-lg md:text-xl font-semibold font-['IBM_Plex_Sans'] tracking-widest uppercase">Platinum</span>
                <div className="flex-1 h-px bg-stone-500/30" />
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {[1, 2, 5].map((num) => (
                  <div key={`plat-${num}`} className="w-full h-40 md:h-64 relative bg-white border border-neutral-700 flex justify-center items-center rounded-sm hover:border-neutral-400 transition-colors">
                    <Image src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`} alt={`Platinum Sponsor ${num}`} fill className="object-contain p-8 md:p-12" />
                  </div>
                ))}
              </div>
            </div>

            {/* Gold */}
            <div className="w-full flex flex-col justify-start items-center gap-8 md:gap-12">
              <div className="w-full flex justify-center items-center gap-6">
                <div className="flex-1 h-px bg-stone-500/30" />
                <span className="text-neutral-400 text-lg md:text-xl font-semibold font-['IBM_Plex_Sans'] tracking-widest uppercase">Gold</span>
                <div className="flex-1 h-px bg-stone-500/30" />
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                {[7, 8, 9, 10].map((num) => (
                  <div key={`gold-${num}`} className="w-full h-32 md:h-44 relative bg-white border border-neutral-700 flex justify-center items-center rounded-sm hover:border-neutral-400 transition-colors">
                    <Image src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`} alt={`Gold Sponsor ${num}`} fill className="object-contain p-6 md:p-10" />
                  </div>
                ))}
              </div>
            </div>

            {/* Silver */}
            <div className="w-full flex flex-col justify-start items-center gap-8 md:gap-12">
              <div className="w-full flex justify-center items-center gap-6">
                <div className="flex-1 h-px bg-stone-500/30" />
                <span className="text-neutral-400 text-lg md:text-xl font-semibold font-['IBM_Plex_Sans'] tracking-widest uppercase">Silver</span>
                <div className="flex-1 h-px bg-stone-500/30" />
              </div>
              <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6">
                {[11, 1, 2, 3, 4, 5].map((num, i) => (
                  <div key={`silv-${i}`} className="w-full h-20 md:h-24 relative bg-white border border-neutral-700 flex justify-center items-center rounded-sm hover:border-neutral-400 transition-colors">
                    <Image src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`} alt={`Silver Sponsor ${num}`} fill className="object-contain p-4 md:p-6" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full relative py-24 lg:py-32 flex justify-center items-center bg-gray-950 overflow-hidden border-t border-white/5">
          
          {/* Corner Brackets */}
          <div className="hidden lg:block absolute top-16 left-16 w-32 h-32 border-t-[16px] border-l-[16px] border-[#925422] opacity-80" />
          <div className="hidden lg:block absolute bottom-16 right-16 w-32 h-32 border-b-[16px] border-r-[16px] border-[#925422] opacity-80" />

          {/* Inner Content Box */}
          <div className="w-full max-w-[1200px] relative px-6 py-20 flex flex-col justify-start items-center gap-10 overflow-hidden">
            
            {/* Background Image & Overlays for the inner box */}
            <div className="absolute inset-0 z-0">
              <Image src="/Vault-2047/assets/ecosystem/b497463f5699922e1b8d779b821f6b1668397589 (7).jpg" alt="Join the Ecosystem" fill className="object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-950/0 to-[#0e4343]/80" />
            </div>

            <div className="relative z-10 flex flex-col justify-start items-center gap-6 w-full max-w-[800px]">
              <div className="flex justify-center items-center gap-4">
                <div className="w-12 h-px bg-teal-500" />
                <span className="text-gray-300 text-sm md:text-base font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[3.60px]">
                  Join us
                </span>
                <div className="w-12 h-px bg-teal-500" />
              </div>
              <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Orbitron'] leading-tight">
                Looking to Join the Ecosystem?
              </h2>
              <p className="text-center text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] max-w-[750px]">
                Connect with the leaders, innovators, and decision-makers shaping the future of cyber-resilience.
              </p>
            </div>
            
            <button className="relative z-10 px-8 py-4 bg-[#B86A2E] hover:bg-[#9c5926] transition-colors flex justify-center items-center group">
              <span className="text-white text-base md:text-lg font-medium font-['IBM_Plex_Sans'] group-hover:scale-105 transition-transform">
                Apply to Sponsor
              </span>
            </button>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

