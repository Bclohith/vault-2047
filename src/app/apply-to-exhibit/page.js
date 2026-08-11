"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CollaborateSubnav from "../../components/CollaborateSubnav";
import MatrixHeroBackground from '../../components/MatrixHeroBackground';
import BenefitsCarousel from "../../components/BenefitsCarousel";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export default function ApplyToExhibitPage() {
  const benefits = [
    {
      img: 'exhibit-b1.png',
      title: 'Lead Generation & Sales',
      desc: 'Accelerate your sales pipeline by connecting directly with key decision-makers across government and enterprise sectors.'
    },
    {
      img: 'exhibit-b2.png',
      title: 'Strategic Positioning',
      desc: 'Engage with CISOs, government officials, enterprise buyers, and national security stakeholders actively exploring cybersecurity solutions.'
    },
    {
      img: 'exhibit-b3.png',
      title: 'Curated Business Opportunities',
      desc: 'Participate in structured networking and matchmaking opportunities to connect with high-value prospects and partners.'
    },
    {
      img: 'exhibit-b4.png',
      title: 'Live Demonstrations & Use Cases',
      desc: 'Showcase realworld applications of your solutions across critical sectors including BFSI, telecom, energy, healthcare, and government.'
    },
    {
      img: 'sponsor-b1.png',
      title: 'Startup & Innovation Advantage',
      desc: 'Gain visibility among investors and enterprise leaders through innovation zones and platforms like The Cyber Foundry.'
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
            <div className="text-center text-white/80 text-sm md:text-base font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[0.15em]">
              Collaborate / Apply to Exhibit
            </div>
            
            <h1 className="max-w-[900px] text-center text-white text-3xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] leading-tight">
              Showcase Your Cyber Capabilities
            </h1>
            
            <p className="max-w-[800px] text-center text-white/90 text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] leading-relaxed">
              Position Your Solutions at the Core of India’s Cyber Ecosystem
            </p>
          </motion.div>
        </div>

        {/* Reusable Components */}
        <BenefitsCarousel 
          titlePrefix="Exhibiting at"
          titleHighlight="VAULT2047"
          description="Provides a Host of Benefits"
          benefits={benefits}
          bgClass="bg-[#0a0a0a]"
          outlineClass="outline-[#B86A2E]/30 hover:outline-[#B86A2E]"
          buttonStyle="bg-zinc-800/50 hover:bg-[#B86A2E]/80 border border-white/20"
        />

        <FinalCTA 
          badgeText="Join us"
          title="Ready to Join the Lineup?"
          buttonText="Apply to Exhibit"
          buttonHref="/apply-to-exhibit"
        />

      </main>
      <Footer />
    </div>
  );
}
