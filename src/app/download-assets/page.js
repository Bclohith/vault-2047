"use client";

import React from 'react';
import CollaborateSubnav from "../../components/CollaborateSubnav";
import MatrixHeroBackground from '../../components/MatrixHeroBackground';
import Footer from "../../components/Footer";

export default function DownloadAssetsPage() {
  const assets = [
    {
      title: 'Explore the Exhibition Layout',
      desc: 'Review the floor plan to identify high-impact exhibition zones, innovation precincts, and strategic positioning opportunities within Vault2047.',
      btn: 'Download Floor Plan',
      icon: '/Vault-2047/assets/icon-floorplan.svg'
    },
    {
      title: 'Understand the Full Event Scope',
      desc: 'Access the complete event overview including themes, agenda structure, key highlights, and strategic positioning of Vault2047.',
      btn: 'Download Brochure',
      icon: '/Vault-2047/assets/icon-brochure.svg'
    },
    {
      title: 'Review Sponsorship Opportunities',
      desc: 'Explore detailed sponsorship packages including branding opportunities, speaking roles, VIP access, and strategic integrations.',
      btn: 'Download Sponsorship Package',
      icon: '/Vault-2047/assets/icon-handshake.svg'
    },
    {
      title: 'Custom Engagement Opportunities',
      desc: 'Looking for a tailored presence? Connect with our team to design bespoke activations aligned with your strategic objectives.',
      btn: 'Book a Call',
      icon: '/Vault-2047/assets/icon-people.svg'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        <CollaborateSubnav />
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch min-h-[400px] md:min-h-[500px] bg-[#040b0e] flex flex-col justify-center items-center overflow-hidden py-16">
          
          {/* Animated Matrix Background */}
          <MatrixHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 to-[#0a0a0a] pointer-events-none z-0" />
          
          <div className="w-full max-w-[1200px] px-6 relative z-10 flex flex-col justify-center items-center gap-6">
            <div className="text-center text-white/80 text-sm md:text-base font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[0.15em]">
              Collaborate / Download Assets
            </div>
            
            <h1 className="max-w-[900px] text-center text-white text-3xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] leading-tight">
              Access Event Assets & Strategic Materials
            </h1>
            
            <p className="max-w-[800px] text-center text-white/90 text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] leading-relaxed">
              Equip your team to maximise impact at Vault2047
            </p>
          </div>
        </div>

        {/* Asset Cards Grid Section */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0a0a0a] flex flex-col justify-center items-center overflow-hidden border-b border-white/5">
          <div className="w-full max-w-[1440px] flex flex-wrap justify-center items-stretch gap-6 relative z-10">
            
            {assets.map((asset, idx) => (
              <div key={idx} className="w-[300px] sm:w-[280px] lg:w-[300px] xl:w-[320px] flex flex-col group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                
                {/* Card Top (Content) */}
                <div className="w-full min-h-[320px] p-8 relative bg-white/5 outline outline-1 outline-[#B86A2E]/30 flex flex-col justify-start items-start gap-6 overflow-hidden group-hover:outline-[#B86A2E]/70 transition-colors">
                  
                  {/* Glowing Amber Orb */}
                  <div className="w-52 h-52 -left-12 -top-12 absolute opacity-40 bg-[#B86A2E] rounded-full blur-[100px] group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="w-16 h-16 relative flex justify-center items-center z-10">
                    <img src={asset.icon} className="w-12 h-12 object-contain" alt="Icon" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-start items-start gap-4 z-10">
                    <h3 className="text-white text-2xl font-bold font-['Orbitron'] leading-tight">
                      {asset.title}
                    </h3>
                    <p className="text-white/80 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                      {asset.desc}
                    </p>
                  </div>
                </div>

                {/* Card Bottom (Button) */}
                <div className="w-full py-5 bg-[#080808] outline outline-1 outline-[#B86A2E]/30 outline-t-0 flex justify-center items-center group-hover:bg-[#B86A2E]/10 transition-colors">
                  <span className="text-white text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-wider">
                    {asset.btn}
                  </span>
                </div>
                
              </div>
            ))}

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
