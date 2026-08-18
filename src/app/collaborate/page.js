import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EcosystemHeroBackground from "../../components/EcosystemHeroBackground";
import CollaborateSubnav from "../../components/CollaborateSubnav";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Collaborate - Vault 2047",
  description: "Collaborate at Vault 2047",
};

export default function CollaboratePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        <CollaborateSubnav />
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[400px] md:h-[500px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden">
          
          {/* Interactive Canvas Background */}
          <EcosystemHeroBackground />

          <div className="w-full max-w-[1200px] px-6 lg:px-32 flex flex-col items-center gap-5 relative z-10">
            <div className="w-full text-center text-white text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-widest">
              Collaborate
            </div>
            
            <div className="w-full flex justify-center items-center">
              <h1 className="text-center text-white text-4xl md:text-5xl font-bold font-['Orbitron'] leading-snug md:leading-tight">
                Engage with a curated ecosystem of
              </h1>
            </div>

            <div className="w-full flex justify-center items-center">
              <h2 className="text-center text-white text-base md:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[3px]">
                policymakers, national leaders, global cybersecurity firms, and innovators.
              </h2>
            </div>

            <div className="pt-6 flex justify-center items-center">
              <button className="px-8 py-5 bg-amber-700 hover:bg-amber-600 transition-colors flex justify-center items-center cursor-pointer">
                <span className="text-white text-base font-medium font-['IBM_Plex_Sans']">Join the VAULT2047 Ecosystem</span>
              </button>
            </div>
          </div>
        </div>

        {/* Anchoring Section */}
        <div className="w-full relative bg-neutral-900 py-16 md:py-24 px-6 lg:px-28 flex justify-center items-center overflow-hidden border-t border-white/5">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/assets/collaborate/collab-bg.png" 
              alt="Background" 
              fill 
              className="object-cover opacity-20 md:opacity-30 mix-blend-lighten" 
            />
          </div>

          <div className="w-full max-w-[1200px] relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8">
              <div className="w-full flex justify-start items-start gap-6">
                <div className="w-1.5 self-stretch bg-amber-700 min-h-[100px]" />
                <div className="flex-1 flex flex-col justify-start items-start gap-6">
                  <h2 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold font-['Orbitron'] leading-tight">
                    Anchoring India's<br className="hidden md:block" />
                    <span className="text-amber-700">Cyber-Resilience</span>
                    <span className="text-white"> Ecosystem</span>
                  </h2>
                  <p className="text-white opacity-80 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    Vault2047 is a strategic platform designed to accelerate India's journey toward becoming a global cyber-defense leader.
                  </p>
                  <p className="text-white opacity-80 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                    It is engineered to bring together policy, innovation, and capital to strengthen national security, protect critical infrastructure, and enable global cyber collaboration.
                  </p>
                </div>
              </div>
              
              <div className="pt-2 flex justify-start items-center">
                <button className="px-8 py-5 bg-amber-700 hover:bg-amber-600 transition-colors flex justify-center items-center shadow-lg hover:shadow-amber-900/50">
                  <span className="text-white text-base md:text-lg font-medium font-['IBM_Plex_Sans'] tracking-wide">Explore the Vision</span>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center">
              <div className="w-full max-w-[500px] aspect-[4/3] relative rounded-sm overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src="/assets/collaborate/collab-img.png" 
                  alt="Cyber-Resilience Ecosystem" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
            
          </div>
        </div>
        {/* 3 Cards Section */}
        <div className="w-full bg-[#040b0e] flex flex-col justify-center items-center py-16 md:py-24 px-6 lg:px-28 overflow-hidden">
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Card 1 */}
            <div className="w-full flex flex-col justify-start items-stretch outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 overflow-hidden group">
              <div className="w-full h-[300px] md:h-[350px] relative overflow-hidden">
                <Image src="/assets/collaborate/collab-card-1.png" alt="Strategic Collaboration" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full flex-1 p-8 bg-white/5 flex flex-col justify-start items-start gap-4">
                <h3 className="w-full text-xl font-semibold font-['IBM_Plex_Sans']">
                  <span className="text-amber-700">Strategic</span> <span className="text-white">Collaboration</span>
                </h3>
                <p className="w-full opacity-60 text-white text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Engage directly with government bodies, defense agencies, and enterprise leaders shaping cyber policy and infrastructure.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full flex flex-col justify-start items-stretch outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 overflow-hidden group">
              <div className="w-full h-[300px] md:h-[350px] relative overflow-hidden">
                <Image src="/assets/collaborate/collab-card-2.png" alt="Innovation Showcases" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full flex-1 p-8 bg-white/5 flex flex-col justify-start items-start gap-4">
                <h3 className="w-full text-xl font-semibold font-['IBM_Plex_Sans']">
                  <span className="text-amber-700">Innovation</span> <span className="text-white">Showcases</span>
                </h3>
                <p className="w-full opacity-60 text-white text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Experience cutting-edge cybersecurity solutions across AI, cloud, infrastructure, and threat intelligence.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full flex flex-col justify-start items-stretch outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 overflow-hidden group">
              <div className="w-full h-[300px] md:h-[350px] relative overflow-hidden">
                <Image src="/assets/collaborate/collab-card-3.png" alt="Policy Access" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full flex-1 p-8 bg-white/5 flex flex-col justify-start items-start gap-4">
                <h3 className="w-full text-xl font-semibold font-['IBM_Plex_Sans']">
                  <span className="text-amber-700">Policy</span> <span className="text-white">Access</span>
                </h3>
                <p className="w-full opacity-60 text-white text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Integrate into high-level discussions including the Mumbai Accord, enabling participation in frameworks that define cyber governance.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Join Ecosystem Section */}
        <div className="w-full bg-gray-950 flex flex-col justify-center items-center py-16 md:py-24 px-6 lg:px-28 gap-12 overflow-hidden border-t border-white/5">
          <div className="w-full max-w-[1200px] flex justify-center items-center">
            <h2 className="text-center text-white text-3xl md:text-4xl font-bold font-['Orbitron']">
              Join the VAULT2047 Ecosystem
            </h2>
          </div>
          
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* Card 1: Sponsor */}
            <div className="w-full min-h-[400px] p-6 lg:p-8 relative bg-transparent outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden group hover:bg-white/5 transition-colors">
              <div className="absolute right-[-20%] bottom-[-10%] w-44 h-44 opacity-30 bg-amber-700 rounded-full blur-[100px] pointer-events-none transition-opacity group-hover:opacity-60" />
              <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
                <h3 className="w-full text-white text-xl lg:text-2xl font-bold font-['Orbitron']">As a Sponsor</h3>
                <p className="w-full opacity-80 text-white text-sm lg:text-base font-bold font-['IBM_Plex_Sans'] leading-relaxed">
                  Build authority within India's cyber defense ecosystem and align with global leadership.
                </p>
              </div>
              <div className="w-full flex-1 opacity-60 text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed relative z-10">
                Premium brand positioning across the platform.<br/>
                Thought leadership through speaking opportunities.<br/>
                Direct engagement with policymakers, CISOs, and decision makers.
              </div>
              <div className="w-full relative z-10 mt-4">
                <Link href="/apply-to-sponsor" className="w-full px-6 py-4 outline outline-1 outline-amber-700 flex justify-center items-center hover:bg-amber-700 transition-colors">
                  <span className="text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Apply to Sponsor</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Exhibitor */}
            <div className="w-full min-h-[400px] p-6 lg:p-8 relative bg-transparent outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden group hover:bg-white/5 transition-colors">
              <div className="absolute right-[-20%] bottom-[-10%] w-44 h-44 opacity-30 bg-amber-700 rounded-full blur-[100px] pointer-events-none transition-opacity group-hover:opacity-60" />
              <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
                <h3 className="w-full text-white text-xl lg:text-2xl font-bold font-['Orbitron']">As an Exhibitor</h3>
                <p className="w-full opacity-80 text-white text-sm lg:text-base font-bold font-['IBM_Plex_Sans'] leading-relaxed">
                  Showcase your cybersecurity solutions in a high-impact, solution-driven environment.
                </p>
              </div>
              <div className="w-full flex-1 opacity-60 text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed relative z-10">
                Dedicated exhibition and demo spaces.<br/>
                Access to enterprise buyers and government stakeholders.<br/>
                Live demonstrations of real-world cyber solutions.
              </div>
              <div className="w-full relative z-10 mt-4">
                <Link href="/apply-to-exhibit" className="w-full px-6 py-4 outline outline-1 outline-amber-700 flex justify-center items-center hover:bg-amber-700 transition-colors">
                  <span className="text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Apply to Exhibit</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Media Partner */}
            <div className="w-full min-h-[400px] p-6 lg:p-8 relative bg-transparent outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden group hover:bg-white/5 transition-colors">
              <div className="absolute right-[-20%] bottom-[-10%] w-44 h-44 opacity-30 bg-amber-700 rounded-full blur-[100px] pointer-events-none transition-opacity group-hover:opacity-60" />
              <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
                <h3 className="w-full text-white text-xl lg:text-2xl font-bold font-['Orbitron']">As a Media Partner</h3>
                <p className="w-full opacity-80 text-white text-sm lg:text-base font-bold font-['IBM_Plex_Sans'] leading-relaxed">
                  Amplify the global narrative around cyber-resilience and digital security.
                </p>
              </div>
              <div className="w-full flex-1 opacity-60 text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed relative z-10">
                Exclusive access to policy announcements and industry insights.<br/>
                Opportunities for thought leadership and content partnerships.<br/>
                Direct engagement with global cyber leaders and stakeholders.
              </div>
              <div className="w-full relative z-10 mt-4">
                <Link href="/be-a-media-partner" className="w-full px-6 py-4 outline outline-1 outline-amber-700 flex justify-center items-center hover:bg-amber-700 transition-colors">
                  <span className="text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Apply as Media</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Association Partner */}
            <div className="w-full min-h-[400px] p-6 lg:p-8 relative bg-transparent outline outline-1 outline-offset-[-0.50px] outline-amber-700/30 flex flex-col justify-start items-start gap-6 overflow-hidden group hover:bg-white/5 transition-colors">
              <div className="absolute right-[-20%] bottom-[-10%] w-44 h-44 opacity-30 bg-amber-700 rounded-full blur-[100px] pointer-events-none transition-opacity group-hover:opacity-60" />
              <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
                <h3 className="w-full text-white text-xl lg:text-2xl font-bold font-['Orbitron']">As an Association</h3>
                <p className="w-full opacity-80 text-white text-sm lg:text-base font-bold font-['IBM_Plex_Sans'] leading-relaxed">
                  Strengthen ecosystem collaboration and industry alignment.
                </p>
              </div>
              <div className="w-full flex-1 opacity-60 text-white text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed relative z-10">
                Build strategic partnerships across cyber communities.<br/>
                Participate in policy dialogue and knowledge-sharing initiatives.<br/>
                Enable collaboration across public and private sectors.
              </div>
              <div className="w-full relative z-10 mt-4">
                <Link href="/be-an-association-partner" className="w-full px-6 py-4 outline outline-1 outline-amber-700 flex justify-center items-center hover:bg-amber-700 transition-colors">
                  <span className="text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Apply as Association</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        <FinalCTA 
          title={
            <span>
              Step Into the Future of <span className="text-[#b5652a]">Cyber Resilience</span>
            </span>
          }
          description="Join the leaders shaping cyber defense, policy, and innovation. Be part of the platform driving the next phase of global cyber resilience."
          buttonText="Enquire Now"
          buttonHref="/collaborate"
        />

      </main>
      <Footer />
    </div>
  );
}
