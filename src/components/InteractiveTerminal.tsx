"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Sparkles } from "lucide-react";
import { PROFILE, PORTFOLIO_CONFIG } from "@/data/portfolio";
import { GitHubTelemetry } from "@/lib/github";

interface InteractiveTerminalProps {
  telemetry: GitHubTelemetry;
}

type CommandType = "status" | "whoami" | "stack" | "flagship" | "contact";

export function InteractiveTerminal({ telemetry }: InteractiveTerminalProps) {
  const [activeCmd, setActiveCmd] = useState<CommandType>("status");
  const [copied, setCopied] = useState(false);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0b0d13]/90 shadow-2xl backdrop-blur-xl overflow-hidden ring-1 ring-white/5 transition-all hover:border-cyan-500/30">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#08090d]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-zinc-400">
            user@mihir-sys: ~ (zsh/linux-mint)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SYS: ACTIVE
          </span>
          <button
            type="button"
            onClick={() => copyCommand(`mihir --${activeCmd}`)}
            className="p-1 rounded text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors"
            title="Copy terminal command"
            aria-label="Copy terminal command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Interactive Quick Command Bar */}
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/5 bg-zinc-950/60 overflow-x-auto text-[11px] font-mono">
        <span className="text-zinc-500 mr-1 select-none flex items-center gap-1">
          <Terminal className="w-3 h-3 text-cyan-400" />
          CMD:
        </span>
        {(["status", "whoami", "stack", "flagship", "contact"] as CommandType[]).map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => setActiveCmd(cmd)}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
              activeCmd === cmd
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border border-transparent"
            }`}
          >
            --{cmd}
          </button>
        ))}
      </div>

      {/* Terminal Screen Body */}
      <div className="p-5 font-mono text-xs leading-relaxed min-h-[310px] flex flex-col justify-between">
        <div>
          {/* Prompt line */}
          <div className="flex items-center gap-2 text-zinc-400 mb-3 select-none">
            <span className="text-emerald-400 font-bold">mihir@edge-host</span>
            <span className="text-zinc-600">:</span>
            <span className="text-cyan-400 font-bold">~</span>
            <span className="text-zinc-600">$</span>
            <span className="text-zinc-100 font-semibold">mihir --{activeCmd}</span>
          </div>

          {/* Dynamic Command Outputs */}
          {activeCmd === "status" && (
            <div className="space-y-3 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02]">
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">
                    Core Target
                  </span>
                  <span className="text-cyan-300 font-medium">DevOps / MLOps / AI</span>
                </div>
                <div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02]">
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">
                    Uptime Metric
                  </span>
                  <span className="text-emerald-400 font-medium">{PROFILE.telemetry.uptime}</span>
                </div>
                <div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02]">
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">
                    Public GitHub Repos
                  </span>
                  <span className="text-zinc-200 font-medium">
                    {telemetry.user.public_repos}+ Repositories
                  </span>
                </div>
                <div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02]">
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">
                    Total Star Signals
                  </span>
                  <span className="text-amber-400 font-medium">
                    {telemetry.totalStars}+ Stars
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02]">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="text-zinc-400 font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    Hero Flagship: agentic-os
                  </span>
                  <span className="text-emerald-400 font-bold">218+ Stars</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  7-layer locally-hosted multi-agent OS & control plane orchestrating opencode, Hermes, and Antigravity.
                </p>
              </div>

              <div className="text-[11px] text-zinc-400 flex items-center gap-2">
                <span className="text-zinc-500">ACTIVE FOCUS:</span>
                <span className="text-zinc-200">
                  Kubernetes • Terraform • Agent Swarms • MLOps
                </span>
              </div>
            </div>
          )}

          {activeCmd === "whoami" && (
            <div className="space-y-2 text-zinc-300 animate-in fade-in duration-200">
              <p className="text-zinc-100 font-bold">{PROFILE.name} ({PROFILE.handle})</p>
              <p className="text-zinc-400">{PROFILE.headline}</p>
              <div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02] text-[11px] text-zinc-300">
                &quot;{PROFILE.bio}&quot;
              </div>
              <p className="text-[11px] text-zinc-500">
                📍 Location: {PROFILE.location} (Asia/Kolkata timezone)
              </p>
            </div>
          )}

          {activeCmd === "stack" && (
            <div className="space-y-2 animate-in fade-in duration-200 text-[11px]">
              <div className="flex flex-col gap-1">
                <span className="text-cyan-400 font-semibold">[CLOUD & DEVOPS]:</span>
                <span className="text-zinc-300">
                  AWS EKS, Terraform, Kubernetes, ArgoCD, Docker, GitHub Actions, DevSecOps
                </span>
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <span className="text-violet-400 font-semibold">[AI & AGENTS]:</span>
                <span className="text-zinc-300">
                  Multi-Agent Swarms, Gemini API, FastAPI, Python, SQLite FTS5, APScheduler
                </span>
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <span className="text-emerald-400 font-semibold">[BACKEND & SYSTEMS]:</span>
                <span className="text-zinc-300">
                  Java 17, Spring Boot 3, MySQL 8 (Raw JDBC/Locking), Rust Systems, TypeScript
                </span>
              </div>
            </div>
          )}

          {activeCmd === "flagship" && (
            <div className="space-y-2 text-[11px] animate-in fade-in duration-200">
              <div className="p-2 rounded border border-cyan-500/30 bg-cyan-950/20">
                <span className="text-cyan-300 font-bold block">1. Agentic OS</span>
                <span className="text-zinc-400">7-Layer locally-hosted control plane for AI agents (218+ stars)</span>
              </div>
              <div className="p-2 rounded border border-white/5 bg-white/[0.02]">
                <span className="text-zinc-200 font-bold block">2. CloudMart DevOps Platform</span>
                <span className="text-zinc-400">Terraform IaC, AWS EKS GitOps with ArgoCD</span>
              </div>
              <div className="p-2 rounded border border-white/5 bg-white/[0.02]">
                <span className="text-zinc-200 font-bold block">3. Concurrent Digital Wallet</span>
                <span className="text-zinc-400">Raw JDBC row-level locking (SELECT ... FOR UPDATE)</span>
              </div>
            </div>
          )}

          {activeCmd === "contact" && (
            <div className="space-y-2 text-[11px] animate-in fade-in duration-200">
              <p className="text-zinc-300">Dispatch message or inspect signals:</p>
              <div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.02] space-y-1">
                <div className="text-zinc-400">EMAIL: <span className="text-cyan-300">{PORTFOLIO_CONFIG.EMAIL}</span></div>
                <div className="text-zinc-400">GITHUB: <span className="text-emerald-400">{PROFILE.links.github}</span></div>
                <div className="text-zinc-400">LINKEDIN: <span className="text-blue-400">{PROFILE.links.linkedin}</span></div>
              </div>
              <p className="text-zinc-500 text-[10px]">Click [Contact] tab in navbar to send quick transmission.</p>
            </div>
          )}
        </div>

        {/* Blinking cursor line */}
        <div className="flex items-center gap-1 text-zinc-500 pt-3 select-none">
          <span className="text-cyan-500">sys_daemon&gt;</span>
          <span className="text-zinc-400">ready</span>
          <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-pulse ml-1" />
        </div>
      </div>
    </div>
  );
}
