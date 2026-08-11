import React from 'react';
import SpeakersSection from '../../components/SpeakersSection';
import CallForSpeakersCTA from '../../components/CallForSpeakersCTA';
import AgendaSubnav from "../../components/AgendaSubnav";
import Footer from "../../components/Footer";
import AgendaHeroBackground from "../../components/AgendaHeroBackground";

export const metadata = {
  title: "Vault Speakers 2026 - Vault 2047",
  description: "Hear from the leaders securing the digital future.",
};

export default function SpeakersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        <AgendaSubnav />

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[400px] md:h-[500px] px-6 lg:px-32 flex flex-col justify-center items-center gap-6 overflow-hidden bg-black/40">
          <AgendaHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] to-transparent z-10 pointer-events-none" />

          <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center gap-5">
            <div className="w-full text-center text-white text-base md:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-widest">
              Agenda / Speaker
            </div>
            
            <div className="w-full flex justify-center items-center gap-2.5">
              <h1 className="text-center text-white text-3xl md:text-5xl font-bold font-['Orbitron'] leading-snug">
                Hear from the Leaders Securing the Digital Future
              </h1>
            </div>
          </div>
        </div>

        {/* Speakers Grid Section */}
        <SpeakersSection />
        
        {/* Call For Speakers CTA */}
        <CallForSpeakersCTA />

      </main>
      <Footer />
    </div>
  );
}