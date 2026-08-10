import React from 'react';
import Image from 'next/image';

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-[100px] md:pt-[120px]">

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-96 px-6 lg:px-32 bg-black/40 flex flex-col justify-center items-center gap-5 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image src="/assets/vision/img1.jpg" alt="Vision Background" fill className="object-cover" />
             <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative z-10 w-full max-w-[1184px] text-center justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-widest">Agenda / Vision</div>
          <div className="relative z-10 w-full self-stretch flex justify-center items-center gap-2.5">
            <div className="w-full max-w-[927.20px] text-center justify-start">
              <span className="text-white text-3xl md:text-5xl font-bold font-['Orbitron']">Securing the Digital Backbone of a <br/></span>
              <span className="text-amber-700 text-3xl md:text-5xl font-bold font-['Orbitron']">Viksit Bharat</span>
              <span className="text-white text-3xl md:text-5xl font-bold font-['Orbitron']"> by 2047</span>
            </div>
          </div>
        </div>

        {/* The Cyber-Resilience Imperative */}
        <div className="w-full max-w-[1440px] self-stretch px-6 lg:px-28 py-16 lg:py-24 bg-gradient-to-b from-gray-950/0 to-gray-950 flex flex-col lg:flex-row justify-start items-stretch gap-6 overflow-hidden">
          <div className="w-full lg:w-[479px] self-stretch p-8 bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-lg flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-start leading-tight">
                <span className="text-white text-4xl md:text-5xl font-semibold font-['IBM_Plex_Sans']">The </span>
                <span className="text-amber-700 text-4xl md:text-5xl font-semibold font-['IBM_Plex_Sans']">Cyber-Resilience</span>
                <span className="text-white text-4xl md:text-5xl font-semibold font-['IBM_Plex_Sans']"> Imperative</span>
              </div>
              <div className="self-stretch justify-start text-white text-base font-normal font-['IBM_Plex_Sans']">
                India’s rapid digital transformation — spanning digital public infrastructure, financial systems, critical infrastructure, and governance, has created one of the world’s largest connected ecosystems.<br/><br/>Securing this ecosystem is now a national priority.
              </div>
            </div>
          </div>
          <div className="flex-1 self-stretch p-8 bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-lg flex flex-col justify-start items-start gap-6 overflow-hidden">
            <div className="w-full lg:w-72 justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Vault2047 Aligns with India’s Long-Term Vision to:</div>
            <div className="self-stretch flex-1 flex flex-col justify-start items-stretch gap-3">
              <div className="self-stretch flex-1 flex flex-col sm:flex-row justify-start items-stretch gap-3">
                <div className="flex-1 self-stretch p-8 bg-black/80 outline outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="flex-1 text-center sm:text-left justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans']">Protect Critical <br/>Infrastructure at Scale</div>
                </div>
                <div className="flex-1 self-stretch p-8 bg-black/80 flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="flex-1 text-center sm:text-left justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans']">Build Sovereign <br/>Cyber-Defense Capabilities</div>
                </div>
              </div>
              <div className="self-stretch flex-1 p-8 bg-black/80 flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="flex-1 text-center sm:text-left justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans']">Establish Global Leadership <br/>in Cyber Governance</div>
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
            <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-6 lg:gap-0">
              <div className="flex-1 self-stretch p-8 bg-neutral-200/0 outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <div className="w-20 h-16 relative overflow-hidden flex-shrink-0">
                  <div className="w-20 h-16 left-0 top-0 absolute bg-amber-700" />
                  <div className="w-8 h-9 left-[21.82px] top-[13.66px] absolute bg-amber-700" />
                  <div className="w-4 h-2.5 left-[29.98px] top-[27.03px] absolute bg-amber-700" />
                </div>
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Sovereign Cyber-Defense Infrastructure</div>
                  <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['IBM_Plex_Sans']">India is building indigenous cyber-defense capabilities through command centers, threat analytics, and national security frameworks to protect critical sectors.</div>
                </div>
                <div className="self-stretch h-px bg-teal-800/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="flex justify-start items-center gap-5">
                    <div className="justify-start text-teal-800 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">Focus Area</div>
                    <div className="justify-start text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">→</div>
                  </div>
                  <div className="self-stretch justify-start text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-5">Cyber Command &amp; Control Centres (CCC)<br/>Defence Threat Analytics (DTAC)<br/>National-level threat intelligence systems</div>
                </div>
              </div>
              <div className="flex-1 self-stretch p-8 bg-neutral-200/0 outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <div className="w-16 h-16 relative overflow-hidden flex-shrink-0">
                  <div className="w-16 h-16 left-0 top-0 absolute bg-amber-700" />
                  <div className="w-6 h-7 left-[20.08px] top-[17.95px] absolute bg-amber-700" />
                  <div className="w-2 h-3.5 left-[27.57px] top-[27.83px] absolute bg-amber-700" />
                </div>
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Securing Critical Infrastructure</div>
                  <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['IBM_Plex_Sans']">From banking to energy to telecom, securing infrastructure is central to economic stability and national security.</div>
                </div>
                <div className="self-stretch h-px bg-teal-800/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="flex justify-start items-center gap-5">
                    <div className="justify-start text-teal-800 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">Focus Area</div>
                    <div className="justify-start text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">→</div>
                  </div>
                  <div className="self-stretch justify-start text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-5">BFSI, Power, Telecom, Healthcare<br/>Smart cities and digital governance<br/>Data center and cloud infrastructure</div>
                </div>
              </div>
              <div className="flex-1 self-stretch p-8 bg-neutral-200/0 outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <div className="w-14 h-16 relative overflow-hidden flex-shrink-0">
                  <div className="w-14 h-16 left-0 top-0 absolute bg-amber-700" />
                  <div className="w-6 h-5 left-[18.54px] top-[20.14px] absolute bg-amber-700" />
                </div>
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">AI-Powered <br/>Cybersecurity</div>
                  <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['IBM_Plex_Sans']">As threats evolve, AI is becoming central to both defense and attack.</div>
                </div>
                <div className="self-stretch h-px bg-teal-800/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="flex justify-start items-center gap-5">
                    <div className="justify-start text-teal-800 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">Focus Area</div>
                    <div className="justify-start text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">→</div>
                  </div>
                  <div className="self-stretch justify-start text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-5">AI-driven threat detection<br/>Deepfake and adversarial AI risks<br/>Predictive cyber intelligence</div>
                </div>
              </div>
              <div className="flex-1 self-stretch p-8 bg-neutral-200/0 outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <div className="w-16 h-16 relative overflow-hidden flex-shrink-0">
                  <div className="w-14 h-16 left-0 top-0 absolute bg-amber-700" />
                  <div className="w-5 h-5 left-[40.27px] top-[0.09px] absolute bg-amber-700" />
                  <div className="w-5 h-5 left-[43.37px] top-[20.73px] absolute bg-amber-700" />
                  <div className="w-6 h-0.5 left-[4.14px] top-[57.81px] absolute bg-amber-700" />
                  <div className="w-5 h-0.5 left-[6.20px] top-[53.68px] absolute bg-amber-700" />
                </div>
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Cyber Talent &amp; <br/>Innovation Ecosystem</div>
                  <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['IBM_Plex_Sans']">India’s scale advantage lies in its talent and startup ecosystem.</div>
                </div>
                <div className="self-stretch h-px bg-teal-800/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="flex justify-start items-center gap-5">
                    <div className="justify-start text-teal-800 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">Focus Area</div>
                    <div className="justify-start text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">→</div>
                  </div>
                  <div className="self-stretch justify-start text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-5">200,000+ annual STEM graduates<br/>Cyber skills and certification programs<br/>Startup innovation and R&amp;D investments</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
              <button className="px-6 py-5 outline outline-1 outline-offset-[-1px] outline-amber-700 flex justify-center items-center gap-2.5 hover:bg-amber-700/20 transition-colors">
                <div className="text-center justify-center text-white text-base font-medium font-['IBM_Plex_Sans'] leading-5">Explore the Theme</div>
              </button>
            </div>
          </div>
        </div>

        {/* A Coordinated Cyber-security Framework */}
        <div className="w-full flex justify-center self-stretch px-6 lg:px-28 py-16 lg:py-24 relative bg-[#061413] flex-col items-center gap-16 overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-6 z-10">
            <div className="self-stretch flex flex-col lg:flex-row justify-center items-stretch gap-6">
              <div className="flex-[1.5] h-auto min-h-[384px] relative overflow-hidden flex flex-col justify-center items-start p-10">
                <div className="w-full max-w-sm flex flex-col justify-center items-start gap-6">
                  <div className="self-stretch justify-start text-white text-3xl font-semibold font-['IBM_Plex_Sans']">A Coordinated Cyber-security Framework</div>
                  <div className="self-stretch justify-start text-white text-lg font-normal font-['IBM_Plex_Sans']">India’s cyber-resilience strategy is driven by collaboration across government, defense, and industry.</div>
                </div>
              </div>
              <div className="flex-1 h-auto min-h-[384px] p-10 bg-gradient-to-b from-black/0 to-black outline outline-1 outline-offset-[-1px] outline-amber-700/20 flex flex-col justify-end items-start gap-4 overflow-hidden">
                <div className="self-stretch opacity-50 flex justify-between items-center">
                  <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">01</div>
                </div>
                <div className="self-stretch h-px bg-amber-700/30" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Government &amp; Policy Bodies</div>
                  <div className="self-stretch justify-start text-neutral-400 text-base font-normal font-['IBM_Plex_Sans']">Bring together the world&apos;s foremost cyber leaders, policymakers and enterprises to align on a unified global security agenda.</div>
                </div>
              </div>
              <div className="flex-1 h-auto min-h-[384px] p-10 bg-gradient-to-b from-black/0 to-black outline outline-1 outline-offset-[-1px] outline-amber-700/20 flex flex-col justify-end items-start gap-4 overflow-hidden">
                <div className="self-stretch opacity-50 flex justify-between items-center">
                  <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">02</div>
                </div>
                <div className="self-stretch h-px bg-amber-700/30" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Defense &amp; National Security Agencies</div>
                  <div className="self-stretch justify-start text-neutral-400 text-base font-normal font-['IBM_Plex_Sans']">Strengthening cyber warfare capabilities, intelligence systems, and sovereign defense<br/><br/></div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col lg:flex-row justify-center items-stretch gap-6">
              <div className="flex-1 h-auto min-h-[384px] p-10 bg-gradient-to-b from-black/0 to-black outline outline-1 outline-offset-[-1px] outline-amber-700/20 flex flex-col justify-end items-start gap-4 overflow-hidden">
                <div className="self-stretch opacity-50 flex justify-between items-center">
                  <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">03</div>
                </div>
                <div className="self-stretch h-px bg-amber-700/30" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Industry &amp; Technology Leaders</div>
                  <div className="self-stretch justify-start text-neutral-400 text-base font-normal font-['IBM_Plex_Sans']">Building infrastructure, deploying solutions, and enabling enterprise security</div>
                </div>
              </div>
              <div className="flex-[2] h-auto min-h-[384px] p-10 bg-gradient-to-b from-black/0 to-black outline outline-1 outline-offset-[-1px] outline-amber-700/20 flex flex-col justify-end items-start gap-4 overflow-hidden">
                <div className="self-stretch opacity-50 flex justify-between items-center">
                  <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">04</div>
                </div>
                <div className="self-stretch h-px bg-amber-700/30" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Global Alliances</div>
                  <div className="self-stretch justify-start text-neutral-400 text-base font-normal font-['IBM_Plex_Sans']">Facilitating cross-border cyber collaboration and threat intelligence sharing<br/></div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center gap-2.5 z-10">
            <button className="px-6 py-5 outline outline-1 outline-offset-[-1px] outline-teal-800 flex justify-center items-center gap-2.5 hover:bg-teal-800/20 transition-colors">
              <div className="text-center justify-center text-slate-300 text-base font-medium font-['IBM_Plex_Sans'] leading-5">Engage with Leaders</div>
            </button>
          </div>
        </div>

        {/* Enabling the Cyber Economy of Tomorrow */}
        <div className="w-full flex justify-center self-stretch px-6 lg:px-28 py-16 lg:py-24 bg-gray-950 overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-16">
            <div className="w-full text-center justify-start text-white text-3xl font-bold font-['Orbitron']">Enabling the Cyber Economy of Tomorrow</div>
            
            <div className="w-full p-8 lg:p-16 relative bg-gradient-to-b from-white/5 to-gray-950/5 flex flex-col justify-start items-center gap-11 overflow-hidden rounded-2xl">
              <div className="self-stretch text-center justify-start text-teal-800 text-xl md:text-2xl font-medium font-['IBM_Plex_Sans'] uppercase tracking-[4.80px] z-10">Vault2047 acts as the catalyst connecting:</div>
              
              {/* Complex Node Graphic Representation (Simplified with flex) */}
              <div className="relative w-full max-w-[800px] h-[500px] flex items-center justify-center my-8 z-0">
                {/* Connecting lines and nodes placeholder - representing the complex SVG/div structure provided */}
                <div className="absolute w-full h-full flex items-center justify-center">
                    <div className="w-[500px] h-[500px] rounded-full border border-amber-700/40 absolute"></div>
                    <div className="w-[300px] h-[300px] rounded-full border border-teal-800/60 absolute bg-teal-900/10 backdrop-blur-sm"></div>
                    <div className="w-[150px] h-[150px] rounded-full border border-amber-700/80 absolute bg-gray-950/80 backdrop-blur-md flex items-center justify-center">
                       <Image src="/assets/vision/icon1.svg" alt="Center Icon" width={64} height={64} className="opacity-80" />
                    </div>
                    {/* Floating labels */}
                    <div className="absolute top-[10%] left-[10%] bg-white/5 border border-slate-700 backdrop-blur-md px-6 py-3 rounded-lg text-white">Global Investors</div>
                    <div className="absolute top-[20%] right-[5%] bg-white/5 border border-slate-700 backdrop-blur-md px-6 py-3 rounded-lg text-white">Government Priorities</div>
                    <div className="absolute bottom-[20%] left-[5%] bg-white/5 border border-slate-700 backdrop-blur-md px-6 py-3 rounded-lg text-white">Enterprise Demand</div>
                    <div className="absolute bottom-[10%] right-[10%] bg-white/5 border border-slate-700 backdrop-blur-md px-6 py-3 rounded-lg text-white">Cyber Startup</div>
                </div>
              </div>

              <div className="w-full max-w-[658px] flex flex-col justify-start items-center gap-7 z-10">
                <div className="self-stretch text-center justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Through platforms like:</div>
                <div className="self-stretch flex flex-row justify-center items-center gap-3 flex-wrap">
                  <div className="px-7 py-2.5 bg-gradient-to-r from-teal-800/80 to-teal-800/0 border-l-2 border-teal-500 rounded-r-lg flex justify-center items-center">
                    <div className="text-center text-white text-base font-normal font-['IBM_Plex_Sans']">The Cyber Foundry</div>
                  </div>
                  <div className="px-7 py-2.5 bg-gradient-to-r from-teal-800/80 to-teal-800/0 border-l-2 border-teal-500 rounded-r-lg flex justify-center items-center">
                    <div className="text-center text-white text-base font-normal font-['IBM_Plex_Sans']">Investment roundtables</div>
                  </div>
                  <div className="px-7 py-2.5 bg-gradient-to-r from-teal-800/80 to-teal-800/0 border-l-2 border-teal-500 rounded-r-lg flex justify-center items-center">
                    <div className="text-center text-white text-base font-normal font-['IBM_Plex_Sans']">Public-private collaboration frameworks</div>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="self-stretch flex flex-col justify-center items-center gap-2.5 mt-8">
              <button className="px-8 py-5 bg-[#B86A2E] hover:bg-[#9a5624] transition-colors shadow-lg flex justify-center items-center gap-2.5 rounded-sm">
                <div className="text-center justify-center text-white text-base font-medium font-['IBM_Plex_Sans'] leading-5">Explore collaboration opportunities</div>
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}