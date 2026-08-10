const fs = require('fs');

const content = `import React from 'react';
import Image from 'next/image';
import Footer from "../../components/Footer";

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[400px] md:h-[500px] px-6 lg:px-32 bg-black/40 flex flex-col justify-center items-center gap-5 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image src="/assets/vision/8f603d3bccbf91947cf600d09cefe37e0d34a0df.jpg" alt="Vision Background" fill className="object-cover" />
             <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative z-10 w-full max-w-[1184px] text-center justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-widest">Agenda / Vision</div>
          <div className="relative z-10 w-full self-stretch flex justify-center items-center gap-2.5">
            <div className="w-full max-w-[927.20px] text-center justify-start">
              <span className="text-white text-3xl md:text-5xl font-bold font-['Orbitron']">Securing the Digital Backbone of a <br/></span>
              <span className="text-[#B86A2E] text-3xl md:text-5xl font-bold font-['Orbitron']">Viksit Bharat</span>
              <span className="text-white text-3xl md:text-5xl font-bold font-['Orbitron']"> by 2047</span>
            </div>
          </div>
        </div>

        {/* The Cyber-Resilience Imperative */}
        <div className="w-full self-stretch px-6 lg:px-28 py-16 lg:py-24 bg-gradient-to-b from-gray-950/0 to-gray-950 flex flex-col lg:flex-row justify-center items-stretch gap-6 overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-start items-stretch gap-6 mx-auto">
            <div className="w-full lg:w-[479px] self-stretch p-8 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-lg flex flex-col justify-start items-start gap-2.5 overflow-hidden outline outline-1 outline-white/10">
              <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <div className="self-stretch justify-start leading-tight">
                  <span className="text-white text-4xl md:text-5xl font-semibold font-['IBM_Plex_Sans']">The </span>
                  <span className="text-[#B86A2E] text-4xl md:text-5xl font-semibold font-['IBM_Plex_Sans']">Cyber-<br/>Resilience</span>
                  <span className="text-white text-4xl md:text-5xl font-semibold font-['IBM_Plex_Sans']"> Imperative</span>
                </div>
                <div className="self-stretch justify-start text-white/80 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  India’s rapid digital transformation — spanning digital public infrastructure, financial systems, critical infrastructure, and governance, has created one of the world’s largest connected ecosystems.<br/><br/>Securing this ecosystem is now a national priority.
                </div>
              </div>
            </div>
            <div className="flex-1 self-stretch p-8 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-lg flex flex-col justify-start items-start gap-6 overflow-hidden outline outline-1 outline-white/10">
              <div className="w-full lg:w-[350px] justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Vault2047 Aligns with India’s Long-Term Vision to:</div>
              <div className="self-stretch flex-1 flex flex-col justify-start items-stretch gap-3">
                <div className="self-stretch flex-1 flex flex-col sm:flex-row justify-start items-stretch gap-3">
                  <div className="flex-1 self-stretch p-6 lg:p-8 bg-black/80 flex justify-center lg:justify-start items-center gap-2.5 overflow-hidden">
                    <div className="text-center sm:text-left justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans']">Protect Critical <br/>Infrastructure at Scale</div>
                  </div>
                  <div className="flex-1 self-stretch p-6 lg:p-8 bg-black/80 flex justify-center lg:justify-start items-center gap-2.5 overflow-hidden">
                    <div className="text-center sm:text-left justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans']">Build Sovereign <br/>Cyber-Defense Capabilities</div>
                  </div>
                </div>
                <div className="self-stretch flex-1 p-6 lg:p-8 bg-black/80 flex justify-center lg:justify-start items-center gap-2.5 overflow-hidden">
                  <div className="text-center sm:text-left justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans']">Establish Global Leadership in Cyber Governance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Drives the Vision */}
        <div className="w-full flex justify-center self-stretch px-6 lg:px-28 py-16 lg:py-24 bg-gray-950 overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-16">
            <div className="self-stretch flex flex-col justify-start items-center gap-7">
              <div className="self-stretch text-center justify-start text-white text-3xl font-bold font-['Orbitron']">What Drives the Vision</div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="self-stretch p-8 bg-black/30 outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <Image src="/assets/vision/a8ce0dd884b71a4513b166191b90d29b9a24cc2b.png" alt="Icon 1" width={64} height={64} className="object-contain" />
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Sovereign Cyber-Defense Infrastructure</div>
                  <div className="self-stretch justify-start text-stone-300 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">India is building indigenous cyber-defense capabilities through command centers, threat analytics, and national security frameworks to protect critical sectors.</div>
                </div>
                <div className="self-stretch h-px bg-[#0D6665]/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="justify-start text-[#0D6665] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2px]">Focus Area</div>
                    <div className="justify-start text-[#0D6665] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2px]">→</div>
                  </div>
                  <ul className="self-stretch text-white/80 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed list-disc list-inside">
                    <li>Cyber Command &amp; Control Centres (CCC)</li>
                    <li>Defence Threat Analytics (DTAC)</li>
                    <li>National-level threat intelligence systems</li>
                  </ul>
                </div>
              </div>

              <div className="self-stretch p-8 bg-black/30 outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <Image src="/assets/vision/ae56e3cd876d6a8fd7d4da01e30ef028cd897c33.png" alt="Icon 2" width={64} height={64} className="object-contain" />
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Securing Critical Infrastructure</div>
                  <div className="self-stretch justify-start text-stone-300 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">From banking to energy to telecom, securing infrastructure is central to economic stability and national security.</div>
                </div>
                <div className="self-stretch h-px bg-[#0D6665]/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="justify-start text-[#0D6665] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2px]">Focus Area</div>
                    <div className="justify-start text-[#0D6665] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2px]">→</div>
                  </div>
                  <ul className="self-stretch text-white/80 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed list-disc list-inside">
                    <li>BFSI, Power, Telecom, Healthcare</li>
                    <li>Smart cities and digital governance</li>
                    <li>Data center and cloud infrastructure</li>
                  </ul>
                </div>
              </div>

              <div className="self-stretch p-8 bg-black/30 outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <Image src="/assets/vision/7d97286a123b6bd6a1f61d45189c232ca1dd4d16.png" alt="Icon 3" width={64} height={64} className="object-contain" />
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">AI Powered Cybersecurity</div>
                  <div className="self-stretch justify-start text-stone-300 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">AI is both a threat and a tool. By 2047, India will lead in AI-driven threat mitigation and automation.</div>
                </div>
                <div className="self-stretch h-px bg-[#0D6665]/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="justify-start text-[#0D6665] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2px]">Focus Area</div>
                    <div className="justify-start text-[#0D6665] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2px]">→</div>
                  </div>
                  <ul className="self-stretch text-white/80 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed list-disc list-inside">
                    <li>AI in proactive threat detection</li>
                    <li>Deepfake and misinformation defense</li>
                    <li>Automated incident response</li>
                  </ul>
                </div>
              </div>

              <div className="self-stretch p-8 bg-black/30 outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <Image src="/assets/vision/7a7fb450a410d2b7dfbfe90a3d7606bcaa245d2c.png" alt="Icon 4" width={64} height={64} className="object-contain" />
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Cyber Talent &amp; Innovation Ecosystem</div>
                  <div className="self-stretch justify-start text-stone-300 text-sm md:text-base font-normal font-['IBM_Plex_Sans']">Positioning India as the global talent hub for cybersecurity and a foundry for next-gen security startups.</div>
                </div>
                <div className="self-stretch h-px bg-[#0D6665]/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="flex justify-start items-center gap-3">
                    <div className="justify-start text-[#0D6665] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2px]">Focus Area</div>
                    <div className="justify-start text-[#0D6665] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2px]">→</div>
                  </div>
                  <ul className="self-stretch text-white/80 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed list-disc list-inside">
                    <li>Skilling initiatives and STEM integration</li>
                    <li>Incubation support for cyber-startups</li>
                    <li>Global R&amp;D partnerships</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* A Coordinated Cyber-security Framework */}
        <div className="w-full flex justify-center self-stretch px-6 lg:px-28 py-16 lg:py-24 relative bg-[#061413] flex-col items-center gap-16 overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-6 z-10">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <div className="h-auto min-h-[384px] relative overflow-hidden flex flex-col justify-center items-start p-10">
                <div className="w-[100px] h-[100px] border-t-8 border-l-8 border-[#B86A2E] absolute top-10 left-10"></div>
                <div className="w-full max-w-sm flex flex-col justify-center items-start gap-6 mt-16 ml-8 relative z-10">
                  <div className="self-stretch justify-start text-white text-3xl font-semibold font-['IBM_Plex_Sans']">A Coordinated<br/>Cyber-security<br/>Framework</div>
                  <div className="self-stretch justify-start text-white text-lg font-normal font-['IBM_Plex_Sans']">India’s cyber-resilience strategy is driven by collaboration across government, defense, and industry.</div>
                </div>
              </div>

              <div className="h-auto min-h-[384px] p-10 outline outline-1 outline-[#B86A2E]/20 flex flex-col justify-end items-start gap-4 overflow-hidden relative group">
                <Image src="/assets/vision/b5e2af53346cfaa5c84da9720afd94f6f74e6488 (1).jpg" alt="Government" fill className="object-cover absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0" />
                <div className="self-stretch opacity-50 flex justify-between items-center relative z-10">
                  <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">01</div>
                </div>
                <div className="self-stretch h-px bg-[#B86A2E] relative z-10" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2 relative z-10">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Government &amp; Policy Bodies</div>
                  <div className="self-stretch justify-start text-neutral-300 text-base font-normal font-['IBM_Plex_Sans']">Bring together the world's foremost cyber leaders, policymakers and enterprises to align on a unified global security agenda.</div>
                </div>
              </div>

              <div className="h-auto min-h-[384px] p-10 outline outline-1 outline-[#B86A2E]/20 flex flex-col justify-end items-start gap-4 overflow-hidden relative group">
                <Image src="/assets/vision/ee0f535c54b95be78291f15c64be8c6e96611e32.jpg" alt="Defense" fill className="object-cover absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0" />
                <div className="self-stretch opacity-50 flex justify-between items-center relative z-10">
                  <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">02</div>
                </div>
                <div className="self-stretch h-px bg-[#B86A2E] relative z-10" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2 relative z-10">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Defense &amp; National Security Agencies</div>
                  <div className="self-stretch justify-start text-neutral-300 text-base font-normal font-['IBM_Plex_Sans']">Strengthening cyber warfare capabilities, intelligence systems, and sovereign defense</div>
                </div>
              </div>

              <div className="h-auto min-h-[384px] p-10 outline outline-1 outline-[#B86A2E]/20 flex flex-col justify-end items-start gap-4 overflow-hidden relative group lg:col-span-2 flex-row">
                
                <div className="w-1/2 h-full flex flex-col justify-end items-start pr-6 relative z-10">
                  <div className="self-stretch opacity-50 flex justify-between items-center mb-4">
                    <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">03</div>
                  </div>
                  <div className="self-stretch h-px bg-[#B86A2E] mb-4" />
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans'] mb-2">Industry &amp; Technology Leaders</div>
                  <div className="self-stretch justify-start text-neutral-300 text-base font-normal font-['IBM_Plex_Sans']">Building infrastructure, deploying solutions, and enabling enterprise security</div>
                </div>

                <div className="w-1/2 h-full flex flex-col justify-end items-start pl-6 relative z-10 border-l border-[#B86A2E]/20">
                  <div className="self-stretch opacity-50 flex justify-between items-center mb-4">
                    <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">04</div>
                  </div>
                  <div className="self-stretch h-px bg-[#B86A2E] mb-4" />
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans'] mb-2">Global Alliances</div>
                  <div className="self-stretch justify-start text-neutral-300 text-base font-normal font-['IBM_Plex_Sans']">Facilitating cross-border cyber collaboration and threat intelligence sharing</div>
                </div>

                <Image src="/assets/vision/8d7be89ce2da469e8137543bf9dcb17046b145c1 (1).jpg" alt="Industry" fill className="object-cover absolute inset-0 w-1/2 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <Image src="/assets/vision/b6b6eaee5679ffc666feaf249fc97e1e822945db (1).jpg" alt="Global" fill className="object-cover absolute inset-0 left-1/2 w-1/2 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0" />
              </div>

            </div>
          </div>
        </div>

        {/* Enabling the Cyber Economy of Tomorrow */}
        <div className="w-full flex justify-center self-stretch px-6 lg:px-28 py-16 lg:py-24 bg-gray-950 overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-16">
            <div className="w-full text-center justify-start text-white text-3xl md:text-4xl font-bold font-['Orbitron']">Enabling the Cyber Economy of Tomorrow</div>
            
            <div className="w-full p-8 lg:p-16 relative bg-gradient-to-b from-[#0D6665]/10 to-transparent flex flex-col justify-start items-center gap-11 overflow-hidden rounded-2xl outline outline-1 outline-[#0D6665]/30">
              <div className="self-stretch text-center justify-start text-[#0D6665] text-xl font-medium font-['IBM_Plex_Sans'] uppercase tracking-[4px] z-10">VAULT2047 ACTS AS THE CATALYST CONNECTING:</div>
              
              <div className="w-full max-w-[800px] h-auto my-8 relative flex justify-center items-center">
                 <Image src="/assets/vision/b1fb5f5c17051bae3e99b0485c72409fddc431b4.png" alt="Graph Map" width={800} height={500} className="object-contain" />
              </div>

              <div className="w-full max-w-[658px] flex flex-col justify-start items-center gap-7 z-10 mt-8">
                <div className="self-stretch text-center justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Through platforms like:</div>
                <div className="w-full flex flex-row justify-center items-center gap-4 flex-wrap">
                  <div className="px-6 py-3 bg-[#0D6665] hover:bg-[#0a5251] transition-colors rounded-sm flex justify-center items-center cursor-default">
                    <div className="text-center text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans']">The Cyber Foundry</div>
                  </div>
                  <div className="px-6 py-3 bg-[#0D6665] hover:bg-[#0a5251] transition-colors rounded-sm flex justify-center items-center cursor-default">
                    <div className="text-center text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Investment roundtables</div>
                  </div>
                  <div className="px-6 py-3 bg-[#0D6665] hover:bg-[#0a5251] transition-colors rounded-sm flex justify-center items-center cursor-default">
                    <div className="text-center text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Public-private collaboration frameworks</div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Images */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                 <div className="w-full aspect-[4/5] relative">
                    <Image src="/assets/vision/cd7286624129cde29688b552932fd06f0eb25091 (1).png" alt="Bottom 1" fill className="object-cover rounded-lg" />
                 </div>
                 <div className="w-full aspect-[4/5] relative">
                    <Image src="/assets/vision/d887002129ef299c4eac43b35d638e13954110b8.png" alt="Bottom 2" fill className="object-cover rounded-lg" />
                 </div>
                 <div className="w-full aspect-[4/5] relative">
                    <Image src="/assets/vision/cd7286624129cde29688b552932fd06f0eb25091.png" alt="Bottom 3" fill className="object-cover rounded-lg" />
                 </div>
              </div>

            </div>
            
            <div className="self-stretch flex flex-col justify-center items-center gap-2.5 mt-4">
              <button className="px-8 py-5 bg-[#B86A2E] hover:bg-[#9a5624] transition-colors shadow-lg flex justify-center items-center gap-2.5 rounded-sm">
                <div className="text-center justify-center text-white text-base font-medium font-['IBM_Plex_Sans'] leading-5">Explore collaboration opportunities</div>
              </button>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
`;

fs.writeFileSync('src/app/vision/page.js', content);
console.log('Successfully updated src/app/vision/page.js');
