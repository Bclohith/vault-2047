"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function BenefitsCarousel({ 
  titlePrefix = "Why Partner as", 
  titleHighlight = "Media",
  description = "Vault2047 offers a front-row seat to the conversations, policies, and innovations defining India’s cyber-resilience journey.",
  benefits = [],
  bgClass = "bg-gray-950",
  outlineClass = "outline-amber-700/30 hover:outline-amber-700",
  buttonStyle = "bg-zinc-400/10 hover:bg-zinc-400/30 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/40"
}) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className={`w-full px-6 md:px-12 lg:px-20 py-20 md:py-28 flex flex-col justify-center items-center gap-12 md:gap-16 overflow-hidden ${bgClass}`}>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col items-center gap-6 max-w-[900px]"
      >
        <h2 className="text-white text-3xl md:text-4xl lg:text-[42px] font-bold font-['Orbitron'] leading-snug">
          {titlePrefix} <span className="text-amber-700">{titleHighlight}</span>
        </h2>
        {description && (
          <p className="text-white opacity-90 text-sm md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
            {description}
          </p>
        )}
        <div className="block lg:hidden text-white/40 text-sm font-['IBM_Plex_Sans'] mt-2 animate-pulse">
          Swipe to explore →
        </div>
      </motion.div>

      <div className="w-full max-w-[1440px] flex items-center justify-center gap-4 lg:gap-8 relative">
        
        {/* Left Arrow */}
        <button 
          onClick={scrollLeft} 
          aria-label="Previous slide"
          className={`hidden lg:flex w-16 h-24 backdrop-blur-sm justify-center items-center transition-colors shrink-0 z-10 group cursor-pointer ${buttonStyle}`}
        >
          <img src="/assets/arrow-icon.svg" className="w-8 h-8 rotate-180 brightness-200 opacity-70 group-hover:opacity-100 transition-opacity" alt="" aria-hidden="true" />
        </button>
        
        {/* Carousel Container */}
        <motion.div 
          ref={carouselRef} 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex w-full overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar"
        >
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`w-[300px] sm:w-[320px] shrink-0 snap-start flex flex-col outline outline-1 outline-offset-[-0.50px] bg-transparent group transition-all duration-300 ${outlineClass}`}
            >
              <div className="w-full h-48 relative overflow-hidden">
                <img src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/${benefit.img}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={benefit.title} />
              </div>
              <div className="flex-1 p-6 md:p-8 bg-white/5 flex flex-col justify-start items-start gap-4 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-white text-xl md:text-2xl font-bold font-['Orbitron'] leading-snug relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed relative z-10">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <button 
          onClick={scrollRight} 
          aria-label="Next slide"
          className={`hidden lg:flex w-16 h-24 backdrop-blur-sm justify-center items-center transition-colors shrink-0 z-10 group cursor-pointer ${buttonStyle}`}
        >
          <img src="/assets/arrow-icon.svg" className="w-8 h-8 brightness-200 opacity-70 group-hover:opacity-100 transition-opacity" alt="" aria-hidden="true" />
        </button>
        
      </div>
    </div>
  );
}
