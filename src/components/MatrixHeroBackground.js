"use client";

import React, { useEffect, useRef } from 'react';

export default function MatrixHeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const fontSize = 18;
    let cols = 0;
    let rows = 0;
    let grid = [];
    let highlights = [];

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight;
      
      cols = Math.floor(canvas.width / (fontSize * 0.8)); // 0.8 for character spacing
      rows = Math.floor(canvas.height / fontSize);
      
      // Initialize static grid of 0s and 1s
      grid = [];
      for (let y = 0; y < rows; y++) {
        let row = [];
        for (let x = 0; x < cols; x++) {
          row.push(Math.random() > 0.5 ? '1' : '0');
        }
        grid.push(row);
      }

      // Initialize highlights (the glowing segments moving horizontally)
      highlights = [];
      const numHighlights = Math.floor(rows * 0.8); // 80% of rows have a highlight
      for (let i = 0; i < numHighlights; i++) {
        highlights.push({
          row: Math.floor(Math.random() * rows),
          headCol: Math.random() * cols, // Start at random position
          length: Math.floor(Math.random() * 15) + 10, // Length of the trailing glow
          speed: Math.random() * 0.5 + 0.1 // Speed of movement
        });
      }
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // We don't want a heavy shadow blur on everything, it kills performance.
      // We will only add it to the brightest head characters.
      ctx.font = `bold ${fontSize}px "IBM Plex Sans", monospace`;
      
      // 1. Draw the static background matrix
      // Very dark subtle teal/green to match the Vault2047 theme
      ctx.fillStyle = 'rgba(13, 102, 101, 0.15)'; 
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          ctx.fillText(grid[y][x], x * (fontSize * 0.8), y * fontSize + fontSize);
        }
      }

      // 2. Update and draw the moving highlights
      for (let i = 0; i < highlights.length; i++) {
        let h = highlights[i];
        
        // Sometimes randomly flip a bit in the highlight for a 'live data' feel
        if (Math.random() > 0.95 && h.headCol >= 0 && h.headCol < cols) {
           grid[h.row][Math.floor(h.headCol)] = Math.random() > 0.5 ? '1' : '0';
        }

        for (let j = 0; j < h.length; j++) {
          let col = Math.floor(h.headCol) - j;
          
          if (col >= 0 && col < cols) {
            let alpha = 1 - (j / h.length); // Fades out towards the tail
            
            // The head glows brightly, tail fades out
            if (j === 0) {
              ctx.fillStyle = `rgba(163, 230, 53, ${alpha})`; // Bright neon green for head
              ctx.shadowBlur = 10;
              ctx.shadowColor = 'rgba(163, 230, 53, 1)';
            } else {
              ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`; // Standard green for trail
              ctx.shadowBlur = 0;
            }
            
            ctx.fillText(grid[h.row][col], col * (fontSize * 0.8), h.row * fontSize + fontSize);
          }
        }
        
        // Reset shadow blur
        ctx.shadowBlur = 0;
        
        // Move the highlight
        h.headCol += h.speed;
        
        // Reset if it goes completely off screen
        if (h.headCol - h.length > cols) {
          h.headCol = -Math.random() * 20; // Start slightly offscreen to the left
          h.row = Math.floor(Math.random() * rows); // Pick a new row
          h.speed = Math.random() * 0.5 + 0.1;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', initCanvas);
    initCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
    />
  );
}
