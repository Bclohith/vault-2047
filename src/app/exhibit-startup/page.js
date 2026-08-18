import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Canvas3DBackground from '../../components/Canvas3DBackground';

export const metadata = {
  title: "Exhibit as a Startup - Vault 2047",
  description: "Exhibit your startup solutions at Vault 2047.",
};

export default function ExhibitStartupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      
      {/* Inline styles for the horizontal scroll animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll-left {
          animation: scrollHorizontal 20s linear infinite;
        }
      `}} />

      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        {/* Sub-Navigation */}
        <div className="w-full bg-[#040b0e] border-b border-white/10 flex justify-center items-center overflow-x-auto no-scrollbar">
          <div className="flex justify-center items-center px-6 min-w-max">
            <Link href="/attend-startup" className="px-4 py-4 border-b-4 border-transparent hover:border-[#B86A2E] flex justify-center items-center gap-1.5 transition-colors group">
              <span className="text-white/70 group-hover:text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wide transition-colors">Attend as a Startup</span>
            </Link>
            <Link href="/exhibit-startup" className="px-4 py-4 border-b-4 border-[#B86A2E] flex justify-center items-center gap-1.5 transition-colors group">
              <span className="text-white group-hover:text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wide transition-colors">Exhibit as a Startup</span>
            </Link>
            <Link href="/pitch-competition" className="px-4 py-4 border-b-4 border-transparent hover:border-[#B86A2E] flex justify-center items-center gap-1.5 transition-colors group">
              <span className="text-white/70 group-hover:text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wide transition-colors">The Cyber Foundry Pitch Competition</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[320px] md:h-[450px] px-6 lg:px-32 bg-[#040b0e] flex flex-col justify-center items-center gap-5 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0 bg-black">
             <Canvas3DBackground />
             <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] to-transparent z-10 pointer-events-none" />
          </div>

          <div className="w-full max-w-[1200px] flex flex-col items-center gap-6 relative z-10 pointer-events-none">
            
            <div className="w-full text-center text-white/80 text-sm md:text-base lg:text-lg font-bold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-widest">
              Startup <span className="text-[#B86A2E]">|</span> Exhibit as Startup
            </div>
            
            <div className="w-full flex justify-center items-center">
              <h1 className="max-w-[1073px] text-center text-white text-3xl md:text-5xl lg:text-[52px] font-bold font-['Orbitron'] leading-snug md:leading-tight drop-shadow-[0_0_15px_rgba(13,102,101,0.5)]">
                Showcase your Solutions, Attract Investors &amp; Enterprise Buyers
              </h1>
            </div>
            
          </div>
        </div>

        {/* Move Beyond Pitch Decks Section */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-gray-950 flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-start items-center lg:items-start gap-6 lg:gap-0">
            
            {/* Left side: Image Scroll Component */}
            <div className="w-full lg:w-[537px] h-64 md:h-80 lg:h-96 relative overflow-hidden flex-shrink-0 border border-white/10 rounded-sm">
              {/* Scroll track (animated) */}
              <div className="flex animate-scroll-left w-[300%] h-full hover:[animation-play-state:paused] items-center gap-6">
                <div className="h-[90%] w-[450px] flex-shrink-0 relative">
                  <Image className="object-cover rounded-md p-2.5" src="/assets/startups/7de4bcadf35d4c72527343a24f080286973ff63c (1).png" alt="Showcase 1" fill />
                </div>
                <div className="h-[90%] w-[450px] flex-shrink-0 relative">
                  <Image className="object-cover rounded-md p-2.5" src="/assets/startups/5cffbd297a7adb1b0fdd446468ea029a83b66f93 (1).png" alt="Showcase 2" fill />
                </div>
                <div className="h-[90%] w-[450px] flex-shrink-0 relative">
                  <Image className="object-cover rounded-md p-2.5" src="/assets/startups/5cf7c7c489429f385ba5bb323cfb76f645cd8539 (1).png" alt="Showcase 3" fill />
                </div>
                <div className="h-[90%] w-[450px] flex-shrink-0 relative">
                  <Image className="object-cover rounded-md p-2.5" src="/assets/startups/7de4bcadf35d4c72527343a24f080286973ff63c (1).png" alt="Showcase 1" fill />
                </div>
              </div>
              {/* Gradient Overlay for fade effect */}
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-44 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none" />
            </div>

            {/* Spacer */}
            <div className="hidden lg:block w-20 h-full relative" />

            {/* Right side: Text Content */}
            <div className="flex-1 flex flex-col justify-start items-start gap-6 lg:py-8">
              <div className="self-stretch justify-start">
                <span className="text-white text-3xl md:text-4xl lg:text-4xl font-bold font-['Orbitron'] leading-tight">Move Beyond Pitch Decks</span>
              </div>
              
              <div className="self-stretch justify-start text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Vault2047 is where cybersecurity innovation moves from concept to real-world deployment.
              </div>
              
              <div className="self-stretch justify-start text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                At the summit, you have the opportunity to demonstrate your solutions directly to the people who matter: CISOs, enterprise buyers, policymakers, and investors actively seeking technologies to secure critical infrastructure.
              </div>
            </div>
            
          </div>
        </div>

        {/* Why Exhibit at Vault2047 */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-neutral-900 flex flex-col justify-center items-center gap-12 overflow-hidden">
          <div className="w-full text-center text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
            Why Exhibit at Vault2047
          </div>
          
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="w-full p-8 bg-gradient-to-b from-stone-950 to-stone-900 outline outline-1 outline-amber-700/50 flex flex-col justify-start items-start gap-6 hover:outline-amber-700 transition-colors">
              <div className="w-full h-40 flex justify-center items-center relative bg-[#B86A2E]/5 rounded-sm">
                 <img src="/assets/High-Value-Prospects.svg" alt="High-Value Prospects" className="w-16 h-16 object-contain" />
              </div>
              <div className="w-full h-px bg-amber-700/30" />
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-xl font-semibold font-['IBM_Plex_Sans'] leading-snug">High-Value <br className="hidden lg:block"/>Prospects</h3>
                <p className="text-white/70 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">Engage with enterprise leaders, CISOs, and government stakeholders actively looking for cybersecurity solutions.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full p-8 bg-gradient-to-b from-stone-950 to-stone-900 outline outline-1 outline-amber-700/50 flex flex-col justify-start items-start gap-6 hover:outline-amber-700 transition-colors">
              <div className="w-full h-40 flex justify-center items-center relative bg-[#B86A2E]/5 rounded-sm">
                 <img src="/assets/Strategic-Lead-Generation.svg" alt="Strategic Lead Generation" className="w-16 h-16 object-contain" />
              </div>
              <div className="w-full h-px bg-amber-700/30" />
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-xl font-semibold font-['IBM_Plex_Sans'] leading-snug">Strategic Lead <br className="hidden lg:block"/>Generation</h3>
                <p className="text-white/70 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">Build a qualified pipeline through curated meetings, networking, and direct interactions with decision-makers.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full p-8 bg-gradient-to-b from-stone-950 to-stone-900 outline outline-1 outline-amber-700/50 flex flex-col justify-start items-start gap-6 hover:outline-amber-700 transition-colors">
              <div className="w-full h-40 flex justify-center items-center relative bg-[#B86A2E]/5 rounded-sm">
                 <img src="/assets/Global-National-Visibility.svg" alt="Global & National Visibility" className="w-16 h-16 object-contain" />
              </div>
              <div className="w-full h-px bg-amber-700/30" />
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-xl font-semibold font-['IBM_Plex_Sans'] leading-snug">Global &amp; <br className="hidden lg:block"/>National Visibility</h3>
                <p className="text-white/70 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">Position your startup at the forefront of India’s cyber ecosystem and gain exposure to global investors and partners.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full p-8 bg-gradient-to-b from-stone-950 to-stone-900 outline outline-1 outline-amber-700/50 flex flex-col justify-start items-start gap-6 hover:outline-amber-700 transition-colors">
              <div className="w-full h-40 flex justify-center items-center relative bg-[#B86A2E]/5 rounded-sm">
                 <img src="/assets/Ecosystem-Integration.svg" alt="Ecosystem Integration" className="w-16 h-16 object-contain" />
              </div>
              <div className="w-full h-px bg-amber-700/30" />
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-xl font-semibold font-['IBM_Plex_Sans'] leading-snug">Ecosystem <br className="hidden lg:block"/>Integration</h3>
                <p className="text-white/70 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">Become part of a larger cyber resilience ecosystem connecting startups with enterprises, policy bodies, and innovation platforms.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Startup Exhibition Options */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-gray-950 flex flex-col justify-center items-center gap-12 overflow-hidden border-t border-white/5">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-4">
            <h2 className="text-center text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
              Startup Exhibition Options
            </h2>
            <p className="text-center text-white/80 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] max-w-2xl">
              Choose the format that aligns with your growth stage
            </p>
          </div>
          
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* STARTUP PODS */}
            <div className="w-full p-8 md:p-14 bg-black/40 outline outline-1 outline-offset-[-1px] outline-zinc-800 flex flex-col justify-start items-start gap-8 hover:outline-amber-700/50 transition-colors group">
              <div className="w-full flex flex-col justify-start items-start gap-6">
                <h3 className="text-amber-700 text-2xl font-bold font-['Orbitron'] tracking-wide">
                  STARTUP PODS
                </h3>
                <p className="text-white text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Designed for early to growth-stage cybersecurity startups to showcase solutions and engage directly with stakeholders.
                </p>
                <div className="w-full h-px bg-neutral-600/50" />
                <ul className="w-full flex flex-col gap-3 text-white/70 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">•</span> Dedicated exhibition pod in a high-traffic innovation zone
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">•</span> Branding, signage, and demo-ready infrastructure
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">•</span> Access to networking and investor interactions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-700 mt-1">•</span> Visibility across the Vault2047 ecosystem
                  </li>
                </ul>
              </div>
              <button className="w-full md:w-56 px-6 py-4 outline outline-1 outline-amber-700 bg-transparent hover:bg-amber-700 transition-colors flex justify-center items-center group-hover:shadow-[0_0_15px_rgba(184,106,46,0.3)]">
                <span className="text-white text-base font-medium font-['IBM_Plex_Sans'] uppercase tracking-widest">Enquire Now</span>
              </button>
            </div>

            {/* DEMO LABS */}
            <div className="w-full p-8 md:p-14 bg-black/40 outline outline-1 outline-offset-[-1px] outline-zinc-800 flex flex-col justify-start items-start gap-8 hover:outline-teal-800/50 transition-colors group">
              <div className="w-full flex flex-col justify-start items-start gap-6">
                <h3 className="text-teal-800 text-2xl font-bold font-['Orbitron'] tracking-wide">
                  DEMO LABS
                </h3>
                <p className="text-white text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Designed for startups with advanced solutions requiring deeper technical engagement and demonstrations.
                </p>
                <div className="w-full h-px bg-neutral-600/50" />
                <ul className="w-full flex flex-col gap-3 text-white/70 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-800 mt-1">•</span> Custom-built demo environments for live solution walkthroughs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-800 mt-1">•</span> Infrastructure support for showcasing complex technologies
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-800 mt-1">•</span> Priority engagement with enterprise buyers and CISOs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-800 mt-1">•</span> Enhanced visibility within innovation and enterprise zones
                  </li>
                </ul>
              </div>
              <button className="w-full md:w-56 px-6 py-4 outline outline-1 outline-teal-800 bg-transparent hover:bg-teal-800 transition-colors flex justify-center items-center group-hover:shadow-[0_0_15px_rgba(13,102,101,0.3)]">
                <span className="text-white text-base font-medium font-['IBM_Plex_Sans'] uppercase tracking-widest">Enquire Now</span>
              </button>
            </div>

          </div>
        </div>

        {/* Scrolling Image Gallery Section */}
        <div className="w-full py-16 md:py-24 bg-neutral-900 flex flex-col justify-center items-center overflow-hidden">
          <div className="w-full max-w-[1200px] h-64 md:h-80 lg:h-96 relative overflow-hidden flex items-center">
            
            <div className="flex animate-scroll-left w-[200%] h-full hover:[animation-play-state:paused] items-center gap-6">
              {/* First Set */}
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/42ba68c1d6f2fce56f8308136e25c55d9a77861f (1).png" alt="Gallery 1" fill />
              </div>
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/0e807f50d348a83669a15d756d343f61a53b4b28 (1).png" alt="Gallery 2" fill />
              </div>
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/77fcc009aae59d39efc16c22a2ba3d704476eca2 (1).png" alt="Gallery 3" fill />
              </div>
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/27b13e47136b81a5e77beba96afbb8dff2eadfca (1).png" alt="Gallery 4" fill />
              </div>
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/9aecde0b0cb2c3d7cf15ecf2cac267a0f259cb3d (1).png" alt="Gallery 5" fill />
              </div>
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/a715a836e742bdcfaea0ed9de7dd124bb92fa785 (1).png" alt="Gallery 6" fill />
              </div>

              {/* Second Set (Duplicate for seamless scroll) */}
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/42ba68c1d6f2fce56f8308136e25c55d9a77861f (1).png" alt="Gallery 1" fill />
              </div>
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/0e807f50d348a83669a15d756d343f61a53b4b28 (1).png" alt="Gallery 2" fill />
              </div>
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/77fcc009aae59d39efc16c22a2ba3d704476eca2 (1).png" alt="Gallery 3" fill />
              </div>
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/27b13e47136b81a5e77beba96afbb8dff2eadfca (1).png" alt="Gallery 4" fill />
              </div>
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/9aecde0b0cb2c3d7cf15ecf2cac267a0f259cb3d (1).png" alt="Gallery 5" fill />
              </div>
              <div className="h-full w-[400px] md:w-[520px] flex-shrink-0 relative">
                <Image className="object-cover rounded-md p-2.5" src="/assets/startups/a715a836e742bdcfaea0ed9de7dd124bb92fa785 (1).png" alt="Gallery 6" fill />
              </div>
            </div>

            {/* Gradient Overlays for smooth entry/exit */}
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none" />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

