"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CollaborateSubnav from "../../components/CollaborateSubnav";
import MatrixHeroBackground from '../../components/MatrixHeroBackground';
import BenefitsCarousel from "../../components/BenefitsCarousel";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

export default function ApplyToSponsorPage() {
  const benefits = [
    {
      img: 'sponsor-b1.png',
      title: 'Industry Positioning',
      desc: 'Establish your brand as a core pillar of India’s digital future alongside top-tier government and enterprise leaders.'
    },
    {
      img: 'sponsor-b2.png',
      title: 'Strategic Matchmaking',
      desc: 'Engage with curated 1:1 meetings with CISOs, policymakers, and enterprise leaders aligned to your target accounts and growth objectives.'
    },
    {
      img: 'sponsor-b3.png',
      title: 'Executive Access',
      desc: 'Participate in exclusive forums including CISO roundtables, policy dialogues, and closed-door discussions such as the Mumbai Accord.'
    },
    {
      img: 'sponsor-b4.png',
      title: 'High-Impact Brand Visibility',
      desc: 'Leverage premium exhibition spaces, on-site branding, digital promotions, and stage visibility to maximise brand presence.'
    },
    {
      img: 'sponsor-b5.png',
      title: 'Direct Market Access',
      desc: 'Connect with enterprise buyers, government stakeholders, and global partners driving cybersecurity adoption across critical sectors.'
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
              Collaborate / Apply to Sponsor
            </div>
            
            <h1 className="max-w-[900px] text-center text-white text-3xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] leading-tight">
              Anchor the Global Cyber Dialogue
            </h1>
            
            <p className="max-w-[800px] text-center text-white/90 text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] leading-relaxed">
              Partner with Vault2047 to Drive Innovation and Secure the Digital Economy
            </p>
          </motion.div>
        </div>

        {/* Reusable Components */}
        <BenefitsCarousel 
          titlePrefix="Sponsoring at"
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
          buttonText="Apply to Sponsor"
          buttonHref="/apply-to-sponsor"
        />

      </main>
      <Footer />
    </div>
  );
}
