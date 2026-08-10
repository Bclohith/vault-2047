import React from 'react';
import Image from 'next/image';
import Footer from "../../components/Footer";
import AgendaSubnav from "../../components/AgendaSubnav";
import AgendaHeroBackground from "../../components/AgendaHeroBackground";
import CyberEconomyInfographic from "../../components/CyberEconomyInfographic";

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        <AgendaSubnav />

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[400px] md:h-[500px] px-6 lg:px-32 bg-black/40 flex flex-col justify-center items-center gap-5 overflow-hidden">
          <AgendaHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] to-transparent z-10 pointer-events-none" />
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
        <div 
          className="w-full self-stretch px-6 lg:px-28 py-16 lg:py-24 flex flex-col lg:flex-row justify-start items-center gap-6 overflow-hidden bg-cover bg-center"
          style={{ background: 'linear-gradient(180deg, rgba(2, 15, 15, 0) 0%, #020F0F 100%), #020F0F' }}
        >
          <div className="w-full lg:w-[479px] self-stretch p-8 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[17px] flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-start">
                <span className="text-white text-4xl md:text-5xl font-semibold font-['IBM_Plex_Sans'] break-words">The </span>
                <span className="text-[#B86A2E] text-4xl md:text-5xl font-semibold font-['IBM_Plex_Sans'] break-words">Cyber-Resilience</span>
                <span className="text-white text-4xl md:text-5xl font-semibold font-['IBM_Plex_Sans'] break-words"> Imperative</span>
              </div>
              <div className="self-stretch justify-start text-white text-base font-normal font-['IBM_Plex_Sans'] break-words">
                India’s rapid digital transformation — spanning digital public infrastructure, financial systems, critical infrastructure, and governance, has created one of the world’s largest connected ecosystems.<br/><br/>Securing this ecosystem is now a national priority.
              </div>
            </div>
          </div>
          
          <div className="flex-1 self-stretch p-8 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-[17px] flex flex-col justify-start items-start gap-6 overflow-hidden">
            <div className="w-full lg:w-[295px] justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans'] break-words">
              Vault2047 Aligns with India’s Long-Term Vision to:
            </div>
            <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex-1 flex flex-col sm:flex-row justify-start items-center gap-3">
                
                <div 
                  className="flex-1 self-stretch p-6 lg:p-8 overflow-hidden outline outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-2.5 bg-cover bg-center"
                  style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), #0D6665' }}
                >
                  <div className="flex-1 justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans'] break-words">
                    Protect Critical <br/>Infrastructure at Scale
                  </div>
                </div>
                
                <div 
                  className="flex-1 self-stretch p-6 lg:p-8 overflow-hidden outline outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-2.5 bg-cover bg-center"
                  style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), #0D6665' }}
                >
                  <div className="flex-1 justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans'] break-words">
                    Build Sovereign <br/>Cyber-Defense Capabilities
                  </div>
                </div>
                
              </div>
              
              <div 
                className="self-stretch flex-1 p-6 lg:p-8 overflow-hidden outline outline-1 outline-offset-[-1px] outline-black flex justify-center items-center gap-2.5 bg-cover bg-center"
                style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), #0D6665' }}
              >
                <div className="flex-1 justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans'] break-words">
                  Establish Global Leadership <br/>in Cyber Governance
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
              
              {/* Card 1 */}
              <div className="self-stretch p-8 bg-transparent outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden hover:bg-white/5 transition-colors group">
                <div className="w-20 h-16 relative overflow-hidden flex-shrink-0">
                  <Image src="/assets/vision/icon1.svg" alt="Sovereign Cyber-Defense" fill className="object-contain object-left group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Sovereign Cyber-Defense Infrastructure</div>
                  <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['IBM_Plex_Sans']">India is building indigenous cyber-defense capabilities through command centers, threat analytics, and national security frameworks to protect critical sectors.</div>
                </div>
                <div className="self-stretch h-[1px] bg-teal-800/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="inline-flex justify-start items-center gap-5">
                    <div className="justify-start text-teal-800 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">Focus Area</div>
                    <div className="justify-start text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">→</div>
                  </div>
                  <div className="self-stretch justify-start text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                    <ul className="list-disc pl-4 flex flex-col gap-1.5">
                      <li>Cyber Command &amp; Control Centres (CCC)</li>
                      <li>Defence Threat Analytics (DTAC)</li>
                      <li>National-level threat intelligence systems</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="self-stretch p-8 bg-transparent outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden hover:bg-white/5 transition-colors group">
                <div className="w-20 h-16 relative overflow-hidden flex-shrink-0">
                  <Image src="/assets/vision/icon2.svg" alt="Securing Critical Infrastructure" fill className="object-contain object-left group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Securing Critical Infrastructure</div>
                  <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['IBM_Plex_Sans']">From banking to energy to telecom, securing infrastructure is central to economic stability and national security.</div>
                </div>
                <div className="self-stretch h-[1px] bg-teal-800/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="inline-flex justify-start items-center gap-5">
                    <div className="justify-start text-teal-800 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">Focus Area</div>
                    <div className="justify-start text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">→</div>
                  </div>
                  <div className="self-stretch justify-start text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                    <ul className="list-disc pl-4 flex flex-col gap-1.5">
                      <li>BFSI, Power, Telecom, Healthcare</li>
                      <li>Smart cities and digital governance</li>
                      <li>Data center and cloud infrastructure</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="self-stretch p-8 bg-transparent outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden hover:bg-white/5 transition-colors group">
                <div className="w-20 h-16 relative overflow-hidden flex-shrink-0">
                  <Image src="/assets/vision/icon3.svg" alt="AI-Powered Cybersecurity" fill className="object-contain object-left group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">AI-Powered <br/>Cybersecurity</div>
                  <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['IBM_Plex_Sans']">As threats evolve, AI is becoming central to both defense and attack.</div>
                </div>
                <div className="self-stretch h-[1px] bg-teal-800/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="inline-flex justify-start items-center gap-5">
                    <div className="justify-start text-teal-800 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">Focus Area</div>
                    <div className="justify-start text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">→</div>
                  </div>
                  <div className="self-stretch justify-start text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                    <ul className="list-disc pl-4 flex flex-col gap-1.5">
                      <li>AI-driven threat detection</li>
                      <li>Deepfake and adversarial AI risks</li>
                      <li>Predictive cyber intelligence</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="self-stretch p-8 bg-transparent outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden hover:bg-white/5 transition-colors group">
                <div className="w-20 h-16 relative overflow-hidden flex-shrink-0">
                  <Image src="/assets/vision/icon4.svg" alt="Cyber Talent & Innovation" fill className="object-contain object-left group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Cyber Talent &amp; <br/>Innovation Ecosystem</div>
                  <div className="self-stretch justify-start text-stone-300 text-base font-normal font-['IBM_Plex_Sans']">India’s scale advantage lies in its talent and startup ecosystem.</div>
                </div>
                <div className="self-stretch h-[1px] bg-teal-800/50" />
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="inline-flex justify-start items-center gap-5">
                    <div className="justify-start text-teal-800 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">Focus Area</div>
                    <div className="justify-start text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2.80px]">→</div>
                  </div>
                  <div className="self-stretch justify-start text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-5">
                    <ul className="list-disc pl-4 flex flex-col gap-1.5">
                      <li>200,000+ annual STEM graduates</li>
                      <li>Cyber skills and certification programs</li>
                      <li>Startup innovation and R&amp;D investments</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="self-stretch flex flex-col justify-center items-center gap-2.5 pt-8">
              <button className="px-8 py-5 outline outline-1 outline-offset-[-1px] outline-amber-700 hover:bg-amber-700/20 transition-colors flex justify-center items-center gap-2.5">
                <div className="text-center justify-center text-white text-base font-medium font-['IBM_Plex_Sans'] leading-5 uppercase tracking-wider">Explore the Theme</div>
              </button>
            </div>
            
          </div>
        </div>

        {/* A Coordinated Cyber-security Framework */}
        <div className="w-full flex justify-center self-stretch px-6 lg:px-28 py-16 lg:py-24 relative bg-neutral-800 flex-col items-center gap-16 overflow-hidden">
          
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-6 z-10">
            
            {/* Top Row: Title, 01, 02 */}
            <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-6">
              
              {/* Title Block */}
              <div className="flex-[1.2] lg:flex-1 min-h-[384px] relative overflow-hidden flex flex-col justify-center items-start lg:pl-10">
                <div className="w-full flex flex-col justify-center items-start gap-6 relative z-10">
                  <div className="self-stretch justify-start text-white text-3xl font-semibold font-['IBM_Plex_Sans']">A Coordinated<br/>Cyber-security<br/>Framework</div>
                  <div className="self-stretch justify-start text-white text-lg font-normal font-['IBM_Plex_Sans']">India’s cyber-resilience strategy is driven by collaboration across government, defense, and industry.</div>
                </div>
              </div>

              {/* 01 Block (Government & Policy Bodies) */}
              <div className="w-full lg:w-80 min-h-[384px] p-10 bg-gradient-to-b from-black/0 to-black outline outline-1 outline-offset-[-1px] outline-amber-700/20 flex flex-col justify-end items-start gap-4 overflow-hidden relative group">
                <Image src="/assets/vision/frame_bg1.png" alt="Government" fill className="object-cover absolute inset-0 z-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
                <div className="self-stretch opacity-50 flex justify-between items-center relative z-10">
                  <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">01</div>
                </div>
                <div className="self-stretch h-px bg-amber-700 opacity-30 relative z-10" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2 relative z-10">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Government &amp; Policy Bodies</div>
                  <div className="self-stretch justify-start text-neutral-400 text-base font-normal font-['IBM_Plex_Sans']">Bring together the world's foremost cyber leaders, policymakers and enterprises to align on a unified global security agenda.</div>
                </div>
              </div>

              {/* 02 Block (Defense & National Security Agencies) */}
              <div className="w-full lg:w-96 min-h-[384px] p-10 bg-gradient-to-b from-black/0 to-black outline outline-1 outline-offset-[-1px] outline-amber-700/20 flex flex-col justify-end items-start gap-4 overflow-hidden relative group">
                <Image src="/assets/vision/frame_bg2.png" alt="Defense" fill className="object-cover absolute inset-0 z-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
                <div className="self-stretch opacity-50 flex justify-between items-center relative z-10">
                  <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">02</div>
                </div>
                <div className="self-stretch h-px bg-amber-700 opacity-30 relative z-10" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2 relative z-10">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Defense &amp; National Security Agencies</div>
                  <div className="self-stretch justify-start text-neutral-400 text-base font-normal font-['IBM_Plex_Sans']">Strengthening cyber warfare capabilities, intelligence systems, and sovereign defense.</div>
                </div>
              </div>

            </div>

            {/* Bottom Row: 03, 04 */}
            <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-6">
              
              {/* 03 Block (Industry & Technology Leaders) */}
              <div className="flex-1 min-h-[384px] p-10 bg-gradient-to-b from-black/0 to-black outline outline-1 outline-offset-[-1px] outline-amber-700/20 flex flex-col justify-end items-start gap-4 overflow-hidden relative group">
                <Image src="/assets/vision/frame_bg3.png" alt="Industry" fill className="object-cover absolute inset-0 z-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
                <div className="self-stretch opacity-50 flex justify-between items-center relative z-10">
                  <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">03</div>
                </div>
                <div className="self-stretch h-px bg-amber-700 opacity-30 relative z-10" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2 relative z-10">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Industry &amp; Technology Leaders</div>
                  <div className="self-stretch justify-start text-neutral-400 text-base font-normal font-['IBM_Plex_Sans']">Building infrastructure, deploying solutions, and enabling enterprise security.</div>
                </div>
              </div>

              {/* 04 Block (Global Alliances) */}
              <div className="w-full lg:w-[739px] min-h-[384px] p-10 bg-gradient-to-b from-black/0 to-black outline outline-1 outline-offset-[-1px] outline-amber-700/20 flex flex-col justify-end items-start gap-4 overflow-hidden relative group">
                <Image src="/assets/vision/frame_bg4.png" alt="Global Alliances" fill className="object-cover absolute inset-0 z-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
                <div className="self-stretch opacity-50 flex justify-between items-center relative z-10">
                  <div className="justify-start text-neutral-400 text-base font-semibold font-['IBM_Plex_Sans'] tracking-[3.20px]">04</div>
                </div>
                <div className="self-stretch h-px bg-amber-700 opacity-30 relative z-10" />
                <div className="self-stretch flex flex-col justify-start items-start gap-2 relative z-10">
                  <div className="self-stretch justify-start text-white text-xl font-semibold font-['IBM_Plex_Sans']">Global Alliances</div>
                  <div className="self-stretch justify-start text-neutral-400 text-base font-normal font-['IBM_Plex_Sans']">Facilitating cross-border cyber collaboration and threat intelligence sharing.</div>
                </div>
              </div>

            </div>
          </div>

          <div className="w-full flex justify-center items-center z-10 relative">
            <button className="px-6 py-5 outline outline-1 outline-offset-[-1px] outline-teal-800 hover:bg-teal-800/20 transition-colors flex justify-center items-center gap-2.5">
              <span className="text-center text-slate-300 hover:text-white transition-colors text-base font-medium font-['IBM_Plex_Sans'] leading-5">Engage with Leaders</span>
            </button>
          </div>
          
          <div className="w-28 h-32 left-[200px] top-[70px] absolute origin-top-left rotate-90 opacity-50 bg-amber-700 pointer-events-none" />
        </div>

        {/* Enabling the Cyber Economy of Tomorrow */}
        <div className="w-full flex justify-center self-stretch px-6 lg:px-28 py-16 lg:py-24 bg-gray-950 overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-16">
            <div className="w-full text-center justify-start text-white text-3xl font-bold font-['Orbitron']">Enabling the Cyber Economy of Tomorrow</div>
            
            <CyberEconomyInfographic />
              
              {/* Scrolling Carousel - Infinite Auto-Slide Marquee */}
              <style>{`
                @keyframes slide {
                  from { transform: translateX(0); }
                  to { transform: translateX(calc(-100% - 1.5rem)); }
                }
                .animate-slide {
                  animation: slide 30s linear infinite;
                }
                .marquee-container:hover .animate-slide {
                  animation-play-state: paused;
                }
              `}</style>
              <div className="w-full overflow-hidden mt-12 relative flex gap-6 marquee-container">
                
                {/* First Set of Images */}
                <div className="flex gap-6 shrink-0 animate-slide">
                  <div className="w-[300px] md:w-[400px] h-[280px] md:h-[370px] flex-shrink-0 relative group cursor-pointer">
                    <Image src="/assets/vision/carousel1.jpg" alt="Carousel 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm" />
                  </div>
                  <div className="w-[300px] md:w-[400px] h-[280px] md:h-[370px] flex-shrink-0 relative group cursor-pointer">
                    <Image src="/assets/vision/carousel2.jpg" alt="Carousel 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm" />
                  </div>
                  <div className="w-[300px] md:w-[400px] h-[280px] md:h-[370px] flex-shrink-0 relative group cursor-pointer">
                    <Image src="/assets/vision/carousel3.jpg" alt="Carousel 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm" />
                  </div>
                  <div className="w-[300px] md:w-[400px] h-[280px] md:h-[370px] flex-shrink-0 relative group cursor-pointer">
                    <Image src="/assets/vision/carousel4.jpg" alt="Carousel 4" fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm" />
                  </div>
                </div>

                {/* Second Set (Duplicate) for Seamless Looping */}
                <div className="flex gap-6 shrink-0 animate-slide">
                  <div className="w-[300px] md:w-[400px] h-[280px] md:h-[370px] flex-shrink-0 relative group cursor-pointer">
                    <Image src="/assets/vision/carousel1.jpg" alt="Carousel 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm" />
                  </div>
                  <div className="w-[300px] md:w-[400px] h-[280px] md:h-[370px] flex-shrink-0 relative group cursor-pointer">
                    <Image src="/assets/vision/carousel2.jpg" alt="Carousel 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm" />
                  </div>
                  <div className="w-[300px] md:w-[400px] h-[280px] md:h-[370px] flex-shrink-0 relative group cursor-pointer">
                    <Image src="/assets/vision/carousel3.jpg" alt="Carousel 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm" />
                  </div>
                  <div className="w-[300px] md:w-[400px] h-[280px] md:h-[370px] flex-shrink-0 relative group cursor-pointer">
                    <Image src="/assets/vision/carousel4.jpg" alt="Carousel 4" fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-sm" />
                  </div>
                </div>

              </div>
            
              <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
              <button className="px-6 py-5 bg-amber-700 hover:bg-amber-600 transition-colors flex justify-center items-center gap-2.5 cursor-pointer">
                <span className="text-center text-white text-base font-medium font-['IBM_Plex_Sans'] leading-5">Explore collaboration opportunities</span>
              </button>
            </div>
            
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
