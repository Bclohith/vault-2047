import React from "react";
import Image from "next/image";

export default function ExperienceSection() {
  const cards = [
    {
      id: "01",
      title: "Global Plenary: Dialogues from the Vault 2047",
      description: "High-level keynotes and strategic discussions shaping the future of global cyber resilience.",
      imgSrc: "/assets/experience-cards/card-1.png",
      width: "lg:w-[32%]",
      aspect: "aspect-[4/5] lg:aspect-square"
    },
    {
      id: "02",
      title: "The Mumbai Accord Roundtables",
      description: "Closed-door policy and defense collaboration",
      imgSrc: "/assets/experience-cards/card-2.png",
      width: "lg:w-[32%]",
      aspect: "aspect-[4/5] lg:aspect-square"
    },
    {
      id: "03",
      title: "Sovereign Shield Pavilion",
      description: "Showcasing national cyber capabilities and sovereign digital defense frameworks.",
      imgSrc: "/assets/experience-cards/card-3.png",
      width: "lg:w-[32%]",
      aspect: "aspect-[4/5] lg:aspect-square"
    },
    {
      id: "04",
      title: "The Cyber Foundry",
      description: "Interactive workshops and hands-on cyber defense simulations.",
      imgSrc: "/assets/experience-cards/card-4.png",
      width: "lg:w-[38.5%]",
      aspect: "aspect-[4/5] lg:aspect-[16/10]"
    },
    {
      id: "05",
      title: "Cyber-Powered Skills Pods",
      description: "Next-generation training and certification for cyber professionals.",
      imgSrc: "/assets/experience-cards/card-5.png",
      width: "lg:w-[59.5%]",
      aspect: "aspect-[4/5] lg:aspect-[24/10]"
    },
    {
      id: "06",
      title: "Hackathon Arena",
      description: "Competitive coding and threat resolution challenges.",
      imgSrc: "/assets/experience-cards/card-6.png",
      width: "lg:w-[59.5%]",
      aspect: "aspect-[4/5] lg:aspect-[24/10]"
    },
    {
      id: "07",
      title: "Sector Alleys & Exhibition",
      description: "Explore the latest disruptive technologies and enterprise solutions.",
      imgSrc: "/assets/experience-cards/card-7.png",
      width: "lg:w-[38.5%]",
      aspect: "aspect-[4/5] lg:aspect-[16/10]"
    }
  ];

  return (
    <section className="w-full relative bg-[#0B0A09] px-6 py-16 lg:px-[120px] lg:py-[100px] flex flex-col items-center overflow-hidden">
      
      {/* Background Custom Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(184, 106, 46, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(184, 106, 46, 0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "center center"
        }}
      />

      <div className="w-full max-w-[1440px] relative z-10 flex flex-col gap-10 md:gap-14">
        
        {/* Header Block */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-[#0D6665]" />
            <h3 
              className="text-[#0D6665] text-sm md:text-base font-bold tracking-[3px] uppercase"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              EXPERIENCE THE EVENT
            </h3>
          </div>
          <h2 
            className="text-white text-3xl md:text-[40px] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            A Cyber Ecosystem <span className="text-[#B86A2E]">In Action</span>
          </h2>
        </div>

        {/* Masonry-Style Flex Grid */}
        <div className="w-full flex flex-col gap-6">
          
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-6 w-full justify-between">
            {cards.slice(0, 3).map((card, idx) => (
              <ExperienceCard key={idx} card={card} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-6 w-full justify-between">
            {cards.slice(3, 5).map((card, idx) => (
              <ExperienceCard key={idx} card={card} />
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row gap-6 w-full justify-between">
            {cards.slice(5, 7).map((card, idx) => (
              <ExperienceCard key={idx} card={card} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function ExperienceCard({ card }) {
  return (
    <div 
      className={`relative w-full ${card.width} ${card.aspect} group overflow-hidden bg-[#1A1A1A] border border-white/5 hover:border-[#B86A2E]/50 transition-colors duration-500 cursor-pointer`}
    >
      {/* Background Image */}
      <Image
        src={card.imgSrc}
        alt={card.title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 pointer-events-none opacity-80 group-hover:opacity-100 group-hover:bg-black/40 transition-all duration-500" />

      {/* Numbering at top left */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8">
        <span 
          className="text-white/40 text-xs md:text-sm font-semibold tracking-[4px]" 
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          {card.id.split('').join(' ')}
        </span>
      </div>

      {/* Content at bottom left */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 pr-6 md:pr-12 flex flex-col gap-2 md:gap-3 transform translate-y-6 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <h4 
          className="text-white text-xl md:text-2xl font-bold leading-snug"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          {card.title}
        </h4>
        <p 
          className="text-[#CDCDCD] text-xs md:text-sm font-normal leading-[1.6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}
