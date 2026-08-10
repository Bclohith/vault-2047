import React from 'react';

export const metadata = {
  title: "Apply to Sponsor - Vault 2047",
  description: "Apply to sponsor Vault 2047 and anchor India's cyber-resilience ecosystem.",
};

export default function ApplyToSponsorPage() {
  const benefits = [
    {
      img: 'sponsor-b1.png',
      title: 'Command the Narrative',
      desc: 'Take center stage with keynote sessions, panel discussions, fireside chats, and executive interviews — positioning your brand as a thought leader in cyber-resilience.'
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
      <main className="flex-grow flex flex-col items-center justify-start">
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch min-h-[400px] md:min-h-[500px] bg-black/60 flex flex-col justify-center items-center overflow-hidden py-16">
          <div className="absolute inset-0 z-0">
            <img src="/Vault-2047/assets/sponsor-hero.jpg" className="w-full h-full object-cover mix-blend-screen opacity-40" alt="Audience" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 to-[#0a0a0a]" />
          </div>
          
          <div className="w-full max-w-[1200px] px-6 relative z-10 flex flex-col justify-center items-center gap-6">
            <div className="text-center text-white/80 text-sm md:text-base font-semibold font-['IBM_Plex_Sans'] uppercase tracking-[0.15em]">
              Collaborate / Apply to Sponsor
            </div>
            
            <h1 className="max-w-[900px] text-center text-white text-3xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] leading-tight">
              Anchor India’s Cyber-Resilience Ecosystem
            </h1>
            
            <p className="max-w-[800px] text-center text-white/90 text-sm md:text-lg font-semibold font-['IBM_Plex_Sans'] leading-relaxed">
              Position Your Brand at the Center of Global Cyber Leadership
            </p>
          </div>
        </div>

        {/* Why Sponsor Section */}
        <div className="w-full px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-gray-950 flex justify-center items-center overflow-hidden border-b border-white/5">
          <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16">
            
            {/* Video Placeholder */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-[536px] aspect-video relative bg-black/70 overflow-hidden outline outline-1 outline-white/20 group cursor-pointer">
                <img src="/Vault-2047/assets/sponsor-hero.jpg" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500" alt="Video thumbnail" />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-16 h-12 bg-transparent outline outline-2 outline-white flex justify-center items-center hover:bg-white/10 transition-colors">
                    <img src="/Vault-2047/assets/play-icon.svg" className="w-6 h-6 brightness-200" alt="Play" />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-6">
              <h2 className="text-white text-3xl md:text-4xl font-bold font-['Orbitron'] leading-snug">
                Why Sponsor <span className="text-[#B86A2E]">VAULT2047</span>
              </h2>
              <div className="flex flex-col gap-4 text-white/80 text-base md:text-lg font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                <p>
                  Vault2047 is not just an event; it is a strategic platform designed to connect your organisation with decision-makers shaping India’s cyber future.
                </p>
                <p>
                  Our sponsorship opportunities are built to deliver visibility, influence, and real business outcomes.
                </p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Benefits Carousel Section */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#0a0a0a] flex flex-col justify-center items-center gap-12 md:gap-16 overflow-hidden">
          
          <div className="text-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-[42px] font-bold font-['Orbitron'] leading-snug max-w-[900px] mx-auto">
              Sponsoring at <span className="text-[#B86A2E]">VAULT2047</span> Provides a Host of Benefits
            </h2>
          </div>

          <div className="w-full max-w-[1440px] flex items-center justify-center gap-4 lg:gap-8 relative">
            
            {/* Left Arrow */}
            <button className="hidden lg:flex w-16 h-24 bg-zinc-800/50 hover:bg-[#B86A2E]/80 border border-white/20 backdrop-blur-md justify-center items-center transition-colors shrink-0 z-10 group">
              <img src="/Vault-2047/assets/arrow-icon.svg" className="w-8 h-8 rotate-180 brightness-200 opacity-70 group-hover:opacity-100 transition-opacity" alt="Previous" />
            </button>
            
            {/* Carousel Container */}
            <div className="flex w-full overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="w-[300px] sm:w-[350px] shrink-0 snap-start flex flex-col outline outline-1 outline-offset-[-0.50px] outline-[#B86A2E]/30 bg-white/5 group hover:outline-[#B86A2E] transition-all duration-300">
                  <div className="w-full h-48 relative overflow-hidden">
                    <img src={`/assets/${benefit.img}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={benefit.title} />
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
            <button className="hidden lg:flex w-16 h-24 bg-zinc-800/50 hover:bg-[#B86A2E]/80 border border-white/20 backdrop-blur-md justify-center items-center transition-colors shrink-0 z-10 group">
              <img src="/Vault-2047/assets/arrow-icon.svg" className="w-8 h-8 brightness-200 opacity-70 group-hover:opacity-100 transition-opacity" alt="Next" />
            </button>
            
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="w-full relative py-24 md:py-32 bg-gray-950 flex justify-center items-center overflow-hidden">
          <div className="w-full max-w-[1000px] relative px-6 md:px-0">
            {/* Top Left Bracket */}
            <div className="absolute -top-6 -left-2 md:-top-12 md:-left-12 w-16 h-16 md:w-32 md:h-32 border-t-[16px] md:border-t-[24px] border-l-[16px] md:border-l-[24px] border-[#9a5624] z-0" />
            {/* Bottom Right Bracket */}
            <div className="absolute -bottom-6 -right-2 md:-bottom-12 md:-right-12 w-16 h-16 md:w-32 md:h-32 border-b-[16px] md:border-b-[24px] border-r-[16px] md:border-r-[24px] border-[#9a5624] z-0" />
            
            {/* Inner Card */}
            <div className="w-full relative bg-[#073635] flex flex-col justify-center items-center py-16 md:py-20 lg:p-20 gap-10 overflow-hidden shadow-2xl z-10">
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
                <span className="text-white text-sm md:text-base font-medium font-['IBM_Plex_Sans']">Apply to Sponsor</span>
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
