import React from 'react';
import Image from 'next/image';
import AgendaSubnav from "../../components/AgendaSubnav";
import Footer from "../../components/Footer";
import AgendaHeroBackground from "../../components/AgendaHeroBackground";

export const metadata = {
  title: "Call for Speakers - Vault 2047",
  description: "Take the Stage. Shape the Future of Cyber-Resilience",
};

export default function CallForSpeakerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        <AgendaSubnav />

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[350px] md:h-[400px] px-6 lg:px-32 bg-black/40 flex flex-col justify-center items-center gap-5 overflow-hidden">
          
          <AgendaHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] to-transparent z-10 pointer-events-none" />

          <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center gap-5">
            <div className="w-full text-center text-white text-base md:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-widest">
              Agenda / Call for Speakers
            </div>
            
            <div className="w-full flex justify-center items-center gap-2.5">
              <h1 className="text-center text-white text-3xl md:text-5xl font-bold font-['Orbitron'] leading-snug">
                Take the Stage. Shape the Future of Cyber-Resilience
              </h1>
            </div>
          </div>
        </div>

        {/* Voices Section */}
        <div className="w-full bg-neutral-800 flex justify-center items-center py-16 md:py-24 px-6 lg:px-28 overflow-hidden border-b border-amber-700/20">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-10">
            
            {/* Left Column */}
            <div className="w-full lg:w-[45%] flex flex-col justify-start items-start gap-6 lg:gap-8">
              {/* Text Area */}
              <div className="w-full flex flex-col justify-start items-start gap-5 lg:gap-7">
                <h2 className="w-full text-white text-4xl lg:text-5xl font-semibold font-['IBM_Plex_Sans'] leading-tight uppercase">
                  BECOME ONE OF THE <br className="hidden lg:block" />
                  <span className="text-amber-700">VOICES AT VAULT2047</span>
                </h2>
                <p className="w-full opacity-70 text-white text-base lg:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Speaking at Vault2047 is more than delivering a presentation — it is about shaping the cyber-resilience blueprint for a digitally empowered India.
                </p>
              </div>
              
              {/* 2 Bottom Images */}
              <div className="w-full flex-1 flex flex-row justify-start items-stretch gap-4 lg:gap-6 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
                <div className="flex-1 relative overflow-hidden">
                  <Image src="/Vault-2047/assets/call-for-speaker/voices-1.png" alt="Speaker 1" fill className="object-cover" />
                </div>
                <div className="flex-1 relative overflow-hidden">
                  <Image src="/Vault-2047/assets/call-for-speaker/voices-2.png" alt="Speaker 2" fill className="object-cover" />
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full lg:w-[55%] flex flex-col justify-start items-stretch gap-4 lg:gap-6 min-h-[400px] lg:min-h-[500px]">
              
              {/* Top Row: 2 Images */}
              <div className="w-full h-[180px] sm:h-[220px] lg:h-[240px] flex flex-row justify-start items-stretch gap-4 lg:gap-6">
                <div className="w-[40%] relative overflow-hidden">
                  <Image src="/Vault-2047/assets/call-for-speaker/voices-3.png" alt="Speaker 3" fill className="object-cover" />
                </div>
                <div className="w-[60%] relative overflow-hidden">
                  <Image src="/Vault-2047/assets/call-for-speaker/voices-4.png" alt="Speaker 4" fill className="object-cover" />
                </div>
              </div>
              
              {/* Bottom Row: Image + Text Box */}
              <div className="w-full flex-1 flex flex-col sm:flex-row justify-start items-stretch gap-4 lg:gap-6 min-h-[250px] lg:min-h-[300px]">
                <div className="w-full sm:w-[40%] h-[200px] sm:h-auto relative overflow-hidden">
                  <Image src="/Vault-2047/assets/call-for-speaker/voices-5.png" alt="Speaker 5" fill className="object-cover" />
                </div>
                <div className="w-full sm:w-[60%] h-full p-6 md:p-8 lg:p-12 bg-amber-700/30 flex justify-center items-center overflow-hidden">
                  <p className="w-full opacity-80 text-white text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    From securing critical infrastructure and advancing sovereign cyber-defense capabilities to addressing digital threats and global cyber collaboration, your insights will directly influence the strategies, policies, and frameworks defining India’s journey toward Viksit Bharat 2047.
                  </p>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>

        {/* Why Speak Section */}
        <div className="w-full bg-neutral-900 flex flex-col justify-center items-center py-12 md:py-20 px-6 lg:px-28 gap-8 md:gap-11 overflow-hidden border-b border-white/5">
          <div className="w-full max-w-[1200px] flex justify-start items-center">
            <h2 className="text-left text-white text-2xl md:text-3xl font-bold font-['Orbitron'] tracking-wide">
              Why Speak at Vault2047:
            </h2>
          </div>
          
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="w-full h-auto min-h-[400px] outline outline-1 outline-amber-700/30 flex flex-col justify-start items-stretch overflow-hidden bg-black/20 hover:bg-black/40 transition-colors">
              <div className="w-full h-[250px] relative">
                <Image src="/Vault-2047/assets/call-for-speaker/why-speak-1.jpg" alt="Global Influence" fill className="object-cover" />
              </div>
              <div className="w-full flex-1 p-6 lg:p-8 flex flex-col justify-start items-start gap-4">
                <h3 className="w-full text-white text-lg lg:text-xl font-semibold font-['IBM_Plex_Sans']">Global Influence</h3>
                <p className="w-full opacity-60 text-white text-sm lg:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Share the stage with national security leaders, policymakers, global cyber-security experts, and enterprise CISOs shaping the future of cyber-resilience.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full h-auto min-h-[400px] outline outline-1 outline-amber-700/30 flex flex-col justify-start items-stretch overflow-hidden bg-black/20 hover:bg-black/40 transition-colors">
              <div className="w-full h-[250px] relative">
                <Image src="/Vault-2047/assets/call-for-speaker/why-speak-2.jpg" alt="Strategic Access" fill className="object-cover" />
              </div>
              <div className="w-full flex-1 p-6 lg:p-8 flex flex-col justify-start items-start gap-4">
                <h3 className="w-full text-white text-lg lg:text-xl font-semibold font-['IBM_Plex_Sans']">Strategic Access</h3>
                <p className="w-full opacity-60 text-white text-sm lg:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Engage directly with government bodies, regulators, defense agencies, and global enterprises driving cyber policy and infrastructure.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full h-auto min-h-[400px] outline outline-1 outline-amber-700/30 flex flex-col justify-start items-stretch overflow-hidden bg-black/20 hover:bg-black/40 transition-colors">
              <div className="w-full h-[250px] relative">
                <Image src="/Vault-2047/assets/call-for-speaker/why-speak-3.jpg" alt="Drive Real Impact" fill className="object-cover" />
              </div>
              <div className="w-full flex-1 p-6 lg:p-8 flex flex-col justify-start items-start gap-4">
                <h3 className="w-full text-white text-lg lg:text-xl font-semibold font-['IBM_Plex_Sans']">Drive Real Impact</h3>
                <p className="w-full opacity-60 text-white text-sm lg:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Contribute to high-level discussions that inform national cyber strategies, policy frameworks like the Mumbai Accord, and global collaboration initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Your Interest Form Section */}
        <div className="w-full relative bg-[#040b0e] flex justify-center items-center py-24 px-6 lg:px-28 overflow-hidden border-t border-white/5">
          
          <div className="w-full max-w-[1000px] flex flex-col items-center gap-16 relative z-10">
            
            {/* Title */}
            <div className="w-full text-center">
              <h2 className="text-amber-700 text-3xl md:text-5xl lg:text-[44px] font-bold font-['Orbitron'] leading-tight">
                Submit Your Interest<br />
                <span className="text-white">To Speak at VAULT2047</span>
              </h2>
            </div>
            
            {/* Form Container Wrapper for absolute SVGs */}
            <div className="w-full relative">
              
              {/* Corner Decorations */}
              <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8 w-20 h-24 md:w-28 md:h-32 pointer-events-none z-0">
                <Image src="/Vault-2047/assets/call-for-speaker/cfs-vector-1.svg" alt="Decoration" fill className="object-contain" />
              </div>
              <div className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-24 h-24 md:w-32 md:h-36 pointer-events-none z-0">
                <Image src="/Vault-2047/assets/call-for-speaker/cfs-vector-2.svg" alt="Decoration" fill className="object-contain" />
              </div>

              {/* Solid Form Box */}
              <div className="w-full relative z-10 bg-[#0a1114] p-8 md:p-12 lg:p-16 flex flex-col justify-start items-start gap-12 lg:gap-14 rounded-sm border border-white/5 shadow-2xl">
                
                {/* Row 1 */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-16">
                  <div className="flex-1 w-full flex flex-col justify-start items-start gap-4">
                    <label className="w-full opacity-60 text-white text-xs md:text-sm font-normal font-['IBM_Plex_Sans'] uppercase tracking-widest">
                      Full Name
                    </label>
                    <input type="text" className="w-full bg-transparent border-0 border-b border-amber-700/40 text-white focus:outline-none focus:ring-0 focus:border-amber-500 pb-2 px-0 transition-colors" />
                  </div>
                  <div className="flex-1 w-full flex flex-col justify-start items-start gap-4">
                    <label className="w-full opacity-60 text-white text-xs md:text-sm font-normal font-['IBM_Plex_Sans'] uppercase tracking-widest">
                      Last Name
                    </label>
                    <input type="text" className="w-full bg-transparent border-0 border-b border-amber-700/40 text-white focus:outline-none focus:ring-0 focus:border-amber-500 pb-2 px-0 transition-colors" />
                  </div>
                </div>
                
                {/* Row 2 */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-16">
                  <div className="flex-1 w-full flex flex-col justify-start items-start gap-4">
                    <label className="w-full opacity-60 text-white text-xs md:text-sm font-normal font-['IBM_Plex_Sans'] uppercase tracking-widest">
                      Business Email Address
                    </label>
                    <input type="email" className="w-full bg-transparent border-0 border-b border-amber-700/40 text-white focus:outline-none focus:ring-0 focus:border-amber-500 pb-2 px-0 transition-colors" />
                  </div>
                  <div className="flex-1 w-full flex flex-col justify-start items-start gap-4">
                    <label className="w-full opacity-60 text-white text-xs md:text-sm font-normal font-['IBM_Plex_Sans'] uppercase tracking-widest">
                      Job Title
                    </label>
                    <input type="text" className="w-full bg-transparent border-0 border-b border-amber-700/40 text-white focus:outline-none focus:ring-0 focus:border-amber-500 pb-2 px-0 transition-colors" />
                  </div>
                </div>
                
                {/* Row 3 */}
                <div className="w-full flex flex-col justify-start items-start gap-4">
                  <label className="w-full opacity-60 text-white text-xs md:text-sm font-normal font-['IBM_Plex_Sans']">
                    <span className="uppercase tracking-widest">COMPANY NAME </span>
                    <span className="opacity-80">(Please enter exactly as you would like this to appear on our website)</span>
                    <span className="text-amber-500">*</span>
                  </label>
                  <input type="text" className="w-full bg-transparent border-0 border-b border-amber-700/40 text-white focus:outline-none focus:ring-0 focus:border-amber-500 pb-2 px-0 transition-colors" />
                </div>
                
                {/* Submit Button */}
                <button className="mt-2 px-8 py-4 bg-amber-700 hover:bg-amber-600 transition-colors flex justify-center items-center shadow-lg hover:shadow-amber-900/50">
                  <span className="text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans'] tracking-wide">Submit Application</span>
                </button>
                
              </div>
            </div>
            
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}