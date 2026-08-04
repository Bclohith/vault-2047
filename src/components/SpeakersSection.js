import React from "react";
import Image from "next/image";

export default function SpeakersSection() {
  const speakers = [
    { name: "Alice Johnson", country: "USA", title: "Chief Information Security Officer" },
    { name: "Michael Smith", country: "UAE", title: "Chief Information Security Officer" },
    { name: "Emma Brown", country: "India", title: "Chief Information Security Officer" },
    { name: "Liam Davis", country: "Nepal", title: "Chief Information Security Officer" },
    { name: "Sophia Wilson", country: "Uzbekistan", title: "Chief Information Security Officer" },
    { name: "James Taylor", country: "UK", title: "Chief Information Security Officer" },
    { name: "Olivia Martinez", country: "Afghanistan", title: "Chief Information Security Officer" },
    { name: "Noah Anderson", country: "Uzbekistan", title: "Chief Information Security Officer" },
  ];

  return (
    <section className="w-full bg-[#020F0F] px-6 py-16 lg:px-[120px] lg:py-[120px] flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-10 md:gap-[32px]">
        
        {/* Section Heading */}
        <div className="flex items-start">
          <h2 
            className="text-white text-3xl md:text-[32px] font-semibold leading-tight"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Speakers at <span className="text-[#B86A2E]">VAULT 2047</span>
          </h2>
        </div>

        {/* Speakers Grid Container */}
        <div className="w-full border border-[#B86A2E]/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="flex flex-col border border-[#B86A2E]/20 relative group overflow-hidden"
              style={{
                // Prevent double borders in CSS grid
                marginLeft: "-1px",
                marginTop: "-1px"
              }}
            >
              {/* Top Photo Section */}
              <div className="w-full aspect-[4/5] sm:aspect-square relative bg-[#B86A2E]/5 overflow-hidden flex items-end justify-center">
                
                {/* Decorative Blurred Shapes */}
                <div className="absolute w-[134px] h-[218px] top-[10%] right-[10%] bg-white/10 blur-2xl rounded-full mix-blend-screen transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute w-[134px] h-[148px] bottom-[10%] left-[10%] bg-white/10 blur-2xl rounded-full mix-blend-screen transition-transform duration-700 group-hover:scale-125" />
                
                {/* Speaker Image */}
                <div className="relative w-[85%] h-[90%] flex items-end justify-center">
                  <Image
                    src={`/assets/speaker-${(index % 4) + 1}.png`}
                    alt={speaker.name}
                    fill
                    className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Bottom Info Section */}
              <div className="w-full p-6 bg-[#020F0F] flex flex-col gap-[21px] z-10 relative">
                
                <div className="flex justify-between items-center w-full">
                  {/* Fake Logo Placeholder */}
                  <div className="w-[100px] h-[40px] bg-[#D9D9D9] flex items-center justify-center text-black text-sm font-semibold uppercase tracking-wider relative overflow-hidden">
                    <span className="relative z-10">Logo</span>
                  </div>
                  {/* Country */}
                  <span className="text-white/40 text-sm font-medium" style={{ fontFamily: "var(--font-ibm)" }}>
                    {speaker.country}
                  </span>
                </div>

                {/* Name & Title */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-semibold leading-none" style={{ fontFamily: "var(--font-ibm)" }}>
                    {speaker.name}
                  </h3>
                  <p className="text-white/40 text-xs font-normal" style={{ fontFamily: "var(--font-ibm)" }}>
                    {speaker.title}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* View All Button */}
        <div className="w-full pt-4 flex justify-center items-center">
          <button 
            className="px-8 py-5 bg-[#B86A2E] text-white text-base font-medium uppercase tracking-wider hover:bg-[#9a5624] transition-colors"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            See All Speakers
          </button>
        </div>

      </div>
    </section>
  );
}
