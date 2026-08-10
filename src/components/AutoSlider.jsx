'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AutoSlider() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval;
    
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          
          // If we reached the end, go back to start smoothly
          if (scrollContainer.scrollLeft >= maxScroll - 10) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll right by roughly enough to trigger the next snap point.
            // Using clientWidth/2 ensures we push into the next card reliably so snap takes over
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 3500); // 3.5 seconds per slide
    };

    startScroll();

    // Pause on hover so users can inspect images
    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => startScroll();

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    // Pause on touch for mobile manual swiping
    scrollContainer.addEventListener('touchstart', handleMouseEnter, { passive: true });
    scrollContainer.addEventListener('touchend', handleMouseLeave, { passive: true });

    return () => {
      clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('touchstart', handleMouseEnter);
        scrollContainer.removeEventListener('touchend', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="w-full relative mt-12 overflow-hidden">
      <div 
        ref={scrollRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 [&::-webkit-scrollbar]:hidden"
        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <div className="flex-none w-[85vw] md:w-[400px] h-[370px] relative overflow-hidden group snap-center outline outline-1 outline-white/10">
          <Image src="/Vault-2047/assets/vision/slider/slide1.jpg" alt="Slide 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex-none w-[85vw] md:w-[400px] h-[370px] relative overflow-hidden group snap-center outline outline-1 outline-white/10">
          <Image src="/Vault-2047/assets/vision/slider/slide2.jpg" alt="Slide 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex-none w-[85vw] md:w-[400px] h-[370px] relative overflow-hidden group snap-center outline outline-1 outline-white/10">
          <Image src="/Vault-2047/assets/vision/slider/slide3.jpg" alt="Slide 3" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex-none w-[85vw] md:w-[400px] h-[370px] relative overflow-hidden group snap-center outline outline-1 outline-white/10">
          <Image src="/Vault-2047/assets/vision/slider/slide4.jpg" alt="Slide 4" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </div>
  );
}