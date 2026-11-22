"use client";

import React, { useEffect, useState } from "react";

export function BackgroundGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const isTouch = window.matchMedia("(hover: none)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) return;

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
          document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 telemetry-grid opacity-70" />

      {/* Radial vignette overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-[var(--background)] to-[var(--background)] opacity-75" />

      {/* Ambient glow spots */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />
    </div>
  );
}
