"use client";

import React from "react";
import { Layers, Cloud, Sparkles, Database } from "lucide-react";
import { SKILL_MATRIX } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";

export function TechStack() {
  const getDomainIcon = (title: string) => {
    if (title.includes("Cloud")) return <Cloud className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
    if (title.includes("AI")) return <Sparkles className="w-5 h-5 text-violet-500 dark:text-violet-400" />;
    return <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
  };

  const getBadgeColor = (title: string) => {
    if (title.includes("Cloud"))
      return "border-cyan-300 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/20 text-cyan-800 dark:text-cyan-300";
    if (title.includes("AI"))
      return "border-violet-300 dark:border-violet-500/30 bg-violet-50 dark:bg-violet-950/20 text-violet-800 dark:text-violet-300";
    return "border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300";
  };

  return (
    <section id="stack" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="mb-12 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-violet-600 dark:text-violet-400">
            <Layers className="w-3.5 h-3.5" />
            <span>PRODUCTION CAPABILITIES • DOMAIN RIGOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-zinc-100">
            Technical Stack Matrix
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Engineered around verifiable systems competence, runtime predictability, and zero-downtime reliability, never arbitrary percentage bars.
          </p>
        </SectionReveal>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SKILL_MATRIX.map((domain, idx) => (
            <SectionReveal
              key={domain.title}
              delay={idx * 0.1}
              direction="up"
              className="h-full"
            >
              <div className="spotlight-card p-6 md:p-7 flex flex-col justify-between h-full hover:border-cyan-500/40 transition-all duration-300">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/5">
                        {getDomainIcon(domain.title)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold font-heading text-zinc-900 dark:text-zinc-100">
                          {domain.title}
                        </h3>
                        <span className="font-mono text-[10px] text-zinc-500">
                          VERIFIED PROFICIENCY
                        </span>
                      </div>
                    </div>

                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getBadgeColor(
                        domain.title
                      )}`}
                    >
                      {domain.badge}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {domain.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {domain.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-zinc-900/40 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                          <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {skill.tag && (
                            <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 bg-slate-100 dark:bg-white/[0.02] px-2 py-0.5 rounded border border-zinc-200 dark:border-white/5">
                              {skill.tag}
                            </span>
                          )}
                          <span className="font-mono text-[10px] text-cyan-700 dark:text-cyan-300 font-semibold">
                            [{skill.level || "Core"}]
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/80 dark:border-white/5 flex items-center justify-between font-mono text-[10px] text-zinc-500">
                  <span>BENCHMARK • PRODUCTION</span>
                  <span>FAIL-SAFE ARCHITECTURE</span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
