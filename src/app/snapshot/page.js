import React from 'react';
import Image from "next/image";
import AgendaSubnav from "../../components/AgendaSubnav";
import Footer from "../../components/Footer";
import AgendaHeroBackground from "../../components/AgendaHeroBackground";

export const metadata = {
  title: "Agenda Snapshot - Vault 2047",
  description: "2 Days of Strategic Cyber Leadership, Policy Dialogues & Innovation in Mumbai, Maharashtra, India.",
};

export default function SnapshotPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        <AgendaSubnav />

        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[350px] md:h-[400px] px-6 lg:px-32 bg-black/40 flex flex-col justify-center items-center gap-5 overflow-hidden">
          <AgendaHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] to-transparent z-10 pointer-events-none" />
          <div className="w-full max-w-[1200px] flex flex-col items-center gap-6 relative z-10">
            <div className="w-full text-center text-white/80 text-sm md:text-base lg:text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[3px] md:tracking-widest">
              Agenda / Snapshot
            </div>
            
            <div className="w-full flex justify-center items-center gap-2.5">
              <h1 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Orbitron'] leading-snug md:leading-tight">
                2 Days of Strategic Cyber Leadership, Policy Dialogues &amp; Innovation
              </h1>
            </div>

            <div className="w-full text-center text-teal-800 text-sm md:text-base font-semibold font-['IBM_Plex_Sans'] tracking-widest mt-2">
              MUMBAI, MAHARASHTRA, INDIA
            </div>
          </div>
        </div>

        {/* Dates & Venue Info Bar */}
        <div className="w-full px-6 md:px-28 py-16 bg-gray-950 flex flex-col justify-center items-center gap-12 overflow-hidden border-b border-amber-700/50">
          <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24">
            
            {/* Dates */}
            <div className="flex justify-start items-center gap-6">
              <div className="w-12 h-12 p-3 bg-white/10 flex justify-center items-center gap-2.5 overflow-hidden">
                <Image src="/assets/calendar-icon.svg" alt="Calendar Icon" width={24} height={28} className="w-full h-full object-contain" />
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="text-center justify-start text-neutral-400 text-lg font-semibold font-['IBM_Plex_Sans']">Dates</div>
                <div className="text-center justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans']">7 - 8 July 2026</div>
              </div>
            </div>

            {/* Venue */}
            <div className="flex justify-start items-center gap-6">
              <div className="w-12 h-12 p-3 bg-white/10 flex justify-center items-center gap-2.5 overflow-hidden">
                <Image src="/assets/venue-icon.svg" alt="Venue Icon" width={24} height={24} className="w-full h-full object-contain" />
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="text-center justify-start text-neutral-400 text-lg font-semibold font-['IBM_Plex_Sans']">Venue</div>
                <div className="text-center justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans']">Sheraton Grand, Jakarta, Indonesia</div>
              </div>
            </div>

          </div>
        </div>

        {/* Agenda Schedule Section */}
        <div className="w-full px-6 md:px-28 py-24 bg-neutral-900 flex flex-col justify-start items-center gap-2.5 overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-20">
            
            {/* Filter Header */}
            <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex justify-start items-center gap-3">
                <div className="px-6 py-4 outline outline-1 outline-offset-[-1px] outline-amber-700 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-amber-700/10 transition-colors">
                  <div className="text-center justify-start text-amber-700 text-base font-medium font-['IBM_Plex_Sans']">September 26</div>
                </div>
                <div className="px-6 py-4 bg-amber-700 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-amber-600 transition-colors">
                  <div className="text-center justify-start text-black text-base font-medium font-['IBM_Plex_Sans']">September 28</div>
                </div>
              </div>
              <div className="flex flex-wrap justify-start items-center gap-3.5 w-full lg:w-auto">
                <div className="flex-1 min-w-[150px] md:w-56 p-3 bg-white/10 outline outline-1 outline-offset-[-1px] outline-white/40 flex justify-between items-center gap-2.5 cursor-pointer">
                  <div className="flex-1 justify-start text-white text-base font-medium font-['IBM_Plex_Sans']">Session Type</div>
                  <Image src="/assets/caret-down.svg" alt="Dropdown" width={24} height={24} />
                </div>
                <div className="flex-1 min-w-[150px] md:w-56 p-3 bg-white/10 outline outline-1 outline-offset-[-1px] outline-white/40 flex justify-between items-center gap-2.5 cursor-pointer">
                  <div className="flex-1 justify-start text-white text-base font-medium font-['IBM_Plex_Sans']">All Stages</div>
                  <Image src="/assets/caret-down.svg" alt="Dropdown" width={24} height={24} />
                </div>
                <div className="flex-1 min-w-[150px] md:w-56 p-3 bg-white/10 outline outline-1 outline-offset-[-1px] outline-white/40 flex justify-between items-center gap-2.5 cursor-pointer">
                  <div className="flex-1 justify-start text-white text-base font-medium font-['IBM_Plex_Sans']">Topics</div>
                  <Image src="/assets/caret-down.svg" alt="Dropdown" width={24} height={24} />
                </div>
                <div className="h-12 px-8 p-3 bg-teal-800 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-teal-700 transition-colors">
                  <div className="justify-start text-white text-base font-medium font-['Lufga']">Clear</div>
                </div>
              </div>
            </div>
            
            {/* Agenda Timeline List */}
            <div className="w-full flex flex-col justify-start items-start">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className="w-full flex flex-col">
                  <div className="w-full flex justify-start items-start gap-6 md:gap-11">
                    <div className="flex-1 flex justify-start items-start gap-4">
                      
                      {/* Timeline Number & Line */}
                      <div className="flex flex-col justify-start items-center">
                        <div className="w-8 h-8 relative outline outline-1 outline-offset-[-1px] outline-slate-700 overflow-hidden flex items-center justify-center bg-transparent shrink-0">
                          <div className="text-white text-sm font-normal font-['IBM_Plex_Sans']">0{item}</div>
                        </div>
                        {index < 3 && <div className="w-px h-full min-h-[150px] outline outline-1 outline-offset-[-0.50px] outline-slate-700 my-4" />}
                      </div>
                      
                      {/* Agenda Content */}
                      <div className="flex-1 flex flex-col justify-start items-start gap-4 pb-12">
                        <div className="w-full flex flex-col md:flex-row justify-start items-start md:items-center gap-4">
                          <div className="flex-1 flex flex-wrap justify-start items-center gap-7">
                            {/* Time */}
                            <div className="flex justify-start items-center gap-2">
                              <Image src="/assets/time-icon.svg" alt="Time" width={20} height={20} />
                              <div className="text-white text-sm font-normal font-['IBM_Plex_Sans'] whitespace-nowrap">09:00 AM - 10:00 AM</div>
                            </div>
                            {/* Tags */}
                            <div className="flex flex-wrap justify-start items-center gap-4">
                              <div className="px-6 py-2.5 bg-teal-800 flex justify-center items-center gap-2.5">
                                <div className="text-center justify-start text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans'] whitespace-nowrap">Panel Discussion</div>
                              </div>
                              <div className="flex justify-start items-center gap-2">
                                <Image src="/assets/location-icon.svg" alt="Location" width={20} height={20} />
                                <div className="text-center justify-start text-neutral-500 text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Grand Ballroom</div>
                              </div>
                            </div>
                          </div>
                          {/* View Details */}
                          <div className="flex justify-start items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="text-stone-300 text-sm font-normal font-['IBM_Plex_Sans'] whitespace-nowrap">View Details</div>
                            <Image src="/assets/caret-right.svg" alt="View" width={16} height={16} />
                          </div>
                        </div>
                        
                        {/* Title */}
                        <div className="w-full text-white text-xl md:text-2xl font-bold font-['IBM_Plex_Sans'] capitalize leading-snug">
                          Opening Keynote: The Future of Global Cyber Resilience
                        </div>
                        
                        {/* Speaker */}
                        <div className="flex justify-start items-center gap-3">
                          <Image src="/assets/user-icon.svg" alt="Speaker" width={18} height={18} />
                          <div className="text-white text-xs md:text-sm font-normal font-['IBM_Plex_Sans'] uppercase tracking-wide">
                            Hon. Minister of IT & Electronics
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}