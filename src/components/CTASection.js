import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTASection({
  badgeText = "JOIN US",
  titlePrefix = "Step Into the Future of",
  titleHighlight = "Cyber Resilience",
  description = "Join the leaders shaping cyber defense, policy, and innovation. Be part of the platform driving the next phase of global cyber resilience.",
  buttonText = "Enquire Now",
  buttonLink = "#",
  backgroundImage = "/assets/cta/cta-bg.jpg"
}) {
  return (
    <section className="w-full bg-[#0A0A0A] px-6 py-20 lg:px-[120px] lg:py-[120px] flex justify-center items-center">
      
      {/* Outer wrapper for the brackets and inner box */}
      <div className="relative w-full max-w-[1250px]">
        
        {/* Decorative Brackets (Outside the main box) */}
        <div className="absolute -top-8 -left-8 md:-top-10 md:-left-10 w-24 h-24 md:w-36 md:h-36 border-t-[24px] border-l-[24px] border-[#6b4226] z-0 hidden sm:block" />
        <div className="absolute -bottom-8 -right-8 md:-bottom-10 md:-right-10 w-24 h-24 md:w-36 md:h-36 border-b-[24px] border-r-[24px] border-[#6b4226] z-0 hidden sm:block" />

        {/* Inner Box with Image and Content */}
        <div className="relative z-10 w-full overflow-hidden bg-[#0a1a1a] flex flex-col items-center justify-center py-20 md:py-28 px-8 md:px-16 shadow-2xl">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={backgroundImage} 
              alt="CTA Background" 
              fill 
              className="object-cover opacity-50 mix-blend-luminosity" 
            />
            {/* Teal Gradient Overlay - matches reference exactly */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#041a1a]/90 via-[#0d4a49]/80 to-[#041a1a]/90" />
            <div className="absolute inset-0 bg-[#0D6665]/30 mix-blend-overlay" />
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center gap-8 w-full max-w-[950px]">
            
            {/* Badge */}
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 md:w-12 h-[2px] bg-[#227a7a]" />
              <h3 
                className="text-white text-sm md:text-base font-semibold uppercase tracking-[0.25em]"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                {badgeText}
              </h3>
              <div className="w-8 md:w-12 h-[2px] bg-[#227a7a]" />
            </div>
            
            {/* Title */}
            <h2 
              className="text-center text-white text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {titlePrefix} <span className="text-[#c16828]">{titleHighlight}</span>
            </h2>

            {/* Description */}
            {description && (
              <p 
                className="text-center text-white/90 text-base md:text-lg lg:text-[19px] font-normal leading-relaxed mt-2"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                {description}
              </p>
            )}

            {/* Button */}
            <div className="mt-6">
              <Link href={buttonLink}>
                <button 
                  className="px-10 py-5 bg-[#b5652a] text-white text-base md:text-[16px] font-medium hover:bg-[#9a5421] transition-colors shadow-lg"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  {buttonText}
                </button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
