"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

type Blob = { x: number; y: number; vx: number; vy: number; radius: number; r: number; g: number; b: number };

const LIGHT_BLOBS = [
  { radius: 420, r: 0,   g: 64,  b: 224 },
  { radius: 360, r: 252, g: 113, b: 39  },
  { radius: 300, r: 184, g: 195, b: 255 },
  { radius: 270, r: 255, g: 181, b: 149 },
  { radius: 240, r: 78,  g: 134, b: 176 },
];

const DARK_BLOBS = [
  { radius: 420, r: 20,  g: 60,  b: 140 },
  { radius: 360, r: 78,  g: 134, b: 176 },
  { radius: 300, r: 10,  g: 35,  b: 85  },
  { radius: 260, r: 100, g: 160, b: 210 },
  { radius: 220, r: 40,  g: 90,  b: 155 },
];

export default function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const blobs: Blob[] = [];
    const isDark = resolvedTheme === "dark";
    const defs = isDark ? DARK_BLOBS : LIGHT_BLOBS;
    const alpha = isDark ? 0.22 : 0.16;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = window.innerWidth;
      const H = window.innerHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.scale(dpr, dpr);
    };

    const initBlobs = () => {
      blobs.length = 0;
      const W = window.innerWidth;
      const H = window.innerHeight;
      // Pre-seeded zones ensure blobs start spread evenly across the full canvas
      const zones = [
        { zx: 0.20, zy: 0.30 }, // upper-left
        { zx: 0.78, zy: 0.22 }, // upper-right
        { zx: 0.50, zy: 0.62 }, // center
        { zx: 0.82, zy: 0.65 }, // right
        { zx: 0.28, zy: 0.75 }, // lower-left
      ];
      defs.forEach(({ radius, r, g, b }, i) => {
        const z = zones[i];
        blobs.push({
          x: z.zx * W + (Math.random() - 0.5) * W * 0.12,
          y: z.zy * H + (Math.random() - 0.5) * H * 0.12,
          vx: (Math.random() - 0.5) * 0.38,
          vy: (Math.random() - 0.5) * 0.38,
          radius, r, g, b,
        });
      });
    };

    setup();
    initBlobs();

    const onResize = () => { setup(); initBlobs(); };
    window.addEventListener("resize", onResize);

    const tick = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      ctx.clearRect(0, 0, W, H);

      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.radius)    b.x = W + b.radius;
        if (b.x > W + b.radius) b.x = -b.radius;
        if (b.y < -b.radius)    b.y = H + b.radius;
        if (b.y > H + b.radius) b.y = -b.radius;

        const grd = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        grd.addColorStop(0, `rgba(${b.r},${b.g},${b.b},${alpha})`);
        grd.addColorStop(1, `rgba(${b.r},${b.g},${b.b},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(tick);
    };

    tick();

    // ── Scroll-driven palette evolution ──────────────────────────
    // Shifts the canvas hue by up to 38° as the user scrolls the page.
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const pct = Math.min(window.scrollY / maxScroll, 1);
      if (canvas) canvas.style.filter = `hue-rotate(${pct * 38}deg)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial value

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden
    />
  );
}
