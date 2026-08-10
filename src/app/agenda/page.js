import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Agenda - Vault 2047",
  description: "View the Vault 2047 comprehensive agenda.",
};

export default function AgendaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      
      <main className="flex-grow flex flex-col items-center justify-start pt-[80px] md:pt-[100px]">
        
        {/* Sub-Navigation Bar */}
        <div className="w-full px-9 py-3 bg-gray-950 flex flex-col md:flex-row justify-between items-center overflow-hidden border-b border-white/5 z-20 relative">
          <div className="flex-1 flex justify-center items-center divide-x divide-white/10 w-full max-w-[1200px] mx-auto">
            <div className="flex-1 px-4 md:px-6 py-2 flex justify-center items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors text-center bg-[#B86A2E]/10 border-b-2 border-[#B86A2E]">
              <div 
                className="text-white text-xs md:text-sm font-semibold uppercase tracking-tight"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Day 1
              </div>
            </div>
            <div className="flex-1 px-4 md:px-6 py-2 flex justify-center items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors text-center">
              <div 
                className="text-white/70 text-xs md:text-sm font-semibold uppercase tracking-tight"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Day 2
              </div>
            </div>
             <div className="flex-1 px-4 md:px-6 py-2 flex justify-center items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors text-center">
              <div 
                className="text-white/70 text-xs md:text-sm font-semibold uppercase tracking-tight"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Workshops
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative w-full min-h-[300px] md:min-h-[400px] px-6 md:px-32 py-16 flex flex-col justify-center items-center gap-5 overflow-hidden">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0 bg-black">
            <Image 
              src="/assets/attend-bg.png"
              alt="Agenda Background"
              fill
              className="object-cover opacity-60 grayscale mix-blend-screen"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#040b0e]/80 via-[#0D6665]/20 to-[#040b0e]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full text-center text-[#B86A2E] text-sm md:text-lg font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-ibm)" }}>
            Agenda
          </div>
          <div className="relative z-10 w-full flex justify-center items-center">
            <h1 className="max-w-[1000px] text-center text-white text-3xl md:text-5xl lg:text-[56px] font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "var(--font-orbitron)" }}>
              The Roadmap to Cyber-Resilience
            </h1>
          </div>
          <div className="relative z-10 mt-4 text-center text-white/80 text-base md:text-lg max-w-[700px]" style={{ fontFamily: "var(--font-ibm)" }}>
            Two days of intense keynotes, strategic panels, and collaborative workshops defining the future of global security.
          </div>
        </div>
        
        {/* Agenda Schedule Section */}
        <div className="w-full relative bg-[#171717] px-4 md:px-12 py-16 md:py-24 lg:px-[120px] flex flex-col items-center overflow-hidden">
          
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-12 relative z-10">
            
            {/* Schedule List */}
            <div className="w-full flex flex-col gap-8">
              {[
                { time: "08:00 AM - 09:00 AM", title: "Registration & Networking Breakfast", type: "Networking", track: "General" },
                { time: "09:00 AM - 09:30 AM", title: "Opening Keynote: The State of Global Cyber Defense", type: "Keynote", track: "Main Stage" },
                { time: "09:40 AM - 10:40 AM", title: "Panel: AI-Powered Threats vs AI-Powered Defense", type: "Panel Discussion", track: "Main Stage" },
                { time: "11:00 AM - 12:00 PM", title: "Securing Critical Infrastructure in 2027", type: "Session", track: "Track A" },
                { time: "12:00 PM - 01:00 PM", title: "The Zero Trust Evolution", type: "Session", track: "Track B" },
                { time: "01:00 PM - 02:30 PM", title: "VIP Luncheon & Partner Networking", type: "Networking", track: "General" },
                { time: "02:30 PM - 04:00 PM", title: "Startup Showcase: Next-Gen Cyber Solutions", type: "Showcase", track: "Innovation Stage" },
                { time: "04:30 PM - 05:30 PM", title: "Policy Round Table: Mumbai Accord Preparations", type: "Round Table", track: "Track A" }
              ].map((item, index) => (
                <div key={index} className="w-full flex flex-col md:flex-row group border-l-2 border-[#B86A2E]/30 hover:border-[#B86A2E] transition-all duration-300 bg-[#040b0e]/50 hover:bg-[#B86A2E]/5 outline outline-1 outline-white/5 p-6 md:p-8">
                  
                  {/* Time Section */}
                  <div className="w-full md:w-[250px] flex-shrink-0 mb-4 md:mb-0">
                    <div className="text-white text-lg md:text-xl font-bold font-mono tracking-tight" style={{ fontFamily: "var(--font-orbitron)" }}>
                      {item.time}
                    </div>
                    <div className="text-[#B86A2E] text-sm font-semibold uppercase tracking-wider mt-2" style={{ fontFamily: "var(--font-ibm)" }}>
                      {item.track}
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="flex-1 flex flex-col justify-start items-start">
                    <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider border border-white/20 text-white/70 group-hover:border-[#0D6665] group-hover:text-[#0D6665] transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>
                      {item.type}
                    </div>
                    <div className="text-white text-xl md:text-2xl font-semibold leading-tight group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-orbitron)" }}>
                      {item.title}
                    </div>
                    {/* Placeholder for Speakers */}
                    {index % 2 !== 0 && (
                      <div className="mt-4 flex items-center gap-3">
                         <div className="flex -space-x-2">
                           <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-[#171717] overflow-hidden relative"><Image src="/assets/speakers/speaker-1.png" alt="speaker" fill className="object-cover" /></div>
                           <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-[#171717] overflow-hidden relative"><Image src="/assets/speakers/speaker-2.png" alt="speaker" fill className="object-cover" /></div>
                         </div>
                         <div className="text-white/60 text-sm" style={{ fontFamily: "var(--font-ibm)" }}>
                           Feat. Industry Leaders
                         </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-center mt-8">
               <button className="px-8 py-4 outline outline-1 outline-[#B86A2E] text-white hover:bg-[#B86A2E]/20 transition-colors text-sm uppercase tracking-widest font-semibold" style={{ fontFamily: "var(--font-ibm)" }}>
                  Download Full Agenda (PDF)
               </button>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
}
