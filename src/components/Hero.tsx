"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  FileDown,
  Layers,
  Activity,
  Terminal as TerminalIcon,
  Radio,
  FileText,
} from "lucide-react";
import { PROFILE, ROTATING_ROLES, PORTFOLIO_CONFIG } from "@/data/portfolio";
import { GitHubTelemetry } from "@/lib/github";
import { GitHubIcon } from "@/components/icons";
import { InteractiveTerminal } from "./InteractiveTerminal";

interface HeroProps {
  telemetry: GitHubTelemetry;
  onOpenResume?: () => void;
}

export function Hero({ telemetry, onOpenResume }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Mission & Identity with Slide-in motion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/20 text-xs font-mono text-emerald-700 dark:text-emerald-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PROFILE.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="font-mono text-xs tracking-wider uppercase text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" />
                <span>ENGINEERING COMMAND CENTER</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading text-zinc-900 dark:text-zinc-100">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-cyan-600 to-cyan-500 dark:from-zinc-100 dark:via-cyan-200 dark:to-cyan-400">
                  {PROFILE.name}
                </span>
              </h1>
              {/* Rotating Role Display */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="font-mono text-lg sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
                  Building{" "}
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-400 border-b border-cyan-500/40 pb-0.5"
                  >
                    {ROTATING_ROLES[roleIndex]}
                  </motion.span>
                </span>
              </div>
            </div>

            {/* Tagline & Bio */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              {PROFILE.bio}
            </p>

            {/* Telemetry Monospace Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="telemetry-pill flex items-center gap-1.5 border-cyan-500/30 text-cyan-700 dark:text-cyan-300 bg-cyan-50/80 dark:bg-cyan-950/20 shadow-sm">
                <TerminalIcon className="w-3.5 h-3.5" />
                SYS.UPTIME: {PROFILE.telemetry.uptime}
              </span>
              <span className="telemetry-pill flex items-center gap-1.5 border-emerald-500/30 text-emerald-700 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-950/20 shadow-sm">
                <Radio className="w-3.5 h-3.5" />
                REPOS: {telemetry.user.public_repos}+
              </span>
              <span className="telemetry-pill flex items-center gap-1.5 border-violet-500/30 text-violet-700 dark:text-violet-300 bg-violet-50/80 dark:bg-violet-950/20 shadow-sm">
                <Layers className="w-3.5 h-3.5" />
                FOCUS: DEVOPS • MLOPS • AI
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#systems"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Systems</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-all hover:border-cyan-500/40 shadow-sm backdrop-blur-md"
              >
                <GitHubIcon className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>GitHub ({telemetry.totalStars}+★)</span>
              </a>

              {onOpenResume ? (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-300 dark:border-emerald-500/30 bg-white/80 dark:bg-zinc-900/80 hover:bg-emerald-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-all shadow-sm backdrop-blur-md cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Interactive Resume</span>
                </button>
              ) : (
                <a
                  href={PORTFOLIO_CONFIG.RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-all shadow-sm backdrop-blur-md"
                >
                  <FileDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Resume (PDF)</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: Interactive Linux Terminal with Slide-in motion */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full"
          >
            <InteractiveTerminal telemetry={telemetry} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
