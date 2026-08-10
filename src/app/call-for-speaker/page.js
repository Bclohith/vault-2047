import React from 'react';
import Image from 'next/image';
import CallForSpeakersCTA from '../../components/CallForSpeakersCTA';
import AgendaSubnav from "../../components/AgendaSubnav";
import Footer from "../../components/Footer";

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
        <div className="w-full relative self-stretch h-[400px] md:h-[500px] px-6 lg:px-32 flex flex-col justify-center items-center gap-6 overflow-hidden">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
             <Image 
                src="/Vault-2047/assets/call-for-speaker/cfs-hero-bg.jpg" 
                alt="Vault 2047 Call for Speakers Background" 
                fill 
                className="object-cover"
                priority
             />
             {/* Overlay */}
             <div className="absolute inset-0 bg-black/60" />
          </div>

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

        {/* Call for Speakers CTA */}
        <CallForSpeakersCTA />

      </main>
      <Footer />
    </div>
  );
}