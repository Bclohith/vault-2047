import React from "react";
import Image from "next/image";

export default function UpdatesSection() {
  const updates = [
    {
      category: "Press Release",
      date: "February 24, 2026",
      title: "Trescon Marks Ten Years as One of MENA Region's Mos...",
      description: "Dubai, UAE. Over the past decade, Trescon has evolved from a startup founded in Bengaluru to...",
      imgSrc: "/assets/news/update-1.png",
      link: "#"
    },
    {
      category: "Press Release",
      date: "February 24, 2026",
      title: "Trescon Marks Ten Years as One of MENA Region's Mos...",
      description: "Dubai, UAE. Over the past decade, Trescon has evolved from a startup founded in Bengaluru to...",
      imgSrc: "/assets/news/update-2.jpg",
      link: "#"
    },
    {
      category: "Press Release",
      date: "February 24, 2026",
      title: "Trescon Marks Ten Years as One of MENA Region's Mos...",
      description: "Dubai, UAE. Over the past decade, Trescon has evolved from a startup founded in Bengaluru to...",
      imgSrc: "/assets/news/update-3.jpg",
      link: "#"
    }
  ];

  return (
    <section className="w-full relative bg-[#020509] px-6 py-16 lg:px-[120px] lg:py-[100px] flex flex-col items-center overflow-hidden">
      
      {/* Background Custom Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "center center"
        }}
      />

      <div className="w-full max-w-[1440px] relative z-10 flex flex-col gap-10 md:gap-11">
        
        {/* Header Block */}
        <div className="w-full flex flex-col items-start">
          <h2 
            className="text-white text-3xl md:text-[32px] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Updates in the Cyber Space
          </h2>
        </div>

        {/* News Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 border border-[#B86A2E]/20 p-[1px] bg-[#B86A2E]/10">
          
          {updates.map((update, index) => (
            <div 
              key={index}
              className="w-full bg-[#070b0e] flex flex-col overflow-hidden border border-[#B86A2E]/20 group cursor-pointer hover:border-[#B86A2E]/60 transition-colors duration-500"
            >
              {/* Image Area */}
              <div className="w-full aspect-[16/9] relative overflow-hidden bg-black/40">
                <Image
                  src={update.imgSrc}
                  alt={update.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="w-full p-8 md:p-10 bg-white/5 flex flex-col gap-6 flex-1 justify-between">
                
                <div className="flex flex-col gap-6">
                  {/* Meta */}
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[#0D6665] text-xs font-semibold uppercase tracking-wider">
                      {update.category}
                    </span>
                    <span className="text-[#0D6665] text-xs font-medium">
                      {update.date}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-white text-lg md:text-xl font-semibold leading-tight group-hover:text-[#B86A2E] transition-colors">
                      {update.title}
                    </h4>
                    <p className="text-[#9F9F9F] text-sm font-normal leading-[1.6]">
                      {update.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mt-4">
                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#B86A2E]/20 group-hover:bg-[#B86A2E]/40 transition-colors" />

                  {/* Footer & Read More */}
                  <div className="flex justify-between items-center w-full">
                    
                    {/* Share / Action Icons */}
                    <div className="flex items-center gap-2">
                      <a href="#" className="w-6 h-6 flex items-center justify-center text-[#B86A2E]/60 hover:text-[#B86A2E] transition-colors" aria-label="X (Twitter)">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-6 h-6 flex items-center justify-center text-[#B86A2E]/60 hover:text-[#B86A2E] transition-colors" aria-label="LinkedIn">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-6 h-6 flex items-center justify-center text-[#B86A2E]/60 hover:text-[#B86A2E] transition-colors" aria-label="Facebook">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                        </svg>
                      </a>
                    </div>

                    <div className="text-[#B86A2E]/80 text-sm md:text-base font-medium group-hover:text-[#B86A2E] group-hover:translate-x-1 transition-all">
                      Read More &rarr;
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* View All Button */}
        <div className="w-full pt-4 flex justify-center items-center">
          <button 
            className="w-full sm:w-auto px-10 py-5 bg-[#B86A2E] text-white text-base font-medium hover:bg-[#9a5624] transition-colors uppercase tracking-wider"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Read More
          </button>
        </div>

      </div>
    </section>
  );
}
