import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Canvas3DBackground from '../../components/Canvas3DBackground';

export const metadata = {
  title: "Knowledge Hub - Vault 2047",
  description: "Knowledge Hub - Vault 2047",
};

export default function KnowledgeHubPage() {
  const categories = [
    "Artificial Intelligence", "BFSI", "Blockchain", "CIO", "Cloud", 
    "FinTech", "In The News", "Other", "Podcast", "Sustainability", "Web3"
  ];

  const articles = [
    {
      image: "/Vault-2047/assets/knowledge-hub/629db90ca46fc3eab851c122fba390d997caa528 (1).jpg",
      title: "Trescon Marks Ten Years as One of MENA Region's Mos...",
      date: "February 24, 2026",
      desc: "Dubai, UAE. Over the past decade, Trescon has evolved from a startup founded in Bengaluru to..."
    },
    {
      image: "/Vault-2047/assets/knowledge-hub/7f025edc163e9f9507de723609a932b8f282a797 (1).jpg",
      title: "Trescon Marks Ten Years as One of MENA Region's Mos...",
      date: "February 24, 2026",
      desc: "Dubai, UAE. Over the past decade, Trescon has evolved from a startup founded in Bengaluru to..."
    },
    {
      image: "/Vault-2047/assets/knowledge-hub/580c578d09650364a47d8f756dc946a323bc83d5 (1).jpg",
      title: "Trescon Marks Ten Years as One of MENA Region's Mos...",
      date: "February 24, 2026",
      desc: "Dubai, UAE. Over the past decade, Trescon has evolved from a startup founded in Bengaluru to..."
    },
    {
      image: "/Vault-2047/assets/knowledge-hub/629db90ca46fc3eab851c122fba390d997caa528 (1).jpg",
      title: "Trescon Marks Ten Years as One of MENA Region's Mos...",
      date: "February 24, 2026",
      desc: "Dubai, UAE. Over the past decade, Trescon has evolved from a startup founded in Bengaluru to..."
    },
    {
      image: "/Vault-2047/assets/knowledge-hub/7f025edc163e9f9507de723609a932b8f282a797 (1).jpg",
      title: "Trescon Marks Ten Years as One of MENA Region's Mos...",
      date: "February 24, 2026",
      desc: "Dubai, UAE. Over the past decade, Trescon has evolved from a startup founded in Bengaluru to..."
    },
    {
      image: "/Vault-2047/assets/knowledge-hub/580c578d09650364a47d8f756dc946a323bc83d5 (1).jpg",
      title: "Trescon Marks Ten Years as One of MENA Region's Mos...",
      date: "February 24, 2026",
      desc: "Dubai, UAE. Over the past decade, Trescon has evolved from a startup founded in Bengaluru to..."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#040b0e]">
      <main className="flex-grow flex flex-col items-center justify-start pt-20 md:pt-24">
        
        {/* Hero Section */}
        <div className="w-full relative self-stretch h-[320px] md:h-[400px] px-6 lg:px-32 bg-[#040b0e] inline-flex flex-col justify-center items-center gap-5 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0 bg-black">
             <Canvas3DBackground />
             <div className="absolute inset-0 bg-gradient-to-t from-[#040b0e] to-transparent z-10 pointer-events-none" />
          </div>

          <div className="relative z-10 w-full max-w-[1184px] text-center justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans'] uppercase tracking-widest">
            Knowledge Hub
          </div>
          <div className="relative z-10 w-full inline-flex justify-center items-center gap-2.5">
            <div className="w-full max-w-[1073.10px] text-center justify-start text-white text-4xl md:text-5xl font-bold font-['Orbitron'] drop-shadow-[0_0_15px_rgba(13,102,101,0.5)]">
              Knowledge Hub
            </div>
          </div>
        </div>

        {/* Search & Articles Section */}
        <div className="w-full bg-gray-950 flex flex-col items-center justify-start px-6 lg:px-28 py-16 gap-12 overflow-hidden">
          
          <div className="w-full max-w-[1200px] flex flex-col items-start gap-12">
            
            {/* Search Bar & Categories */}
            <div className="w-full flex flex-col items-center gap-8">
              
              <div className="w-full md:w-auto flex flex-col sm:flex-row justify-center items-center gap-3">
                <div className="w-full sm:w-[502px] px-6 py-4 bg-white/5 outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-start items-center gap-2.5">
                  <div className="size-6 relative overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search articles" 
                    className="flex-1 bg-transparent border-none outline-none text-white text-sm font-normal font-['IBM_Plex_Sans'] placeholder:text-white/50"
                  />
                </div>
                <button className="w-full sm:w-auto px-8 py-4 bg-[#B86A2E] hover:bg-[#9a5624] transition-colors flex justify-center items-center">
                  <span className="text-white text-base font-medium font-['IBM_Plex_Sans']">Search</span>
                </button>
              </div>

              <div className="w-full flex flex-row justify-center items-center gap-4 md:gap-6 flex-wrap">
                <div className="px-4 py-2 bg-[#0D6665] flex justify-start items-center gap-2 cursor-pointer">
                  <div className="size-4 relative overflow-hidden flex-shrink-0 flex items-center justify-center text-white">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                  </div>
                  <span className="text-white text-sm md:text-base font-bold font-['IBM_Plex_Sans']">All</span>
                </div>
                {categories.map((cat, i) => (
                  <div key={i} className="justify-start text-white/80 hover:text-white transition-colors cursor-pointer text-sm md:text-base font-normal font-['IBM_Plex_Sans']">
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((item, i) => (
                <div key={i} className="w-full outline outline-1 outline-[#B86A2E]/30 flex flex-col justify-start items-start overflow-hidden group cursor-pointer hover:outline-[#B86A2E] transition-all bg-black/20">
                  <div className="w-full aspect-[2/1] relative overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="w-full p-8 relative flex flex-col justify-start items-start gap-6 overflow-hidden">
                    <div className="size-64 left-[184px] top-[150px] absolute opacity-30 bg-[#0D6665] rounded-full blur-[52px] pointer-events-none" />
                    <div className="self-stretch flex justify-between items-start gap-2.5">
                      <div className="flex-1 justify-start text-[#0D6665] text-xs font-semibold font-['IBM_Plex_Sans'] uppercase">Press Release</div>
                      <div className="justify-start text-[#0D6665] text-xs font-semibold font-['IBM_Plex_Sans']">{item.date}</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-4 z-10">
                      <div className="self-stretch justify-start text-white text-lg font-semibold font-['IBM_Plex_Sans'] group-hover:text-[#B86A2E] transition-colors">{item.title}</div>
                      <div className="self-stretch justify-start text-white/70 text-sm font-normal font-['IBM_Plex_Sans'] line-clamp-2">{item.desc}</div>
                    </div>
                    <div className="self-stretch h-px bg-[#0D6665]/50 mt-auto"></div>
                    <div className="self-stretch inline-flex justify-between items-center gap-4 z-10">
                      <div className="flex justify-start items-start gap-2 opacity-80">
                        {/* Dot pattern */}
                        <div className="w-2 h-2 bg-white/80 rounded-full" />
                        <div className="w-2 h-2 bg-white/80 rounded-full" />
                        <div className="w-2 h-2 bg-white/80 rounded-full" />
                        <div className="w-4 h-2 bg-[#B86A2E]/80 rounded-full" />
                      </div>
                      <div className="text-right justify-start text-[#B86A2E] text-base font-semibold font-['IBM_Plex_Sans']">Read More →</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
