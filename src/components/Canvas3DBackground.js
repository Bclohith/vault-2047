"use client";

import React, { useEffect, useRef } from "react";

export default function Canvas3DBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 3D Particles
    const particles = [];
    const numParticles = 200;
    const fov = 250;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1000,
        y: (Math.random() - 0.5) * 1000,
        z: Math.random() * 1000,
        color: Math.random() > 0.5 ? "#B86A2E" : "#0D6665", // Theme colors
      });
    }

    let animationFrameId;

    const render = () => {
      // Create trailing effect by drawing semi-transparent black
      ctx.fillStyle = "rgba(4, 11, 14, 0.2)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        
        // Move particle towards the viewer
        p.z -= 2;

        // Reset if it goes past the viewer
        if (p.z <= 0) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * 1000;
          p.y = (Math.random() - 0.5) * 1000;
        }

        // 3D Projection formula
        const scale = fov / (fov + p.z);
        const x2d = p.x * scale + cx;
        const y2d = p.y * scale + cy;

        // Size based on depth
        const radius = Math.max(0.5, scale * 3);

        ctx.beginPath();
        ctx.arc(x2d, y2d, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Optionally draw lines between close particles for a network effect
        if (Math.random() > 0.98) {
          for (let j = 0; j < numParticles; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dz = p.z - p2.z;
            const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
            if (dist < 100 && p2.z > 0) {
              const scale2 = fov / (fov + p2.z);
              const x2d2 = p2.x * scale2 + cx;
              const y2d2 = p2.y * scale2 + cy;
              
              ctx.beginPath();
              ctx.moveTo(x2d, y2d);
              ctx.lineTo(x2d2, y2d2);
              ctx.strokeStyle = `rgba(13, 102, 101, ${0.5 * (1 - dist/100)})`;
              ctx.lineWidth = scale * 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen pointer-events-none"
    />
  );
}
