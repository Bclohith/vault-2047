import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkingSubnav from "@/components/NetworkingSubnav";

export const metadata = {
  title: "WhatsApp Networking - Vault 2047",
  description: "Join the Vault 2047 WhatsApp Community.",
};

export default function WhatsAppNetworkingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e] font-['IBM_Plex_Sans']">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        <NetworkingSubnav />

        {/* Hero Section */}
        <section className="w-full relative min-h-[60vh] flex flex-col justify-center items-center px-6 py-20 overflow-hidden bg-[#020F0F]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
            <div className="absolute right-[10%] top-[20%] w-[400px] h-[400px] rounded-full bg-[#25D366] opacity-10 blur-[120px]" />
          </div>

          <div className="w-full max-w-[1440px] relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:px-[120px]">
            
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs font-bold tracking-widest uppercase">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp Community
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] leading-tight">
                Walk In<br />
                <span className="text-[#25D366] italic">Already Connected.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-normal leading-relaxed max-w-[500px]">
                Registered delegates get exclusive entry to a curated WhatsApp community 2 weeks before the summit. Identify the right people, start the right conversations, and arrive with momentum — not a blank slate.
              </p>
              
              <div className="flex flex-col gap-3 mt-6">
                <div className="text-white/40 text-xs font-bold tracking-widest uppercase">Peer networking groups</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { tag: "CISOs & Security Heads", color: "text-teal-500", border: "border-teal-500/30", bg: "bg-teal-500/10" },
                    { tag: "Cloud Security", color: "text-[#b5652a]", border: "border-[#b5652a]/30", bg: "bg-[#b5652a]/10" },
                    { tag: "Zero Trust", color: "text-purple-400", border: "border-purple-400/30", bg: "bg-purple-400/10" },
                    { tag: "Cyber Threat Intel", color: "text-teal-500", border: "border-teal-500/30", bg: "bg-teal-500/10" },
                    { tag: "Identity & Access", color: "text-[#b5652a]", border: "border-[#b5652a]/30", bg: "bg-[#b5652a]/10" },
                    { tag: "Founders & CEOs", color: "text-purple-400", border: "border-purple-400/30", bg: "bg-purple-400/10" },
                  ].map(({tag, color, border, bg}, i) => (
                    <span key={i} className={`px-3 py-1.5 border text-xs font-bold rounded-sm ${border} ${bg} ${color}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-l-4 border-[#25D366] pl-4 py-1">
                <div className="text-white text-xl font-black tracking-tight font-['Orbitron']">2 Weeks Early. <span className="text-[#25D366]">Zero Cold Introductions.</span></div>
                <div className="text-white/40 text-xs mt-1">Community access unlocks the moment you register</div>
              </div>
            </div>

            {/* Right: Phone Visual */}
            <div className="flex-1 relative flex justify-center items-center h-[500px] w-full hidden md:flex">
               <div className="absolute z-20 w-[280px] h-[520px] bg-[#0A1616] border-[6px] border-[#1A2E2E] rounded-[32px] shadow-2xl flex flex-col overflow-hidden">
                 <div className="w-full h-6 bg-[#1A2E2E] flex justify-center items-end pb-1"><div className="w-16 h-1.5 bg-black rounded-full" /></div>
                 
                 <div className="flex justify-between items-center px-4 py-2 text-white/80 text-[10px] font-bold border-b border-white/5 bg-[#111b21]">
                   <span>9:41</span>
                   <span className="text-[#25D366] tracking-wider uppercase text-[8px]">WhatsApp</span>
                 </div>

                 <div className="bg-[#111b21] p-3 flex items-center gap-3 border-b border-white/5">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="white" opacity="0.9">
                       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                       <circle cx="9" cy="7" r="4"></circle>
                       <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                       <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                     </svg>
                   </div>
                   <div className="flex flex-col">
                     <div className="text-white text-xs font-bold truncate">Vault 2047 — CISOs</div>
                     <div className="text-white/50 text-[10px]">127 members · Organised by Vault</div>
                   </div>
                 </div>

                 <div className="flex-1 bg-[#0b141a] p-3 flex flex-col gap-3 overflow-hidden relative">
                   <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/23/Seamless_pattern_of_various_doodles.svg')] bg-cover mix-blend-overlay"></div>
                   
                   <div className="relative z-10 w-fit max-w-[85%] bg-[#202c33] rounded-lg rounded-tl-none p-2 shadow-sm">
                     <div className="text-[#53bdeb] text-[10px] font-bold mb-1">Priya M. · CISO, HDFC</div>
                     <div className="text-white text-xs leading-relaxed">Hi all! Excited for the summit. Anyone else focusing on zero trust architectures this year?</div>
                     <div className="text-white/50 text-[8px] text-right mt-1">10:14 AM</div>
                   </div>

                   <div className="relative z-10 w-fit max-w-[85%] bg-[#202c33] rounded-lg rounded-tl-none p-2 shadow-sm">
                     <div className="text-[#a66cff] text-[10px] font-bold mb-1">Rahul S. · VP Sec, Flipkart</div>
                     <div className="text-white text-xs leading-relaxed">Yes! We just completed a rollout. Happy to connect 1:1 at the event.</div>
                     <div className="text-white/50 text-[8px] text-right mt-1">10:17 AM</div>
                   </div>

                   <div className="relative z-10 w-fit max-w-[85%] bg-[#005c4b] rounded-lg rounded-tr-none p-2 shadow-sm self-end">
                     <div className="text-white text-xs leading-relaxed">Looking forward to the fireside on cloud security — see you there!</div>
                     <div className="text-white/50 text-[8px] text-right mt-1 flex justify-end items-center gap-1">
                       10:19 AM
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#53bdeb" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                     </div>
                   </div>

                   <div className="relative z-10 w-fit max-w-[85%] bg-[#202c33] rounded-lg rounded-tl-none p-2 shadow-sm">
                     <div className="text-[#ff7a59] text-[10px] font-bold mb-1">Amit K. · CDO, Bajaj</div>
                     <div className="text-white text-xs leading-relaxed">Same. See you all in Bengaluru</div>
                     <div className="text-white/50 text-[8px] text-right mt-1">10:21 AM</div>
                   </div>
                 </div>
                 
                 <div className="bg-[#202c33] p-2 flex items-center gap-2 border-t border-white/5">
                   <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-white/50 text-xs">Message...</div>
                   <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                     </svg>
                   </div>
                 </div>

                 <div className="h-6 bg-[#111b21] flex justify-center items-center pb-1">
                   <div className="w-16 h-1 bg-white/20 rounded-full" />
                 </div>
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
                Day one starts<br />two weeks early
              </h3>

              <div className="flex flex-col gap-4 mt-2">
                {[
                  "Exclusive pre-event community access 2 weeks before the summit",
                  "Join role-specific groups — CISOs, Cloud Security, AI & Digital, and more",
                  "Identify and request 1:1 meetings with the people you want to meet",
                  "Get event day alerts, session reminders, and real-time updates"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5" strokeLinecap="round" className="shrink-0 mt-0.5">
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
                Warm up your<br />audience early
              </h3>

              <div className="flex flex-col gap-4 mt-2">
                {[
                  "Get featured visibility in the pre-event WhatsApp community",
                  "Share product teasers and thought leadership before the event",
                  "Direct WhatsApp access to engaged, opted-in delegates",
                  "Post-event follow-up channel to continue the conversation"
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
