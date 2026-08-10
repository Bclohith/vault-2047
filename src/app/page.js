import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter";
import EventFocusSection from "../components/EventFocusSection";
import SpeakersSection from "../components/SpeakersSection";
import CoreThematicAreasSection from "../components/CoreThematicAreasSection";
import WhoYouWillMeetSection from "../components/WhoYouWillMeetSection";
import ExperienceSection from "../components/ExperienceSection";
import UpdatesSection from "../components/UpdatesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BrandsSection from "../components/BrandsSection";
import OrganiserSection from "../components/OrganiserSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";

export default function Home() {  const stats = [
    { number: "2000+", label: "Attendees" },
    { number: "100+", label: "Exhibitors" },
    { number: "50+", label: "Global Cyber Leaders & Speakers" },
    { number: "100+", label: "Investors & Funds" },
    { number: "25+", label: "Countries Represented" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      
      {/* Main Hero Section */}
      <main className="w-full h-auto min-h-[500px] md:min-h-[600px] lg:min-h-[650px] py-16 md:py-24 relative flex flex-col items-center justify-center overflow-hidden font-sans">
        
        {/* Interactive 3D Globe Grid Background */}
        <HeroBackground />

        {/* Decorative L-Brackets */}
        <Image 
          src="/assets/vector-1.svg"
          alt="Bracket Left"
          width={181}
          height={201}
          className="absolute z-10 bottom-[10%] md:bottom-[20%] left-[2%] md:left-[10%] lg:left-[15%] w-24 sm:w-32 md:w-40 lg:w-[181px]"
        />
        <Image 
          src="/assets/vector.svg"
          alt="Bracket Right"
          width={199}
          height={220}
          className="absolute z-10 top-[10%] md:top-[15%] right-[2%] md:right-[10%] lg:right-[15%] w-24 sm:w-32 md:w-40 lg:w-[199px]"
        />

        {/* Content wrapper */}
        <div className="relative z-20 flex flex-col items-center justify-center gap-4 md:gap-[28px] w-full max-w-[1010px] px-4 md:px-8 mt-12 md:mt-0">
          
          {/* Mumbai India Date */}
          <div className="flex items-start justify-center gap-2 md:gap-[11px] text-[#b86a2e] uppercase tracking-[0.05em] md:tracking-[0.09em] font-medium text-xs md:text-[16px]">
            <div>Mumbai, India</div>
            <div>•</div>
            <div>September 2026</div>
          </div>

          {/* Heading */}
          <div 
            className="flex flex-col items-center gap-1 md:gap-[3px] text-3xl sm:text-[40px] md:text-[52px] font-semibold tracking-tight md:tracking-[-0.04em] leading-[1.15] text-center text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <div>Building the</div>
            <div>
              World&apos;s <span className="text-[#b86a2e]">Cyber-</span><br className="md:hidden" />
              <span className="text-[#b86a2e]">Resilience</span>
            </div>
            <div>Infrastructure in India</div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-[11px] text-xs md:text-[14.5px] font-medium mt-4 md:mt-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#b86a2e] text-white flex items-center justify-center py-3 md:py-[16px] px-6 md:px-[22px] hover:bg-[#9a5624] transition-colors uppercase font-bold tracking-wider">
              Apply as Delegate
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white flex items-center justify-center py-3 md:py-[16px] px-6 md:px-[22px] hover:bg-white/10 transition-colors uppercase font-bold tracking-wider">
              Exhibit
            </button>
          </div>

        </div>
      </main>

      {/* Video / Audience Section */}
      <section className="w-full relative flex items-start justify-center px-4 md:px-6 py-8 md:py-12 lg:px-[120px] lg:pt-[40px] lg:pb-[100px] overflow-hidden"
               style={{ background: "linear-gradient(180deg, rgba(2,15,15,0) 0%, #020f0f 100%)" }}>
        
        {/* Interactive Background Grid */}
        <HeroBackground />

        {/* Video Thumbnail Wrapper */}
        <div className="relative z-10 w-full max-w-[1200px] aspect-video group cursor-pointer">
          <div className="absolute inset-0 overflow-hidden shadow-2xl rounded-sm">
            <Image
              src="/assets/audience.jpg"
              alt="Audience"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay to make the play button pop */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
          </div>

          {/* Play Button */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xl"
                  style={{ background: "linear-gradient(136deg, #b86a2e 0%, #391f0a 100%)" }}>
            <Image
              src="/assets/mdi_play.svg"
              alt="Play"
              width={48}
              height={48}
              className="ml-1 md:ml-2 w-8 h-8 md:w-12 md:h-12" 
            />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full relative flex items-start justify-center px-6 py-12 lg:px-[120px] lg:py-[100px] overflow-hidden"
               style={{ background: "linear-gradient(180deg, rgba(2,15,15,0) 0%, #020f0f 100%)" }}>
        
        {/* Background Grid overlays to match the 'header/object-icon' layout */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('/Vault-2047/assets/grid.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Stats List Container */}
        <div className="relative z-10 w-full max-w-[1440px] flex flex-col md:flex-row items-stretch justify-center flex-wrap md:flex-nowrap">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex-1 min-w-[200px] md:min-w-0 flex flex-col items-start justify-start p-6 md:p-8 gap-4 border border-[#b86a2e]/20 bg-white/5 backdrop-blur-md"
              style={{
                // Prevent double borders on adjacent items
                borderLeftWidth: index === 0 ? '1px' : '0px',
                // On mobile we stack them, so restore borders
                borderTopWidth: index === 0 ? '1px' : '0px',
              }}
            >
              <div 
                className="text-[36px] md:text-[44px] font-[900] leading-none"
                style={{ 
                  fontFamily: "var(--font-orbitron)",
                  background: "linear-gradient(180deg, #4dc6c5 0%, #020f0f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                <AnimatedCounter end={parseInt(stat.number)} suffix="+" />
              </div>
              <div className="text-white text-sm md:text-base font-sans" style={{ fontFamily: "var(--font-ibm)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Focus Section */}
      <EventFocusSection />

      {/* Speakers Section */}
      <SpeakersSection />

      {/* Core Thematic Areas Section */}
      <CoreThematicAreasSection />

      {/* Who You Will Meet Section */}
      <WhoYouWillMeetSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Updates Section */}
      <UpdatesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Brands Section */}
      <BrandsSection />

      {/* Organiser Section */}
      <OrganiserSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

    </div>
  );
}
