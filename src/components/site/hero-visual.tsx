"use client";

import { useEffect, useRef } from "react";
import { useMountedReducedMotion } from "@/components/motion/use-mounted-reduced-motion";

/**
 * Original animated hero visual — abstract interpretation of legal
 * structures: layered translucent planes, intersecting lines forming
 * a balanced geometric field, and floating colour nodes representing
 * logic, balance and layered perspectives. Pure Canvas 2D, no external assets.
 */
export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduce = useMountedReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let t = 0;

    const palette = [
      "#3157FF",
      "#FF574D",
      "#FFB21A",
      "#70DEC0",
      "#8A65FF",
    ];

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    // Nodes form a balanced constellation
    const nodes = Array.from({ length: 9 }).map((_, i) => ({
      x: 0.12 + (i % 3) * 0.36,
      y: 0.16 + Math.floor(i / 3) * 0.34,
      c: palette[i % palette.length],
      r: 5 + (i % 4) * 2.5,
      phase: i * 0.7,
    }));

    function draw() {
      if (!ctx) return;
      t += reduce ? 0 : 0.006;
      ctx.clearRect(0, 0, w, h);

      // Soft colour field wash
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "rgba(49,87,255,0.05)");
      g.addColorStop(0.5, "rgba(138,101,255,0.05)");
      g.addColorStop(1, "rgba(255,87,77,0.05)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Faint grid
      ctx.strokeStyle = "rgba(16,16,26,0.06)";
      ctx.lineWidth = 1;
      const step = 56;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Connecting lines between nodes (balanced network)
      const px = (n: (typeof nodes)[number]) => n.x * w + Math.sin(t + n.phase) * (reduce ? 0 : 14);
      const py = (n: (typeof nodes)[number]) => n.y * h + Math.cos(t + n.phase) * (reduce ? 0 : 14);

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = px(a) - px(b);
          const dy = py(a) - py(b);
          const dist = Math.hypot(dx, dy);
          if (dist < Math.min(w, h) * 0.55) {
            const alpha = 1 - dist / (Math.min(w, h) * 0.55);
            ctx.strokeStyle = `rgba(16,16,26,${0.12 * alpha})`;
            ctx.beginPath();
            ctx.moveTo(px(a), py(a));
            ctx.lineTo(px(b), py(b));
            ctx.stroke();
          }
        }
      }

      // Translucent planes (layered perspectives)
      const planes = [
        { x: 0.18, y: 0.22, w: 0.5, h: 0.34, c: "rgba(49,87,255,0.10)", r: 10 },
        { x: 0.42, y: 0.5, w: 0.46, h: 0.3, c: "rgba(255,178,26,0.10)", r: 10 },
        { x: 0.08, y: 0.58, w: 0.34, h: 0.26, c: "rgba(112,222,192,0.12)", r: 10 },
      ];
      planes.forEach((p, i) => {
        const offset = reduce ? 0 : Math.sin(t * 0.8 + i) * 8;
        ctx.fillStyle = p.c;
        roundRect(ctx, p.x * w + offset, p.y * h, p.w * w, p.h * h, p.r);
        ctx.fill();
        ctx.strokeStyle = "rgba(16,16,26,0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Nodes (colour bursts)
      nodes.forEach((n) => {
        const x = px(n);
        const y = py(n);
        const halo = ctx.createRadialGradient(x, y, 0, x, y, n.r * 5);
        halo.addColorStop(0, n.c + "55");
        halo.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(x, y, n.r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = n.c;
        ctx.beginPath();
        ctx.arc(x, y, n.r * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(16,16,26,0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, n.r, 0, Math.PI * 2);
        ctx.stroke();
      });

      raf = requestAnimationFrame(draw);
    }

    function roundRect(c: CanvasRenderingContext2D, x: number, y: number, rw: number, rh: number, r: number) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + rw, y, x + rw, y + rh, r);
      c.arcTo(x + rw, y + rh, x, y + rh, r);
      c.arcTo(x, y + rh, x, y, r);
      c.arcTo(x, y, x + rw, y, r);
      c.closePath();
    }

    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
}
