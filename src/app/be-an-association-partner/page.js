"use client";

import React, { useRef } from 'react';
import MatrixHeroBackground from '../../components/MatrixHeroBackground';

export default function BeAssociationPartnerPage() {
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

  const benefits = [
    {
      img: 'media-b1.png',
      title: 'Enhanced Member Value',
      desc: 'Provide your community with exclusive access to Vault2047, including curated sessions, networking opportunities, and delegate benefits.'
    },
    {
      img: 'media-b2.png',
      title: 'Thought Leadership Opportunities',
      desc: 'Position your organisation at the forefront of cyber discourse through speaking roles, panel participation, and knowledge sharing platforms.'
    },
    {
      img: 'media-b3.png',
      title: 'Ecosystem Collaboration',
      desc: 'Connect your network with policymakers, enterprises, startups, and global cyber leaders to foster partnerships and cross-sector engagement.'
    },
    {
      img: 'media-b4.png',
      title: 'Co-Branded Visibility',
      desc: 'Benefit from joint branding and amplification across Vault2047 campaigns, positioning your association within India’s cyber ecosystem.'
    },
    {
      img: 'media-b1.png', // Reusing media-b1 as instructed ("Use the same images")
      title: 'Policy & Industry Engagement',
      desc: 'Participate in discussions that influence cyber policy, awareness initiatives, and industry standards.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <main className="flex-grow flex flex-col items-center justify-start">
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch min-h-[400px] md:min-h-[500px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden py-16">
          
          {/* Animated Matrix Background */}
          <MatrixHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 to-[#0a0a0a] pointer-events-none z-0" />
          
          <div className="w-full max-w-[1200px] px-6 relative z-10 flex flex-col justify-center items-center gap-6">
            <div className="text-center text-white/80 text-sm md:text-base font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[0.15em]">
              Collaborate / Association Partner
            </div>
            
            <h1 className="max-w-[900px] text-center text-white text-3xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] leading-tight">
              Empower Your Cyber Community
            </h1>
            
            <p className="max-w-[800px] text-center text-white/90 text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] leading-relaxed">
              Strengthen Collaboration. Drive Cyber-Resilience Together.
            </p>
          </div>
        </div>

        {/* Benefits Carousel Section */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0a0a0a] flex flex-col justify-center items-center gap-12 md:gap-16 overflow-hidden">
          
          <div className="text-center flex flex-col gap-6 max-w-[900px]">
            <h2 className="text-white text-3xl md:text-4xl lg:text-[42px] font-bold font-['Orbitron'] leading-snug mx-auto">
              Why Partner as an <span className="text-[#B86A2E]">Association</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
              Vault2047 enables meaningful partnerships between industry bodies, institutions, and cybersecurity communities to drive unified progress across policy, innovation, and talent development.
            </p>
          </div>

          <div className="w-full max-w-[1440px] flex items-center justify-center gap-4 lg:gap-8 relative mt-6">
            
            {/* Left Arrow */}
            <button 
              onClick={scrollLeft}
              className="hidden lg:flex w-16 h-24 bg-zinc-800/50 hover:bg-[#B86A2E]/80 border border-white/20 backdrop-blur-md justify-center items-center transition-colors shrink-0 z-10 group cursor-pointer"
            >
              <img src="/Vault-2047/assets/arrow-icon.svg" className="w-8 h-8 rotate-180 brightness-200 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" alt="Previous" />
            </button>
            
            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-8 pt-4 hide-scrollbar"
            >
              {benefits.map((benefit, idx) => (
                <div key={idx} className="w-[300px] sm:w-[350px] shrink-0 snap-start flex flex-col outline outline-1 outline-offset-[-0.50px] outline-[#B86A2E]/30 bg-white/5 group hover:outline-[#B86A2E] transition-all duration-300">
                  <div className="w-full h-48 relative overflow-hidden bg-black">
                    <img src={`/assets/${benefit.img}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" alt={benefit.title} />
                  </div>
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-start items-start gap-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-white text-xl font-bold font-['Orbitron'] leading-snug relative z-10">
                      {benefit.title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed relative z-10">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={scrollRight}
              className="hidden lg:flex w-16 h-24 bg-zinc-800/50 hover:bg-[#B86A2E]/80 border border-white/20 backdrop-blur-md justify-center items-center transition-colors shrink-0 z-10 group cursor-pointer"
            >
              <img src="/Vault-2047/assets/arrow-icon.svg" className="w-8 h-8 brightness-200 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" alt="Next" />
            </button>
            
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="w-full relative py-24 md:py-32 bg-[#0a0a0a] flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-[1000px] relative px-6 md:px-0">
            {/* Top Left Bracket */}
            <div className="absolute -top-6 -left-2 md:-top-12 md:-left-12 w-16 h-16 md:w-32 md:h-32 border-t-[16px] md:border-t-[24px] border-l-[16px] md:border-l-[24px] border-[#9a5624] z-0" />
            {/* Bottom Right Bracket */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-12 md:-right-12 w-16 h-16 md:w-32 md:h-32 border-b-[16px] md:border-b-[24px] border-r-[16px] md:border-r-[24px] border-[#9a5624] z-0" />
            
            {/* Inner Card */}
            <div className="w-full relative bg-[#073635] flex flex-col justify-center items-center py-10 md:py-10 lg:py-10 gap-10 overflow-hidden shadow-2xl z-10">
              {/* Background Image & Gradient */}
              <div className="absolute inset-0 z-0">
                <img src="/Vault-2047/assets/collab-cta-bg.jpg" className="w-full h-full object-cover opacity-20 mix-blend-screen grayscale" alt="Audience" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#073635]/60 to-[#0b5453]" />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full flex flex-col justify-center items-center gap-6 px-6">
                {/* Join Us Label */}
                <div className="flex justify-center items-center gap-4">
                  <div className="w-8 md:w-12 h-[2px] bg-teal-500" />
                  <div className="text-white text-xs md:text-sm font-bold font-['IBM_Plex_Sans'] uppercase tracking-[0.2em]">Join us</div>
                  <div className="w-8 md:w-12 h-[2px] bg-teal-500" />
                </div>
                
                <h2 className="text-center text-white text-2xl md:text-4xl lg:text-[42px] font-bold font-['Orbitron'] leading-snug">
                  Ready to Join the Lineup?
                </h2>
              </div>
              
              <button className="relative z-10 px-12 py-4 bg-[#B86A2E] hover:bg-[#9a5624] transition-colors flex justify-center items-center">
                <span className="text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Apply as an Association Partner</span>
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}