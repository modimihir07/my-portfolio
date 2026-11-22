"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  FileDown,
  Printer,
  ExternalLink,
  ShieldCheck,
  Award,
  Sparkles,
  GitBranch,
  Terminal,
  Check,
} from "lucide-react";
import { PROFILE, FEATURED_PROJECTS, SKILL_MATRIX, PORTFOLIO_CONFIG } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "ats">("preview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Modern Engineering Resume"
      data-lenis-prevent
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0c0e14] border border-zinc-300 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Modal Top Action Bar */}
        <div className="px-6 py-3.5 border-b border-zinc-200 dark:border-white/10 bg-slate-50 dark:bg-[#08090e] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/40 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              TOP 1% ATS VERIFIED
            </span>
            <span className="hidden sm:inline font-mono text-xs text-zinc-500">
              HARVARD / GOOGLE STANDARD
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-900 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={PORTFOLIO_CONFIG.RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold shadow-xs transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Container (Printable layout) */}
        <div 
          className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-zinc-800 dark:text-zinc-200 font-sans overscroll-contain"
          data-lenis-prevent
        >
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-white/10 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-zinc-100 tracking-tight">
                {PROFILE.name}
              </h1>
              <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                {PROFILE.location} • Open to Relocation &amp; Remote
              </span>
            </div>

            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {PROFILE.headline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400 pt-1">
              <span>Email: <a href={`mailto:${PORTFOLIO_CONFIG.EMAIL}`} className="text-cyan-600 dark:text-cyan-400 hover:underline">{PORTFOLIO_CONFIG.EMAIL}</a></span>
              <span>•</span>
              <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>github.com/modimihir07</span>
              </a>
              <span>•</span>
              <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>linkedin.com/in/mihir-n-modi</span>
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Executive Systems Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Computer engineering student focused on production-level systems at the intersection of AI, DevOps, and MLOps. Proven track record architecting multi-agent control planes (218+ GitHub Stars), codifying AWS EKS GitOps delivery with Terraform &amp; ArgoCD, and engineering raw JDBC concurrency engines with zero race conditions.
            </p>
          </div>

          {/* Core Technical Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Core Technical Capabilities</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-zinc-200 dark:border-white/5 bg-slate-50/70 dark:bg-zinc-900/40 space-y-1">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Cloud &amp; DevOps</span>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  AWS EKS, Kubernetes, Docker, Terraform, ArgoCD, GitHub Actions, Linux (Ubuntu/Mint), DevSecOps, Prometheus
                </p>
              </div>
              <div className="p-3 rounded-xl border border-zinc-200 dark:border-white/5 bg-slate-50/70 dark:bg-zinc-900/40 space-y-1">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">AI &amp; MLOps</span>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Multi-Agent Swarms, Gemini API, FastAPI, Python, SQLite FTS5, Token Analytics, Eval Scoring, APScheduler
                </p>
              </div>
              <div className="p-3 rounded-xl border border-zinc-200 dark:border-white/5 bg-slate-50/70 dark:bg-zinc-900/40 space-y-1">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">Backend &amp; Systems</span>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Java 17, Spring Boot 3, MySQL 8 (Raw JDBC/Pessimistic Locking), Rust Systems, TypeScript, Next.js 15
                </p>
              </div>
            </div>
          </div>

          {/* Flagship Engineering Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              <span>Featured Engineering Systems</span>
            </h2>

            <div className="space-y-5">
              {FEATURED_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl border border-zinc-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-zinc-900/30 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                        {proj.name}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/40">
                        {proj.category}
                      </span>
                    </div>

                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 self-start sm:self-center"
                    >
                      <span>repo link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {proj.summary}
                  </p>

                  <ul className="space-y-1 text-xs text-zinc-700 dark:text-zinc-300">
                    {proj.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-600 dark:text-cyan-400 font-mono mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] px-2 py-0.5 rounded bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-white/10">
            <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
              Education &amp; Credentials
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <span className="font-bold text-zinc-900 dark:text-zinc-100">
                  Bachelor of Technology in Computer Engineering
                </span>
                <span className="text-zinc-600 dark:text-zinc-400 block sm:inline sm:ml-2">
                  (Gandhinagar, Gujarat, India)
                </span>
              </div>
              <span className="font-mono text-zinc-500">2025 -&gt; Present</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Core coursework: Operating Systems, Distributed Systems, Database Management Systems, Computer Networks, Systems Programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
