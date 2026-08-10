import React from 'react';

export const metadata = {
  title: "Agenda Snapshot - Vault 2047",
  description: "2 Days of Strategic Cyber Leadership, Policy Dialogues & Innovation in Mumbai, Maharashtra, India.",
};

export default function SnapshotPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start">
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[350px] md:h-[400px] px-6 lg:px-32 bg-gray-950 flex flex-col justify-center items-center gap-5 overflow-hidden">
          
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

        {/* Content Section Placeholder */}
        <div className="w-full max-w-[1200px] py-16 px-6 md:px-16 flex flex-col items-center justify-center min-h-[400px]">
           <div className="text-white/50 font-['IBM_Plex_Sans'] text-lg">
             Detailed Snapshot agenda coming soon...
           </div>
        </div>

      </main>
    </div>
  );
}