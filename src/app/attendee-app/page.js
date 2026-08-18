import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkingSubnav from "@/components/NetworkingSubnav";

export const metadata = {
  title: "Attendee App - Vault 2047",
  description: "Access the Vault 2047 Attendee App.",
};

export default function AttendeeAppPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e] font-['IBM_Plex_Sans']">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        <NetworkingSubnav />

        {/* Hero / App Overview Section */}
        <section className="w-full relative min-h-[60vh] flex flex-col justify-center items-center px-6 py-20 overflow-hidden bg-[#020F0F]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
            <div className="absolute right-[10%] top-[20%] w-[400px] h-[400px] rounded-full bg-teal-500 opacity-10 blur-[120px]" />
          </div>

          <div className="w-full max-w-[1440px] relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:px-[120px]">
            
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-500 text-xs font-bold tracking-widest uppercase">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
                Powered by KonfHub AI
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] leading-tight">
                Your Day,<br />
                <span className="text-[#b5652a] italic">Fully in Hand</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-normal leading-relaxed max-w-[500px]">
                The Vault 2047 Event App is your command centre on the ground. Agenda, speakers, sponsors, live networking — all unified in one platform so nothing slips through.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {["Agenda", "Networking", "Speakers", "Sponsors", "QR Scan", "Business Cards", "Chat"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 border border-teal-500/20 bg-teal-500/5 text-white/60 text-xs font-bold uppercase tracking-wider rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Phones Visual */}
            <div className="flex-1 relative flex justify-center items-center h-[500px] w-full hidden md:flex">
               {/* Phone 1 */}
               <div className="absolute z-20 left-10 transform -rotate-6 w-[240px] h-[480px] bg-[#0A1616] border-[6px] border-[#1A2E2E] rounded-[32px] shadow-2xl flex flex-col overflow-hidden">
                 <div className="w-full h-6 bg-[#1A2E2E] flex justify-center items-end pb-1"><div className="w-16 h-1.5 bg-black rounded-full" /></div>
                 <div className="flex-1 p-4 flex flex-col gap-4">
                   <div>
                     <div className="text-white/50 text-xs">Hi, Welcome back</div>
                     <div className="text-white text-sm font-bold font-['Orbitron']">VAULT2047</div>
                   </div>
                   <div className="flex flex-col gap-2">
                     <div className="text-teal-500 text-xs font-bold">Upcoming Session</div>
                     <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                       <div className="text-white/50 text-xs">09:00 - 09:30</div>
                       <div className="text-white text-sm font-medium mt-1">Opening Ceremony</div>
                     </div>
                   </div>
                   <div className="flex flex-col gap-2 mt-2">
                     <div className="text-[#b5652a] text-xs font-bold">Recommended Connections</div>
                     <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#b5652a]/20 flex items-center justify-center text-[#b5652a] text-xs font-bold">CF</div>
                          <div>
                            <div className="text-white text-xs font-bold">Claudia Fernandes</div>
                            <div className="text-white/50 text-[10px]">Sr. Partner</div>
                          </div>
                        </div>
                        <div className="px-2 py-1 bg-teal-500/20 text-teal-500 text-[10px] rounded">Connect</div>
                     </div>
                   </div>
                 </div>
                 <div className="h-12 bg-black border-t border-white/10 flex justify-between items-center px-4">
                    <div className="w-4 h-4 bg-teal-500 rounded-sm" />
                    <div className="w-4 h-4 bg-white/20 rounded-full" />
                    <div className="w-4 h-4 bg-white/20 rounded-sm" />
                 </div>
               </div>

               {/* Phone 2 */}
               <div className="absolute z-10 right-10 top-10 transform rotate-6 w-[240px] h-[480px] bg-[#0A1616] border-[6px] border-[#1A2E2E] rounded-[32px] shadow-2xl flex flex-col overflow-hidden opacity-80 scale-95">
                 <div className="w-full h-6 bg-[#1A2E2E] flex justify-center items-end pb-1"><div className="w-16 h-1.5 bg-black rounded-full" /></div>
                 <div className="flex-1 p-4 flex flex-col gap-3">
                   <div className="flex gap-2">
                     <div className="px-2 py-1 bg-teal-500 text-white text-[10px] rounded-full">Recommended</div>
                     <div className="px-2 py-1 bg-white/10 text-white/50 text-[10px] rounded-full">All</div>
                   </div>
                   <div className="p-2 border border-teal-500/30 bg-teal-500/10 text-teal-500 text-xs rounded-lg text-center font-semibold">Configure Interests</div>
                   {[1,2,3,4].map(i => (
                     <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/10" />
                          <div className="flex flex-col gap-1">
                            <div className="w-20 h-2 bg-white/20 rounded" />
                            <div className="w-12 h-2 bg-white/10 rounded" />
                          </div>
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-[#040b0e] py-20 md:py-32 px-6 lg:px-[120px] border-t border-white/5 flex flex-col items-center">
          <div className="w-full max-w-[1440px] flex flex-col gap-16">
            
            <div className="flex flex-col items-center text-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-teal-500" />
                <h3 className="text-white text-sm md:text-base font-semibold uppercase tracking-[0.2em]">App Features</h3>
                <div className="w-12 h-[2px] bg-teal-500" />
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-bold font-['Orbitron'] leading-tight">
                Built for Every <span className="text-[#b5652a] italic">Role in the Room</span>
              </h2>
              <p className="max-w-[700px] text-white/70 text-base md:text-lg leading-relaxed">
                Whether you're a delegate, sponsor, or exhibitor — the app is designed to give you a different and better experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              
              {/* For Attendees Panel */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-500 text-sm font-bold w-fit">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    For Attendees
                  </div>
                  <h3 className="text-white text-2xl font-bold font-['IBM_Plex_Sans']">Make every hour count</h3>
                </div>

                <div className="flex flex-col gap-6">
                  {[
                    { title: "Personalised Agenda", desc: "Your schedule, built around your interests. Sessions curated to what matters most to you." },
                    { title: "Everything in One Place", desc: "Schedule, speakers, sessions, sponsors — all accessible from a single app, no juggling required." },
                    { title: "Seamless Networking", desc: "Browse attendee profiles, send connection requests, and schedule 1:1 meetings — before you even arrive." },
                    { title: "Real-Time Notifications", desc: "Stay updated on session changes, meeting reminders, and announcements the moment they happen." },
                    { title: "AI-Powered Matchmaking", desc: "Our AI analyses your goals, role, and interests to suggest the connections that will matter most." },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/10 group">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0 border border-teal-500/20 group-hover:scale-110 transition-transform">
                        <div className="w-4 h-4 bg-current rounded-sm" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="text-white font-semibold text-lg">{feat.title}</div>
                        <div className="text-white/60 text-sm leading-relaxed">{feat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Sponsors & Exhibitors Panel */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#b5652a]/30 bg-[#b5652a]/10 text-[#b5652a] text-sm font-bold w-fit">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    For Sponsors & Exhibitors
                  </div>
                  <h3 className="text-white text-2xl font-bold font-['IBM_Plex_Sans']">Turn visibility into pipeline</h3>
                </div>

                <div className="flex flex-col gap-6">
                  {[
                    { title: "Connect with High-Intent Attendees", desc: "Every delegate in the app is a qualified decision-maker. No noise — just relevant, high-value connections." },
                    { title: "Drive Booth Traffic", desc: "Targeted in-app visibility pushes attendees to your exhibition space at the right moments throughout the day." },
                    { title: "Direct In-App Interactions", desc: "Message delegates, schedule meetings, and share resources directly via the app — no middleman needed." },
                    { title: "Capture Meaningful Leads", desc: "QR-based lead capture with full delegate profiles — not just names, but roles, interests, and buying intent." },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/10 group">
                      <div className="w-10 h-10 rounded-lg bg-[#b5652a]/10 flex items-center justify-center text-[#b5652a] shrink-0 border border-[#b5652a]/20 group-hover:scale-110 transition-transform">
                        <div className="w-4 h-4 bg-current rounded-full" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="text-white font-semibold text-lg">{feat.title}</div>
                        <div className="text-white/60 text-sm leading-relaxed">{feat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
