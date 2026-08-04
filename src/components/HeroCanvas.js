"use client";

import React, { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Grid configuration
    const fov = 300;
    const linesX = 25;
    const linesY = 25;
    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);

    const project = (x, y, z) => {
      const scale = fov / (fov + z);
      const x2d = (x * scale) + width / 2;
      const y2d = (y * scale) + height / 2;
      return { x: x2d, y: y2d, scale };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(13, 102, 101, 0.25)"; // Teal grid line color
      ctx.lineWidth = 1.5;

      time += 0.003;

      // Draw curved grid simulating a cylinder or sphere
      ctx.beginPath();
      for (let i = 0; i <= linesX; i++) {
        for (let j = 0; j <= linesY; j++) {
          // Parametric equation for a sphere/cylinder
          const u = (i / linesX) * Math.PI * 2 + time; // Longitude
          const v = (j / linesY) * Math.PI; // Latitude

          const radius = 600;
          const x = Math.sin(v) * Math.cos(u) * radius;
          const y = Math.cos(v) * radius * 1.5; // Stretch vertically
          const z = Math.sin(v) * Math.sin(u) * radius + 500; 

          // Only draw points in front of the camera
          if (z < -fov + 100) continue;

          const p = project(x, y, z);

          if (j === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
      }
      ctx.stroke();

      ctx.beginPath();
      for (let j = 0; j <= linesY; j++) {
        for (let i = 0; i <= linesX; i++) {
          const u = (i / linesX) * Math.PI * 2 + time;
          const v = (j / linesY) * Math.PI;

          const radius = 600;
          const x = Math.sin(v) * Math.cos(u) * radius;
          const y = Math.cos(v) * radius * 1.5;
          const z = Math.sin(v) * Math.sin(u) * radius + 500;

          if (z < -fov + 100) continue;

          const p = project(x, y, z);

          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
      }
      ctx.stroke();

      // Add a few floating particles
      ctx.fillStyle = "#B86A2E"; // Orange particles
      for (let i = 0; i < 20; i++) {
        const pz = ((i * 137.5 + time * 100) % 1000) - 200;
        const px = Math.sin(i * 1.3 + time) * 400;
        const py = Math.cos(i * 2.1 - time) * 300;
        const proj = project(px, py, pz);
        if (proj.scale > 0 && proj.scale < 5) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, 2 * proj.scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-50"
      aria-hidden="true"
    />
  );
}
