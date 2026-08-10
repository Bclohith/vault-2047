import Image from "next/image";
import Link from "next/link";

export default function GetYourPassPage() {
  return (
    <div className="w-full min-h-screen bg-[#040b0e] flex flex-col">
      
      {/* Sub-navigation */}
      <div className="w-full bg-[#101010] border-b border-white/10 flex justify-center items-center py-4">
        <div className="flex justify-center items-center gap-8">
          <Link href="/create-account" className="text-white/70 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-ibm)" }}>
            Create new account
          </Link>
          <div className="text-[#B86A2E] text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-ibm)" }}>
            Get Your Pass
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="flex-1 w-full flex flex-col items-center py-16 md:py-24 px-4 md:px-12 lg:px-[120px] relative">
        
        <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-16 relative z-10">
          
          <div className="text-center">
            <h1 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
              A Variety of Option to Attend
            </h1>
          </div>

          {/* Pricing Cards Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-[#171717]/40 backdrop-blur-md">
            
            {/* Card 1: Delegate Pass */}
            <div className="flex flex-col justify-between items-start p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 relative hover:bg-white/5 transition-colors">
              <div className="w-full flex flex-col justify-start items-start gap-6">
                
                <div className="flex flex-col gap-3 pt-6">
                  <h2 className="text-white text-2xl font-bold uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>
                    STARTUP DELEGATE PASS
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-ibm)" }}>
                    Ideal for early-stage founders looking to explore opportunities, network, and gain ecosystem access.
                  </p>
                </div>

                <div className="w-full h-px bg-white/20"></div>

                <ul className="flex flex-col gap-4 w-full">
                  {[
                    "Access to keynotes and selected sessions",
                    "Entry to networking zones and exhibition floor",
                    "Exposure to investors and enterprise stakeholders"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-4 h-4 mt-1 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/70 text-sm" style={{ fontFamily: "var(--font-ibm)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-12 py-4 border border-[#B86A2E] text-white text-base font-medium hover:bg-[#B86A2E]/20 transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>
                Get Your Pass
              </button>
            </div>

            {/* Card 2: All-Access Pass (Highlighted) */}
            <div className="flex flex-col justify-between items-start p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 relative bg-gradient-to-b from-white/5 to-transparent">
              
              <div className="absolute top-0 left-0 w-full h-1 bg-[#B86A2E]"></div>
              
              <div className="w-full flex flex-col justify-start items-start gap-6">
                
                <div className="flex flex-col gap-3">
                  <div className="self-start px-3 py-1 bg-[#0D6665] text-white text-xs font-medium" style={{ fontFamily: "var(--font-ibm)" }}>
                    Recommended
                  </div>
                  <h2 className="text-[#B86A2E] text-2xl font-bold uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>
                    STARTUP ALL-ACCESS PASS
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-ibm)" }}>
                    Designed for startups ready to actively engage, pitch, and scale within the ecosystem.
                  </p>
                </div>

                <div className="w-full h-px bg-white/20"></div>
                
                <p className="text-white text-sm" style={{ fontFamily: "var(--font-ibm)" }}>
                  Everything in Delegate, plus:
                </p>

                <ul className="flex flex-col gap-4 w-full">
                  {[
                    "Full access to all sessions and networking opportunities",
                    "Priority access to investor and enterprise meetings",
                    "Eligibility to participate in The Cyber Foundry"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-4 h-4 mt-1 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/70 text-sm" style={{ fontFamily: "var(--font-ibm)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-12 py-4 bg-[#B86A2E] text-white text-base font-medium hover:bg-[#9a5624] transition-colors shadow-lg" style={{ fontFamily: "var(--font-ibm)" }}>
                Get Your Pass
              </button>
            </div>

            {/* Card 3: Exhibitor Pass */}
            <div className="flex flex-col justify-between items-start p-8 md:p-10 relative hover:bg-white/5 transition-colors">
              <div className="w-full flex flex-col justify-start items-start gap-6">
                
                <div className="flex flex-col gap-3 pt-6">
                  <h2 className="text-white text-2xl font-bold uppercase" style={{ fontFamily: "var(--font-orbitron)" }}>
                    STARTUP EXHIBITOR PASS
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-ibm)" }}>
                    For startups looking to showcase solutions and drive business outcomes.
                  </p>
                </div>

                <div className="w-full h-px bg-white/20"></div>

                <p className="text-white text-sm" style={{ fontFamily: "var(--font-ibm)" }}>
                  Everything in all-access, plus:
                </p>

                <ul className="flex flex-col gap-4 w-full">
                  {[
                    "Dedicated exhibition pod in Innovation Zone",
                    "Live demos and product showcases",
                    "Direct engagement with buyers, CISOs, and policymakers"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-4 h-4 mt-1 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/70 text-sm" style={{ fontFamily: "var(--font-ibm)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-12 py-4 border border-[#B86A2E] text-white text-base font-medium hover:bg-[#B86A2E]/20 transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>
                Get Your Pass
              </button>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
