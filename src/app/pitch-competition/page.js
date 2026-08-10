import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Canvas3DBackground from '../../components/Canvas3DBackground';

export const metadata = {
  title: "Pitch Competition - Vault 2047",
  description: "The Cyber Foundry Pitch Competition at Vault 2047.",
};

export default function PitchCompetitionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        {/* Sub-Navigation */}
        <div className="w-full bg-[#040b0e] border-b border-white/10 flex justify-center items-center overflow-x-auto no-scrollbar">
          <div className="flex justify-center items-center px-6 min-w-max">
            <Link href="/attend-startup" className="px-4 py-4 border-b-4 border-transparent hover:border-[#B86A2E] flex justify-center items-center gap-1.5 transition-colors group">
              <span className="text-white/70 group-hover:text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wide transition-colors">Attend as a Startup</span>
            </Link>
            <Link href="/exhibit-startup" className="px-4 py-4 border-b-4 border-transparent hover:border-[#B86A2E] flex justify-center items-center gap-1.5 transition-colors group">
              <span className="text-white/70 group-hover:text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wide transition-colors">Exhibit as a Startup</span>
            </Link>
            <Link href="/pitch-competition" className="px-4 py-4 border-b-4 border-[#B86A2E] flex justify-center items-center gap-1.5 transition-colors group">
              <span className="text-white group-hover:text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wide transition-colors">The Cyber Foundry Pitch Competition</span>
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
              Startup <span className="text-[#B86A2E]">|</span> Pitch Competition
            </div>
            
            <div className="w-full flex justify-center items-center">
              <h1 className="max-w-[1073px] text-center text-white text-3xl md:text-5xl lg:text-[52px] font-bold font-['Orbitron'] leading-snug md:leading-tight drop-shadow-[0_0_15px_rgba(13,102,101,0.5)]">
                The Cyber Foundry Pitch Competition
              </h1>
            </div>
            
          </div>
        </div>

        {/* The Cyber Foundry Glass Card Section */}
        <div className="w-full relative py-16 md:py-24 lg:py-32 flex justify-center items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image src="/Vault-2047/assets/startups/8d7be89ce2da469e8137543bf9dcb17046b145c1 (2).jpg" alt="Background" fill className="object-cover opacity-30 blur-sm" />
            <div className="absolute inset-0 bg-gray-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] via-transparent to-[#040b0e]" />
          </div>

          <div className="w-full max-w-[1200px] px-6 lg:px-12 relative z-10 flex flex-col items-center">
            
            <div className="w-full p-8 md:p-12 bg-white/5 outline outline-1 outline-amber-700/30 backdrop-blur-xl flex flex-col lg:flex-row justify-start items-center lg:items-stretch gap-8 lg:gap-12 rounded-sm shadow-2xl">
              
              {/* Left Image */}
              <div className="w-full lg:w-[45%] h-64 md:h-80 lg:h-96 relative flex-shrink-0">
                <Image src="/Vault-2047/assets/startups/b5e2af53346cfaa5c84da9720afd94f6f74e6488 (2).jpg" alt="The Cyber Foundry" fill className="object-cover rounded-sm shadow-lg" />
              </div>

              {/* Right Text */}
              <div className="flex-1 flex flex-col justify-center items-start gap-6">
                <h2 className="text-amber-700 text-3xl md:text-4xl font-bold font-['Orbitron'] tracking-wide">
                  The Cyber Foundry
                </h2>
                
                <p className="text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  The Cyber Foundry is a high-impact platform designed to connect India’s most promising cybersecurity startups with global capital, enterprise demand, and policy stakeholders.
                </p>
                
                <p className="text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  We bring together founders, investors, CISOs, and government leaders, creating a direct pipeline from innovation to implementation allowing cyber security startups to move beyond ideas and into <strong className="text-white font-bold">real-world deployment, funding, and scale.</strong>
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Why Participate in the Cyber Foundry */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-neutral-900 flex flex-col justify-center items-center gap-12 overflow-hidden">
          <div className="w-full text-center text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
            Why Participate in the Cyber Foundry
          </div>
          
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="w-full p-8 bg-gradient-to-b from-stone-950 to-stone-900 outline outline-1 outline-amber-700/50 flex flex-col justify-start items-start gap-6 hover:outline-amber-700 transition-colors">
              <div className="w-full h-40 flex justify-center items-center relative bg-[#B86A2E]/5 rounded-sm">
                 <img src="/Vault-2047/assets/startups/Icon (4).svg" alt="Strategic Capital Access" className="w-16 h-16 object-contain" />
              </div>
              <div className="w-full h-px bg-amber-700/30" />
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-xl font-semibold font-['IBM_Plex_Sans'] leading-snug">Strategic Capital <br className="hidden lg:block"/>Access</h3>
                <p className="text-white/70 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">Pitch directly to global venture capitalists, sovereign funds, and institutional investors actively deploying capital in cybersecurity and deep tech.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full p-8 bg-gradient-to-b from-stone-950 to-stone-900 outline outline-1 outline-amber-700/50 flex flex-col justify-start items-start gap-6 hover:outline-amber-700 transition-colors">
              <div className="w-full h-40 flex justify-center items-center relative bg-[#B86A2E]/5 rounded-sm">
                 <img src="/Vault-2047/assets/startups/oui_integration-general.svg" alt="Enterprise & Government Integration" className="w-16 h-16 object-contain" />
              </div>
              <div className="w-full h-px bg-amber-700/30" />
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-xl font-semibold font-['IBM_Plex_Sans'] leading-snug">Enterprise &amp; Government <br className="hidden lg:block"/>Integration</h3>
                <p className="text-white/70 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">Unlock partnerships with enterprises, CISOs, and public sector organisations seeking real-world cyber solutions.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full p-8 bg-gradient-to-b from-stone-950 to-stone-900 outline outline-1 outline-amber-700/50 flex flex-col justify-start items-start gap-6 hover:outline-amber-700 transition-colors">
              <div className="w-full h-40 flex justify-center items-center relative bg-[#B86A2E]/5 rounded-sm">
                 <img src="/Vault-2047/assets/startups/carbon_policy.svg" alt="Policy & Industry Visibility" className="w-16 h-16 object-contain" />
              </div>
              <div className="w-full h-px bg-amber-700/30" />
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-xl font-semibold font-['IBM_Plex_Sans'] leading-snug">Policy &amp; <br className="hidden lg:block"/>Industry Visibility</h3>
                <p className="text-white/70 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">Showcase your innovation before policymakers and national security stakeholders shaping cyber frameworks and infrastructure.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full p-8 bg-gradient-to-b from-stone-950 to-stone-900 outline outline-1 outline-amber-700/50 flex flex-col justify-start items-start gap-6 hover:outline-amber-700 transition-colors">
              <div className="w-full h-40 flex justify-center items-center relative bg-[#B86A2E]/5 rounded-sm">
                 <img src="/Vault-2047/assets/startups/Layer_1 (15).svg" alt="Elite Mentorship & Validation" className="w-16 h-16 object-contain" />
              </div>
              <div className="w-full h-px bg-amber-700/30" />
              <div className="flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-xl font-semibold font-['IBM_Plex_Sans'] leading-snug">Elite Mentorship &amp; <br className="hidden lg:block"/>Validation</h3>
                <p className="text-white/70 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">Refine your product and pitch with insights from cybersecurity leaders, investors, and domain experts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What's at Stake Section */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-gray-950 flex justify-center items-center overflow-hidden border-t border-white/5">
          <div className="w-full max-w-[1200px] flex flex-col gap-12">
            
            <div className="w-full text-center lg:text-left">
              <h2 className="text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
                What's at Stake
              </h2>
            </div>
            
            <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-12">
              
              {/* Left Column: Numbered points + Image */}
              <div className="flex-1 flex flex-col justify-start items-start gap-8">
                
                {/* Numbered Items */}
                <div className="w-full flex flex-col gap-4">
                  {/* Item 1 */}
                  <div className="w-full bg-white/5 outline outline-1 outline-white/10 flex items-stretch hover:outline-teal-800 transition-colors">
                    <div className="w-20 md:w-24 bg-teal-800 flex justify-center items-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold font-['Orbitron']">1</span>
                    </div>
                    <div className="flex-1 p-4 md:p-6 flex flex-col justify-center items-start gap-2">
                      <h3 className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans']">The Pitch</h3>
                      <p className="text-white/70 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Present your solution live to an elite panel of investors, enterprise leaders, and cybersecurity experts.</p>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="w-full bg-white/5 outline outline-1 outline-white/10 flex items-stretch hover:outline-teal-800 transition-colors">
                    <div className="w-20 md:w-24 bg-teal-800 flex justify-center items-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold font-['Orbitron']">2</span>
                    </div>
                    <div className="flex-1 p-4 md:p-6 flex flex-col justify-center items-start gap-2">
                      <h3 className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans']">The Capital</h3>
                      <p className="text-white/70 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Unlock funding opportunities, pilot projects, and strategic partnerships with global stakeholders.</p>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="w-full bg-white/5 outline outline-1 outline-white/10 flex items-stretch hover:outline-teal-800 transition-colors">
                    <div className="w-20 md:w-24 bg-teal-800 flex justify-center items-center flex-shrink-0">
                      <span className="text-white text-2xl font-bold font-['Orbitron']">3</span>
                    </div>
                    <div className="flex-1 p-4 md:p-6 flex flex-col justify-center items-start gap-2">
                      <h3 className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans']">The Scale</h3>
                      <p className="text-white/70 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Gain access to enterprise deployments, government collaborations, and market expansion opportunities.</p>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="w-full h-64 md:h-80 relative overflow-hidden rounded-sm outline outline-1 outline-white/10">
                  <Image src="/Vault-2047/assets/startups/4601a9e172a23eeb37ff50026597ae7dac819fdd (1).png" alt="What's at Stake" fill className="object-cover" />
                </div>
                
              </div>
              
              {/* Right Column: Timeline */}
              <div className="w-full lg:w-[45%] p-8 md:p-12 bg-teal-800/10 outline outline-1 outline-teal-800/30 flex flex-col justify-start items-start gap-12 rounded-sm shadow-xl">
                <h3 className="text-teal-500 text-2xl md:text-3xl font-semibold font-['IBM_Plex_Sans'] tracking-wide">Timeline</h3>
                
                <div className="w-full flex justify-start items-stretch gap-6 md:gap-10">
                  
                  {/* Timeline Line/Numbers */}
                  <div className="flex flex-col justify-start items-center pt-1 pb-2">
                    <div className="w-8 h-8 rounded-full outline outline-1 outline-teal-700/50 flex justify-center items-center bg-gray-950 z-10 text-white text-sm font-['IBM_Plex_Sans']">01</div>
                    <div className="w-px flex-1 min-h-[4rem] bg-teal-700/30 my-2" />
                    
                    <div className="w-8 h-8 rounded-full outline outline-1 outline-teal-700/50 flex justify-center items-center bg-gray-950 z-10 text-white text-sm font-['IBM_Plex_Sans']">02</div>
                    <div className="w-px flex-1 min-h-[4rem] bg-teal-700/30 my-2" />
                    
                    <div className="w-8 h-8 rounded-full outline outline-1 outline-teal-700/50 flex justify-center items-center bg-gray-950 z-10 text-white text-sm font-['IBM_Plex_Sans']">03</div>
                    <div className="w-px flex-1 min-h-[4rem] bg-teal-700/30 my-2" />
                    
                    <div className="w-8 h-8 rounded-full outline outline-1 outline-teal-700/50 flex justify-center items-center bg-gray-950 z-10 text-white text-sm font-['IBM_Plex_Sans']">04</div>
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="flex-1 flex flex-col justify-between gap-10 md:gap-12">
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        <span className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans'] tracking-wide">APPLICATION</span>
                        <div className="px-3 py-1 bg-teal-700 text-white text-xs md:text-sm font-medium uppercase tracking-wider rounded-sm">Open Now</div>
                      </div>
                      <p className="text-zinc-400 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Submit your pitch deck and business credentials and Acceptance criteria</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        <span className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans'] tracking-wide">EVALUATION</span>
                        <div className="px-3 py-1 bg-teal-700 text-white text-xs md:text-sm font-medium tracking-wider rounded-sm">8-10 DEC</div>
                      </div>
                      <p className="text-zinc-400 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Screening panel reviews your application and premise</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        <span className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans'] tracking-wide">SHORTLIST</span>
                        <div className="px-3 py-1 bg-teal-700 text-white text-xs md:text-sm font-medium tracking-wider rounded-sm">15-18 DEC</div>
                      </div>
                      <p className="text-zinc-400 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Finalists receive prep materials; a pitch coach assigned to each</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        <span className="text-white text-lg md:text-xl font-semibold font-['IBM_Plex_Sans'] tracking-wide">ARENA!</span>
                        <div className="px-3 py-1 bg-teal-700 text-white text-xs md:text-sm font-medium uppercase tracking-wider rounded-sm">At Event</div>
                      </div>
                      <p className="text-zinc-400 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Pitch live on the Vault2047 stage to enterprise investors, Tier-1 VC's</p>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Eligibility Criteria Section */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-neutral-900 flex flex-col justify-center items-center gap-12 overflow-hidden border-t border-white/5">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center lg:items-start gap-3 text-center lg:text-left">
            <h2 className="w-full text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
              Eligibility Criteria
            </h2>
          </div>
          
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Criteria 1 */}
            <div className="w-full p-8 bg-black/40 outline outline-1 outline-offset-[-1px] outline-zinc-800 flex flex-col justify-start items-start gap-8 hover:outline-teal-800/50 transition-colors">
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <h3 className="w-full text-white text-xl md:text-2xl font-bold font-['Orbitron'] uppercase">
                  INCORPORATED STARTUP
                </h3>
                <p className="w-full text-neutral-400 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  The participating company must be legally registered entity.
                </p>
              </div>
            </div>

            {/* Criteria 2 */}
            <div className="w-full p-8 bg-black/40 outline outline-1 outline-offset-[-1px] outline-zinc-800 flex flex-col justify-start items-start gap-8 hover:outline-teal-800/50 transition-colors">
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <h3 className="w-full text-white text-xl md:text-2xl font-bold font-['Orbitron'] uppercase">
                  CYBERSECURITY MANDATE
                </h3>
                <p className="w-full text-neutral-400 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Core focus on cybersecurity solutions. Core product, service, or platform.
                </p>
              </div>
            </div>

            {/* Criteria 3 */}
            <div className="w-full p-8 bg-black/40 outline outline-1 outline-offset-[-1px] outline-zinc-800 flex flex-col justify-start items-start gap-8 hover:outline-teal-800/50 transition-colors">
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <h3 className="w-full text-white text-xl md:text-2xl font-bold font-['Orbitron'] uppercase">
                  FUNDING <br className="hidden lg:block"/>STAGE
                </h3>
                <p className="w-full text-neutral-400 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Must be actively seeking to raise Pre-Seed, Seed, or Series A round of capital.
                </p>
              </div>
            </div>

            {/* Criteria 4 */}
            <div className="w-full p-8 bg-black/40 outline outline-1 outline-offset-[-1px] outline-zinc-800 flex flex-col justify-start items-start gap-8 hover:outline-teal-800/50 transition-colors">
              <div className="w-full flex flex-col justify-start items-start gap-4">
                <h3 className="w-full text-white text-xl md:text-2xl font-bold font-['Orbitron'] uppercase">
                  PITCH DECK <br className="hidden lg:block"/>&amp; POC
                </h3>
                <p className="w-full text-neutral-400 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Must provide a minimum of proof-of-concept (PoC) or live product for pitch &amp; funding-member intent.
                </p>
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
              <Image src="/Vault-2047/assets/startups/b497463f5699922e1b8d779b821f6b1668397589 (6).jpg" alt="Join the Lineup" fill className="object-cover opacity-40" />
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
              <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Orbitron']">
                Ready to Join the Lineup?
              </h2>
            </div>
            
            <button className="relative z-10 px-8 py-4 bg-[#B86A2E] hover:bg-[#9c5926] transition-colors flex justify-center items-center">
              <span className="text-white text-base font-medium font-['IBM_Plex_Sans']">
                Apply to Cyber Foundry
              </span>
            </button>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

