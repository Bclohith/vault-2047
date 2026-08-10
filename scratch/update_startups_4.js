const fs = require('fs');

const content = `import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Canvas3DBackground from '../../components/Canvas3DBackground';

export const metadata = {
  title: "Startups - Vault 2047",
  description: "Attend or Exhibit as a Startup at Vault 2047",
};

export default function StartupsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      
      {/* Inline styles for the horizontal scroll animation */}
      <style dangerouslySetInnerHTML={{__html: \`
        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll-horizontal {
          animation: scrollHorizontal 20s linear infinite;
        }
        .animate-scroll-horizontal-reverse {
          animation: scrollHorizontal 20s linear infinite reverse;
        }
      \`}} />

      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[320px] md:h-[450px] px-6 lg:px-32 bg-[#040b0e] inline-flex flex-col justify-center items-center gap-5 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0 bg-black">
             <Canvas3DBackground />
             <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] to-transparent z-10 pointer-events-none" />
          </div>

          <div className="relative z-10 w-full max-w-[1184px] text-center justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-widest">
            Startup
          </div>
          
          <div className="relative z-10 w-full inline-flex justify-center items-center gap-2.5">
            <div className="w-full max-w-[1073.10px] text-center justify-start text-white text-4xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] drop-shadow-[0_0_15px_rgba(13,102,101,0.5)]">
              Where Cyber Innovation Meets<br/>Capital, Policy &amp; Scale
            </div>
          </div>
          
          <div className="relative z-10 w-full pt-6 flex flex-col justify-start items-center gap-2.5">
            <button className="px-8 py-5 bg-[#B86A2E] hover:bg-[#9a5624] transition-colors shadow-lg flex justify-center items-center gap-2.5 rounded-sm">
              <div className="text-center justify-center text-white text-base font-medium font-['IBM_Plex_Sans'] leading-5">Join the Ecosystem</div>
            </button>
          </div>
        </div>

        {/* Built for Cyber Innovators Section */}
        <div className="w-full px-6 lg:px-28 py-16 md:py-24 bg-gray-950 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-16 overflow-hidden">
          
          {/* Image Scroll Component */}
          <div className="w-full lg:w-[500px] h-[300px] md:h-[384px] relative overflow-hidden shrink-0 group">
            
            <div className="absolute top-0 left-0 h-full flex w-[200%] animate-scroll-horizontal group-hover:[animation-play-state:paused]">
              
              <div className="w-1/2 h-full flex items-center justify-around gap-4 px-2">
                <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/b0399b8c6a2c0283c13cb9d1e72a132fb44eb0be (1).png" alt="Startup 1" fill className="object-cover rounded-md" /></div>
                <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/ad7d37b9a55dce7f2273634de8f7755ebb7b3047 (1).png" alt="Startup 2" fill className="object-cover rounded-md" /></div>
                <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/c68bdeb40527b99c0ccc8aca218963b26b9f3b11 (1).png" alt="Startup 3" fill className="object-cover rounded-md" /></div>
                <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/a3f4ea6c4aaa8ed0da82a97c1c6b636cdea78593 (1).png" alt="Startup 4" fill className="object-cover rounded-md" /></div>
              </div>
              <div className="w-1/2 h-full flex items-center justify-around gap-4 px-2">
                <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/b0399b8c6a2c0283c13cb9d1e72a132fb44eb0be (1).png" alt="Startup 1" fill className="object-cover rounded-md" /></div>
                <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/ad7d37b9a55dce7f2273634de8f7755ebb7b3047 (1).png" alt="Startup 2" fill className="object-cover rounded-md" /></div>
                <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/c68bdeb40527b99c0ccc8aca218963b26b9f3b11 (1).png" alt="Startup 3" fill className="object-cover rounded-md" /></div>
                <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/a3f4ea6c4aaa8ed0da82a97c1c6b636cdea78593 (1).png" alt="Startup 4" fill className="object-cover rounded-md" /></div>
              </div>
            </div>
            
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
          </div>
          
          {/* Text Content */}
          <div className="flex-1 max-w-[600px] flex justify-start items-center lg:items-start text-center lg:text-left">
            <div className="flex-1 inline-flex flex-col justify-start items-center lg:items-start gap-6">
              <div className="self-stretch justify-center lg:justify-start">
                <span className="text-white text-3xl md:text-4xl font-bold font-['Orbitron'] leading-tight">Vault2047 is Built for <br/></span>
                <span className="text-[#B86A2E] text-3xl md:text-4xl font-bold font-['Orbitron'] leading-tight">Cyber Innovators</span>
              </div>
              <div className="self-stretch justify-center lg:justify-start text-white/80 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Vault2047 is designed to accelerate the growth of cybersecurity startups by connecting them directly with the stakeholders that matter: investors, enterprises, policymakers, and national security agencies.
              </div>
              <div className="self-stretch justify-center lg:justify-start">
                <span className="text-white/80 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">This is not just exposure. This is where startups move from </span>
                <span className="text-white text-base md:text-lg font-bold font-['IBM_Plex_Sans'] leading-relaxed">innovation to implementation.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vault2047 is Perfect for Startups */}
        <div className="w-full px-6 lg:px-28 py-16 md:py-24 bg-neutral-900 flex flex-col justify-center items-center gap-12 overflow-hidden">
          <div className="w-full max-w-[1200px] text-center justify-center text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
            Vault2047 is Perfect for Startups
          </div>
          
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="w-full bg-white/5 outline outline-1 outline-offset-[-0.50px] outline-[#B86A2E]/30 flex flex-col justify-start items-start gap-4 overflow-hidden group hover:outline-[#B86A2E]/70 transition-all">
              <div className="w-full aspect-[2/1] relative overflow-hidden">
                <Image src="/assets/startups/29cd6a3692daca7f3e9b208ee7a6a5be5fb67598 (1).png" alt="Unfiltered Access" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full p-8 flex flex-col justify-start items-start gap-3">
                <div className="w-full justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Unfiltered Access</div>
                <div className="w-full text-white/60 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Connect with global venture capitalists, sovereign funds, enterprise CISOs, and government stakeholders actively investing in cybersecurity innovation.
                </div>
              </div>
            </div>

            <div className="w-full bg-white/5 outline outline-1 outline-offset-[-0.50px] outline-[#B86A2E]/30 flex flex-col justify-start items-start gap-4 overflow-hidden group hover:outline-[#B86A2E]/70 transition-all">
              <div className="w-full aspect-[2/1] relative overflow-hidden">
                <Image src="/assets/startups/0569bcac3d32ed48c5cd9e426578a3d88ac979d5 (1).png" alt="Accelerated Growth" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full p-8 flex flex-col justify-start items-start gap-3">
                <div className="w-full justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Accelerated Growth</div>
                <div className="w-full text-white/60 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Compress months of networking, fundraising, and business development into two high-impact days of curated engagement.
                </div>
              </div>
            </div>

            <div className="w-full bg-white/5 outline outline-1 outline-offset-[-0.50px] outline-[#B86A2E]/30 flex flex-col justify-start items-start gap-4 overflow-hidden group hover:outline-[#B86A2E]/70 transition-all">
              <div className="w-full aspect-[2/1] relative overflow-hidden">
                <Image src="/assets/startups/0572cc8d6181adbfbde8b0c78a64eeb639d7689e (1).png" alt="Real Market Opportunities" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full p-8 flex flex-col justify-start items-start gap-3">
                <div className="w-full justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Real Market Opportunities</div>
                <div className="w-full text-white/60 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Showcase your solutions to decision-makers with the authority to deploy pilots, sign enterprise contracts, and drive adoption at scale.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore a Host of Opportunities Section */}
        <div className="w-full px-6 lg:px-28 py-16 md:py-24 bg-gray-950 flex flex-col justify-center items-center gap-12 overflow-hidden">
          <div className="w-full max-w-[1200px] text-center text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
            Explore a Host of Opportunities
          </div>
          
          <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="w-full h-auto min-h-[400px] md:h-[509px] p-8 relative bg-gradient-to-b from-white/5 to-transparent outline outline-1 outline-offset-[-0.50px] outline-[#B86A2E]/30 flex flex-col justify-start items-start overflow-hidden group hover:outline-[#B86A2E] hover:-translate-y-2 transition-all duration-300">
              <div className="size-14 relative overflow-hidden mb-12">
                <Image src="/assets/startups/Icon (2).svg" alt="Cyber Foundry" width={56} height={56} className="text-[#B86A2E] filter drop-shadow-md" />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
                <div className="text-white text-2xl font-bold font-['Orbitron'] group-hover:text-[#B86A2E] transition-colors">THE CYBER FOUNDRY</div>
                <div className="text-white/80 text-base font-normal font-['IBM_Plex_Sans']">India's Cyber Unicorn Hunt.</div>
              </div>
              
              {/* Decorative "L" shaped background */}
              <div className="w-16 h-20 left-[24px] bottom-[-20px] absolute origin-bottom-left -rotate-90 opacity-50 bg-[#B86A2E]/10 group-hover:bg-[#B86A2E]/20 transition-colors" />
              <div className="w-16 h-20 left-[58px] bottom-[14px] absolute origin-bottom-left -rotate-90 opacity-50 bg-[#B86A2E]/10 group-hover:bg-[#B86A2E]/20 transition-colors" />
            </div>

            <div className="w-full h-auto min-h-[400px] md:h-[509px] p-8 relative bg-gradient-to-b from-white/5 to-transparent outline outline-1 outline-offset-[-0.50px] outline-[#B86A2E]/30 flex flex-col justify-start items-start overflow-hidden group hover:outline-[#B86A2E] hover:-translate-y-2 transition-all duration-300">
              <div className="size-14 relative overflow-hidden mb-12">
                <Image src="/assets/startups/_material-symbols-light_ads-click-rounded (1).svg" alt="Investor Access" width={56} height={56} className="text-[#B86A2E] filter drop-shadow-md" />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
                <div className="text-white text-2xl font-bold font-['Orbitron'] group-hover:text-[#B86A2E] transition-colors">GLOBAL INVESTOR ACCESS</div>
              </div>
              
              {/* Decorative "L" shaped background */}
              <div className="w-16 h-20 left-[24px] bottom-[-20px] absolute origin-bottom-left -rotate-90 opacity-50 bg-[#B86A2E]/10 group-hover:bg-[#B86A2E]/20 transition-colors" />
              <div className="w-16 h-20 left-[58px] bottom-[14px] absolute origin-bottom-left -rotate-90 opacity-50 bg-[#B86A2E]/10 group-hover:bg-[#B86A2E]/20 transition-colors" />
            </div>

            <div className="w-full h-auto min-h-[400px] md:h-[509px] p-8 relative bg-gradient-to-b from-white/5 to-transparent outline outline-1 outline-offset-[-0.50px] outline-[#B86A2E]/30 flex flex-col justify-start items-start overflow-hidden group hover:outline-[#B86A2E] hover:-translate-y-2 transition-all duration-300">
              <div className="size-14 relative overflow-hidden mb-12">
                <Image src="/assets/startups/_material-symbols-light_airwave (1).svg" alt="Innovation Zone" width={56} height={56} className="text-[#B86A2E] filter drop-shadow-md" />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
                <div className="text-white text-2xl font-bold font-['Orbitron'] group-hover:text-[#B86A2E] transition-colors">STARTUP INNOVATION ZONE</div>
                <div className="text-white/80 text-base font-normal font-['IBM_Plex_Sans']">Secure your presence within the Innovation Precinct.</div>
              </div>
              
              {/* Decorative "L" shaped background */}
              <div className="w-16 h-20 left-[24px] bottom-[-20px] absolute origin-bottom-left -rotate-90 opacity-50 bg-[#B86A2E]/10 group-hover:bg-[#B86A2E]/20 transition-colors" />
              <div className="w-16 h-20 left-[58px] bottom-[14px] absolute origin-bottom-left -rotate-90 opacity-50 bg-[#B86A2E]/10 group-hover:bg-[#B86A2E]/20 transition-colors" />
            </div>

          </div>
        </div>

        {/* The Complete Startup Experience Section */}
        <div className="w-full px-6 lg:px-28 py-16 md:py-24 bg-neutral-900 flex flex-col justify-center items-center overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-12">
            
            <div className="w-full text-center lg:text-left justify-start text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
              The Complete Startup Experience
            </div>
            
            <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-12">
              
              {/* Numbered List */}
              <div className="flex-1 flex flex-col justify-start items-start gap-4">
                
                <div className="w-full bg-white/5 flex flex-col sm:flex-row justify-start items-stretch group hover:bg-white/10 transition-colors">
                  <div className="w-full sm:w-auto px-8 py-6 bg-[#0D6665] flex justify-center items-center gap-2.5 overflow-hidden border-b sm:border-b-0 sm:border-r border-[#0D6665]/50 group-hover:bg-[#0a5251] transition-colors">
                    <div className="text-white text-2xl md:text-3xl font-bold font-['Orbitron']">1</div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center items-start gap-2">
                    <div className="w-full justify-start text-[#B86A2E] text-xl font-semibold font-['IBM_Plex_Sans']">The Space</div>
                    <div className="w-full text-white/70 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Dedicated exhibition pod in a high-visibility innovation zone</div>
                  </div>
                </div>

                <div className="w-full bg-white/5 flex flex-col sm:flex-row justify-start items-stretch group hover:bg-white/10 transition-colors">
                  <div className="w-full sm:w-auto px-8 py-6 bg-[#0D6665] flex justify-center items-center gap-2.5 overflow-hidden border-b sm:border-b-0 sm:border-r border-[#0D6665]/50 group-hover:bg-[#0a5251] transition-colors">
                    <div className="text-white text-2xl md:text-3xl font-bold font-['Orbitron']">2</div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center items-start gap-2">
                    <div className="w-full justify-start text-[#B86A2E] text-xl font-semibold font-['IBM_Plex_Sans']">The Pitch</div>
                    <div className="w-full text-white/70 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Opportunity to participate in The Cyber Foundry</div>
                  </div>
                </div>

                <div className="w-full bg-white/5 flex flex-col sm:flex-row justify-start items-stretch group hover:bg-white/10 transition-colors">
                  <div className="w-full sm:w-auto px-8 py-6 bg-[#0D6665] flex justify-center items-center gap-2.5 overflow-hidden border-b sm:border-b-0 sm:border-r border-[#0D6665]/50 group-hover:bg-[#0a5251] transition-colors">
                    <div className="text-white text-2xl md:text-3xl font-bold font-['Orbitron']">3</div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center items-start gap-2">
                    <div className="w-full justify-start text-[#B86A2E] text-xl font-semibold font-['IBM_Plex_Sans']">The Pipeline</div>
                    <div className="w-full text-white/70 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Dedicated exhibition pod in a high-visibility innovation zone</div>
                  </div>
                </div>

                <div className="w-full bg-white/5 flex flex-col sm:flex-row justify-start items-stretch group hover:bg-white/10 transition-colors">
                  <div className="w-full sm:w-auto px-8 py-6 bg-[#0D6665] flex justify-center items-center gap-2.5 overflow-hidden border-b sm:border-b-0 sm:border-r border-[#0D6665]/50 group-hover:bg-[#0a5251] transition-colors">
                    <div className="text-white text-2xl md:text-3xl font-bold font-['Orbitron']">4</div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center items-start gap-2">
                    <div className="w-full justify-start text-[#B86A2E] text-xl font-semibold font-['IBM_Plex_Sans']">The Access</div>
                    <div className="w-full text-white/70 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Dedicated exhibition pod in a high-visibility innovation zone</div>
                  </div>
                </div>

              </div>

              {/* Second Image Scroll Component (Right side) */}
              <div className="w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-auto relative overflow-hidden shrink-0 group">
                
                <div className="absolute top-0 right-0 h-full flex w-[200%] animate-scroll-horizontal-reverse group-hover:[animation-play-state:paused]">
                  
                  <div className="w-1/2 h-full flex items-center justify-around gap-4 px-2">
                    <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/e4d29a2fddbeaff0dbf51fd9f2c68d5e741e0c01 (1).png" alt="Experience 1" fill className="object-cover rounded-md" /></div>
                    <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/26ad5c312b6e579ed96b82387d71ce49546e1096 (1).png" alt="Experience 2" fill className="object-cover rounded-md" /></div>
                    <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/3227a945a7998f7cefd92006eec8bb3785ce434f (1).png" alt="Experience 3" fill className="object-cover rounded-md" /></div>
                  </div>
                  <div className="w-1/2 h-full flex items-center justify-around gap-4 px-2">
                    <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/e4d29a2fddbeaff0dbf51fd9f2c68d5e741e0c01 (1).png" alt="Experience 1" fill className="object-cover rounded-md" /></div>
                    <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/26ad5c312b6e579ed96b82387d71ce49546e1096 (1).png" alt="Experience 2" fill className="object-cover rounded-md" /></div>
                    <div className="w-[300px] h-full relative p-2.5 shrink-0"><Image src="/assets/startups/3227a945a7998f7cefd92006eec8bb3785ce434f (1).png" alt="Experience 3" fill className="object-cover rounded-md" /></div>
                  </div>
                </div>
                
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
              </div>

            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
`;

fs.writeFileSync('src/app/startups/page.js', content);
console.log('Successfully updated src/app/startups/page.js');
