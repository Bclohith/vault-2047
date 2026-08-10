'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CyberEconomyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Resize handler
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Setup animation variables
    let time = 0;
    
    // Define circuit paths (left and right)
    // Points are relative to center: { x, y } where x is -1 (left) to 1 (right) and y is -1 (top) to 1 (bottom)
    const generatePaths = (isLeft) => {
      const paths = [];
      const dir = isLeft ? -1 : 1;
      
      for (let i = 0; i < 8; i++) {
        const startY = (Math.random() * 2 - 1) * 0.8;
        const endY = (Math.random() * 2 - 1) * 0.4;
        
        // Complex path: straight, diagonal, straight
        paths.push({
          segments: [
            { x: dir * 1.0, y: startY },
            { x: dir * 0.7, y: startY },
            { x: dir * 0.4, y: endY },
            { x: dir * 0.2, y: endY } // Connects to outer circle
          ],
          speed: 0.002 + Math.random() * 0.003,
          offset: Math.random(),
          color: Math.random() > 0.5 ? '#0D6665' : '#B86A2E' // Teal or Orange
        });
      }
      return paths;
    };

    const leftPaths = generatePaths(true);
    const rightPaths = generatePaths(false);
    const allPaths = [...leftPaths, ...rightPaths];

    // Render loop
    const render = () => {
      time += 1;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      
      // Clear canvas
      ctx.clearRect(0, 0, w, h);
      
      // Scale based on smaller dimension for circles
      const radiusScale = Math.min(w, h) / 2;
      
      // Draw Concentric Circles
      ctx.lineWidth = 1;
      
      // Outer Circle (Teal)
      ctx.beginPath();
      ctx.arc(cx, cy, radiusScale * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(13, 102, 101, 0.4)';
      ctx.stroke();
      
      // Middle Circle (Orange)
      ctx.beginPath();
      ctx.arc(cx, cy, radiusScale * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(184, 106, 46, 0.4)';
      ctx.stroke();

      // Inner Circle (Teal)
      ctx.beginPath();
      ctx.arc(cx, cy, radiusScale * 0.3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(13, 102, 101, 0.4)';
      ctx.stroke();

      // Draw Orbiting Particles
      const drawOrbitParticle = (radius, speed, color, offset) => {
        const angle = (time * speed) + offset;
        const px = cx + Math.cos(angle) * (radiusScale * radius);
        const py = cy + Math.sin(angle) * (radiusScale * radius);
        
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0;
      };

      drawOrbitParticle(0.7, 0.005, '#0D6665', 0);
      drawOrbitParticle(0.7, 0.005, '#0D6665', Math.PI);
      drawOrbitParticle(0.5, -0.008, '#B86A2E', Math.PI / 2);
      drawOrbitParticle(0.5, -0.008, '#B86A2E', -Math.PI / 2);
      drawOrbitParticle(0.3, 0.01, '#0D6665', Math.PI / 4);

      // Draw Circuit Lines
      ctx.lineWidth = 1;
      
      allPaths.forEach(path => {
        // Draw path line
        ctx.beginPath();
        path.segments.forEach((seg, i) => {
          const px = cx + seg.x * (w / 2);
          const py = cy + seg.y * (h / 2);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.strokeStyle = 'rgba(13, 102, 101, 0.2)'; // Faint teal for lines
        ctx.stroke();
        
        // Draw flowing data dot
        // Calculate progress 0 to 1
        let progress = (time * path.speed + path.offset) % 1;
        
        // Determine which segment the dot is in
        const totalSegments = path.segments.length - 1;
        const scaledProgress = progress * totalSegments;
        const currentSegIndex = Math.floor(scaledProgress);
        const segProgress = scaledProgress - currentSegIndex;
        
        if (currentSegIndex < totalSegments) {
          const p1 = path.segments[currentSegIndex];
          const p2 = path.segments[currentSegIndex + 1];
          
          const px1 = cx + p1.x * (w / 2);
          const py1 = cy + p1.y * (h / 2);
          const px2 = cx + p2.x * (w / 2);
          const py2 = cy + p2.y * (h / 2);
          
          const currentX = px1 + (px2 - px1) * segProgress;
          const currentY = py1 + (py2 - py1) * segProgress;
          
          ctx.beginPath();
          ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
          ctx.fillStyle = path.color;
          
          // Glow effect
          ctx.shadowBlur = 8;
          ctx.shadowColor = path.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center my-8 bg-gray-950 rounded-2xl overflow-hidden border border-white/5">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />
      
      {/* Overlay HTML Elements (Center Logo & Labels) */}
      <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
        
        {/* Center Logo */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-teal-500 font-['Orbitron'] text-2xl font-bold tracking-widest">VAULT</div>
          <div className="text-teal-500 font-['Orbitron'] text-xl font-bold tracking-widest">2047</div>
        </div>

        {/* Labels - positioned absolutely relative to center */}
        {/* Top Left */}
        <div className="absolute top-[30%] left-[15%] md:left-[25%] px-6 py-2 bg-gradient-to-r from-transparent via-[#0D6665]/20 to-transparent border border-[#0D6665]/50 backdrop-blur-sm rounded-sm">
          <span className="text-white text-sm font-['IBM_Plex_Sans']">Global Investors</span>
        </div>
        
        {/* Top Right */}
        <div className="absolute top-[30%] right-[15%] md:right-[25%] px-6 py-2 bg-gradient-to-r from-transparent via-[#0D6665]/20 to-transparent border border-[#0D6665]/50 backdrop-blur-sm rounded-sm">
          <span className="text-white text-sm font-['IBM_Plex_Sans']">Government Priorities</span>
        </div>
        
        {/* Bottom Left */}
        <div className="absolute bottom-[30%] left-[15%] md:left-[25%] px-6 py-2 bg-gradient-to-r from-transparent via-[#0D6665]/20 to-transparent border border-[#0D6665]/50 backdrop-blur-sm rounded-sm">
          <span className="text-white text-sm font-['IBM_Plex_Sans']">Enterprise Demand</span>
        </div>
        
        {/* Bottom Right */}
        <div className="absolute bottom-[30%] right-[15%] md:right-[25%] px-6 py-2 bg-gradient-to-r from-transparent via-[#0D6665]/20 to-transparent border border-[#0D6665]/50 backdrop-blur-sm rounded-sm">
          <span className="text-white text-sm font-['IBM_Plex_Sans']">Cyber Startup</span>
        </div>

      </div>
    </div>
  );
}
