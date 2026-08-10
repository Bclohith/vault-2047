import React from "react";
import Image from "next/image";

export default function CoreThematicAreasSection() {
  const cards = [
    {
      id: "01",
      title: "Cyber Defence & Critical Infrastructure",
      description: "Securing financial systems, telecom networks, energy grids and national infrastructure.",
      iconSrc: "/Vault-2047/assets/thematic-icons/icon-1.svg"
    },
    {
      id: "02",
      title: "Emerging Threat Landscape",
      description: "Quantum security, dark web intelligence, advanced persistent threats, zero trust",
      iconSrc: "/Vault-2047/assets/thematic-icons/icon-2.svg"
    },
    {
      id: "03",
      title: "AI & Cyber Nexus",
      description: "Leveraging AI for threat detection while combating AI-driven cyber risk",
      iconSrc: "/Vault-2047/assets/thematic-icons/icon-3.svg"
    },
    {
      id: "04",
      title: "IT–OT–IoT Security Convergence",
      description: "Protecting connected industrial and enterprise ecosystems",
      iconSrc: "/Vault-2047/assets/thematic-icons/icon-4.svg"
    },
    {
      id: "05",
      title: "Cyber Talent & Skills Pipeline",
      description: "Building the next generation of cyber defenders through training and certification",
      iconSrc: "/Vault-2047/assets/thematic-icons/icon-5.svg"
    },
    {
      id: "06",
      title: "Digital Trust & Citizen Safety",
      description: "Strengthening cyber awareness and safeguarding digital identities",
      iconSrc: "/Vault-2047/assets/thematic-icons/icon-6.svg"
    }
  ];

  return (
    <section className="w-full bg-[#0F0E0D] px-6 py-16 lg:px-[120px] lg:py-[100px] flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-10 md:gap-14">
        
        {/* Header Block */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-[#0D6665]" />
            <h3 
              className="text-[#0D6665] text-sm md:text-base font-bold tracking-[3px] uppercase"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              CORE THEMATIC AREAS
            </h3>
          </div>
          <h2 
            className="text-white text-3xl md:text-[40px] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Shaping the Future of <span className="text-[#B86A2E]">Cybersecurity</span>
          </h2>
        </div>

        {/* 2-Column Grid for Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {cards.slice(0, 4).map((card, index) => (
            <div 
              key={index} 
              className="w-full p-8 md:p-10 flex flex-col items-start bg-[#131210] border border-white/[0.03] group hover:border-[#B86A2E]/30 transition-all duration-300"
            >
              
              {/* Image Area */}
              <div className="w-full aspect-[21/9] bg-[#171513] flex items-center justify-center relative overflow-hidden mb-8 border border-white/[0.02]">
                {/* Glow */}
                <div className="absolute w-[140px] h-[140px] bg-[#B86A2E]/20 blur-[60px] rounded-full group-hover:bg-[#B86A2E]/30 transition-colors duration-500" />
                
                {/* Icon */}
                <div className="relative z-10 w-24 h-24 transform group-hover:scale-110 transition-transform duration-500">
                  <Image src={card.iconSrc} alt={card.title} fill className="object-contain" />
                </div>
              </div>

              {/* Number */}
              <div className="mb-4">
                <span className="text-[#9F9F9F]/60 text-[13px] font-medium tracking-[4px]" style={{ fontFamily: "var(--font-ibm)" }}>
                  {card.id.split('').join(' ')}
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-[#B86A2E]/30 transition-colors duration-500" />

              {/* Text Content */}
              <div className="flex flex-col gap-3">
                <h4 className="text-white text-xl md:text-[22px] font-semibold leading-tight group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>
                  {card.title}
                </h4>
                <p className="text-[#9F9F9F] text-[15px] font-normal leading-[1.6]" style={{ fontFamily: "var(--font-ibm)" }}>
                  {card.description}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Navigation & Explore Button */}
        <div className="w-full relative flex items-center justify-between pt-4">
          
          {/* Left Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button className="w-[56px] h-[56px] flex items-center justify-center bg-[#1A1815] border border-white/5 hover:bg-[#2A2622] hover:border-[#B86A2E]/30 transition-all group">
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:-translate-x-1 transition-transform">
                <path d="M8 1L1 8L8 15" stroke="#B86A2E" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="w-[56px] h-[56px] flex items-center justify-center bg-[#1A1815] border border-white/5 hover:bg-[#2A2622] hover:border-[#B86A2E]/30 transition-all group">
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M1 1L8 8L1 15" stroke="#B86A2E" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>

          {/* Centered Explore Button */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <button 
              className="px-10 py-[18px] bg-[#B86A2E] text-white text-[15px] font-medium hover:bg-[#9a5624] transition-colors"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Explore More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
