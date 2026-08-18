import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkingSubnav from "@/components/NetworkingSubnav";

export const metadata = {
  title: "Networking - Vault 2047",
  description: "Connect with 400+ of Asia-Pacific's most senior decision-makers.",
};

export default function NetworkingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e] font-['IBM_Plex_Sans']">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        {/* Subnav */}
        <NetworkingSubnav />

        {/* Hero Section */}
        <section className="w-full relative min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Generic Dark Tech Background */}
            <div className="absolute inset-0 bg-[#020F0F] z-0" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500 opacity-20 blur-[100px]" />
          </div>

          <div className="w-full max-w-[1200px] relative z-10 flex flex-col items-center text-center gap-8">
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold font-['Orbitron'] leading-tight">
              Every Conversation.<br />
              <span className="text-[#b5652a]">By Design.</span>
            </h1>
          </div>
        </section>

        {/* 4 Powerful Ways to Connect Section */}
        <section className="w-full bg-[#040b0e] py-20 md:py-32 px-6 lg:px-[120px] border-t border-white/5 flex flex-col items-center">
          <div className="w-full max-w-[1440px] flex flex-col gap-16">
            
            <div className="flex flex-col items-center text-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-teal-500" />
                <h3 className="text-white text-sm md:text-base font-semibold uppercase tracking-[0.2em]">Ways to Connect</h3>
                <div className="w-12 h-[2px] bg-teal-500" />
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-bold font-['Orbitron'] leading-tight">
                Four Powerful Ways <br className="hidden md:block" />
                <span className="text-[#b5652a]">to Connect</span>
              </h2>
              <p className="max-w-[700px] text-white/70 text-base md:text-lg leading-relaxed">
                Depth over breadth. Every tool here is engineered to make your connections more intentional, more relevant, and worth your time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col gap-6 group">
                <div className="w-12 h-12 bg-[#b5652a]/20 flex items-center justify-center rounded-sm">
                  <span className="text-[#b5652a] text-xl font-bold font-['Orbitron']">01</span>
                </div>
                <h3 className="text-white text-xl font-semibold">1-on-1 Strategic Meetings</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Pre-scheduled, highly curated meetings matched through our smart algorithm to ensure high-value business development.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col gap-6 group">
                <div className="w-12 h-12 bg-teal-500/20 flex items-center justify-center rounded-sm">
                  <span className="text-teal-500 text-xl font-bold font-['Orbitron']">02</span>
                </div>
                <h3 className="text-white text-xl font-semibold">C-Suite Roundtables</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Intimate, closed-door discussions tackling specific industry challenges with a targeted group of peers and thought leaders.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col gap-6 group">
                <div className="w-12 h-12 bg-[#b5652a]/20 flex items-center justify-center rounded-sm">
                  <span className="text-[#b5652a] text-xl font-bold font-['Orbitron']">03</span>
                </div>
                <h3 className="text-white text-xl font-semibold">VIP Networking Lounges</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Relaxed but exclusive zones designed for spontaneous interactions and unscripted alliance building away from the crowd.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col gap-6 group">
                <div className="w-12 h-12 bg-teal-500/20 flex items-center justify-center rounded-sm">
                  <span className="text-teal-500 text-xl font-bold font-['Orbitron']">04</span>
                </div>
                <h3 className="text-white text-xl font-semibold">Gala Dinner & Awards</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Celebrate ecosystem excellence while networking in a premium, informal setting that fosters lasting relationships.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Audience Section */}
        <section className="w-full bg-[#020F0F] py-20 md:py-32 px-6 lg:px-[120px] border-t border-white/5 flex flex-col items-center">
          <div className="w-full max-w-[1440px] flex flex-col gap-16">
            
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#b5652a]" />
                <h3 className="text-white text-sm md:text-base font-semibold uppercase tracking-[0.2em]">In the Room</h3>
              </div>
              <h2 className="text-white text-3xl md:text-5xl font-bold font-['Orbitron'] leading-tight">
                400+ Leaders. <span className="text-teal-500 italic">One Room.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Left Column: Roles */}
              <div className="flex flex-col w-full">
                {[
                  { role: "Chief Information Security Officers", count: "60+" },
                  { role: "VP / Head of Cybersecurity", count: "80+" },
                  { role: "Chief Technology Officers", count: "40+" },
                  { role: "Chief Information Officers", count: "35+" },
                  { role: "Head of Security Operations", count: "50+" },
                  { role: "Cybersecurity Tech Leaders", count: "45+" },
                  { role: "Founders & CEOs", count: "30+" },
                  { role: "Senior Security Consultants", count: "60+" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 group hover:border-teal-500/50 transition-colors">
                    <span className="text-white/90 text-base md:text-lg font-medium font-['IBM_Plex_Sans'] group-hover:text-white transition-colors">{item.role}</span>
                    <span className="text-teal-500 text-lg md:text-xl font-bold font-['Orbitron']">{item.count}</span>
                  </div>
                ))}
              </div>

              {/* Right Column: Industries & Pre-Event Box */}
              <div className="flex flex-col gap-12 w-full">
                
                <div className="flex flex-col gap-6">
                  <h4 className="text-white text-xl font-bold font-['IBM_Plex_Sans']">Industries Represented</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Banking & Financial Services", "Defense & Aerospace", "Government", "Telecom", "Healthcare", "Critical Infrastructure", "Energy", "IT & ITES", "Logistics", "E-commerce"].map((tag, i) => (
                      <span key={i} className="px-4 py-2 border border-white/10 bg-white/5 text-white/70 text-sm font-medium rounded-full hover:bg-white/10 hover:text-white transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 border border-[#b5652a]/30 bg-[#b5652a]/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#b5652a] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />
                  <h4 className="text-white text-xl font-bold font-['Orbitron'] mb-4 relative z-10">Your Network Starts Before Day One</h4>
                  <p className="text-white/70 text-base leading-relaxed font-['IBM_Plex_Sans'] relative z-10">
                    Registered delegates get early access to the event app and WhatsApp community 2 weeks before the summit — browse profiles, request 1:1 meetings, and walk in already connected.
                  </p>
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
