"use client";

import React, { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height, dpr;
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let shockwaves = [];
    let elements = [];
    const hexCodes = ['0x47', '0x8F', '0x20', '0x2047', 'SEC_01', 'LOCKED', 'KEY_v2', '0x00'];
    const hoverRadius = 140; // Proximity threshold for glowing effect
    let animId;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      
      // Fallback if width/height are still 0
      if (width === 0) width = window.innerWidth;
      if (height === 0) height = 700;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      if (mouse.x === 0 && mouse.y === 0) {
        mouse.x = mouse.targetX = width / 2;
        mouse.y = mouse.targetY = height / 2;
      }
      initElements();
    }

    function initElements() {
      elements = [];
      const count = Math.floor((width * height) / 18000);
      
      for (let i = 0; i < count; i++) {
        const type = Math.random() < 0.5 ? 0 : (Math.random() < 0.8 ? 1 : 2);
        elements.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1.5,
          type: type,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.02,
          baseOpacity: Math.random() * 0.4 + 0.2,
          opacity: 0.3,
          glowFactor: 0, // 0 = default state, 1 = maximum hover glow
          text: hexCodes[Math.floor(Math.random() * hexCodes.length)]
        });
      }
    }

    // Interactive Shockwave Pulse
    const handlePointerDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      shockwaves.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        maxRadius: Math.max(width, height) * 0.35,
        alpha: 1
      });
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);

    // Helper: Draw Hexagonal Vault Node
    function drawHexagon(x, y, radius, rotation, alpha, isGlowing) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      if (isGlowing) {
        ctx.shadowColor = 'rgba(255, 158, 83, 0.9)';
        ctx.shadowBlur = 12;
        ctx.strokeStyle = `rgba(255, 180, 110, ${alpha})`;
        ctx.lineWidth = 1.8;
      } else {
        ctx.strokeStyle = `rgba(184, 106, 46, ${alpha})`;
        ctx.lineWidth = 1;
      }

      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = radius * Math.cos(angle);
        const hy = radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    // Grid & Cursor Background Lighting
    function drawGrid() {
      const gridSize = 50;
      ctx.strokeStyle = 'rgba(184, 106, 46, 0.035)';
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Cursor Radial Field
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 320
      );
      gradient.addColorStop(0, 'rgba(184, 106, 46, 0.12)');
      gradient.addColorStop(0.5, 'rgba(184, 106, 46, 0.03)');
      gradient.addColorStop(1, 'rgba(4, 11, 14, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    // Cursor Crosshair
    function drawTargetingHUD() {
      ctx.save();
      ctx.translate(mouse.x, mouse.y);
      ctx.strokeStyle = 'rgba(184, 106, 46, 0.35)';
      ctx.lineWidth = 1;

      const lineLen = 8;
      const gap = 6;
      ctx.beginPath();
      ctx.moveTo(0, -gap); ctx.lineTo(0, -gap - lineLen);
      ctx.moveTo(0, gap); ctx.lineTo(0, gap + lineLen);
      ctx.moveTo(-gap, 0); ctx.lineTo(-gap - lineLen, 0);
      ctx.moveTo(gap, 0); ctx.lineTo(gap + lineLen, 0);
      ctx.stroke();

      ctx.restore();
    }

    // Draw Elements, Hover Glows & Connecting Lines
    function drawVaultElements() {
      // Proximity Lines with dynamic glow boost
      for (let i = 0; i < elements.length; i++) {
        for (let j = i + 1; j < elements.length; j++) {
          const dx = elements[i].x - elements[j].x;
          const dy = elements[i].y - elements[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const lineGlow = Math.max(elements[i].glowFactor, elements[j].glowFactor);
            const baseAlpha = (1 - dist / 100) * 0.15;
            
            ctx.save();
            if (lineGlow > 0.2) {
              ctx.shadowColor = 'rgba(255, 158, 83, 0.6)';
              ctx.shadowBlur = 8;
              ctx.strokeStyle = `rgba(255, 175, 105, ${baseAlpha + lineGlow * 0.4})`;
              ctx.lineWidth = 1 + lineGlow * 0.5;
            } else {
              ctx.strokeStyle = `rgba(184, 106, 46, ${baseAlpha})`;
              ctx.lineWidth = 0.8;
            }
            
            ctx.beginPath();
            ctx.moveTo(elements[i].x, elements[i].y);
            ctx.lineTo(elements[j].x, elements[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Render Individual Particles
      elements.forEach(el => {
        el.x += el.vx;
        el.y += el.vy;
        el.rotation += el.rotSpeed;

        if (el.x < 0) el.x = width;
        if (el.x > width) el.x = 0;
        if (el.y < 0) el.y = height;
        if (el.y > height) el.y = 0;

        // Calculate Mouse Distance & Glow Factor
        const dx = el.x - mouse.x;
        const dy = el.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Hover Detection: Calculate smooth glow transition
        if (dist < hoverRadius) {
          const targetGlow = 1 - (dist / hoverRadius);
          el.glowFactor += (targetGlow - el.glowFactor) * 0.15; // Smooth ramp up
          
          // Slight physical push force
          const force = (hoverRadius - dist) / hoverRadius;
          el.x += (dx / dist) * force * 1.5;
          el.y += (dy / dist) * force * 1.5;
        } else {
          el.glowFactor += (0 - el.glowFactor) * 0.08; // Smooth decay back
        }

        const isGlowing = el.glowFactor > 0.1;
        const currentAlpha = el.baseOpacity + el.glowFactor * 0.6;

        ctx.save();

        if (el.type === 0) {
          // Dot
          if (isGlowing) {
            ctx.shadowColor = 'rgba(255, 158, 83, 0.9)';
            ctx.shadowBlur = 10 + el.glowFactor * 8;
            ctx.fillStyle = `rgba(255, 195, 130, ${currentAlpha})`;
          } else {
            ctx.fillStyle = `rgba(184, 106, 46, ${currentAlpha})`;
          }
          
          ctx.beginPath();
          ctx.arc(el.x, el.y, el.size + el.glowFactor * 1.5, 0, Math.PI * 2);
          ctx.fill();

        } else if (el.type === 1) {
          // Hexagon Vault Node
          drawHexagon(el.x, el.y, (el.size * 5) + (el.glowFactor * 2), el.rotation, currentAlpha, isGlowing);

        } else if (el.type === 2) {
          // Hex Code Data String
          if (isGlowing) {
            ctx.shadowColor = 'rgba(255, 158, 83, 0.9)';
            ctx.shadowBlur = 8;
            ctx.fillStyle = `rgba(255, 200, 140, ${currentAlpha})`;
            ctx.font = 'bold 11px monospace';
          } else {
            ctx.fillStyle = `rgba(184, 106, 46, ${currentAlpha * 0.8})`;
            ctx.font = '10px monospace';
          }
          
          ctx.fillText(el.text, el.x, el.y);
        }

        ctx.restore();
      });
    }

    // Shockwave Ripples
    function drawShockwaves() {
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 6;
        sw.alpha -= 0.015;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(255, 158, 83, ${sw.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    function animate() {
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      drawGrid();
      drawVaultElements();
      drawTargetingHUD();
      drawShockwaves();

      animId = requestAnimationFrame(animate);
    }

    resize();
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      if (canvas) {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointermove', handlePointerMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-auto"
      aria-hidden="true"
    />
  );
}
