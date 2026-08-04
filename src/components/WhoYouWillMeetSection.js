"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function WhoYouWillMeetSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: "01",
      title: "National security leaders and policymakers",
      description: "Shaping national cyber doctrine, driving regulation, and aligning multilateral frameworks for sovereign digital defence in an era of systemic risk.",
      bg: "bg-[#B8B82E]/10",
      imageSrc: "/assets/who-meet/2.png"
    },
    {
      id: "02",
      title: "Global cybersecurity companies and technology leaders",
      description: "Presenting advanced cybersecurity technologies, forging enterprise and government partnerships, and driving innovation in threat detection, cloud security, zero trust and next-generation cyber-defence solutions globally.",
      bg: "bg-[#B86A2E]/10",
      imageSrc: "/assets/who-meet/3.png"
    },
    {
      id: "03",
      title: "Enterprise CISOs, CIOs, CTOs, CROs",
      description: "Leading enterprise-wide cyber resilience, risk mitigation and digital transformation strategies while securing complex IT, cloud and operational environments across critical industries and large-scale digital ecosystems.",
      bg: "bg-[#2E83B8]/10",
      imageSrc: "/assets/who-meet/1.png"
    },
    {
      id: "04",
      title: "Defence and intelligence agencies",
      description: "Enhancing cyber-warfare capabilities, advancing threat-intelligence collaboration and strengthening national defence systems to counter evolving threats targeting strategic assets and national security infrastructure.",
      bg: "bg-[#402EB8]/10",
      imageSrc: "/assets/who-meet/6.png"
    },
    {
      id: "05",
      title: "Cybersecurity startups and innovators",
      description: "Showcasing disruptive cybersecurity solutions, accessing enterprise and government opportunities, and scaling innovations across threat intelligence, identity security, cloud protection and next-generation cyber-defence technologies.",
      bg: "bg-[#B8B82E]/10",
      imageSrc: "/assets/who-meet/4.png"
    },
    {
      id: "06",
      title: "Global investors, VCs, and sovereign funds",
      description: "Exploring high-growth cybersecurity investment opportunities, accessing deal flow from emerging startups and partnering with enterprises and governments to accelerate innovation and ecosystem expansion.",
      bg: "bg-[#B82E69]/10",
      imageSrc: "/assets/who-meet/5.png"
    }
  ];

  return (
    <section className="w-full bg-[#020F0F] px-6 py-16 lg:px-[120px] lg:py-[120px] flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-10 md:gap-14">
        
        {/* Header Block */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <h3 
              className="text-[#0D6665] text-sm md:text-[24px] font-semibold tracking-[4.8px] uppercase"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              WHO YOU WILL MEET
            </h3>
          </div>
          <h2 
            className="text-white text-3xl md:text-[40px] font-semibold leading-tight"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            The Entire Cybersecurity Ecosystem. <br className="hidden md:block"/>
            <span className="text-[#B86A2E]">In One Place.</span>
          </h2>
        </div>

        {/* Content Split */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-8 min-h-[680px]">
          
          {/* Left Column - List */}
          <div className="w-full lg:w-[45%] flex flex-col">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full py-6 md:py-8 px-4 border-b border-[#B86A2E]/30 flex items-center gap-6 cursor-pointer transition-colors duration-300 ${isActive ? 'bg-[#B86A2E]/10 border-[#B86A2E]' : 'hover:bg-white/5'}`}
                >
                  <span className={`text-base font-normal transition-colors ${isActive ? 'text-[#B86A2E]' : 'text-[#9F9F9F]'}`} style={{ fontFamily: "var(--font-ibm)" }}>
                    {item.id}
                  </span>
                  <h4 className={`flex-1 text-lg md:text-[20px] font-semibold transition-colors ${isActive ? 'text-[#B86A2E]' : 'text-white'}`} style={{ fontFamily: "var(--font-ibm)" }}>
                    {item.title}
                  </h4>
                  <span className={`text-lg transition-colors transform ${isActive ? 'text-[#B86A2E] translate-x-2' : 'text-white'}`}>
                    →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column - Dynamic Display */}
          <div className="w-full lg:w-[55%] lg:sticky lg:top-24 h-auto lg:h-[680px] relative overflow-hidden flex items-center justify-center">
            
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full p-8 md:p-12 flex flex-col justify-start items-center gap-8 md:gap-10 transition-all duration-700 ease-in-out ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'} ${item.bg}`}
              >
                
                {/* Image Area */}
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-black/20">
                  <Image 
                    src={item.imageSrc} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>

                {/* Description */}
                <div className="w-full text-center md:text-left flex-1 flex flex-col justify-between">
                  <p className="text-[#CDCDCD] text-base md:text-lg font-normal leading-[1.6]" style={{ fontFamily: "var(--font-ibm)" }}>
                    {item.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className="w-full h-[1px] bg-[#B86A2E]/50 mt-8" />
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
