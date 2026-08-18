import React from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
import AgendaHeroBackground from "../../components/AgendaHeroBackground";
import AgendaSubnav from "../../components/AgendaSubnav";

export const metadata = {
  title: "Agenda - Vault 2047",
  description: "Explore the comprehensive agenda for Vault 2047.",
};

export default function AgendaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      
      <main className="flex-grow flex flex-col items-center justify-start w-full pt-20 md:pt-24">
        
        {/* Sub-Navigation Bar */}
        <AgendaSubnav />

        {/* Hero Section */}
        <div className="w-full relative h-[400px] md:h-[600px] bg-black flex flex-col justify-center items-center px-4 overflow-hidden">
          <AgendaHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] to-transparent z-10 pointer-events-none" />
          <div className="relative z-10 w-full max-w-[1200px] flex flex-col justify-center items-center gap-5">
            <div className="text-white text-lg font-semibold uppercase tracking-widest text-center" style={{ fontFamily: "var(--font-ibm)" }}>Agenda</div>
            <div className="text-white text-xl md:text-3xl font-bold tracking-[5.40px] text-center" style={{ fontFamily: "var(--font-ibm)" }}>
              WHERE CYBER-DEFENSE MEETS NATIONAL STRATEGY
            </div>
            <div className="text-center">
              <span className="text-white text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>2 Days | </span>
              <span className="text-[#B86A2E] text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>Global Cyber Leadership</span>
              <span className="text-white text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}> | Policy in Action</span>
            </div>
          </div>
        </div>

        {/* Below Hero Banner Section */}
        <div className="w-full px-6 md:px-28 py-20 md:py-36 bg-gray-950 flex flex-col justify-center items-center overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-start items-stretch gap-10">
            
            {/* Left Col */}
            <div className="flex-1 flex flex-col justify-start items-start gap-6">
              <div className="w-full flex flex-col justify-start items-start gap-3">
                <div className="text-[#0D6665] text-lg font-bold tracking-[5.40px]" style={{ fontFamily: "var(--font-ibm)" }}>NOT A CONFERENCE.</div>
                <div className="text-white text-4xl md:text-6xl font-semibold leading-tight" style={{ fontFamily: "var(--font-ibm)" }}>A NATIONAL CYBER FRAMEWORK.</div>
              </div>
              <div className="text-white/70 text-lg font-semibold" style={{ fontFamily: "var(--font-ibm)" }}>Vault2047 is built around a single principle:</div>
              <div className="p-6 bg-[#B86A2E]/30 w-full border-l-4 border-[#B86A2E]">
                <div className="text-white text-lg font-normal leading-relaxed" style={{ fontFamily: "var(--font-ibm)" }}>Cyber-resilience must be designed at the intersection of policy, infrastructure, and innovation.</div>
              </div>
              
              <div className="w-full flex flex-col sm:flex-row justify-start items-stretch gap-4 mt-4">
                <div className="flex-1 relative aspect-[3/4] md:h-[352px] w-full">
                  <Image src="/assets/agenda/daaf07998d851d6bf17265083c9943f8bb954d1a.jpg" alt="Agenda Image 1" fill className="object-cover" />
                </div>
                <div className="flex-1 relative aspect-[3/4] md:h-[352px] w-full">
                  <Image src="/assets/agenda/92c09e3446e8bd7a9a36808aa4cf45b6b7e1ccd3.jpg" alt="Agenda Image 2" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Right Col */}
            <div className="flex-1 flex flex-col justify-start items-start gap-6">
              <div className="w-full flex flex-col sm:flex-row justify-start items-stretch gap-6">
                <div className="flex-1 relative aspect-[3/4] md:h-[352px] w-full">
                  <Image src="/assets/agenda/8d7be89ce2da469e8137543bf9dcb17046b145c1.jpg" alt="Agenda Image 3" fill className="object-cover" />
                </div>
                <div className="flex-1 relative aspect-[3/4] md:h-[352px] w-full bg-black/60 group overflow-hidden flex items-center justify-center cursor-pointer">
                  <Image src="/assets/agenda/c195aa479288b58dbb4ab6b8b19d7c2ad83abc0a.jpg" alt="Agenda Image 4" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                  <div className="w-20 h-20 outline outline-[1.71px] outline-offset-[-1.71px] outline-[#B86A2E] bg-black/50 backdrop-blur-sm flex justify-center items-center z-10 hover:bg-[#B86A2E]/20 transition-colors">
                     <Image src="/assets/agenda/mdi_play (3).svg" alt="Play Video" width={40} height={40} />
                  </div>
                </div>
              </div>

              <div className="w-full p-8 bg-[#0D6665] flex flex-col justify-start items-start gap-6 h-full flex-1">
                <div className="text-white text-xl font-semibold" style={{ fontFamily: "var(--font-ibm)" }}>Each session is intentionally mapped to:</div>
                <div className="flex flex-col gap-2.5">
                  <div className="text-white/90 text-lg font-normal" style={{ fontFamily: "var(--font-ibm)" }}>• Strengthen sovereign cyber-defense capabilities</div>
                  <div className="text-white/90 text-lg font-normal" style={{ fontFamily: "var(--font-ibm)" }}>• Enable cross-sector collaboration</div>
                  <div className="text-white/90 text-lg font-normal" style={{ fontFamily: "var(--font-ibm)" }}>• Drive implementation at scale</div>
                </div>
                <div className="w-full h-px bg-[#0a5251]" />
                <div className="text-white/90 text-lg font-normal italic" style={{ fontFamily: "var(--font-ibm)" }}>This is where conversations evolve into frameworks - and frameworks into action.</div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Layers Section */}
        <div className="w-full px-6 md:px-28 py-24 bg-neutral-900 flex flex-col justify-center items-center gap-12 overflow-hidden">
          <div className="text-center text-white text-3xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
            Core Layers of Engagement
          </div>
          
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Layer 1 */}
            <div className="w-full p-6 relative bg-gradient-to-b from-black/20 to-transparent outline outline-1 outline-[#B86A2E]/30 flex flex-col justify-start items-start gap-8 overflow-hidden group hover:outline-[#B86A2E] transition-all duration-300">
              <div className="w-[150%] aspect-square absolute -top-[50%] -left-[25%] opacity-0 group-hover:opacity-30 bg-[#B86A2E] rounded-full blur-[100px] transition-opacity duration-700 pointer-events-none" />
              <div className="text-white/50 text-base font-semibold tracking-widest relative z-10" style={{ fontFamily: "var(--font-ibm)" }}>01</div>
              <div className="flex-1 flex flex-col justify-start items-start gap-3 relative z-10">
                <div className="text-white text-3xl font-semibold" style={{ fontFamily: "var(--font-ibm)" }}>Policy &amp; <br/>Governance Layer</div>
                <div className="text-white/70 text-base font-normal leading-6" style={{ fontFamily: "var(--font-ibm)" }}>
                  <p>• Ministerial keynotes and national security addresses</p>
                  <p>• The Mumbai Accord (closed-door policy dialogues)</p>
                  <p>• Government-to-government and public-private frameworks</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#B86A2E]/30 relative z-10" />
              <div className="w-full flex justify-start items-start gap-5 relative z-10">
                <div className="flex flex-col justify-center items-start">
                  <div className="text-[#0D6665] text-base font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-ibm)" }}>Focus</div>
                  <div className="text-[#0D6665] text-2xl font-semibold uppercase">→</div>
                </div>
                <div className="flex-1 text-white/70 text-base font-normal mt-1" style={{ fontFamily: "var(--font-ibm)" }}>Shaping cyber policy and national direction</div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="w-full p-6 relative bg-gradient-to-b from-black/20 to-transparent outline outline-1 outline-[#B86A2E]/30 flex flex-col justify-start items-start gap-8 overflow-hidden group hover:outline-[#B86A2E] transition-all duration-300">
              <div className="w-[150%] aspect-square absolute -top-[50%] -left-[25%] opacity-0 group-hover:opacity-30 bg-[#B86A2E] rounded-full blur-[100px] transition-opacity duration-700 pointer-events-none" />
              <div className="text-white/50 text-base font-semibold tracking-widest relative z-10" style={{ fontFamily: "var(--font-ibm)" }}>02</div>
              <div className="flex-1 flex flex-col justify-start items-start gap-3 relative z-10">
                <div className="text-white text-3xl font-semibold" style={{ fontFamily: "var(--font-ibm)" }}>Industry &amp; Infrastructure Layer</div>
                <div className="text-white/70 text-base font-normal leading-6" style={{ fontFamily: "var(--font-ibm)" }}>
                  <p>• Critical infrastructure security (BFSI, Telecom, Power, Healthcare)</p>
                  <p>• Enterprise cybersecurity strategies</p>
                  <p>• Zero-trust, cloud, and OT security</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#B86A2E]/30 relative z-10" />
              <div className="w-full flex justify-start items-start gap-5 relative z-10">
                <div className="flex flex-col justify-center items-start">
                  <div className="text-[#0D6665] text-base font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-ibm)" }}>Focus</div>
                  <div className="text-[#0D6665] text-2xl font-semibold uppercase">→</div>
                </div>
                <div className="flex-1 text-white/70 text-base font-normal mt-1" style={{ fontFamily: "var(--font-ibm)" }}>Securing real-world systems at scale</div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="w-full p-6 relative bg-gradient-to-b from-black/20 to-transparent outline outline-1 outline-[#B86A2E]/30 flex flex-col justify-start items-start gap-8 overflow-hidden group hover:outline-[#B86A2E] transition-all duration-300">
              <div className="w-[150%] aspect-square absolute -top-[50%] -left-[25%] opacity-0 group-hover:opacity-30 bg-[#B86A2E] rounded-full blur-[100px] transition-opacity duration-700 pointer-events-none" />
              <div className="text-white/50 text-base font-semibold tracking-widest relative z-10" style={{ fontFamily: "var(--font-ibm)" }}>03</div>
              <div className="flex-1 flex flex-col justify-start items-start gap-3 relative z-10">
                <div className="text-white text-3xl font-semibold" style={{ fontFamily: "var(--font-ibm)" }}>Innovation &amp; Future Layer</div>
                <div className="text-white/70 text-base font-normal leading-6" style={{ fontFamily: "var(--font-ibm)" }}>
                  <p>• AI in cybersecurity</p>
                  <p>• Emerging threats (quantum, deepfakes, APTs)</p>
                  <p>• Cyber Foundry (startup ecosystem)</p>
                  <p>• Talent and skills development</p>
                </div>
              </div>
              <div className="w-full h-px bg-[#B86A2E]/30 relative z-10" />
              <div className="w-full flex justify-start items-start gap-5 relative z-10">
                <div className="flex flex-col justify-center items-start">
                  <div className="text-[#0D6665] text-base font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-ibm)" }}>Focus</div>
                  <div className="text-[#0D6665] text-2xl font-semibold uppercase">→</div>
                </div>
                <div className="flex-1 text-white/70 text-base font-normal mt-1" style={{ fontFamily: "var(--font-ibm)" }}>Building the future cyber ecosystem</div>
              </div>
            </div>

          </div>
        </div>

        {/* Theme Section */}
        <div className="w-full px-6 md:px-28 py-24 bg-black flex flex-col justify-start items-center gap-11 overflow-hidden relative">
          <Image src="/assets/agenda/Component 8.png" alt="Theme BG" fill className="object-cover opacity-20" />
          
          <div className="relative z-10 w-full max-w-[1200px] flex flex-col justify-start items-center gap-5 text-center">
            <div className="text-white text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
              Theme Driving The Discussion
            </div>
            <div className="text-white/90 text-lg font-normal max-w-[800px]" style={{ fontFamily: "var(--font-ibm)" }}>
              The agenda is further anchored by focused tracks addressing today’s most critical cyber challenges:
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Row 1 */}
            <div className="w-full aspect-[2/1] md:aspect-auto md:h-56 p-8 bg-black/60 outline outline-1 outline-neutral-700 backdrop-blur-md flex justify-center items-center group hover:bg-[#0D6665]/20 transition-all cursor-pointer relative overflow-hidden">
               <Image src="/assets/agenda/2461f32012f270ccf6ecea8ff823353612b975ec.png" alt="Icon" fill className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
               <div className="text-white text-xl md:text-2xl font-bold text-center relative z-10" style={{ fontFamily: "var(--font-orbitron)" }}>Cyber-Defence &amp; Critical Infrastructure</div>
            </div>
            <div className="w-full aspect-[2/1] md:aspect-auto md:h-56 p-8 bg-black/60 outline outline-1 outline-neutral-700 backdrop-blur-md flex justify-center items-center group hover:bg-[#0D6665]/20 transition-all cursor-pointer relative overflow-hidden">
               <Image src="/assets/agenda/Component 5.png" alt="Icon" fill className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
               <div className="text-white text-xl md:text-2xl font-bold text-center relative z-10" style={{ fontFamily: "var(--font-orbitron)" }}>AI–Cyber Nexus</div>
            </div>
            <div className="w-full aspect-[2/1] md:aspect-auto md:h-56 p-8 bg-black/60 outline outline-1 outline-neutral-700 backdrop-blur-md flex justify-center items-center group hover:bg-[#0D6665]/20 transition-all cursor-pointer relative overflow-hidden">
               <Image src="/assets/agenda/Component 6.png" alt="Icon" fill className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
               <div className="text-white text-xl md:text-2xl font-bold text-center relative z-10" style={{ fontFamily: "var(--font-orbitron)" }}>Emerging Threat Landscape</div>
            </div>
            
            {/* Row 2 */}
            <div className="w-full aspect-[2/1] md:aspect-auto md:h-56 p-8 bg-black/60 outline outline-1 outline-neutral-700 backdrop-blur-md flex justify-center items-center group hover:bg-[#0D6665]/20 transition-all cursor-pointer relative overflow-hidden">
               <Image src="/assets/agenda/Component 10.png" alt="Icon" fill className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
               <div className="text-white text-xl md:text-2xl font-bold text-center relative z-10" style={{ fontFamily: "var(--font-orbitron)" }}>IT / OT / IoT Security</div>
            </div>
            <div className="w-full aspect-[2/1] md:aspect-auto md:h-56 p-8 bg-black/60 outline outline-1 outline-neutral-700 backdrop-blur-md flex justify-center items-center group hover:bg-[#0D6665]/20 transition-all cursor-pointer relative overflow-hidden">
               <Image src="/assets/agenda/Component 7.png" alt="Icon" fill className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
               <div className="text-white text-xl md:text-2xl font-bold text-center relative z-10" style={{ fontFamily: "var(--font-orbitron)" }}>Cyber Talent &amp; Workforce Development</div>
            </div>
            <div className="w-full aspect-[2/1] md:aspect-auto md:h-56 p-8 bg-black/60 outline outline-1 outline-neutral-700 backdrop-blur-md flex justify-center items-center group hover:bg-[#0D6665]/20 transition-all cursor-pointer relative overflow-hidden">
               <Image src="/assets/agenda/Component 9.png" alt="Icon" fill className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
               <div className="text-white text-xl md:text-2xl font-bold text-center relative z-10" style={{ fontFamily: "var(--font-orbitron)" }}>Digital Trust &amp; Citizen Safety</div>
            </div>
          </div>

          <div className="relative z-10 w-full pt-6 flex justify-center items-center">
            <button className="px-8 py-5 bg-[#B86A2E] text-white text-base font-medium hover:bg-[#9a5624] transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>
              Explore Themes
            </button>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full px-6 md:px-12 py-24 bg-gray-950 flex flex-col justify-center items-center gap-12 overflow-hidden">
          <div className="text-center text-white text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
            How You will Experience Vault2047
          </div>
          
          <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-center items-stretch gap-4 pb-6">
            {[
              { title: "Strategic Keynotes", desc: "High-impact addresses from national leaders and global cyber authorities defining the direction of cyber-resilience.", img: "01bb34d31ddffd0105a170c978fa0bbeefc4f99b.jpg" },
              { title: "Executive Dialogues", desc: "Closed and open discussions between policymakers, CISOs, and industry leaders tackling real-world cyber challenges.", img: "b497463f5699922e1b8d779b821f6b1668397589 (5).jpg" },
              { title: "CISO & Leadership Forum", desc: "Invite-only sessions focused on peer exchange, threat intelligence, and sector-specific risks.", img: "bb0b8e87ba36e92609ed345357073c2d09441d13.jpg" },
              { title: "The Cyber Foundry Stage", desc: "Where emerging cyber startups pitch, validate, and connect with capital and enterprise buyers.", img: "96ca34bd221377479f9c6f110f358f558c19c38a.jpg" },
              { title: "Live Innovation Showcases", desc: "Hands-on exposure to cybersecurity technologies, infrastructure solutions, and real-world deployments.", img: "630d043e1f0686149558d38da18e3c2e7c58563f.jpg" }
            ].map((exp, idx) => (
              <div 
                key={idx} 
                className="relative flex-1 hover:flex-[1.5] lg:hover:flex-[2] outline outline-1 outline-zinc-800 bg-black group hover:outline-[#B86A2E] transition-all duration-500 ease-in-out cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Image Section - Fixed Height */}
                <div className="w-full h-[200px] lg:h-[250px] relative overflow-hidden">
                  <Image 
                    src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/agenda/${exp.img}`} 
                    alt={exp.title} 
                    fill 
                    className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-500" 
                  />
                </div>
                
                {/* Text Section - Always Visible */}
                <div className="relative flex-1 p-6 flex flex-col justify-start items-start gap-3 bg-black">
                  
                  {/* Subtle Glow Effect on Hover */}
                  <div className="w-[150px] aspect-square absolute top-0 left-0 opacity-0 group-hover:opacity-20 bg-[#0D6665] rounded-full blur-[50px] transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Title */}
                  <div className="text-white text-lg lg:text-xl font-bold group-hover:text-[#B86A2E] transition-colors" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {exp.title}
                  </div>
                  
                  {/* Description */}
                  <div className="text-neutral-400 text-sm font-normal" style={{ fontFamily: "var(--font-ibm)" }}>
                    {exp.desc}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes Section */}
        <div className="w-full px-6 md:px-28 py-24 bg-neutral-900 flex flex-col lg:flex-row justify-start items-stretch gap-10 overflow-hidden">
          <div className="flex-1 p-6 flex flex-col justify-center items-start gap-8 z-10 relative">
            <div className="flex flex-col gap-4">
              <div className="text-[#0D6665] text-lg font-semibold tracking-[5.40px]" style={{ fontFamily: "var(--font-ibm)" }}>BUILT FOR OUTCOMES, NOT JUST DISCUSSIONS</div>
              <div className="text-white text-3xl font-semibold leading-tight" style={{ fontFamily: "var(--font-ibm)" }}>Vault2047 is designed to deliver measurable impact:</div>
            </div>
            
            <div className="w-full flex flex-col gap-4">
              {['Policy outcomes through The Mumbai Accord', 'Investment pipelines via Cyber Foundry', 'Enterprise adoption of emerging cyber technologies', 'Talent development through real-time skill programs'].map((outcome, idx) => (
                <div key={idx} className="w-full bg-white/5 flex justify-start items-stretch group hover:bg-white/10 transition-colors cursor-default">
                  <div className="w-16 bg-[#0D6665] flex justify-center items-center relative overflow-hidden group-hover:bg-[#0a5251] transition-colors">
                    {/* Abstract Icon representing outcome */}
                    <div className="w-6 h-6 border border-white opacity-80" />
                  </div>
                  <div className="flex-1 p-4 flex items-center">
                    <div className="text-zinc-300 text-lg font-normal" style={{ fontFamily: "var(--font-ibm)" }}>{outcome}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative min-h-[400px]">
            <Image src="/assets/agenda/b6b6eaee5679ffc666feaf249fc97e1e822945db.jpg" alt="Outcomes Image" fill className="object-cover" />
          </div>
        </div>

        {/* Shape the Cyber Agenda CTA */}
        <div className="w-full px-6 md:px-28 py-24 bg-gray-950 flex flex-col justify-center items-center gap-16 overflow-hidden">
          <div className="w-full max-w-[1000px] flex flex-col items-center gap-5 text-center">
            <div className="text-[#0D6665] text-lg font-bold uppercase tracking-[5.40px]" style={{ fontFamily: "var(--font-ibm)" }}>Shape the Cyber Agenda</div>
            <div>
              <span className="text-[#B86A2E] text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>Vault2047</span>
              <span className="text-white text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}> invites leaders, innovators, and institutions to actively contribute to the </span>
              <span className="text-[#B86A2E] text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>agenda</span>
              <span className="text-white text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>.</span>
            </div>
          </div>

          <div className="w-full max-w-[1200px] flex flex-col items-center gap-12">
            <div className="w-full bg-black/10 flex flex-col border border-gray-900">
              {['Participate in strategic discussions', 'Engage in policy roundtables', 'Showcase solutions and innovations', 'Connect with global cyber stakeholders'].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`w-full py-6 px-4 ${idx !== 3 ? 'border-b border-gray-900' : ''} text-center text-white text-lg font-normal relative group cursor-pointer transition-all duration-300`} 
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top Gradient Border */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B86A2E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Bottom Gradient Border */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B86A2E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="relative z-10">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-64">
              <div className="relative aspect-video md:aspect-auto w-full h-full border border-zinc-600">
                <Image src="/assets/agenda/a329a57696e003dd6267d1651a62b8fa23be41ed.jpg" alt="Shape Agenda 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-video md:aspect-auto w-full h-full border border-zinc-600">
                <Image src="/assets/agenda/7d40824b145504b3bcad7e059ad957f4ee5d7413.jpg" alt="Shape Agenda 2" fill className="object-cover" />
              </div>
              <div className="relative aspect-video md:aspect-auto w-full h-full border border-zinc-600 overflow-hidden">
                <Image src="/assets/agenda/162430f1e0981178c83098af037985ce7b4af0d8.jpg" alt="Shape Agenda 3" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1000px] flex flex-wrap justify-center items-center gap-6 mt-8">
            <button className="px-8 py-5 bg-[#B86A2E] text-white text-base font-medium hover:bg-[#9a5624] transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>Get Your Pass</button>
            <button className="px-8 py-5 outline outline-1 outline-offset-[-1px] outline-[#B86A2E] text-white hover:bg-[#B86A2E]/20 transition-colors text-base font-medium" style={{ fontFamily: "var(--font-ibm)" }}>Apply to Exhibit →</button>
            <button className="px-8 py-5 outline outline-1 outline-offset-[-1px] outline-[#B86A2E] text-white hover:bg-[#B86A2E]/20 transition-colors text-base font-medium" style={{ fontFamily: "var(--font-ibm)" }}>Apply to Sponsor →</button>
            <button className="px-8 py-5 outline outline-1 outline-offset-[-1px] outline-[#0D6665] text-white hover:bg-[#0D6665]/20 transition-colors text-base font-medium" style={{ fontFamily: "var(--font-ibm)" }}>Enquire Now</button>
          </div>
        </div>

      </main>
      
      <Footer />

    </div>
  );
}
