"use client";

import React from "react";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

export default function OrganiserSection() {
  const stats = [
    { number: 500, label: "Events Executed", suffix: "+" },
    { number: 1, label: "Connections facilitated", suffix: "m+" },
    { number: 250000, label: "Attendees Hosted", suffix: "+" },
    { number: 3500, label: "investors engaged", suffix: "+" },
    { number: 3000, label: "Speakers Featured", suffix: "+" },
    { number: 5000, label: "Exhibitors Showcased", suffix: "+" },
  ];

  return (
    <section className="w-full relative bg-[#171717] px-6 py-16 lg:px-[120px] lg:py-[112px] flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 md:gap-10">
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[4px] bg-[#0D6665]" />
              <h3 
                className="text-[#0D6665] text-xl md:text-2xl font-semibold uppercase tracking-[4.8px]"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                The organiser
              </h3>
            </div>
            
            <h2 
              className="text-white text-3xl md:text-4xl font-semibold"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Brands We've <span className="text-[#B86A2E]">Worked With.</span>
            </h2>
          </div>

          {/* Organizer Logo */}
          <div className="relative w-48 h-20 md:h-24">
             <Image 
               src="/Vault-2047/assets/organiser/trescon-logo.png"
               alt="Trescon Logo"
               fill
               className="object-contain object-left"
             />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-base md:text-lg font-normal leading-relaxed" style={{ fontFamily: "var(--font-ibm)" }}>
              Backed by decades of collective expertise, Trescon brings together diverse communities through thoughtfully curated experiences and business solutions that foster collaboration and long-term value creation. Since our inception, we have remained committed to building impactful platforms that bridge ideas with implementation, empowering leaders and organizations to shape the future while promoting inclusive and sustainable progress.
              <br/><br/>
              We specialise in bridging policy, enterprise and emerging cyber technologies — curating elite platforms where national security leaders, CISOs, regulators and innovators converge to strengthen cyber-defence capabilities and secure the digital future.
            </p>
            <p className="text-white/70 text-base md:text-lg font-normal leading-relaxed" style={{ fontFamily: "var(--font-ibm)" }}>
              With a deep understanding of emerging markets, we design and deliver high-quality environments where organizations can learn, collaborate, and stay ahead. Our approach is rooted in combining strategic insight with practical execution, enabling clients to navigate complexity and turn ambition into action.
            </p>
          </div>

          <button 
            className="px-8 py-4 border border-[#B86A2E] text-[#B86A2E] text-base md:text-lg font-medium hover:bg-[#B86A2E] hover:text-white transition-all uppercase tracking-wider mt-4"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Explore Our Legacy &rarr;
          </button>
        </div>

        {/* Right Column: Image and Stats */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          
          {/* Main Image */}
          <div className="w-full aspect-[16/10] bg-[#B86A2E]/5 border border-white/10 relative overflow-hidden group">
            <Image 
              src="/Vault-2047/assets/organiser/organiser-img.jpg"
              alt="Trescon Organizer Event"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Stats Grid */}
          <div className="w-full border border-[#B86A2E]/20 bg-[#B86A2E]/5 grid grid-cols-2 md:grid-cols-3">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="flex flex-col justify-center items-start gap-2 p-6 md:p-8 border border-[#B86A2E]/20 bg-[#171717]/50 backdrop-blur-sm hover:bg-[#B86A2E]/10 transition-colors"
              >
                <div 
                  className="text-white text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div 
                  className="text-white/60 text-xs md:text-sm font-normal uppercase tracking-wide leading-snug"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
