import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkingSubnav from "@/components/NetworkingSubnav";

export const metadata = {
  title: "Photo Gallery - Vault 2047",
  description: "View the Vault 2047 Photo Gallery.",
};

export default function PhotoGalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e] font-['IBM_Plex_Sans']">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        <NetworkingSubnav />

        {/* Hero Section */}
        <section className="w-full relative min-h-[60vh] flex flex-col justify-center items-center px-6 py-20 overflow-hidden bg-[#020F0F]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
            <div className="absolute left-[10%] top-[20%] w-[400px] h-[400px] rounded-full bg-teal-500 opacity-10 blur-[120px]" />
          </div>

          <div className="w-full max-w-[1440px] relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:px-[120px]">
            
            {/* Left: Phone Visual */}
            <div className="flex-1 relative flex justify-center items-center h-[500px] w-full hidden md:flex">
               <div className="absolute z-20 w-[260px] h-[520px] bg-[#0A1616] border-[6px] border-[#1A2E2E] rounded-[32px] shadow-2xl flex flex-col overflow-hidden">
                 <div className="w-full h-6 bg-[#1A2E2E] flex justify-center items-end pb-1"><div className="w-16 h-1.5 bg-black rounded-full" /></div>
                 
                 <div className="flex justify-between items-center px-4 py-2 text-white/80 text-[10px] font-bold">
                   <span>9:41</span>
                   <div className="flex gap-1">
                     <div className="w-5 h-[10px] border border-white/50 rounded-sm p-[1px] flex items-center">
                       <div className="w-[80%] h-full bg-teal-500 rounded-[1px]" />
                     </div>
                   </div>
                 </div>

                 <div className="flex-1 px-4 pt-2 pb-4 flex flex-col items-center text-center gap-2">
                   <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-500 text-[9px] font-bold tracking-widest uppercase">
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                       <rect x="3" y="3" width="18" height="18" rx="2" />
                       <circle cx="12" cy="12" r="3" />
                     </svg>
                     AI Photo Gallery
                   </div>
                   
                   <div className="text-white text-lg font-bold mt-2">Find Your Photos</div>
                   <div className="text-white/50 text-[10px]">Upload a selfie to instantly find your event moments</div>

                   {/* Face Scan UI */}
                   <div className="relative w-40 h-48 mt-4 border-2 border-teal-500/20 rounded-xl overflow-hidden flex items-center justify-center bg-teal-500/5">
                     {/* Scanning Line */}
                     <div className="absolute top-0 left-0 w-full h-1 bg-teal-500 shadow-[0_0_12px_3px_rgba(54,188,176,0.9)] animate-scan" />
                     
                     <svg className="w-24 h-28 text-teal-500/50" viewBox="0 0 60 72" fill="none">
                       <ellipse cx="30" cy="26" rx="18" ry="22" stroke="currentColor" strokeWidth="1.5" />
                       <path d="M12 60c0-10 8-16 18-16s18 6 18 16" stroke="currentColor" strokeWidth="1.5" />
                       <circle cx="22" cy="24" r="3" fill="currentColor" opacity="0.5" />
                       <circle cx="38" cy="24" r="3" fill="currentColor" opacity="0.5" />
                       <path d="M24 32c1.5 2 4.5 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                     </svg>
                   </div>

                   <div className="w-full py-2.5 mt-4 bg-teal-500 rounded-xl text-white text-[11px] font-bold tracking-wider uppercase">
                     Find My Photos
                   </div>
                 </div>
               </div>
            </div>

            {/* Right: Text Content */}
            <div className="flex-1 flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#b5652a]/30 bg-[#b5652a]/10 text-[#b5652a] text-xs font-bold tracking-widest uppercase">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                AI Photo Gallery
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] leading-tight">
                Find Your Event<br />
                <span className="text-[#b5652a] italic">Photos Instantly</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-normal leading-relaxed max-w-[500px]">
                Upload a photo or take a selfie. Our AI scans the full event library and finds every moment featuring you — no scrolling, no searching.
              </p>
              
              <div className="flex flex-col gap-4 mt-6">
                {[
                  { step: "Step 01", title: "Scan Your Face", icon: <path d="M9 9H7a2 2 0 0 0-2 2v2M15 9h2a2 2 0 0 1 2 2v2M9 15H7a2 2 0 0 1-2-2v-2M15 15h2a2 2 0 0 0 2-2v-2" /> },
                  { step: "Step 02", title: "Get Your Photos", icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></> },
                  { step: "Step 03", title: "Share Your Photos", icon: <><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></> },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full border border-teal-500/30 bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {s.icon}
                        {i===0 && <circle cx="12" cy="12" r="2" />}
                      </svg>
                    </div>
                    <div>
                      <div className="text-teal-500 text-[10px] font-bold tracking-widest uppercase mb-0.5">{s.step}</div>
                      <div className="text-white text-lg font-bold">{s.title}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-l-4 border-[#b5652a] pl-4 py-1">
                <div className="text-white text-xl font-black tracking-tight font-['Orbitron']">Smart <span className="text-[#b5652a]">AI.</span> Seamless <span className="text-teal-500">Experience.</span></div>
                <div className="text-white/40 text-xs mt-1">Your photos, instantly yours · KonfHub</div>
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Split Section */}
        <section className="w-full bg-[#040b0e] py-16 px-6 lg:px-[120px] border-t border-white/5 flex flex-col items-center">
          <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* For Attendees Panel */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-500 text-sm font-bold w-fit">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                For Attendees
              </div>
              <h3 className="text-white text-3xl font-bold font-['IBM_Plex_Sans'] leading-tight">
                Your photos,<br />instantly yours
              </h3>

              <div className="flex flex-col gap-4 mt-2">
                {[
                  "Find your photos instantly with AI face recognition",
                  "No more scrolling through hundreds of images",
                  "Get a personalized gallery of your moments",
                  "View, download, and share in real-time"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-teal-500 shrink-0 mt-0.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-white/80 text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* For Sponsors Panel */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#b5652a]/30 bg-[#b5652a]/10 text-[#b5652a] text-sm font-bold w-fit">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                For Sponsors & Exhibitors
              </div>
              <h3 className="text-white text-3xl font-bold font-['IBM_Plex_Sans'] leading-tight">
                Stay visible<br />beyond the event
              </h3>

              <div className="flex flex-col gap-4 mt-2">
                {[
                  "Branded photo experiences with logos and frames",
                  "Drive social visibility through attendee sharing",
                  "Stay visible beyond the event",
                  "Turn photos into a subtle lead engagement channel"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-[#b5652a] shrink-0 mt-0.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-white/80 text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
