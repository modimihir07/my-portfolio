"use client";

import React, { useState } from "react";
import {
  Mail,
  Check,
  Copy,
  FileCode,
  Radio,
  Send,
} from "lucide-react";
import { PORTFOLIO_CONFIG, PROFILE } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SectionReveal } from "./SectionReveal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal direction="up">
          <div className="spotlight-card p-8 md:p-12 lg:p-16 rounded-3xl border border-zinc-200 dark:border-white/10 bg-gradient-to-b from-white to-slate-50 dark:from-[#11131a] dark:to-[#0a0c10] shadow-2xl relative overflow-hidden">
            {/* Ambient Corner Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl space-y-8 relative z-10">
              {/* Header pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/20 text-xs font-mono text-cyan-800 dark:text-cyan-300">
                <Radio className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 animate-pulse" />
                <span>DISPATCH • TRANSMISSION PORT</span>
              </div>

              {/* Heading */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-bold font-heading text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
                  Let&apos;s Build Resilient Production Systems Together.
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Whether you need someone to architect a multi-agent AI control plane, engineer AWS EKS GitOps delivery, or write zero-leak concurrent backends | my inbox is monitored.
                </p>
              </div>

              {/* Copy Email Bar & Direct Mailto */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-zinc-200 dark:border-white/10 bg-slate-100/90 dark:bg-zinc-950/80 font-mono text-xs text-zinc-800 dark:text-zinc-300 flex-1 shadow-inner">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="truncate">{PORTFOLIO_CONFIG.EMAIL}</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="ml-3 p-1.5 rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs shadow-xs"
                    aria-label="Copy Email to Clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${PORTFOLIO_CONFIG.EMAIL}?subject=Engineering%20Inquiry%20via%20mihir.dev`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Mail</span>
                </a>
              </div>

              {/* Social Signal Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>github.com/modimihir07</span>
                </a>

                <span className="text-zinc-400 dark:text-zinc-700">•</span>

                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-500 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-blue-500" />
                  <span>linkedin.com/in/mihir-n-modi</span>
                </a>

                <span className="text-zinc-400 dark:text-zinc-700">•</span>

                <a
                  href={PORTFOLIO_CONFIG.AGENTIC_OS_DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <FileCode className="w-4 h-4 text-violet-500" />
                  <span>agentic-os docs</span>
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
