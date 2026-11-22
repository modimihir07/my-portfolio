"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  Compass,
  Cpu,
  Terminal,
  Activity,
  Layers,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  PROFILE,
  ENGINEERING_PHILOSOPHY,
  EXPLORING_CHIPS,
  PORTFOLIO_CONFIG,
} from "@/data/portfolio";
import { GitHubTelemetry } from "@/lib/github";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SectionReveal } from "./SectionReveal";

interface BentoAboutProps {
  telemetry: GitHubTelemetry;
}

export function BentoAbout({ telemetry }: BentoAboutProps) {
  const [istTime, setIstTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: PROFILE.timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="mb-10 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            <Compass className="w-3.5 h-3.5" />
            <span>SYSTEM OPERATING PRINCIPLES • TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-zinc-100">
            Engineering Telemetry &amp; Philosophy
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            I approach software engineering from a systems and operational viewpoint: designing around fault tolerance, reproducible deployments, and verified metrics rather than assumptions.
          </p>
        </SectionReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Engineering Philosophy (Span 7) */}
          <SectionReveal direction="up" delay={0.1} className="lg:col-span-7 h-full">
            <div className="spotlight-card p-6 md:p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider flex items-center gap-1.5 uppercase">
                    <Terminal className="w-4 h-4" />
                    First-Principles Mindset
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                    PHILOSOPHY • 04 PILLARS
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-zinc-100">
                  Building Systems That Survive Edge Conditions
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {ENGINEERING_PHILOSOPHY.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-zinc-900/50 hover:border-cyan-500/30 transition-colors backdrop-blur-md"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 font-heading">
                          {item.title}
                        </span>
                        <span className="font-mono text-[9px] text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-200 dark:border-cyan-800/40">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-200/80 dark:border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>Linux Daily Driver (Mint/Ubuntu)</span>
                <span>Zero-ORM Concurrency Rigor</span>
              </div>
            </div>
          </SectionReveal>

          {/* Card 2: Live GitHub Telemetry Card (Span 5) */}
          <SectionReveal direction="up" delay={0.2} className="lg:col-span-5 h-full">
            <div className="spotlight-card p-6 md:p-8 flex flex-col justify-between h-full">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider flex items-center gap-1.5 uppercase">
                    <Activity className="w-4 h-4" />
                    Live GitHub Telemetry
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                    {telemetry.isFallback ? "FALLBACK CACHE" : "API: 3600S ISR"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="p-3 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.02]">
                    <span className="text-[10px] text-zinc-500 uppercase block">Public Repos</span>
                    <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      {telemetry.user.public_repos}+
                    </span>
                  </div>
                  <div className="p-3 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.02]">
                    <span className="text-[10px] text-zinc-500 uppercase block">Total Stars</span>
                    <span className="text-2xl font-bold text-amber-500 dark:text-amber-400">
                      {telemetry.totalStars}+
                    </span>
                  </div>
                </div>

                {/* Top Languages Distribution Bar Chart */}
                <div className="space-y-2">
                  <span className="font-mono text-xs text-zinc-700 dark:text-zinc-400 block font-medium">
                    Language Distribution (Analyzed)
                  </span>
                  <div className="space-y-2">
                    {telemetry.topLanguages.map((lang) => (
                      <div key={lang.language} className="space-y-1">
                        <div className="flex justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
                          <span>{lang.language}</span>
                          <span className="text-zinc-500">{lang.percentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                            style={{ width: `${lang.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-200/80 dark:border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <GitHubIcon className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                  @{PROFILE.handle}
                </span>
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Live Feed</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Card 3: Currently Exploring (Span 6) */}
          <SectionReveal direction="up" delay={0.25} className="lg:col-span-6 h-full">
            <div className="spotlight-card p-6 md:p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-violet-600 dark:text-violet-400 font-semibold tracking-wider flex items-center gap-1.5 uppercase">
                    <Layers className="w-4 h-4" />
                    Currently Exploring • Prototyping
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">R&amp;D QUEUE</span>
                </div>

                <h3 className="text-lg font-bold font-heading text-zinc-900 dark:text-zinc-100">
                  Frontier Systems &amp; Deep Research
                </h3>

                <div className="flex flex-wrap gap-2 pt-1">
                  {EXPLORING_CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg border border-violet-200 dark:border-violet-500/20 bg-violet-50/80 dark:bg-violet-950/20 text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 hover:border-violet-400 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-200/80 dark:border-white/5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Continuous deployment to physical nodes &amp; sandbox clusters.
              </div>
            </div>
          </SectionReveal>

          {/* Card 4: Location & Availability (Span 6) */}
          <SectionReveal direction="up" delay={0.3} className="lg:col-span-6 h-full">
            <div className="spotlight-card p-6 md:p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold tracking-wider flex items-center gap-1.5 uppercase">
                    <MapPin className="w-4 h-4" />
                    Location &amp; Availability
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">SYS.LOC</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <span>{PROFILE.location}</span>
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>IST (UTC +5:30): </span>
                    <span className="text-cyan-600 dark:text-cyan-300 font-semibold">
                      {istTime || "Loading local time..."}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-emerald-300 dark:border-emerald-500/20 bg-emerald-50/80 dark:bg-emerald-950/20 text-xs font-mono text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  <span>Open for DevOps, MLOps &amp; AI Systems Engineering Roles</span>
                </div>

                {/* Quick Connect Links */}
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={PROFILE.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-slate-50/80 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 transition-colors"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PROFILE.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-slate-50/80 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 transition-colors"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5 text-blue-500" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-zinc-200/80 dark:border-white/5 text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
                <span>{PORTFOLIO_CONFIG.EMAIL}</span>
                <span>REMOTE • HYBRID READY</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
