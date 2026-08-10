import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Canvas3DBackground from '../../components/Canvas3DBackground';

export const metadata = {
  title: "Ecosystem - Vault 2047",
  description: "Vault2047 is a strategically curated cyber ecosystem.",
};

export default function EcosystemPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        {/* Sub-Navigation */}
        <div className="w-full bg-[#040b0e] border-b border-white/10 sticky top-[72px] z-40 flex justify-center items-center overflow-x-auto hide-scrollbar">
          <div className="flex justify-center items-center gap-2 md:gap-8 min-w-max px-6">
            
            <Link href="/sponsors" className="px-4 py-4 border-b-4 border-transparent hover:border-teal-500/50 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group">
              <div className="text-white/70 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight group-hover:text-white transition-colors">Sponsors</div>
            </Link>
            
            <Link href="/exhibitors" className="px-4 py-4 border-b-4 border-transparent hover:border-teal-500/50 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group">
              <div className="text-white/70 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight group-hover:text-white transition-colors">Exhibitors</div>
            </Link>
            
            <Link href="/media-partners" className="px-4 py-4 border-b-4 border-transparent hover:border-teal-500/50 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group">
              <div className="text-white/70 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight group-hover:text-white transition-colors">Media Partners</div>
            </Link>
            
            <Link href="/association-partners" className="px-4 py-4 border-b-4 border-transparent hover:border-teal-500/50 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group">
              <div className="text-white/70 text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight group-hover:text-white transition-colors">Association Partners</div>
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
              Vault2047
            </div>
            
            <div className="w-full flex justify-center items-center">
              <h1 className="max-w-[1073px] text-center text-white text-3xl md:text-5xl lg:text-[52px] font-bold font-['Orbitron'] leading-snug md:leading-tight drop-shadow-[0_0_15px_rgba(13,102,101,0.5)]">
                The Cyber Ecosystem
              </h1>
            </div>
            
          </div>
        </div>

        {/* Ecosystem Glass Card Section */}
        <div className="w-full relative py-16 md:py-24 lg:py-32 flex justify-center items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image src="/Vault-2047/assets/ecosystem/b5e2af53346cfaa5c84da9720afd94f6f74e6488 (3).jpg" alt="Background" fill className="object-cover opacity-30 blur-sm" />
            <div className="absolute inset-0 bg-gray-950/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] via-transparent to-[#040b0e]" />
          </div>

          <div className="w-full max-w-[1200px] px-6 lg:px-12 relative z-10 flex flex-col items-center">
            
            <div className="w-full p-8 md:p-12 bg-white/5 outline outline-1 outline-amber-700/30 backdrop-blur-xl flex flex-col-reverse lg:flex-row justify-start items-center lg:items-stretch gap-8 lg:gap-12 rounded-sm shadow-2xl">
              
              {/* Left Text */}
              <div className="flex-1 flex flex-col justify-center items-start gap-6">
                <p className="text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Vault2047 is a strategically curated cyber ecosystem bringing together policymakers, defense agencies, global enterprises, investors, and innovators.
                </p>
                <p className="text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Whether you are shaping national cyber policy, securing critical infrastructure, deploying enterprise solutions, or investing in the future of cybersecurity, Vault2047 serves as your gateway to India’s rapidly evolving cyber-resilience landscape.
                </p>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-[45%] h-64 md:h-80 lg:h-96 relative flex-shrink-0">
                <Image src="/Vault-2047/assets/ecosystem/d505eab5db4d47e2bd73d9eb50317f91ba766a70 (1).png" alt="Ecosystem Gateway" fill className="object-cover rounded-sm shadow-lg" />
              </div>

            </div>

          </div>
        </div>

        {/* The Vault2047 Ecosystem Section */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-gray-950 flex flex-col justify-center items-center gap-12 overflow-hidden border-t border-white/5">
          <div className="w-full max-w-[1200px] flex justify-center items-center text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
              The Vault2047 Ecosystem
            </h2>
          </div>
          
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            
            {/* SPONSORS */}
            <div className="w-full outline outline-1 outline-amber-700/30 flex flex-col hover:outline-amber-700 transition-colors group bg-black/10">
              <div className="w-full h-48 relative overflow-hidden flex-shrink-0">
                <Image src="/Vault-2047/assets/ecosystem/7b7ea6f12cf25d478bc4d510289a581ba34b4cca (1).png" alt="Sponsors" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full flex-1 p-6 relative flex flex-col gap-6 overflow-hidden">
                {/* Glow effects */}
                <div className="absolute w-60 h-60 -right-10 -bottom-10 opacity-30 bg-teal-800 rounded-full blur-[52px]" />
                <div className="absolute w-44 h-44 -left-10 -bottom-10 opacity-10 bg-white rounded-full blur-[52px]" />
                
                <div className="relative z-10 flex flex-col gap-3">
                  <h3 className="text-white text-xl md:text-2xl font-bold font-['Orbitron'] tracking-wide">SPONSORS</h3>
                  <p className="text-white/80 text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Driving strategic dialogue and enabling the future of cyber resilience.</p>
                </div>
                
                <ul className="relative z-10 flex flex-col gap-3 text-white/60 text-sm font-normal font-['IBM_Plex_Sans'] mt-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Establish leadership positioning within India’s cyber-defense ecosystem
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Showcase innovation across critical infrastructure and enterprise security
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Engage directly with policymakers, CISOs, and global stakeholders
                  </li>
                </ul>
              </div>
            </div>

            {/* EXHIBITORS */}
            <div className="w-full outline outline-1 outline-amber-700/30 flex flex-col hover:outline-amber-700 transition-colors group bg-black/10">
              <div className="w-full h-48 relative overflow-hidden flex-shrink-0">
                <Image src="/Vault-2047/assets/ecosystem/82a7fa4ba3a85e8ea440214f56ab029428bf2e45 (1).png" alt="Exhibitors" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full flex-1 p-6 relative flex flex-col gap-6 overflow-hidden">
                <div className="absolute w-60 h-60 -right-10 -bottom-10 opacity-30 bg-teal-800 rounded-full blur-[52px]" />
                <div className="absolute w-44 h-44 -left-10 -bottom-10 opacity-10 bg-white rounded-full blur-[52px]" />
                
                <div className="relative z-10 flex flex-col gap-3">
                  <h3 className="text-white text-xl md:text-2xl font-bold font-['Orbitron'] tracking-wide">EXHIBITORS</h3>
                  <p className="text-white/80 text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Where cybersecurity solutions meet real-world deployment.</p>
                </div>
                
                <ul className="relative z-10 flex flex-col gap-3 text-white/60 text-sm font-normal font-['IBM_Plex_Sans'] mt-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Present cutting-edge solutions to enterprise buyers and government stakeholders
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Demonstrate technologies across cyber-defense, AI security, and infrastructure protection
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Enable adoption across critical sectors and national initiatives
                  </li>
                </ul>
              </div>
            </div>

            {/* MEDIA */}
            <div className="w-full outline outline-1 outline-amber-700/30 flex flex-col hover:outline-amber-700 transition-colors group bg-black/10">
              <div className="w-full h-48 relative overflow-hidden flex-shrink-0">
                <Image src="/Vault-2047/assets/ecosystem/8932cd1140ebcb775ac9bd97a90967304c4136ef (1).png" alt="Media" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full flex-1 p-6 relative flex flex-col gap-6 overflow-hidden">
                <div className="absolute w-60 h-60 -right-10 -bottom-10 opacity-30 bg-teal-800 rounded-full blur-[52px]" />
                <div className="absolute w-44 h-44 -left-10 -bottom-10 opacity-10 bg-white rounded-full blur-[52px]" />
                
                <div className="relative z-10 flex flex-col gap-3">
                  <h3 className="text-white text-xl md:text-2xl font-bold font-['Orbitron'] tracking-wide">MEDIA</h3>
                  <p className="text-white/80 text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Amplifying India’s cyber-resilience narrative globally.</p>
                </div>
                
                <ul className="relative z-10 flex flex-col gap-3 text-white/60 text-sm font-normal font-['IBM_Plex_Sans'] mt-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Deliver exclusive coverage on cyber policy, national initiatives, and global collaborations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Facilitate high-impact storytelling with industry leaders and policymakers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Shape global perception of India’s cybersecurity ecosystem
                  </li>
                </ul>
              </div>
            </div>

            {/* ASSOCIATIONS */}
            <div className="w-full outline outline-1 outline-amber-700/30 flex flex-col hover:outline-amber-700 transition-colors group bg-black/10">
              <div className="w-full h-48 relative overflow-hidden flex-shrink-0">
                <Image src="/Vault-2047/assets/ecosystem/bd9baffea3e9b21c21ef8dd6cf1cfb95b032a71f (1).png" alt="Associations & Institutions" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full flex-1 p-6 relative flex flex-col gap-6 overflow-hidden">
                <div className="absolute w-60 h-60 -right-10 -bottom-10 opacity-30 bg-teal-800 rounded-full blur-[52px]" />
                <div className="absolute w-44 h-44 -left-10 -bottom-10 opacity-10 bg-white rounded-full blur-[52px]" />
                
                <div className="relative z-10 flex flex-col gap-3">
                  <h3 className="text-white text-xl md:text-2xl font-bold font-['Orbitron'] tracking-wide leading-tight">ASSOCIATIONS &amp; INSTITUTIONS</h3>
                  <p className="text-white/80 text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Enabling collaboration across the cyber ecosystem.</p>
                </div>
                
                <ul className="relative z-10 flex flex-col gap-3 text-white/60 text-sm font-normal font-['IBM_Plex_Sans'] mt-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Unite industry bodies, cyber communities, and research institutions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Drive policy dialogue, awareness, and ecosystem development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 mt-1 text-xs">■</span> Foster partnerships across public and private sectors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-[#040b0e] flex flex-col justify-center items-center gap-12 overflow-hidden border-t border-white/5">
          
          {/* Header */}
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-3">
            <div className="flex justify-start items-center gap-4">
              <div className="w-12 h-px bg-teal-500" />
              <span className="text-teal-500 text-sm md:text-base font-bold font-['IBM_Plex_Sans'] uppercase tracking-[3px]">
                TRUSTED BY
              </span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
              Brands We've <span className="text-[#B86A2E]">Worked With.</span>
            </h2>
          </div>

          {/* Scrolling Marquee */}
          <div className="w-full max-w-[1200px] relative h-32 md:h-40 bg-white overflow-hidden flex items-center rounded-sm">
            
            <div className="flex animate-marquee w-[200%] h-full items-center">
              
              {/* First Set of Logos */}
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={`brand-set1-${num}`} className="h-full w-[200px] md:w-[240px] flex-shrink-0 relative flex justify-center items-center border-r border-gray-200 p-8">
                  <Image src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`} alt={`Brand ${num}`} fill className="object-contain p-6 md:p-8" />
                </div>
              ))}

              {/* Second Set of Logos (Duplicate for seamless scroll) */}
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={`brand-set2-${num}`} className="h-full w-[200px] md:w-[240px] flex-shrink-0 relative flex justify-center items-center border-r border-gray-200 p-8">
                  <Image src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/brands/brand-${num}.png`} alt={`Brand ${num}`} fill className="object-contain p-6 md:p-8" />
                </div>
              ))}
              
            </div>

            {/* Dark Gradient Fades (matching background color) */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#040b0e] via-[#040b0e]/80 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#040b0e] via-[#040b0e]/80 to-transparent pointer-events-none" />
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
              <Image src="/Vault-2047/assets/ecosystem/b497463f5699922e1b8d779b821f6b1668397589 (7).jpg" alt="Join the Ecosystem" fill className="object-cover opacity-40" />
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
              <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Orbitron'] leading-tight">
                Looking to Join the Ecosystem?
              </h2>
              <p className="text-center text-white/90 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] max-w-[750px]">
                Connect with the leaders, innovators, and decision-makers shaping the future of cyber-resilience.
              </p>
            </div>
            
            <button className="relative z-10 px-8 py-4 bg-[#B86A2E] hover:bg-[#9c5926] transition-colors flex justify-center items-center group">
              <span className="text-white text-base md:text-lg font-medium font-['IBM_Plex_Sans'] group-hover:scale-105 transition-transform">
                Get Your Pass
              </span>
            </button>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
