import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Canvas3DBackground from '../../components/Canvas3DBackground';

export const metadata = {
  title: "Attend as a Startup - Vault 2047",
  description: "Attend as a Startup at Vault 2047",
};

export default function AttendAsStartupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        {/* Sub-Navigation */}
        <div className="w-full bg-[#040b0e] border-b border-white/10 flex justify-center items-center overflow-x-auto no-scrollbar">
          <div className="flex justify-center items-center px-6 min-w-max">
            <Link href="/attend-startup" className="px-4 py-4 border-b-4 border-[#B86A2E] flex justify-center items-center gap-1.5 transition-colors group">
              <span className="text-white group-hover:text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wide transition-colors">Attend as a Startup</span>
            </Link>
            <Link href="/exhibit-startup" className="px-4 py-4 border-b-4 border-transparent hover:border-[#B86A2E] flex justify-center items-center gap-1.5 transition-colors group">
              <span className="text-white/70 group-hover:text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wide transition-colors">Exhibit as a Startup</span>
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
              Startup <span className="text-[#B86A2E]">|</span> Attend as Startup
            </div>
            
            <div className="w-full flex justify-center items-center">
              <h1 className="max-w-[1073px] text-center text-white text-3xl md:text-5xl lg:text-[52px] font-bold font-['Orbitron'] leading-snug md:leading-tight drop-shadow-[0_0_15px_rgba(13,102,101,0.5)]">
                Attend as a Startup
              </h1>
            </div>

            <div className="w-full max-w-3xl text-center text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans']">
              Connect with global investors, showcase your innovations and accelerate your path to enterprise adoption.
            </div>
            
          </div>
        </div>

        {/* What You Get Section */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-gray-950 flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-start items-center lg:items-start gap-6 lg:gap-0">
            
            {/* Left side: Image Scroll Component */}
            <div className="w-full lg:w-[537px] h-64 md:h-80 lg:h-96 relative overflow-hidden flex-shrink-0 border border-white/10 rounded-sm">
              {/* Scroll track (animated) */}
              <div className="flex animate-scroll-left w-[300%] h-full hover:[animation-play-state:paused] items-center gap-6">
                <div className="h-[90%] w-[450px] flex-shrink-0 relative">
                  <Image className="object-cover rounded-md p-2.5" src="/assets/startups/2dbc403b030780f8605d854eda7ad2d074559960 (1).png" alt="Startup Showcase" fill />
                </div>
                <div className="h-[90%] w-[450px] flex-shrink-0 relative">
                  <Image className="object-cover rounded-md p-2.5" src="/assets/startups/7acb98c03f0fa63fa0d47fd04024745cd91add72 (1).png" alt="Networking" fill />
                </div>
                <div className="h-[90%] w-[450px] flex-shrink-0 relative">
                  <Image className="object-cover rounded-md p-2.5" src="/assets/startups/93438dad1ff86ac3ed410e9f44a5588217370ec3 (1).png" alt="Pitch" fill />
                </div>
                <div className="h-[90%] w-[450px] flex-shrink-0 relative">
                  <Image className="object-cover rounded-md p-2.5" src="/assets/startups/2dbc403b030780f8605d854eda7ad2d074559960 (1).png" alt="Startup Showcase" fill />
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
                <span className="text-white text-3xl md:text-4xl lg:text-4xl font-bold font-['Orbitron']">What You Get as a Startup at </span>
                <span className="text-[#B86A2E] text-3xl md:text-4xl lg:text-4xl font-bold font-['Orbitron']">VAULT2047</span>
              </div>
              
              <div className="self-stretch justify-start text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Vault2047 is built as a launchpad for cybersecurity and deep tech startups to move beyond visibility and into real-world impact.
              </div>
              
              <div className="self-stretch justify-start text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Gain direct access to capital, customers, and collaboration opportunities needed to scale your innovation within India’s rapidly evolving cybersecurity ecosystem.
              </div>
            </div>
            
          </div>
        </div>

        {/* Why Attend as a Startup (2x2 Grid) */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-neutral-900 flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-12">
            <h2 className="text-center text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
              Why Attend as a Startup
            </h2>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1 */}
              <div className="w-full h-64 md:h-72 relative bg-white/5 outline outline-1 outline-offset-[-1px] outline-[#B86A2E]/30 flex flex-col justify-center items-start overflow-hidden group">
                <div className="absolute right-0 top-0 w-3/5 md:w-1/2 h-full z-0 overflow-hidden">
                  <Image src="/assets/startups/4532265b34b6891806beda1b9f87bf0799caacf7 (1).png" fill className="object-cover object-left opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Investor Access" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
                </div>
                <div className="relative z-10 w-full md:w-[65%] p-6 md:p-8 flex flex-col justify-center items-start gap-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans']">Investor Access</h3>
                  <p className="text-white/80 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Connect with venture capitalists, sovereign funds, and institutional investors actively investing in cybersecurity, AI, and deep tech.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full h-64 md:h-72 relative bg-white/5 outline outline-1 outline-offset-[-1px] outline-[#B86A2E]/30 flex flex-col justify-center items-start overflow-hidden group">
                <div className="absolute right-0 top-0 w-3/5 md:w-1/2 h-full z-0 overflow-hidden">
                  <Image src="/assets/startups/cf68fed8c57db7054338666f906418c756614f8d (1).png" fill className="object-cover object-left opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Innovation Showcase" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
                </div>
                <div className="relative z-10 w-full md:w-[65%] p-6 md:p-8 flex flex-col justify-center items-start gap-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans']">Innovation Showcase</h3>
                  <p className="text-white/80 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Present your solutions directly to enterprise buyers, CISOs, and government stakeholders seeking deployable cyber technologies.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-full h-64 md:h-72 relative bg-white/5 outline outline-1 outline-offset-[-1px] outline-[#B86A2E]/30 flex flex-col justify-center items-start overflow-hidden group">
                <div className="absolute right-0 top-0 w-3/5 md:w-1/2 h-full z-0 overflow-hidden">
                  <Image src="/assets/startups/cd712229307ade65a443f49d43c5d7302a144bee (1).png" fill className="object-cover object-left opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Strategic Networking" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
                </div>
                <div className="relative z-10 w-full md:w-[65%] p-6 md:p-8 flex flex-col justify-center items-start gap-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans']">Strategic Networking</h3>
                  <p className="text-white/80 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Compress months of networking, partnerships, and business development into two highly focused days.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-full h-64 md:h-72 relative bg-white/5 outline outline-1 outline-offset-[-1px] outline-[#B86A2E]/30 flex flex-col justify-center items-start overflow-hidden group">
                <div className="absolute right-0 top-0 w-3/5 md:w-1/2 h-full z-0 overflow-hidden">
                  <Image src="/assets/startups/1f23bcade5b82355a5e709138ead923463f1b45d (1).png" fill className="object-cover object-left opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Enterprise & Government" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
                </div>
                <div className="relative z-10 w-full md:w-[65%] p-6 md:p-8 flex flex-col justify-center items-start gap-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans']">Enterprise & Government Connections</h3>
                  <p className="text-white/80 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Engage with decision-makers who can enable pilot programs, partnerships, and large-scale deployments.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Pricing Tiers Section */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-12">
            <h2 className="w-full text-center text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
              A Variety of Option to Attend
            </h2>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
              
              {/* Tier 1 */}
              <div className="w-full p-8 bg-gradient-to-b from-white/10 to-transparent border border-white/20 backdrop-blur-md flex flex-col justify-between items-start gap-8 hover:border-white/40 transition-colors">
                <div className="w-full flex flex-col justify-start items-start gap-6">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="px-3 py-1 opacity-0 bg-teal-800 self-start inline-flex justify-center items-center mb-2">
                      <span className="text-white text-xs font-normal">Recommended</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold font-['Orbitron'] uppercase">STARTUP DELEGATE PASS</h3>
                    <p className="text-white/80 text-sm font-normal font-['IBM_Plex_Sans'] min-h-[40px]">Ideal for early-stage founders looking to explore opportunities, network, and gain ecosystem access.</p>
                  </div>
                  
                  <div className="w-full h-px bg-white/20"></div>
                  
                  <div className="w-full flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-[#B86A2E]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p className="text-neutral-400 text-sm font-normal font-['IBM_Plex_Sans']">Access to keynotes and selected sessions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-[#B86A2E]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p className="text-neutral-400 text-sm font-normal font-['IBM_Plex_Sans']">Entry to networking zones and exhibition floor</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-[#B86A2E]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p className="text-neutral-400 text-sm font-normal font-['IBM_Plex_Sans']">Exposure to investors and enterprise stakeholders</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-4 mt-8 border border-[#B86A2E] text-white hover:bg-[#B86A2E] text-base font-medium transition-colors">
                  Get Your Pass
                </button>
              </div>

              {/* Tier 2 (Highlighted) */}
              <div className="w-full p-8 bg-gradient-to-b from-white/10 via-zinc-400/5 to-transparent border border-white/60 backdrop-blur-md flex flex-col justify-between items-start gap-8 hover:border-white/80 transition-colors transform md:-translate-y-4 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B86A2E] to-transparent"></div>
                <div className="w-full flex flex-col justify-start items-start gap-6">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="px-3 py-1 bg-[#0D6665] self-start inline-flex justify-center items-center mb-2 shadow-md">
                      <span className="text-white text-xs font-normal">Recommended</span>
                    </div>
                    <h3 className="text-[#B86A2E] text-2xl font-bold font-['Orbitron'] uppercase">STARTUP ALL-ACCESS PASS</h3>
                    <p className="text-white/80 text-sm font-normal font-['IBM_Plex_Sans'] min-h-[40px]">Designed for startups ready to actively engage, pitch, and scale within the ecosystem.</p>
                  </div>
                  
                  <div className="w-full h-px bg-white/40"></div>
                  
                  <div className="w-full flex flex-col gap-4">
                    <p className="text-white/80 text-sm italic">Everything in Delegate, plus:</p>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p className="text-neutral-300 text-sm font-normal font-['IBM_Plex_Sans']">Full access to all sessions and networking opportunities</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p className="text-neutral-300 text-sm font-normal font-['IBM_Plex_Sans']">Priority access to investor and enterprise meetings</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p className="text-neutral-300 text-sm font-normal font-['IBM_Plex_Sans']">Eligibility to participate in The Cyber Foundry</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-4 mt-8 bg-[#B86A2E] hover:bg-[#9a5624] text-white text-base font-medium transition-colors shadow-lg">
                  Get Your Pass
                </button>
              </div>

              {/* Tier 3 */}
              <div className="w-full p-8 bg-gradient-to-b from-white/10 to-transparent border border-white/20 backdrop-blur-md flex flex-col justify-between items-start gap-8 hover:border-white/40 transition-colors">
                <div className="w-full flex flex-col justify-start items-start gap-6">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="px-3 py-1 opacity-0 bg-teal-800 self-start inline-flex justify-center items-center mb-2">
                      <span className="text-white text-xs font-normal">Recommended</span>
                    </div>
                    <h3 className="text-white text-2xl font-bold font-['Orbitron'] uppercase">STARTUP EXHIBITOR PASS</h3>
                    <p className="text-white/80 text-sm font-normal font-['IBM_Plex_Sans'] min-h-[40px]">For startups looking to showcase solutions and drive business outcomes.</p>
                  </div>
                  
                  <div className="w-full h-px bg-white/20"></div>
                  
                  <div className="w-full flex flex-col gap-4">
                    <p className="text-white/80 text-sm italic">Everything in all-access, plus:</p>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-[#B86A2E]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p className="text-neutral-400 text-sm font-normal font-['IBM_Plex_Sans']">Dedicated exhibition pod in Innovation Zone</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-[#B86A2E]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p className="text-neutral-400 text-sm font-normal font-['IBM_Plex_Sans']">Live demos and product showcases</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-[#B86A2E]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <p className="text-neutral-400 text-sm font-normal font-['IBM_Plex_Sans']">Direct engagement with buyers, CISOs, and policymakers</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-4 mt-8 border border-[#B86A2E] text-white hover:bg-[#B86A2E] text-base font-medium transition-colors">
                  Get Your Pass
                </button>
              </div>

            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

