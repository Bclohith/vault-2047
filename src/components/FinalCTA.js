"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCTA({ 
  badgeText = "JOIN US", 
  title = "Ready to Join the Lineup?", 
  description = "",
  buttonText = "Enquire Now",
  buttonHref = "#"
}) {
  return (
    <div className="w-full relative bg-[#040b0e] flex flex-col justify-center items-center py-20 md:py-32 px-6 overflow-hidden">
      
      <div className="w-full max-w-[1100px] relative min-h-[400px] flex flex-col justify-center items-center py-16 md:py-24 px-6 md:px-12">
        
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <img 
            src={`${process.env.NODE_ENV === 'production' ? '/Vault-2047' : ''}/assets/collaborate/collab-cta-bg.jpg`} 
            alt="CTA Background" 
            className="w-full h-full object-cover opacity-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c42] via-[#0f4c42]/70 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#105349] via-[#0b3c34]/50 to-transparent" />
        </div>

        {/* Corner Decals (L-Shapes) */}
        <div className="w-20 h-20 absolute -left-6 -top-6 border-l-[16px] border-t-[16px] border-[#925523] hidden lg:block z-0" />
        <div className="w-20 h-20 absolute -right-6 -bottom-6 border-r-[16px] border-b-[16px] border-[#925523] hidden lg:block z-0" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full relative z-20 flex flex-col justify-start items-center gap-8 md:gap-10"
        >
          
          <div className="flex flex-col justify-start items-center gap-6">
            <div className="flex justify-center items-center gap-4">
              <div className="w-10 h-[2px] bg-teal-500" />
              <div className="text-white text-sm md:text-base font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[0.2em]">{badgeText}</div>
              <div className="w-10 h-[2px] bg-teal-500" />
            </div>
            
            <h2 className="text-center text-white text-3xl md:text-[40px] lg:text-[46px] font-bold font-['Orbitron'] leading-tight">
              {title}
            </h2>

            {description && (
              <p className="max-w-[700px] text-center text-white/90 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                {description}
              </p>
            )}
          </div>
          
          <div className="flex justify-center items-center mt-2">
            <Link href={buttonHref}>
              <button className="px-8 py-3 bg-[#b5652a] hover:bg-[#9a5421] transition-colors flex justify-center items-center cursor-pointer shadow-lg shadow-black/20">
                <span className="text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans']">{buttonText}</span>
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
