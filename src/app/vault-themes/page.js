import React from 'react';
import Image from 'next/image';
import AgendaSubnav from "../../components/AgendaSubnav";
import Footer from "../../components/Footer";
import AgendaHeroBackground from "../../components/AgendaHeroBackground";
import SpeakersSection from "../../components/SpeakersSection";

export const metadata = {
  title: "Vault Themes 2026 - Vault 2047",
  description: "Agenda and Themes for Vault 2047.",
};

export default function ThemesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        <AgendaSubnav />

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[500px] px-6 lg:px-32 flex flex-col justify-center items-center gap-6 overflow-hidden bg-black/40">
          
          <AgendaHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] to-transparent z-10 pointer-events-none" />

          <div className="relative z-10 w-full max-w-[1184px] text-center justify-start text-[#B86A2E] text-base md:text-lg font-bold font-['IBM_Plex_Sans'] uppercase tracking-[2px] md:tracking-widest">
            Agenda / Themes
          </div>
          
          <div className="relative z-10 w-full self-stretch flex justify-center items-center gap-2.5 mt-2">
            <div className="flex-1 text-center justify-center text-white text-3xl md:text-5xl font-bold font-['Orbitron'] leading-tight drop-shadow-lg">
              Where Cyber-Resilience is Built, <br className="hidden md:block" />Not Discussed.
            </div>
          </div>
          
          <div className="relative z-10 w-full max-w-[900px] self-stretch text-center justify-center mx-auto mt-4 text-white text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[2px] md:tracking-[3.06px]">
            Defining the Future of Cyber-Defense, Policy, and Digital Trust
          </div>
          
          <div className="relative z-10 w-full max-w-[800px] self-stretch text-center justify-center mx-auto mt-2 text-white/90 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
            Vault2047 brings together the world’s foremost cyber leaders, policymakers, and innovators to address the most critical challenges shaping global cyber-resilience.
          </div>
          
        </div>

        {/* Architecting India's Cyber-Resilience Blueprint */}
        <div className="w-full flex justify-center self-stretch px-6 lg:px-28 py-16 lg:py-24 bg-gray-950 overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
            
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-white text-3xl md:text-4xl font-semibold font-['IBM_Plex_Sans'] leading-tight">Architecting India’s</div>
                <div className="text-amber-700 text-3xl md:text-4xl font-semibold font-['IBM_Plex_Sans'] leading-tight">Cyber-Resilience Blueprint</div>
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <p className="text-white text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  As India accelerates toward a digitally empowered economy, securing its infrastructure, data, and systems becomes mission-critical.
                </p>
                <p className="text-white text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Vault2047 is designed as a strategic platform to align policy, innovation, and capital — ensuring India not only defends its digital ecosystem but leads globally in cyber governance.
                </p>
              </div>
            </div>

            {/* Image Box */}
            <div className="w-full lg:w-[486px] h-[300px] md:h-[370px] relative rounded-lg overflow-hidden shrink-0 shadow-2xl outline outline-1 outline-amber-700/30 group">
              <Image src="/Vault-2047/assets/vault-themes/blueprint.png" alt="Cyber-Resilience Blueprint" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              {/* Optional ambient glow over image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-700/10 to-transparent pointer-events-none mix-blend-screen z-10"></div>
            </div>

          </div>
        </div>

        {/* The Themes Driving Vault2047 */}
        <div className="w-full flex justify-center self-stretch px-6 lg:px-28 py-16 lg:py-24 bg-[#0a0a0a] overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-16">
            
            <div className="w-full flex flex-col justify-start items-center gap-6">
              <div className="w-full text-center">
                <span className="text-white text-3xl md:text-4xl font-bold font-['Orbitron']">THE THEMES DRIVING </span>
                <span className="text-amber-700 text-3xl md:text-4xl font-bold font-['Orbitron']">VAULT2047</span>
              </div>
              <div className="w-full max-w-[800px] text-center text-neutral-300 text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Anchored by six high-impact thematic tracks, each theme is designed to address real-world cyber challenges and provide actionable insights.
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Cyber-defense & critical infrastructure",
                  icon: "theme_icon1.svg",
                  bullets: [
                    "Securing India’s most vital sectors through sovereign cyberdefense capabilities.",
                    "Protection across BFSI, Power, Telecom, Healthcare, Government.",
                    "Command & Control Centres (CCC) and national defense systems.",
                    "Infrastructure resilience and cyber warfare readiness."
                  ]
                },
                {
                  title: "AI–cyber nexus",
                  icon: "theme_icon2.svg",
                  bullets: [
                    "Exploring the dual role of AI as both a defense mechanism and a threat vector.",
                    "AI-driven threat detection and predictive analytics",
                    "Deepfakes, adversarial AI, and automated attacks",
                    "Securing AI systems and models"
                  ]
                },
                {
                  title: "Emerging threat landscape",
                  icon: "theme_icon3.svg",
                  bullets: [
                    "Preparing for the next wave of cyber threats shaping global security.",
                    "Quantum-resistant cryptography",
                    "Advanced persistent threats (APTs)",
                    "Dark web intelligence and cybercrime evolution"
                  ]
                },
                {
                  title: "IT / OT / IoT security convergence",
                  icon: "theme_icon4.svg",
                  bullets: [
                    "Securing the intersection of enterprise IT, industrial systems, and connected devices.",
                    "Industrial control systems (ICS) and SCADA security",
                    "Smart cities and connected infrastructure",
                    "Operational resilience across industries"
                  ]
                },
                {
                  title: "Cyber Talent & Workforce",
                  icon: "theme_icon5.svg",
                  bullets: [
                    "Building the workforce needed to address the global cyber talent gap.",
                    "Upskilling through certifications and training programs",
                    "Academia–industry collaboration",
                    "Workforce readiness for emerging threats"
                  ]
                },
                {
                  title: "Digital trust, awareness and citizen safety",
                  icon: "theme_icon6.svg",
                  bullets: [
                    "Strengthening trust in digital ecosystems at scale.",
                    "Cyber awareness and digital hygiene",
                    "Fraud prevention (UPI, identity theft, scams)",
                    "Citizen-level cyber protection frameworks"
                  ]
                }
              ].map((theme, idx) => (
                <div key={idx} className="w-full p-8 relative bg-black/40 outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-8 overflow-hidden group hover:bg-black/60 transition-colors duration-500 rounded-sm">
                  {/* Ambient Glow Background */}
                  <div className="absolute w-96 h-64 -top-20 -left-10 opacity-20 group-hover:opacity-40 bg-amber-700 rounded-full blur-[100px] transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Icon */}
                  <div className="w-16 h-16 relative flex items-center justify-center shrink-0">
                    <Image src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/vault-themes/${theme.icon}`} alt={theme.title} fill className="object-contain" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-start items-start gap-5 relative z-10">
                    <div className="w-full text-white text-xl md:text-2xl font-bold font-['Orbitron'] uppercase leading-snug h-[60px] flex items-start">
                      {theme.title}
                    </div>
                    <div className="w-16 h-0 border-b-2 border-amber-700"></div>
                    <div className="w-full flex flex-col gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      {theme.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="text-white text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* From Themes to Execution */}
        <div className="w-full flex justify-center self-stretch px-6 lg:px-28 py-16 lg:py-24 bg-gray-950 overflow-hidden border-t border-gray-900/50">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-start items-start gap-9">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-white text-3xl md:text-4xl font-semibold font-['IBM_Plex_Sans']">
                  From Themes to <span className="text-amber-700">Execution</span>
                </div>
                <div className="text-neutral-300 text-lg font-normal font-['IBM_Plex_Sans'] mt-2">
                  Each theme at Vault2047 is not just a discussion point — it is linked to:
                </div>
              </div>
              
              {/* Accordion / List */}
              <div className="w-full flex flex-col justify-start items-start">
                <div className="w-full px-4 py-5 border-b border-white/10 hover:bg-white/5 hover:border-amber-700/70 transition-colors cursor-pointer group">
                  <div className="text-white group-hover:text-amber-500 transition-colors text-base md:text-lg font-medium font-['IBM_Plex_Sans']">National policy</div>
                </div>
                <div className="w-full px-4 py-5 border-b border-white/10 hover:bg-white/5 hover:border-amber-700/70 transition-colors cursor-pointer group">
                  <div className="text-white group-hover:text-amber-500 transition-colors text-base md:text-lg font-medium font-['IBM_Plex_Sans']">Industry implementation strategies</div>
                </div>
                <div className="w-full px-4 py-5 border-b border-white/10 hover:bg-white/5 hover:border-amber-700/70 transition-colors cursor-pointer group">
                  <div className="text-white group-hover:text-amber-500 transition-colors text-base md:text-lg font-medium font-['IBM_Plex_Sans']">Investment and innovation pipelines</div>
                </div>
                <div className="w-full px-4 py-5 border-b border-white/10 hover:bg-white/5 hover:border-amber-700/70 transition-colors cursor-pointer group">
                  <div className="text-white group-hover:text-amber-500 transition-colors text-base md:text-lg font-medium font-['IBM_Plex_Sans']">Talent development initiatives</div>
                </div>
              </div>
              
              <div className="text-[#0D6665] text-lg md:text-xl font-medium font-['IBM_Plex_Sans'] mt-2 leading-relaxed">
                This ensures that every theme translates into impactful and meaningful conversations.
              </div>
            </div>

            {/* Right Images - Vertical Marquee / Scroll */}
            <div className="w-full lg:w-[584px] h-[400px] lg:h-[500px] relative overflow-hidden rounded-xl bg-black/20 border border-white/5 shadow-2xl shrink-0">
               <style>{`
                 @keyframes scrollVert {
                   from { transform: translateY(0); }
                   to { transform: translateY(calc(-50% - 0.75rem)); } /* -50% of content minus half the gap */
                 }
                 .animate-scrollVert {
                   animation: scrollVert 25s linear infinite;
                 }
                 .marquee-vertical:hover .animate-scrollVert {
                   animation-play-state: paused;
                 }
               `}</style>
               <div className="absolute inset-0 flex flex-col gap-6 marquee-vertical overflow-hidden p-6">
                 {/* Set 1 */}
                 <div className="flex flex-col gap-6 animate-scrollVert shrink-0">
                    <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden shrink-0 outline outline-1 outline-white/10">
                      <Image src="/Vault-2047/assets/vault-themes/execution1.png" alt="National Policy" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden shrink-0 outline outline-1 outline-white/10">
                      <Image src="/Vault-2047/assets/vault-themes/execution2.png" alt="Implementation" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden shrink-0 outline outline-1 outline-white/10">
                      <Image src="/Vault-2047/assets/vault-themes/execution3.png" alt="Investment" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden shrink-0 outline outline-1 outline-white/10">
                      <Image src="/Vault-2047/assets/vault-themes/execution4.png" alt="Talent" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                 </div>
                 {/* Duplicate for infinite loop */}
                 <div className="flex flex-col gap-6 animate-scrollVert shrink-0">
                    <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden shrink-0 outline outline-1 outline-white/10">
                      <Image src="/Vault-2047/assets/vault-themes/execution1.png" alt="National Policy" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden shrink-0 outline outline-1 outline-white/10">
                      <Image src="/Vault-2047/assets/vault-themes/execution2.png" alt="Implementation" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden shrink-0 outline outline-1 outline-white/10">
                      <Image src="/Vault-2047/assets/vault-themes/execution3.png" alt="Investment" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full aspect-[16/10] relative rounded-lg overflow-hidden shrink-0 outline outline-1 outline-white/10">
                      <Image src="/Vault-2047/assets/vault-themes/execution4.png" alt="Talent" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                 </div>
               </div>
               
               {/* Gradients to hide the hard scroll edges */}
               <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-950 to-transparent z-10 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-950 to-transparent z-10 pointer-events-none"></div>
            </div>

          </div>
        </div>

      </main>
      <SpeakersSection />
      <Footer />
    </div>
  );
}
