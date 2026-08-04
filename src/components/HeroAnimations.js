"use client";

import React from "react";

export default function HeroAnimations() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none perspective-[1000px]">
      
      {/* 3D Floating Cyber Ring (Left) */}
      <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] border border-[#0D6665]/20 rounded-full animate-orbit-3d" />
      <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] border border-[#0D6665]/10 rounded-full animate-orbit-3d" style={{ animationDelay: "-5s" }} />

      {/* 3D Floating Tech Cube (Right) */}
      <div className="absolute top-[40%] right-[15%] w-24 h-24 border-2 border-[#B86A2E]/30 animate-float-3d shadow-[0_0_30px_rgba(184,106,46,0.15)] bg-[#B86A2E]/5 backdrop-blur-md" />
      <div className="absolute top-[45%] right-[12%] w-16 h-16 border border-[#B86A2E]/20 animate-float-3d shadow-[0_0_20px_rgba(184,106,46,0.1)] bg-[#B86A2E]/5 backdrop-blur-sm" style={{ animationDelay: "-2s" }} />

      {/* Floating Pulse Nodes (Randomly scattered) */}
      <div className="absolute top-[20%] right-[30%] w-2 h-2 bg-[#0D6665] rounded-full animate-pulse-glow shadow-[0_0_10px_#0D6665]" />
      <div className="absolute bottom-[30%] left-[25%] w-1.5 h-1.5 bg-[#B86A2E] rounded-full animate-pulse-glow shadow-[0_0_10px_#B86A2E]" style={{ animationDelay: "-1s" }} />
      <div className="absolute top-[60%] left-[40%] w-3 h-3 bg-[#0D6665]/50 rounded-full animate-pulse-glow shadow-[0_0_15px_rgba(13,102,101,0.5)]" style={{ animationDelay: "-3s" }} />
      
      {/* Digital Grid Lines Overlay (Moving slowly) */}
      <div className="absolute top-0 left-1/4 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[#0D6665]/20 to-transparent -translate-y-1/2 animate-[float3D_15s_linear_infinite]" />
      <div className="absolute top-0 right-1/3 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[#B86A2E]/10 to-transparent -translate-y-1/2 animate-[float3D_20s_linear_infinite]" style={{ animationDelay: "-7s" }} />
      
    </div>
  );
}
