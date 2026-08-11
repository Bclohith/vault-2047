"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname() || '';

  const navLinks = [
    { name: "Attend", href: "/attend" },
    { name: "Agenda", href: "/agenda" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Collaborate", href: "/collaborate" },
    { name: "Startups", href: "/startups" },
    { name: "Knowledge hub", href: "/knowledge-hub" },
  ];

  const isLinkActive = (link, currentPath) => {
    let active = currentPath === link.href;
    if (link.name === "Ecosystem") {
      active = active || ["/sponsors", "/exhibitors", "/media-partners", "/association-partners"].includes(currentPath);
    } else if (link.name === "Attend") {
      active = active || ["/create-account", "/get-your-pass"].includes(currentPath);
    } else if (link.name === "Startups") {
      active = active || ["/attend-startup", "/exhibit-startup", "/pitch-competition"].includes(currentPath);
    } else if (link.name === "Collaborate") {
      active = active || ["/apply-to-sponsor", "/apply-to-exhibit", "/be-a-media-partner", "/be-an-association-partner", "/download-assets"].includes(currentPath);
    }
    return active;
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#171717] border-b border-white/10">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-4 md:px-16 flex justify-between items-center h-20 md:h-24">
        
        {/* Logo */}
        <div className="relative w-32 h-10 md:w-36 md:h-12 flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image 
              src="/Vault-2047/assets/logo.svg" 
              alt="Vault 2047 Logo" 
              fill 
              className="object-contain object-left" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link, index) => {
            const isActive = isLinkActive(link, pathname);
            return (
              <Link 
                key={index}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold tracking-tight transition-colors border-b-2 ${
                  isActive 
                    ? "text-white border-[#B86A2E]" 
                    : "text-white/70 border-transparent hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            className="h-10 px-6 bg-white/10 border border-white/20 text-white text-sm font-semibold uppercase tracking-tight hover:bg-white/20 transition-colors"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Sign IN
          </button>
          <button 
            className="h-10 px-6 bg-[#0D6665] text-white text-sm font-semibold uppercase tracking-tight hover:bg-[#094d4d] transition-colors"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Apply as delegate
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             {isMobileMenuOpen 
               ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             }
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#171717] border-b border-white/10 flex flex-col shadow-xl">
          {navLinks.map((link, index) => {
            const isActive = isLinkActive(link, pathname);
            return (
              <Link 
                key={index}
                href={link.href}
                className={`px-6 py-4 text-base font-semibold border-b border-white/5 transition-colors ${
                  isActive ? "text-[#B86A2E]" : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                style={{ fontFamily: "var(--font-ibm)" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex flex-col gap-3 p-6">
            <button 
              className="w-full h-12 bg-white/10 border border-white/20 text-white text-sm font-semibold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Sign IN
            </button>
            <button 
              className="w-full h-12 bg-[#0D6665] text-white text-sm font-semibold uppercase tracking-tight"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Apply as delegate
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
