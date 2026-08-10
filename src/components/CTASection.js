import React from "react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full relative px-6 py-10 md:py-10 lg:py-10 flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
      
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Vault-2047/assets/cta/cta-bg.jpg" 
          alt="CTA Background" 
          fill 
          className="object-cover opacity-30" 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      {/* Decorative Brackets (Pure CSS) */}
      <div className="absolute top-8 left-8 md:top-16 md:left-16 w-16 h-16 md:w-28 md:h-28 border-t-[16px] border-l-[16px] border-[#B86A2E] opacity-70 z-10 hidden sm:block" />
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-16 h-16 md:w-28 md:h-28 border-b-[16px] border-r-[16px] border-[#B86A2E] opacity-70 z-10 hidden sm:block" />

      <div className="w-full max-w-[1200px] relative z-20 flex flex-col items-center gap-10 bg-gradient-to-b from-[#0A0A0A]/0 to-[#0D6665]/60 p-8 md:p-16 border border-white/5 backdrop-blur-sm">
        
        {/* Content Container */}
        <div className="w-full flex flex-col items-center gap-8">
          
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-8 md:w-11 h-[2px] md:h-[4px] bg-[#0D6665]" />
            <h3 
              className="text-white text-lg md:text-2xl font-semibold uppercase tracking-[4.8px]"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Join Us
            </h3>
            <div className="w-8 md:w-11 h-[2px] md:h-[4px] bg-[#0D6665]" />
          </div>
          
          {/* Title */}
          <h2 
            className="text-center text-white text-3xl md:text-5xl lg:text-[52px] font-medium leading-tight"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Step Into the Future of <br className="hidden md:block"/>
            <span className="text-[#B86A2E]">Cyber Resilience</span>
          </h2>

          {/* Description */}
          <p 
            className="text-center text-white/70 text-base md:text-xl font-normal max-w-[742px] leading-relaxed"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Join the leaders shaping cyber defense, policy, and innovation. Be part of the platform driving the next phase of global cyber resilience.
          </p>

        </div>

        {/* CTA Button */}
        <button 
          className="px-8 md:px-10 py-4 md:py-5 bg-[#B86A2E] text-white text-base md:text-lg font-medium hover:bg-[#9a5624] transition-colors uppercase tracking-wider shadow-[0_0_20px_rgba(184,106,46,0.3)] hover:shadow-[0_0_30px_rgba(184,106,46,0.5)]"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          Enquire Now
        </button>

      </div>

    </section>
  );
}
