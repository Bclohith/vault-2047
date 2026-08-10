"use client";
import React, { useEffect, useRef } from 'react';

export default function CyberEconomyInfographic() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let pulses = [];

    const leftRoutes = [
        { segments: [[0, 0.15], [0.12, 0.15], [0.18, 0.22], [0.28, 0.22]] },
        { segments: [[0, 0.25], [0.08, 0.25], [0.14, 0.32], [0.25, 0.32]] },
        { segments: [[0, 0.38], [0.05, 0.38], [0.11, 0.45], [0.22, 0.45]] },
        { segments: [[0, 0.50], [0.10, 0.50], [0.15, 0.54], [0.26, 0.54]], endNode: true },
        { segments: [[0, 0.58], [0.07, 0.58], [0.12, 0.54], [0.20, 0.54]], endNode: true },
        { segments: [[0, 0.70], [0.09, 0.70], [0.15, 0.65], [0.27, 0.65]] },
        { segments: [[0, 0.82], [0.14, 0.82], [0.20, 0.76], [0.30, 0.76]] }
    ];

    const rightRoutes = [
        { segments: [[1, 0.15], [0.88, 0.15], [0.82, 0.22], [0.72, 0.22]] },
        { segments: [[1, 0.25], [0.92, 0.25], [0.86, 0.32], [0.75, 0.32]] },
        { segments: [[1, 0.38], [0.95, 0.38], [0.89, 0.45], [0.78, 0.45]] },
        { segments: [[1, 0.50], [0.90, 0.50], [0.85, 0.54], [0.74, 0.54]], endNode: true },
        { segments: [[1, 0.58], [0.93, 0.58], [0.88, 0.54], [0.80, 0.54]], endNode: true },
        { segments: [[1, 0.70], [0.91, 0.70], [0.85, 0.65], [0.73, 0.65]] },
        { segments: [[1, 0.82], [0.86, 0.82], [0.80, 0.76], [0.70, 0.76]] }
    ];

    function initPulses() {
        pulses = [];
        const allRoutes = [...leftRoutes, ...rightRoutes];
        allRoutes.forEach((route) => {
            pulses.push({
                route: route,
                progress: Math.random(),
                speed: 0.0015 + Math.random() * 0.0015
            });
        });
    }

    function resizeCanvas() {
        if (!canvas) return;
        const parent = canvas.parentElement;
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        initPulses();
    }

    function getPointAtProgress(route, progress) {
        const w = canvas.width;
        const h = canvas.height;
        const segments = route.segments;
        
        let totalLen = 0;
        const lengths = [];
        for (let i = 0; i < segments.length - 1; i++) {
            const dx = (segments[i+1][0] - segments[i][0]) * w;
            const dy = (segments[i+1][1] - segments[i][1]) * h;
            const len = Math.sqrt(dx * dx + dy * dy);
            lengths.push(len);
            totalLen += len;
        }

        let targetLen = progress * totalLen;
        let currentLen = 0;

        for (let i = 0; i < lengths.length; i++) {
            if (currentLen + lengths[i] >= targetLen) {
                const segProgress = (targetLen - currentLen) / lengths[i];
                const x = (segments[i][0] + (segments[i+1][0] - segments[i][0]) * segProgress) * w;
                const y = (segments[i][1] + (segments[i+1][1] - segments[i][1]) * segProgress) * h;
                return { x, y };
            }
            currentLen += lengths[i];
        }
        return { x: segments[segments.length - 1][0] * w, y: segments[segments.length - 1][1] * h };
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const w = canvas.width;
        const h = canvas.height;
        const lineColor = 'rgba(13, 131, 144, 0.3)';
        const nodeColor = '#0d8390';
        const nodeGlow = 'rgba(13, 131, 144, 0.8)';

        ctx.lineWidth = 1;
        ctx.strokeStyle = lineColor;

        function drawPath(route) {
            ctx.beginPath();
            route.segments.forEach((pt, index) => {
                const x = pt[0] * w;
                const y = pt[1] * h;
                if (index === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.stroke();

            if (route.endNode) {
                const lastPt = route.segments[route.segments.length - 1];
                const x = lastPt[0] * w;
                const y = lastPt[1] * h;
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = nodeColor;
                ctx.shadowColor = nodeGlow;
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        leftRoutes.forEach(drawPath);
        rightRoutes.forEach(drawPath);

        pulses.forEach(p => {
            p.progress += p.speed;
            if (p.progress > 1) p.progress = 0;

            const pt = getPointAtProgress(p.route, p.progress);
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = '#00f2ff';
            ctx.shadowColor = '#00f2ff';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-24 bg-gray-950 overflow-hidden">
      <div className="infographic-slide-container w-full max-w-[1200px]">
        
        <style>{`
          .infographic-slide-container {
              width: 100%;
              height: 56.25vw; /* 16:9 Aspect Ratio */
              max-height: 800px;
              min-height: 600px;
              position: relative;
              background: radial-gradient(circle at center, #051a1d 0%, #020b0d 65%, #010506 100%);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              padding: 2.5% 4%;
              overflow: hidden;
              box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
              transform-style: preserve-3d;
              border: 1px solid rgba(13, 131, 144, 0.2);
              border-radius: 8px;
          }

          /* Circuit Canvas Background */
          #circuit-canvas {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 1;
              pointer-events: none;
              transition: opacity 0.4s ease, filter 0.4s ease;
          }

          .infographic-slide-container:hover #circuit-canvas {
              filter: drop-shadow(0 0 6px rgba(13, 131, 144, 0.6));
          }

          /* Top Header */
          .infographic-header {
              z-index: 10;
              text-align: center;
              margin-top: 0.5%;
          }

          .infographic-header h1 {
              color: #0d8390;
              font-size: clamp(1rem, 1.6vw, 2rem);
              font-weight: 600;
              letter-spacing: 3px;
              text-transform: uppercase;
              font-family: 'Orbitron', sans-serif;
          }

          /* Center Diagram Section */
          .diagram-container {
              position: relative;
              width: 100%;
              flex-grow: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 5;
              transform-style: preserve-3d;
          }

          /* Concentric Circles & Rotation Keyframes */
          @keyframes spinClockwise {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
          }

          @keyframes spinCounterClockwise {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
          }

          .center-core {
              position: relative;
              width: clamp(280px, 34vw, 500px);
              height: clamp(280px, 34vw, 500px);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 6;
              transform-style: preserve-3d;
          }

          .orbit {
              position: absolute;
              border-radius: 50%;
              pointer-events: none;
              transition: all 0.5s ease;
          }

          .orbit-outer {
              width: 100%;
              height: 100%;
              border: 1px dashed rgba(217, 108, 38, 0.45);
              animation: spinClockwise 45s linear infinite;
          }

          .orbit-inner {
              width: 66%;
              height: 66%;
              border: 1px dashed rgba(13, 131, 144, 0.5);
              animation: spinCounterClockwise 35s linear infinite;
          }

          /* Speed up rotation when hovering over the central core */
          .center-core:hover .orbit-outer {
              border-color: rgba(217, 108, 38, 0.9);
              box-shadow: 0 0 15px rgba(217, 108, 38, 0.3);
              animation-duration: 12s;
          }

          .center-core:hover .orbit-inner {
              border-color: rgba(13, 131, 144, 0.9);
              box-shadow: 0 0 15px rgba(13, 131, 144, 0.3);
              animation-duration: 10s;
          }

          /* Orbit Fixed Nodes */
          .node-dot {
              position: absolute;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              transform: translate(-50%, -50%);
          }

          .dot-orange-left {
              background-color: #d96c26;
              box-shadow: 0 0 8px #d96c26;
              top: 50%;
              left: 0%;
          }

          .dot-orange-right {
              background-color: #d96c26;
              box-shadow: 0 0 8px #d96c26;
              top: 50%;
              left: 100%;
          }

          .dot-cyan-top {
              background-color: #0d8390;
              box-shadow: 0 0 8px #0d8390;
              top: 17%;
              left: 50%;
          }

          .dot-cyan-bottom {
              background-color: #0d8390;
              box-shadow: 0 0 8px #0d8390;
              top: 83%;
              left: 50%;
          }

          /* Center Logo with subtle 3D hover */
          .logo-box {
              position: relative;
              width: 25%;
              height: 25%;
              background: rgba(2, 11, 13, 0.9);
              border-radius: 50%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              z-index: 7;
              cursor: pointer;
              transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
              transform-style: preserve-3d;
              box-shadow: 0 0 10px rgba(13, 131, 144, 0.2);
          }

          .logo-box:hover {
              transform: translateY(-5px) rotateX(12deg) rotateY(-12deg) scale(1.1);
              box-shadow: -10px 15px 25px rgba(0, 0, 0, 0.6), 0 0 25px rgba(13, 131, 144, 0.6);
          }

          .logo-vault, .logo-2047 {
              transition: transform 0.4s ease;
          }

          .logo-box:hover .logo-vault,
          .logo-box:hover .logo-2047 {
              transform: translateZ(15px);
          }

          .logo-vault {
              color: #0d8390;
              font-weight: 800;
              font-size: clamp(0.9rem, 1.3vw, 1.5rem);
              letter-spacing: 2px;
              line-height: 1;
              font-family: 'Orbitron', sans-serif;
          }

          .logo-2047 {
              color: #0d8390;
              font-weight: 700;
              font-size: clamp(0.8rem, 1.1vw, 1.3rem);
              letter-spacing: 2px;
              margin-top: 3px;
              line-height: 1;
              font-family: 'Orbitron', sans-serif;
          }

          /* Glassmorphism Cards Layout */
          .nodes-grid {
              position: absolute;
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr 1fr;
              padding: 2% 14%;
              z-index: 8;
              pointer-events: none;
              transform-style: preserve-3d;
          }

          .node-wrapper {
              display: flex;
              pointer-events: auto;
              perspective: 600px;
          }

          .node-wrapper.top-left {
              justify-content: flex-start;
              align-items: center;
          }

          .node-wrapper.top-right {
              justify-content: flex-end;
              align-items: center;
          }

          .node-wrapper.bottom-left {
              justify-content: flex-start;
              align-items: center;
          }

          .node-wrapper.bottom-right {
              justify-content: flex-end;
              align-items: center;
          }

          .glass-card {
              background: rgba(9, 25, 28, 0.65);
              border: 1px solid rgba(255, 255, 255, 0.08);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              padding: clamp(10px, 1.1vw, 16px) clamp(24px, 3vw, 48px);
              border-radius: 4px;
              color: #e0e0e0;
              font-size: clamp(0.8rem, 1.1vw, 1.2rem);
              font-weight: 400;
              letter-spacing: 0.5px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
              transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, border-color 0.4s ease, color 0.4s ease;
              cursor: pointer;
              text-align: center;
              min-width: clamp(160px, 18vw, 260px);
              transform-style: preserve-3d;
              font-family: 'IBM Plex Sans', sans-serif;
          }

          .top-left .glass-card:hover {
              transform: rotateX(8deg) rotateY(-8deg) translateZ(15px);
          }

          .top-right .glass-card:hover {
              transform: rotateX(8deg) rotateY(8deg) translateZ(15px);
          }

          .bottom-left .glass-card:hover {
              transform: rotateX(-8deg) rotateY(-8deg) translateZ(15px);
          }

          .bottom-right .glass-card:hover {
              transform: rotateX(-8deg) rotateY(8deg) translateZ(15px);
          }

          .glass-card:hover {
              border-color: rgba(13, 131, 144, 0.8);
              color: #ffffff;
              box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(13, 131, 144, 0.4);
          }

          /* Bottom Section */
          .bottom-section {
              z-index: 10;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px;
              margin-bottom: 0.5%;
              width: 100%;
          }

          .bottom-title {
              color: #ffffff;
              font-size: clamp(0.85rem, 1.1vw, 1.2rem);
              font-weight: 600;
              letter-spacing: 0.5px;
              font-family: 'IBM Plex Sans', sans-serif;
          }

          .buttons-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 10px;
              width: 100%;
          }

          .button-row {
              display: flex;
              justify-content: center;
              gap: 16px;
              width: 100%;
              perspective: 500px;
          }

          .pill-btn {
              background: linear-gradient(180deg, rgba(8, 60, 66, 0.8) 0%, rgba(4, 32, 36, 0.9) 100%);
              border: 1px solid rgba(13, 131, 144, 0.3);
              color: #d8eced;
              padding: clamp(8px, 0.8vw, 12px) clamp(20px, 2vw, 36px);
              border-radius: 4px;
              font-size: clamp(0.75rem, 0.95vw, 1.05rem);
              font-weight: 400;
              letter-spacing: 0.3px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
              transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;
              cursor: pointer;
              text-align: center;
              transform-style: preserve-3d;
              font-family: 'IBM Plex Sans', sans-serif;
          }

          .pill-btn:hover {
              border-color: rgba(13, 131, 144, 0.8);
              color: #ffffff;
              background: linear-gradient(180deg, rgba(12, 80, 88, 0.9) 0%, rgba(6, 45, 50, 0.95) 100%);
              transform: rotateX(6deg) translateZ(10px);
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(13, 131, 144, 0.4);
          }
        `}</style>
        
        {/* Canvas for dynamic circuit lines on sides */}
        <canvas id="circuit-canvas" ref={canvasRef}></canvas>

        {/* Top Header */}
        <header className="infographic-header">
            <h1>VAULT2047 ACTS AS THE CATALYST CONNECTING:</h1>
        </header>

        {/* Central Diagram */}
        <div className="diagram-container">
            {/* Glassmorphism Cards */}
            <div className="nodes-grid">
                <div className="node-wrapper top-left">
                    <div className="glass-card">Global Investors</div>
                </div>
                <div className="node-wrapper top-right">
                    <div className="glass-card">Government Priorities</div>
                </div>
                <div className="node-wrapper bottom-left">
                    <div className="glass-card">Enterprise Demand</div>
                </div>
                <div className="node-wrapper bottom-right">
                    <div className="glass-card">Cyber Startup</div>
                </div>
            </div>

            {/* Concentric Circles and Logo */}
            <div className="center-core">
                <div className="orbit orbit-outer">
                    <div className="node-dot dot-orange-left"></div>
                    <div className="node-dot dot-orange-right"></div>
                </div>
                <div className="orbit orbit-inner">
                    <div className="node-dot dot-cyan-top"></div>
                    <div className="node-dot dot-cyan-bottom"></div>
                </div>
                
                <div className="logo-box">
                    <div className="logo-vault">VAULT</div>
                    <div className="logo-2047">2047</div>
                </div>
            </div>
        </div>

        {/* Bottom Section */}
        <footer className="bottom-section">
            <div className="bottom-title">Through platforms like:</div>
            <div className="buttons-container">
                <div className="button-row">
                    <div className="pill-btn">The Cyber Foundry</div>
                    <div className="pill-btn">Investment roundtables</div>
                </div>
                <div className="button-row">
                    <div className="pill-btn">Public-private collaboration frameworks</div>
                </div>
            </div>
        </footer>
      </div>
    </div>
  );
}
