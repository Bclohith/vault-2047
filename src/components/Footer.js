import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] px-6 py-16 lg:px-[120px] lg:py-[72px] flex flex-col items-center border-t border-white/5">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
        
        {/* Column 1: Logo & Tagline */}
        <div className="flex flex-col items-start gap-6 lg:w-1/3">
          <div className="relative w-48 h-20 md:w-56 md:h-24">
            <Image 
              src="/assets/footer-logo.svg" 
              alt="Vault 2047 Logo" 
              fill 
              className="object-contain object-left" 
            />
          </div>
          <p 
            className="text-white text-lg md:text-xl font-normal leading-snug max-w-[320px]"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Building the World’s Cyber-Resilience Infrastructure in India
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-start gap-4 lg:w-1/6">
          <h4 
            className="text-white/50 text-lg font-medium tracking-wide uppercase"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3">
            <Link href="/get-your-pass" className="text-white text-sm font-semibold hover:text-[#B86A2E] transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>Get Your Pass</Link>
            <Link href="/speakers" className="text-white text-sm font-semibold hover:text-[#B86A2E] transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>Speakers</Link>
            <Link href="/sponsors" className="text-white text-sm font-semibold hover:text-[#B86A2E] transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>Sponsors</Link>
          </nav>
        </div>

        {/* Column 3: Get Involved */}
        <div className="flex flex-col items-start gap-4 lg:w-1/6">
          <h4 
            className="text-white/50 text-lg font-medium tracking-wide uppercase"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Get Involved
          </h4>
          <nav className="flex flex-col gap-3">
            <Link href="/apply-to-sponsor" className="text-white text-sm font-semibold hover:text-[#B86A2E] transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>Become a Sponsor</Link>
            <Link href="/apply-to-exhibit" className="text-white text-sm font-semibold hover:text-[#B86A2E] transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>Exhibit</Link>
            <Link href="/pitch-competition" className="text-white text-sm font-semibold hover:text-[#B86A2E] transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>Pitch Competition</Link>
          </nav>
        </div>

        {/* Column 4: Contact & Social */}
        <div className="flex flex-col items-start gap-4 lg:w-1/4">
          <h4 
            className="text-white/50 text-lg font-medium tracking-wide uppercase"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Contact
          </h4>
          <a href="mailto:info@Vault2047.com" className="text-white text-sm font-semibold hover:text-[#B86A2E] transition-colors" style={{ fontFamily: "var(--font-ibm)" }}>
            info@Vault2047.com
          </a>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center justify-center" aria-label="X (Twitter)">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center justify-center" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center justify-center" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar / Copyright */}
      <div className="w-full mt-16 pt-8 border-t border-white/10 flex justify-center items-center">
        <p className="text-white/50 text-sm md:text-base font-bold text-center" style={{ fontFamily: "var(--font-ibm)" }}>
          &copy; 2026 VAULT2047 | Organized by Trescon
        </p>
      </div>
    </footer>
  );
}
