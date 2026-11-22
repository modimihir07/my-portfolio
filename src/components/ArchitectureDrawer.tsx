"use client";

import React, { useEffect } from "react";
import { X, Layers, GitBranch, Lightbulb, ExternalLink, ShieldCheck } from "lucide-react";
import { FeaturedProject } from "@/data/portfolio";

interface ArchitectureDrawerProps {
  project: (FeaturedProject & { stats?: { stars: number; forks: number } }) | null;
  onClose: () => void;
}

export function ArchitectureDrawer({ project, onClose }: ArchitectureDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} Architecture Brief`}
      data-lenis-prevent
    >
      <div
        className="w-full max-w-2xl h-full bg-white dark:bg-[#0d0f15] border-l border-zinc-200 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-200 dark:border-white/10 bg-slate-50/80 dark:bg-[#080a0f] flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-800 dark:text-cyan-300 font-semibold">
                {project.category}
              </span>
              {project.badge && (
                <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                  {project.badge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              {project.name}
            </h2>
            <p className="text-xs font-mono text-zinc-500">
              SYS.SPEC • ARCHITECTURE BRIEF • RUNTIME TOPOLOGY
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Close Architecture Brief"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div 
          className="flex-1 overflow-y-auto p-6 space-y-6 text-sm overscroll-contain"
          data-lenis-prevent
        >
          {/* Summary */}
          <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] space-y-2">
            <span className="font-mono text-xs text-cyan-700 dark:text-cyan-400 font-semibold uppercase tracking-wider block">
              Core Objective &amp; Problem Solved
            </span>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm">
              {project.summary}
            </p>
          </div>

          {/* Architecture Flow Diagram */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-700 dark:text-zinc-400 font-semibold flex items-center gap-1.5 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                Pipeline Topology &amp; Data Flow
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                {project.architecture.flowSteps?.length || 0} STAGES
              </span>
            </div>

            <div className="space-y-2.5">
              {project.architecture.flowSteps?.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-zinc-200/80 dark:border-white/5 bg-slate-50/80 dark:bg-zinc-900/60 relative hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 font-heading">
                      {step.title}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white dark:bg-zinc-800 text-cyan-700 dark:text-cyan-300 border border-zinc-200 dark:border-white/5 shadow-xs font-medium">
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Decisions */}
          <div className="space-y-2.5">
            <span className="font-mono text-xs text-zinc-700 dark:text-zinc-400 font-semibold flex items-center gap-1.5 uppercase tracking-wider">
              <GitBranch className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Key Engineering Decisions
            </span>
            <ul className="space-y-2">
              {project.architecture.keyDecisions.map((decision, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 p-2.5 rounded-lg border border-zinc-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Takeaways */}
          <div className="space-y-2.5">
            <span className="font-mono text-xs text-zinc-700 dark:text-zinc-400 font-semibold flex items-center gap-1.5 uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              Production Takeaways • Verified Metrics
            </span>
            <div className="p-3.5 rounded-lg border border-amber-300 dark:border-amber-500/20 bg-amber-50/60 dark:bg-amber-950/10 text-xs text-zinc-800 dark:text-zinc-300 space-y-1.5">
              {project.architecture.takeaways.map((takeaway, idx) => (
                <p key={idx} className="leading-relaxed">
                  • {takeaway}
                </p>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <span className="font-mono text-xs text-zinc-700 dark:text-zinc-400 font-semibold uppercase tracking-wider block">
              Implemented Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-zinc-200 dark:border-white/10 bg-slate-50/80 dark:bg-[#080a0f] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold shadow-md transition-colors"
            >
              <span>View Source Code</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-200 transition-colors"
              >
                <span>Live Docs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-zinc-500 hover:text-black dark:hover:text-zinc-200 px-3 py-1.5 cursor-pointer"
          >
            Close [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
