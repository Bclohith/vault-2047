"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CollaborateSubnav() {
  const pathname = usePathname() || "";

  const navItems = [
    { name: "Overview", href: "/collaborate" },
    { name: "Apply to Sponsor", href: "/apply-to-sponsor" },
    { name: "Apply to Exhibit", href: "/apply-to-exhibit" },
    { name: "Be a Media partner", href: "/be-a-media-partner" },
    { name: "Be an Association partner", href: "/be-an-association-partner" },
    { name: "Download Assets", href: "/download-assets" }
  ];

  return (
    <div className="w-full bg-[#040b0e] border-b border-white/10 sticky top-20 md:top-24 z-40 flex justify-center items-center overflow-x-auto hide-scrollbar">
      <div className="flex justify-center items-center gap-2 md:gap-8 min-w-max px-6">
        {navItems.map((item, i) => {
          const isActive = pathname === item.href;
          return (
            <Link key={i} href={item.href} className={`px-4 py-4 border-b-4 flex justify-start items-center gap-1.5 cursor-pointer hover:bg-white/5 transition-colors group ${isActive ? 'border-teal-500' : 'border-transparent hover:border-teal-500/50'}`}>
              <div className={`text-sm font-semibold font-['IBM_Plex_Sans'] uppercase tracking-tight transition-colors ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
