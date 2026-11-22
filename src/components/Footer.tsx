"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Shield, ArrowUp } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-white/10 bg-slate-100/80 dark:bg-[#07080a] py-12 relative text-xs font-mono text-zinc-600 dark:text-zinc-500 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand & Telemetry */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Link
              href="/"
              className="flex items-center gap-2 text-zinc-800 dark:text-zinc-300 font-semibold hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>mihir.dev</span>
            </Link>

            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>

            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ALL SYSTEMS NOMINAL</span>
              <span className="text-zinc-400 dark:text-zinc-600">•</span>
              <span>{PROFILE.location}</span>
            </div>
          </div>

          {/* Middle: Stack credit */}
          <div className="text-center text-zinc-500 text-[11px]">
            <span>Built with Next.js 15 • Tailwind v4 • Framer Motion • Deployed on Vercel</span>
          </div>

          {/* Right: Scroll to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-200 transition-colors cursor-pointer shadow-xs"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[10px]">TOP</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-zinc-500">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved. Code licensed under MIT.
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-cyan-600 dark:text-cyan-500/70" />
            <span>ENCRYPTED CLIENT • ZERO-LEAK CONCURRENCY PROTOCOL</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
