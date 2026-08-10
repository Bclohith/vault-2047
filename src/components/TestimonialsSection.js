"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "The Big Cyber Security Show event provided updates on recent cyber risks, maturity within industry on cyber space and risk mitigations. The keynotes and panel discussion topics were well thought after and were very relevant to the current industry trends and challenges.",
      role: "CISO",
      company: "Tata AIA Life Insurance"
    },
    {
      text: "The participating speakers, topics, the conference agenda were top class. I believe this has truly been a beneficial event for all the attendees.",
      role: "CISO",
      company: "Aditya Birla Health Insurance Company"
    },
    {
      text: "Trescon staff were very well organised and helped the attendees to the maximum extent. The qualities of the delegates were of exemplary qualities that were beyond measure.",
      role: "Head IS Governance & Compliance",
      company: "Idea Cellular Ltd"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full relative px-6 py-20 lg:px-[120px] lg:py-[112px] flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#020509] via-[#04080D] to-[#020509]">
      
      {/* Optional Background Image Overlay (from provided asset) */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <Image 
          src="/Vault-2047/assets/testimonials/bg-image.png" 
          alt="Background" 
          fill 
          className="object-cover" 
        />
      </div>

      <div className="w-full max-w-[1440px] relative z-10 flex flex-col items-center gap-10 md:gap-14">
        
        {/* Heading */}
        <h2 
          className="text-center text-white text-3xl md:text-[44px] font-semibold tracking-tight leading-tight"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          What Leaders<br />
          <span className="text-[#B86A2E]">Say About Us.</span>
        </h2>

        {/* Carousel Container */}
        <div className="w-full relative flex items-center justify-center min-h-[400px]">
          
          {/* Main Slide Card */}
          <div className="w-full max-w-[950px] relative z-10 px-8 py-10 md:p-14 bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col gap-6 transition-all duration-500">
            
            {/* Custom Quote Marks (Recreated with basic shapes as per design or using standard quote) */}
            <div className="flex items-start gap-1">
              <div className="w-8 h-9 bg-[#B86A2E]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)' }} />
              <div className="w-8 h-9 bg-[#B86A2E]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)' }} />
            </div>

            {/* Testimonial Text */}
            <p 
              key={currentSlide}
              className="text-white text-lg md:text-xl font-normal leading-relaxed min-h-[120px] md:min-h-[90px] animate-fade-in"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              "{testimonials[currentSlide].text}"
            </p>

            {/* Divider */}
            <div className="w-full max-w-[384px] h-[1px] bg-white/30 my-2" />

            {/* Author */}
            <div className="flex flex-col gap-1 uppercase tracking-wider">
              <span className="text-white/50 text-sm font-bold" style={{ fontFamily: "var(--font-ibm)" }}>
                {testimonials[currentSlide].role}
              </span>
              <span className="text-white/50 text-sm font-bold" style={{ fontFamily: "var(--font-ibm)" }}>
                {testimonials[currentSlide].company}
              </span>
            </div>

          </div>

          {/* Navigation Arrows (Desktop overlay, Mobile below) */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 lg:left-8 z-20 w-12 h-16 md:w-16 md:h-20 bg-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-[#B86A2E]/20 hover:border-[#B86A2E] transition-all transform -translate-x-4 lg:translate-x-0"
            aria-label="Previous Testimonial"
          >
            <svg width="12" height="24" viewBox="0 0 12 24" fill="none" stroke="#B86A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 2L2 12L10 22" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 lg:right-8 z-20 w-12 h-16 md:w-16 md:h-20 bg-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-[#B86A2E]/20 hover:border-[#B86A2E] transition-all transform translate-x-4 lg:translate-x-0"
            aria-label="Next Testimonial"
          >
            <svg width="12" height="24" viewBox="0 0 12 24" fill="none" stroke="#B86A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 2L10 12L2 22" />
            </svg>
          </button>

        </div>

        {/* Indicators */}
        <div className="flex items-center gap-3 mt-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-[3px] transition-all duration-300 ${
                currentSlide === idx 
                  ? 'w-12 bg-[#B86A2E]' 
                  : 'w-8 bg-zinc-600 hover:bg-zinc-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
