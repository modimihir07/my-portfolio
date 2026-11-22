"use client";

import React from "react";
import { Milestone, Calendar, Award, GitCommit } from "lucide-react";
import { TIMELINE_JOURNEY } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="mb-14 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Milestone className="w-3.5 h-3.5" />
            <span>PROGRESSION CHRONOLOGY • DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-zinc-100">
            Engineering Journey
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A chronological timeline of production deployments, architectural research, and open-source milestones.
          </p>
        </SectionReveal>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-8 border-l border-zinc-300 dark:border-white/10 space-y-12 ml-2 md:ml-4">
          {TIMELINE_JOURNEY.map((item, idx) => (
            <SectionReveal
              key={item.id}
              delay={idx * 0.1}
              direction="up"
              className="relative group"
            >
              {/* Glowing Timeline Marker Node */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-white dark:bg-[#07080a] border-2 border-cyan-500 shadow-md shadow-cyan-500/40 group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              </div>

              {/* Timeline Card */}
              <div className="spotlight-card p-6 rounded-2xl space-y-4 hover:border-cyan-500/50 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                      {item.metric && (
                        <>
                          <span className="text-zinc-400 dark:text-zinc-600">•</span>
                          <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                            <Award className="w-3 h-3" />
                            {item.metric}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {item.organization && (
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-zinc-400 self-start sm:self-center font-medium">
                      {item.organization}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <GitCommit className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-600 dark:text-zinc-400">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-200/80 dark:border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
