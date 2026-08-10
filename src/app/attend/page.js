import React from "react";
import Image from "next/image";
import Link from "next/link";
import SpeakersSection from "@/components/SpeakersSection";

export const metadata = {
  title: "Attend - Vault 2047",
  description: "Get your pass for Vault 2047.",
};

export default function AttendPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        {/* Sub-Navigation Bar (Directly below header) */}
        <div className="w-full px-9 py-3 bg-gray-950 flex flex-col md:flex-row justify-between items-center overflow-hidden border-b border-white/5 z-20 relative">
          <div className="flex-1 flex justify-center items-center divide-x divide-white/10 w-full max-w-[1200px] mx-auto">
            <Link href="/create-account" className="flex-1 px-4 md:px-6 py-2 flex justify-center items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors text-center">
              <div 
                className="text-white/70 hover:text-white text-xs md:text-sm font-semibold uppercase tracking-tight transition-colors"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Create new account
              </div>
            </Link>
            <Link href="/get-your-pass" className="flex-1 px-4 md:px-6 py-2 flex justify-center items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors text-center">
              <div 
                className="text-white/70 hover:text-white text-xs md:text-sm font-semibold uppercase tracking-tight transition-colors"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Get Your Pass
              </div>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative w-full min-h-[300px] md:min-h-[400px] px-6 md:px-32 py-16 flex flex-col justify-center items-center gap-5 overflow-hidden">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0 bg-black">
            <Image 
              src="/assets/attend-bg.png"
              alt="Attend Background"
              fill
              className="object-cover opacity-60"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#040b0e]/80 via-transparent to-[#040b0e]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full text-center text-white text-sm md:text-lg font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-ibm)" }}>
            Attend
          </div>
          <div className="relative z-10 w-full flex justify-center items-center">
            <h1 className="max-w-[1200px] text-center text-white text-3xl md:text-5xl lg:text-[56px] font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "var(--font-orbitron)" }}>
              Where Cyber Leadership, Policy, and Innovation Converge
            </h1>
          </div>
        </div>
        
        {/* Vision Section */}
        <div className="relative w-full py-20 px-4 md:px-12 lg:px-[120px] bg-[#040b0e] overflow-hidden flex justify-center mt-12 md:mt-24">
          
          {/* Decorative Background Grid */}
          <div className="absolute left-0 top-0 w-full h-full opacity-20 flex justify-start items-start gap-8 md:gap-12 z-0 pointer-events-none mix-blend-screen">
            {[...Array(12)].map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col justify-start items-start gap-8 md:gap-12">
                {[...Array(8)].map((_, rowIndex) => (
                  <div key={rowIndex} className="w-32 h-32 md:w-44 md:h-48 opacity-30 bg-[#B86A2E]" />
                ))}
              </div>
            ))}
          </div>

          {/* Vision Card */}
          <div className="relative z-10 w-full max-w-[1200px] p-8 md:p-12 lg:p-16 bg-[#171717]/40 outline outline-1 outline-offset-[-1px] outline-[#B86A2E]/30 backdrop-blur-lg flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-16 shadow-2xl">
            
            <div className="flex-1 flex flex-col justify-start items-start gap-6 lg:gap-8">
              <div 
                className="text-white/90 text-base md:text-lg lg:text-xl font-normal leading-relaxed" 
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                India&apos;s journey toward becoming a global digital superpower requires a secure, resilient, and future-ready cyber ecosystem.
              </div>
              <div 
                className="text-white/90 text-base md:text-lg lg:text-xl font-normal leading-relaxed" 
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Vault2047 is where the partnerships, policies, and innovations driving this transformation come together.
              </div>
              <div className="pt-2 md:pt-4">
                <button 
                  className="px-6 py-4 md:px-8 md:py-5 bg-[#B86A2E] text-white text-sm md:text-base font-medium hover:bg-[#9a5624] transition-colors shadow-lg" 
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  Explore the Vision
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[551px] aspect-video lg:aspect-[551/370] relative flex-shrink-0 border border-white/5 shadow-2xl">
              <Image 
                className="object-cover" 
                src="/assets/vision-map.png" 
                alt="Vision Map" 
                fill 
              />
            </div>
            
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="w-full relative bg-[#171717] px-6 py-16 md:py-28 lg:px-[120px] flex flex-col items-center overflow-hidden">
          
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-12 relative z-10">
            
            {/* Header Content */}
            <div className="w-full max-w-[1000px] flex flex-col justify-start items-start gap-4 pr-10">
              <div className="text-3xl md:text-[40px] font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-white">Why Attend </span>
                <span className="text-[#B86A2E]">VAULT2047?</span>
              </div>
              <div className="text-white/80 text-base md:text-lg font-normal leading-relaxed" style={{ fontFamily: "var(--font-ibm)" }}>
                Vault2047 is designed as a strategic platform to strengthen India&apos;s cyber-resilience ecosystem by bringing together policymakers, national security leaders, enterprises, innovators, and investors while focussing on:
              </div>
            </div>

            {/* Scrollable Cards Container */}
            <div className="w-full relative">
              <div className="w-full h-[600px] md:h-[700px] flex flex-col justify-start items-start gap-8 md:gap-11 overflow-y-auto hide-scrollbar pb-32 pt-2 pr-2">
                {[
                  { id: "01", title: "Establishing India as a Global Cyber Resilience Leader", desc: "Position India at the forefront of cyber defense, digital trust, and global cyber collaboration.", img: "/assets/feature-01.png" },
                  { id: "02", title: "Enabling Policy & Strategic Dialogue", desc: "Facilitate high-impact discussions through platforms like the Mumbai Accord, shaping cyber governance and national security frameworks.", img: "/assets/feature-02.png" },
                  { id: "03", title: "Accelerating Innovation & Investment", desc: "Connect startups, enterprises, and investors to drive cybersecurity innovation, adoption, and scale.", img: "/assets/feature-03.jpg" },
                  { id: "04", title: "Securing Critical Infrastructure", desc: "Address real-world challenges across BFSI, telecom, energy, healthcare, and public infrastructure.", img: "/assets/feature-04.png" },
                  { id: "05", title: "Strengthening Public–Private Collaboration", desc: "Bring together government bodies, enterprises, and global stakeholders to enable coordinated cyber strategies.", img: "/assets/feature-05.png" },
                  { id: "06", title: "Building a Future-Ready Cyber Workforce", desc: "Advance talent development, skilling, and ecosystem readiness to address global cyber talent gaps.", img: "/assets/feature-06.jpg" }
                ].map((item, index) => (
                  <div key={index} className="w-full p-4 md:p-8 bg-gradient-to-r from-transparent via-[#B86A2E]/10 to-[#B86A2E]/70 outline outline-1 outline-[#B86A2E]/40 flex flex-col lg:flex-row justify-start items-stretch gap-8 group hover:outline-[#B86A2E] transition-all bg-[#171717]">
                    
                    <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[280px] relative overflow-hidden">
                      <Image 
                        className="object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0" 
                        src={item.img} 
                        alt={item.title} 
                        fill
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-start gap-4 lg:gap-6 lg:pl-4 lg:pr-8 py-4">
                      <div 
                        className="text-4xl md:text-5xl font-bold transition-colors" 
                        style={{ fontFamily: "var(--font-orbitron)", WebkitTextStroke: "1px #B86A2E", color: "transparent" }}
                      >
                        {item.id}
                      </div>
                      <div className="flex flex-col justify-center items-start gap-3">
                        <div className="text-white text-2xl md:text-[28px] font-bold leading-snug" style={{ fontFamily: "var(--font-orbitron)" }}>
                          {item.title}
                        </div>
                        <div className="text-white/80 text-sm md:text-[15px] font-normal leading-relaxed" style={{ fontFamily: "var(--font-ibm)" }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Bottom Gradient Fade-out */}
              <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#171717] via-[#171717]/80 to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Decorative Top Right Arrows */}
          <div className="hidden lg:block absolute right-8 top-8 w-24 h-24 border-t-[16px] border-r-[16px] border-[#B86A2E]" />
          <div className="hidden lg:block absolute right-20 top-20 w-16 h-16 border-t-[16px] border-r-[16px] border-[#B86A2E]" />
          
        </div>

        {/* Community Stats Section */}
        <div className="w-full relative bg-[#040b0e] px-6 py-16 md:py-24 lg:px-[120px] flex flex-col items-center overflow-hidden">
          <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-12">
            
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="text-white text-3xl md:text-[40px] font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
                Connecting the Cybersecurity Community
              </div>
              <div className="text-white/80 text-base md:text-lg font-normal" style={{ fontFamily: "var(--font-ibm)" }}>
                Vault2047 is engineered to bring together the most influential stakeholders shaping cyber resilience.
              </div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { number: "2,000+", title: "Delegates", desc: "A curated audience of decision-makers across cyber, policy, and enterprise ecosystems" },
                { number: "100+", title: "Global Cyber Leaders & CISOs", desc: "Driving enterprise security, infrastructure resilience, and digital transformation" },
                { number: "100+", title: "Investors & Strategic Partners", desc: "Actively deploying capital across cybersecurity, AI, and deep tech" },
                { number: "500+", title: "Enterprise & Infrastructure Leaders", desc: "From BFSI, telecom, energy, healthcare, and government sectors" },
                { number: "100+", title: "Policymakers & Gov Officials", desc: "Shaping national cyber frameworks and global collaboration initiatives" },
                { number: "80+", title: "Global Speakers", desc: "Delivering insights across cyber-defense, AI, infrastructure, and policy" },
                { number: "25+", title: "Countries Represented", desc: "Enabling cross-border collaboration and global cyber partnerships" },
                { number: "50+", title: "Media & Association Partners", desc: "Amplifying India's cyber-resilience narrative worldwide" }
              ].map((item, index) => (
                <div key={index} className="w-full p-6 md:p-8 bg-[#B86A2E]/5 outline outline-1 outline-offset-[-0.5px] outline-[#B86A2E]/30 flex flex-col justify-start items-start gap-8 md:gap-11 hover:bg-[#B86A2E]/10 transition-colors">
                  
                  <div className="w-full opacity-50 flex justify-between items-center">
                    <div className="text-white/80 text-sm md:text-base font-semibold tracking-[3.2px]" style={{ fontFamily: "var(--font-ibm)" }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-start items-start gap-4">
                    <div className="text-xl font-semibold leading-tight" style={{ fontFamily: "var(--font-ibm)" }}>
                      <span className="text-[#B86A2E]">{item.number} </span>
                      <br className="hidden lg:block" />
                      <span className="text-white">{item.title}</span>
                    </div>
                    <div className="text-white/70 text-sm md:text-base font-normal leading-relaxed" style={{ fontFamily: "var(--font-ibm)" }}>
                      {item.desc}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            <div className="w-full flex justify-center items-center mt-4">
              <button className="w-full sm:w-72 px-6 py-4 outline outline-1 outline-offset-[-1px] outline-[#0D6665] text-white/70 hover:text-white hover:bg-[#0D6665]/20 transition-colors text-base font-medium" style={{ fontFamily: "var(--font-ibm)" }}>
                Join the Ecosystem
              </button>
            </div>

          </div>
        </div>

        {/* Speakers Section - Using Shared Component (Full Width) */}
        <SpeakersSection />

        {/* Final CTA Section */}
        <div className="w-full relative min-h-[500px] md:h-[710px] bg-[#040b0e] flex justify-center items-center px-4 md:px-20 py-10 md:py-10 lg:py-10">
          
          {/* Wrapper for Card and Outside Decorative Elements */}
          <div className="w-full max-w-[1200px] relative">
            
            {/* Top Left Bracket */}
            <div className="hidden lg:block absolute -left-8 -top-8 w-24 h-24 border-t-[24px] border-l-[24px] border-[#B86A2E] z-0" />
            
            {/* Bottom Right Bracket */}
            <div className="hidden lg:block absolute -right-8 -bottom-8 w-24 h-24 border-b-[24px] border-r-[24px] border-[#B86A2E] z-0" />

            {/* Main CTA Card */}
            <div className="w-full relative z-10 bg-[#171717] flex flex-col justify-center items-center overflow-hidden border border-[#0D6665]/20 shadow-2xl">
              
              {/* Image constrained inside the card */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/assets/attend-cta-bg.jpg"
                  alt="CTA Background"
                  fill
                  className="object-cover opacity-30 mix-blend-screen grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#040b0e]/80 via-[#0D6665]/50 to-[#0D6665]/90" />
              </div>

              {/* Content Box */}
              <div className="w-full px-8 py-16 md:py-24 relative z-10 flex flex-col justify-center items-center gap-11">
                
                <div className="flex flex-col justify-start items-center gap-6">
                  
                  {/* Join Us Badge */}
                  <div className="inline-flex justify-center items-center gap-4">
                    <div className="w-8 md:w-11 h-0 border-t-2 border-[#0D6665]" />
                    <div className="text-white text-base md:text-[15px] font-bold uppercase tracking-[2px]" style={{ fontFamily: "var(--font-ibm)" }}>
                      Join us
                    </div>
                    <div className="w-8 md:w-11 h-0 border-t-2 border-[#0D6665]" />
                  </div>

                  {/* Headlines */}
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight" style={{ fontFamily: "var(--font-orbitron)" }}>
                      <span className="text-white">Ready to be Part of India&apos;s <br className="hidden md:block" /></span>
                      <span className="text-[#B86A2E]">Cyber-Resilience</span>
                      <span className="text-white"> Movement?</span>
                    </div>
                  </div>
                  
                  <div className="text-center text-white/90 text-sm md:text-base font-normal max-w-[650px] leading-relaxed" style={{ fontFamily: "var(--font-ibm)" }}>
                    Join Vault2047 and connect with the leaders, innovators, and institutions shaping the future of digital security.
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full sm:w-[220px] h-[52px] bg-[#B86A2E] text-white text-[15px] font-semibold hover:bg-[#9a5624] transition-colors shadow-lg" style={{ fontFamily: "var(--font-ibm)" }}>
                  Enquire Now
                </button>
                
              </div>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
}

