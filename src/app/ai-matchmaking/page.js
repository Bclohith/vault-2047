import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkingSubnav from "@/components/NetworkingSubnav";

export const metadata = {
  title: "AI Matchmaking - Vault 2047",
  description: "AI-Powered Matchmaking at Vault 2047.",
};

export default function AIMatchmakingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e] font-['IBM_Plex_Sans']">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        <NetworkingSubnav />

        {/* Hero Section */}
        <section className="w-full relative min-h-[60vh] flex flex-col justify-center items-center px-6 py-20 overflow-hidden bg-[#020F0F]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
            <div className="absolute left-[10%] top-[20%] w-[400px] h-[400px] rounded-full bg-[#b5652a] opacity-10 blur-[120px]" />
          </div>

          <div className="w-full max-w-[1440px] relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:px-[120px]">
            
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start gap-6">
              <div className="text-teal-500 text-xs font-bold tracking-widest uppercase mb-2">
                AI-Powered Matchmaking
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] leading-tight">
                Meet the Right People.<br />
                <span className="text-[#b5652a] italic">Every Time.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-normal leading-relaxed max-w-[500px]">
                Set your goals once. Our AI reads your role, interests, and intent — then surfaces the connections most likely to matter. No cold introductions. No wasted handshakes.
              </p>
              
              <div className="flex flex-col gap-3 mt-6">
                <div className="text-white/40 text-xs font-bold tracking-widest uppercase">Pick your focus areas — AI does the rest</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { tag: "Cyber Threat Intelligence", active: true },
                    { tag: "Zero Trust Architecture", active: true },
                    { tag: "Risk Management", active: false },
                    { tag: "Cloud Security", active: true },
                    { tag: "IAM", active: false },
                    { tag: "Compliance", active: false },
                    { tag: "SecOps", active: false },
                    { tag: "Data Privacy", active: false },
                    { tag: "Endpoint Security", active: true },
                  ].map(({tag, active}, i) => (
                    <span key={i} className={`px-3 py-1.5 border text-xs font-bold rounded-sm ${active ? "border-[#b5652a]/50 bg-[#b5652a]/10 text-[#b5652a]" : "border-white/10 bg-transparent text-white/40"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-l-4 border-teal-500 pl-4 py-1">
                <div className="text-white text-xl font-black tracking-tight font-['Orbitron']">Right People. <span className="text-[#b5652a]">Real Connections.</span></div>
                <div className="text-white/40 text-xs mt-1">AI Powered Platform · KonfHub</div>
              </div>
            </div>

            {/* Right: Phone Visual */}
            <div className="flex-1 relative flex justify-center items-center h-[500px] w-full hidden md:flex">
               <div className="absolute z-20 w-[260px] h-[520px] bg-[#0A1616] border-[6px] border-[#1A2E2E] rounded-[32px] shadow-2xl flex flex-col overflow-hidden">
                 <div className="w-full h-6 bg-[#1A2E2E] flex justify-center items-end pb-1"><div className="w-16 h-1.5 bg-black rounded-full" /></div>
                 
                 <div className="flex justify-between items-center px-4 py-2 text-white/80 text-[10px] font-bold">
                   <span>9:41</span>
                   <div className="flex gap-1">
                     {/* Bars */}
                     <div className="flex items-end gap-[1px] h-[8px]">
                       <div className="w-1 h-1 bg-current" />
                       <div className="w-1 h-2 bg-current" />
                       <div className="w-1 h-3 bg-current" />
                       <div className="w-1 h-full bg-current" />
                     </div>
                     {/* Battery */}
                     <div className="w-5 h-[10px] border border-white/50 rounded-sm p-[1px] flex items-center">
                       <div className="w-[80%] h-full bg-teal-500 rounded-[1px]" />
                     </div>
                   </div>
                 </div>

                 <div className="flex-1 px-4 py-2 flex flex-col gap-3">
                   <div className="flex gap-1 flex-wrap">
                     <div className="px-2 py-1 bg-teal-500 text-white text-[9px] font-bold rounded-full">Recommended</div>
                     <div className="px-2 py-1 bg-white/10 text-white/50 text-[9px] font-bold rounded-full">All</div>
                     <div className="px-2 py-1 bg-white/10 text-white/50 text-[9px] font-bold rounded-full">My Network</div>
                     <div className="px-2 py-1 bg-white/10 text-white/50 text-[9px] font-bold rounded-full">Received</div>
                   </div>

                   <div className="flex items-center gap-2 p-2 bg-white/5 border border-white/10 rounded-md text-white/40 text-[10px]">
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
                     Search
                   </div>

                   <div className="p-2 border border-teal-500/30 bg-teal-500/10 text-teal-500 text-[10px] font-bold rounded-md flex justify-between items-center">
                     Configure your interests & goals
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                   </div>

                   {/* People List */}
                   <div className="flex flex-col gap-2">
                     {[
                       { name: "Alan Ferdinand", role: "Investor", initials: "AF", color: "text-teal-500", bg: "bg-teal-500/10", border: "border-teal-500/30" },
                       { name: "Anna Mary", role: "Product Mgr", initials: "AM", color: "text-[#b5652a]", bg: "bg-[#b5652a]/10", border: "border-[#b5652a]/30" },
                       { name: "Jane Claire", role: "CISO", initials: "JC", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
                       { name: "Deepak Singh", role: "VP Security", initials: "DS", color: "text-teal-500", bg: "bg-teal-500/10", border: "border-teal-500/30" },
                       { name: "Hannah M.", role: "Sr. Lead", initials: "HM", color: "text-[#b5652a]", bg: "bg-[#b5652a]/10", border: "border-[#b5652a]/30" },
                     ].map((p, i) => (
                       <div key={i} className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                           <div className={`w-7 h-7 rounded-full ${p.bg} ${p.color} border ${p.border} flex items-center justify-center text-[8px] font-bold`}>{p.initials}</div>
                           <div className="flex flex-col">
                             <div className="text-white text-[10px] font-bold">{p.name}</div>
                             <div className="text-white/50 text-[9px]">{p.role}</div>
                           </div>
                         </div>
                         <div className="text-teal-500 text-[9px] font-bold">Connect</div>
                       </div>
                     ))}
                   </div>
                 </div>
                 
                 <div className="h-12 bg-black border-t border-white/10 flex justify-between items-center px-4 pb-2 text-white/50 text-[8px]">
                    <div className="flex flex-col items-center gap-1"><div className="w-4 h-4 rounded-sm border border-current" />Home</div>
                    <div className="flex flex-col items-center gap-1"><div className="w-4 h-4 rounded-full border border-current" />Agenda</div>
                    <div className="flex flex-col items-center gap-1 text-teal-500"><div className="w-4 h-4 rounded-full border border-current bg-current" />Profile</div>
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
                Meet the right people,<br />not just more people
              </h3>

              <div className="flex flex-col gap-4 mt-2">
                {[
                  "Get personalized recommendations based on interests, role, and goals",
                  "Have meaningful, high-quality conversations instead of random networking",
                  "Leave with valuable connections and real opportunities"
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
                Connect with high-intent,<br />relevant prospects
              </h3>

              <div className="flex flex-col gap-4 mt-2">
                {[
                  "Focus on quality leads, not just volume",
                  "Maximize ROI through meaningful interactions",
                  "Increase booth engagement via targeted attendee recommendations"
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

          <div className="w-full max-w-[1440px] mt-20 border border-teal-500/20 bg-teal-500/5 p-12 text-center rounded-2xl">
            <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight font-['Orbitron']">
              From <span className="text-white/50">Random</span> Interactions To <span className="text-[#b5652a]">Meaningful</span> Connections
            </h2>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
