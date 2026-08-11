"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MatrixHeroBackground from '../../components/MatrixHeroBackground';
import CollaborateSubnav from "../../components/CollaborateSubnav";
import BenefitsCarousel from "../../components/BenefitsCarousel";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export default function BeMediaPartnerPage() {
  const benefits = [
    {
      img: 'media-p1.png',
      title: 'Unparalleled Access',
      desc: 'Secure interviews and insights from national security leaders, policymakers, CISOs, and global cybersecurity innovators.'
    },
    {
      img: 'media-p2.png',
      title: 'Breaking Developments',
      desc: 'Be present for major announcements including policy frameworks, global partnerships, and initiatives such as the Mumbai Accord.'
    },
    {
      img: 'media-p3.png',
      title: 'Global Visibility',
      desc: 'Expand your reach by connecting with a high-value audience of enterprise leaders, government stakeholders, and international participants.'
    },
    {
      img: 'media-p4.png',
      title: 'Content & Storytelling Opportunities',
      desc: 'Create high impact content through exclusive coverage, expert insights, and thought leadership collaborations.'
    },
    {
      img: 'media-p5.png',
      title: 'On-Ground Media Enablement',
      desc: 'Access dedicated media zones, live coverage opportunities, and real-time engagement with speakers and stakeholders.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        <CollaborateSubnav />
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch min-h-[400px] md:min-h-[500px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden py-16">
          
          <MatrixHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 to-[#0a0a0a] pointer-events-none z-0" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[1200px] px-6 relative z-10 flex flex-col justify-center items-center gap-6"
          >
            <div className="text-center text-white text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-widest">
              Collaborate / Media Partner
            </div>
            
            <h1 className="max-w-[900px] text-center text-white text-3xl md:text-5xl font-bold font-['Orbitron'] leading-tight">
              Become a Media Partner
            </h1>
            
            <p className="max-w-[800px] text-center text-white text-lg font-semibold font-['IBM_Plex_Sans'] leading-relaxed">
              Shape the Global Narrative of Cyber-Resilience
            </p>
          </motion.div>
        </div>

        {/* Reusable Components */}
        <BenefitsCarousel 
          titlePrefix="Why Partner as"
          titleHighlight="Media"
          description="Vault2047 offers a front-row seat to the conversations, policies, and innovations defining India’s cyber-resilience journey and global cyber collaboration."
          benefits={benefits}
          bgClass="bg-gray-950"
          outlineClass="outline-amber-700/30 hover:outline-amber-700"
          buttonStyle="bg-zinc-400/10 hover:bg-zinc-400/30 outline outline-[0.50px] outline-offset-[-0.50px] outline-white/40"
        />

        <FinalCTA 
          badgeText="Join us"
          title="Ready to Join the Lineup?"
          buttonText="Apply as a Media Partner"
          buttonHref="/be-a-media-partner"
        />

      </main>
      <Footer />
    </div>
  );
}
