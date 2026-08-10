import React from "react";
import Image from "next/image";

export default function BrandsSection() {
  const brands = [
    { src: "/Vault-2047/assets/brands/brand-1.png", alt: "Brand 1" },
    { src: "/Vault-2047/assets/brands/brand-2.png", alt: "Brand 2" },
    { src: "/Vault-2047/assets/brands/brand-3.png", alt: "Brand 3" },
    { src: "/Vault-2047/assets/brands/brand-4.png", alt: "Brand 4" },
    { src: "/Vault-2047/assets/brands/brand-5.png", alt: "Brand 5" },
    { src: "/Vault-2047/assets/brands/brand-6.png", alt: "Brand 6" },
    { src: "/Vault-2047/assets/brands/brand-7.png", alt: "Brand 7" },
    { src: "/Vault-2047/assets/brands/brand-8.png", alt: "Brand 8" },
    { src: "/Vault-2047/assets/brands/brand-9.png", alt: "Brand 9" },
    { src: "/Vault-2047/assets/brands/brand-10.png", alt: "Brand 10" },
    { src: "/Vault-2047/assets/brands/brand-11.png", alt: "Brand 11" },
  ];

  // We duplicate the array to create a seamless infinite scrolling marquee
  const doubledBrands = [...brands, ...brands];

  return (
    <section className="w-full relative px-6 py-20 lg:px-[120px] lg:py-[112px] flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#020509] via-transparent via-55% to-[#020509]">
      
      <div className="w-full max-w-[1440px] relative z-10 flex flex-col items-start gap-10 md:gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-3 w-full items-start">
          <div className="flex items-center gap-4">
            <div className="w-9 h-[4px] bg-[#0D6665]" />
            <h3 
              className="text-[#0D6665] text-xl md:text-2xl font-semibold uppercase tracking-[4.8px]"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Trusted By
            </h3>
          </div>
          <h2 
            className="text-white text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Brands We've <span className="text-[#B86A2E]">Worked With.</span>
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="w-full overflow-hidden relative border-y border-white/5 py-12 md:py-16">
          
          {/* Fading edges for marquee effect */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#020509] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#020509] to-transparent z-10 pointer-events-none" />

          {/* Marquee Content */}
          <div className="flex w-max animate-marquee">
            {doubledBrands.map((brand, index) => (
              <div 
                key={index} 
                className="w-48 h-32 md:w-56 md:h-36 flex items-center justify-center bg-white border border-[#1a1a1a] cursor-default"
              >
                <div className="relative w-3/4 h-1/2">
                  <Image 
                    src={brand.src} 
                    alt={brand.alt} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
