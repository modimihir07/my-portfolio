"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  Code2,
  FolderGit2,
  Layers,
  Milestone,
  Mail,
  Check,
  Moon,
  Sun,
  ExternalLink,
  Terminal,
  Cpu,
  Search,
  FileText,
} from "lucide-react";
import { FEATURED_PROJECTS, PORTFOLIO_CONFIG, PROFILE } from "@/data/portfolio";

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onOpenResume?: () => void;
}

export function CommandPalette({ open, setOpen, onOpenResume }: CommandPaletteProps) {
  const { setTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.EMAIL);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0d0f14] shadow-2xl text-zinc-900 dark:text-zinc-100 ring-1 ring-cyan-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          value={search}
          onValueChange={setSearch}
          className="w-full flex flex-col font-sans"
        >
          <div className="flex items-center px-4 py-3 border-b border-zinc-200 dark:border-white/10 gap-3">
            <Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <Command.Input
              autoFocus
              placeholder="Type a command, jump to section, or open project..."
              className="w-full bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-zinc-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2 text-sm">
            <Command.Empty className="p-4 text-center text-xs text-zinc-500 font-mono">
              No matching commands found.
            </Command.Empty>

            {/* Navigation Group */}
            <Command.Group
              heading="NAVIGATION"
              className="px-2 py-1.5 text-[11px] font-mono font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider"
            >
              <Command.Item
                onSelect={() => runCommand(() => scrollToSection("systems"))}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors data-[selected=true]:bg-cyan-500/15"
              >
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                  <span>Featured Systems</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">#systems</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => scrollToSection("repos"))}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors data-[selected=true]:bg-cyan-500/15"
              >
                <div className="flex items-center gap-2.5">
                  <FolderGit2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  <span>GitHub Repos Explorer</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">#repos</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => scrollToSection("stack"))}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors data-[selected=true]:bg-cyan-500/15"
              >
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-violet-500 dark:text-violet-400" />
                  <span>Tech Stack Matrix</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">#stack</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => scrollToSection("journey"))}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors data-[selected=true]:bg-cyan-500/15"
              >
                <div className="flex items-center gap-2.5">
                  <Milestone className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>Engineering Journey</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">#journey</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => scrollToSection("contact"))}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors data-[selected=true]:bg-cyan-500/15"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                  <span>Contact &amp; Dispatch</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">#contact</span>
              </Command.Item>
            </Command.Group>

            {/* Flagship Projects */}
            <Command.Group
              heading="FLAGSHIP ARCHITECTURES"
              className="px-2 py-1.5 mt-2 text-[11px] font-mono font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider"
            >
              {FEATURED_PROJECTS.map((project) => (
                <Command.Item
                  key={project.id}
                  onSelect={() =>
                    runCommand(() => window.open(project.repo, "_blank", "noopener,noreferrer"))
                  }
                  className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors data-[selected=true]:bg-cyan-500/15"
                >
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>{project.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                    <span>{project.category}</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </Command.Item>
              ))}
            </Command.Group>

            {/* Actions & Profiles */}
            <Command.Group
              heading="SYSTEM ACTIONS"
              className="px-2 py-1.5 mt-2 text-[11px] font-mono font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider"
            >
              {onOpenResume && (
                <Command.Item
                  onSelect={() => runCommand(onOpenResume)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-emerald-500" />
                    <span>View Interactive Resume (ATS Verified)</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">MODERN</span>
                </Command.Item>
              )}

              <Command.Item
                onSelect={copyEmail}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Mail className="w-4 h-4 text-emerald-500" />
                  )}
                  <span>{copied ? "Email Copied to Clipboard!" : "Copy Email Address"}</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">{PORTFOLIO_CONFIG.EMAIL}</span>
              </Command.Item>

              <Command.Item
                onSelect={() =>
                  runCommand(() => window.open(PROFILE.links.github, "_blank", "noopener,noreferrer"))
                }
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>GitHub Profile</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">@{PROFILE.handle}</span>
              </Command.Item>

              <Command.Item
                onSelect={() =>
                  runCommand(() =>
                    window.open(PROFILE.links.linkedin, "_blank", "noopener,noreferrer")
                  )
                }
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <ExternalLink className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Mihir N. Modi</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => setTheme("dark"))}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Moon className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  <span>Set Dark Mode</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Theme</span>
              </Command.Item>

              <Command.Item
                onSelect={() => runCommand(() => setTheme("light"))}
                className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-zinc-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span>Set Light Mode</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">Theme</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-white/[0.02] border-t border-zinc-200 dark:border-white/5 text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <span>Use ↑↓ to navigate</span>
              <span>•</span>
              <span>↵ to select</span>
            </div>
            <span>SYS.PALETTE • READY</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
