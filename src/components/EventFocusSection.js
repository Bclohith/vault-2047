import React from "react";
import Image from "next/image";

export default function EventFocusSection() {
  const focusItems = [
    {
      id: "01",
      title: "Unify global cyber-resilience leadership",
      description: "Bring together the world's foremost cyber leaders, policymakers and enterprises to align on a unified global security agenda."
    },
    {
      id: "02",
      title: "Drive sovereign cyber-defence capabilities",
      description: "Strengthen national cyber sovereignty by advancing self-reliant defence frameworks and infrastructure."
    },
    {
      id: "03",
      title: "Accelerate indigenous cyber-tech innovation",
      description: "Catalyse the development and adoption of \"Made in India\" cybersecurity technologies and solutions."
    },
    {
      id: "04",
      title: "Enable protection of critical infrastructure",
      description: "Secure vital sectors against evolving threats through advanced, sector-wide cyber-defence strategies."
    },
    {
      id: "05",
      title: "Facilitate global partnerships and investment",
      description: "Unlock cross-border collaboration and capital to scale cyber innovation and resilience ecosystems."
    }
  ];

  return (
    <section className="w-full bg-[#13130E] px-6 py-16 lg:px-[120px] lg:py-[120px] flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start gap-12 lg:gap-8">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-12 lg:gap-[50px] lg:pr-10">
          
          <div className="flex flex-col items-start gap-8">
            <h2 
              className="text-white text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              A Global Platform for <br className="hidden md:block" />
              <span className="text-[#B86A2E]">Cyber-Resilience</span> Leadership
            </h2>
            
            <p 
              className="text-[#9F9F9F] text-base md:text-lg italic font-medium max-w-lg"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Vault2047 is India&apos;s flagship global platform for cybersecurity resilience — bringing together policymakers, defence agencies, CISOs, innovators, investors and academia to co-create the future of cyber defence.
            </p>
          </div>

          {/* Quote Block */}
          <div className="relative w-full max-w-lg p-6 md:p-8 bg-white/5 border border-white/10 flex items-center justify-center mt-4">
            <p 
              className="text-[#B86A2E] text-lg md:text-[20px] italic font-normal text-center"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              “This is where policy, technology, and capital converge to build the next generation of cybersecurity ecosystems.”
            </p>
            {/* Teal Accent Box */}
            <div className="absolute -top-5 left-6 w-12 h-10 bg-[#0D6665]"></div>
          </div>

        </div>

        {/* Right Column - Scrollable Event Focus */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          
          <div className="w-full py-4 bg-[#B86A2E]/10 flex items-center justify-center">
            <h3 
              className="text-white/60 text-2xl md:text-[28px] font-medium"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Event Focus
            </h3>
          </div>

          {/* Scrollable Container */}
          <div className="w-full h-[520px] bg-[#13130E] flex flex-col gap-5 overflow-y-auto pr-2 custom-scrollbar relative border-t border-b border-white/5 py-1">
            
            {focusItems.map((item, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 min-h-[300px] md:min-h-[360px] p-6 md:p-8 relative bg-[#13130E] border border-[#B86A2E]/40 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 group hover:border-[#B86A2E] transition-colors overflow-hidden"
              >
                
                {/* Background Image */}
                <Image
                  src={`/assets/focus-${index + 1}.png`}
                  alt={item.title}
                  fill
                  className="object-cover object-right opacity-30 group-hover:opacity-50 transition-opacity duration-700 z-0"
                />

                {/* Background Gradient to ensure text readability */}
                <div 
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{
                    background: index % 2 === 0 
                      ? "linear-gradient(90deg, #13130E 10%, rgba(19,19,14,0.7) 50%, rgba(19,19,14,0) 100%)" 
                      : "linear-gradient(90deg, #13130E 10%, rgba(19,19,14,0.7) 50%, rgba(19,19,14,0) 100%)",
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 w-full">
                  <div 
                    className="text-5xl md:text-[64px] font-[900] text-white/10 group-hover:text-[#4DC6C5] transition-colors duration-500"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {item.id}
                  </div>
                  
                  <div className="flex flex-col items-start gap-3 md:gap-4 flex-1">
                    <h4 
                      className="text-white text-2xl md:text-[32px] font-medium leading-tight group-hover:text-[#B86A2E] transition-colors"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      {item.title}
                    </h4>
                    <p 
                      className="text-[#CDCDCD] text-sm md:text-base font-light"
                      style={{ fontFamily: "var(--font-ibm)" }}
                    >
                      {item.description}
                    </p>
                    <div className="text-[#B86A2E] text-lg font-bold mt-2 transform group-hover:translate-x-2 transition-transform">
                      →
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
        
      </div>
    </section>
  );
}
