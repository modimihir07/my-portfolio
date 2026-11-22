"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Command as CommandIcon,
  Moon,
  Sun,
  FileText,
  Menu,
  X,
  Radio,
} from "lucide-react";
import { PORTFOLIO_CONFIG, PROFILE } from "@/data/portfolio";
import { CommandPalette } from "./CommandPalette";
import { ResumeModal } from "./ResumeModal";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Update top progress bar
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;

      const bar = document.getElementById("scroll-progress");
      if (bar) {
        bar.style.transform = `scaleX(${scrolledRatio / 100})`;
      }

      setScrolled(winScroll > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Systems", href: "#systems" },
    { label: "Repos", href: "#repos" },
    { label: "Stack", href: "#stack" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#07080a]/85 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5 py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label="Mihir Modi Portfolio Home"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-zinc-300 dark:border-white/10 group-hover:border-cyan-500/50 transition-colors shadow-xs">
                <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500">
                  M/
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    mihir.dev
                  </span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                <span className="hidden sm:inline-block font-mono text-[10px] text-zinc-500">
                  SYS.STATUS • OPERATIONAL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 rounded-full border border-zinc-200 dark:border-white/10 bg-slate-100/90 dark:bg-zinc-900/60 px-3 py-1.5 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100 hover:bg-white/60 dark:hover:bg-white/5 transition-colors relative"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2.5">
              {/* Command Palette Trigger */}
              <button
                type="button"
                onClick={() => setPaletteOpen(true)}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-zinc-300 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 hover:bg-slate-100 dark:hover:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 transition-all hover:border-cyan-500/40 shadow-xs cursor-pointer"
                aria-label="Open Command Palette (Press ⌘K or Ctrl+K)"
              >
                <CommandIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span className="hidden sm:inline font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  ⌘K
                </span>
              </button>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-lg border border-zinc-300 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 hover:bg-slate-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer shadow-xs"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-cyan-600" />
                  )}
                </button>
              )}

              {/* Resume Button */}
              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold shadow-xs shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 cursor-pointer"
                aria-label="Open Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-[#0d0f14]/95 backdrop-blur-xl px-4 py-4 animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 pb-2 mb-2 border-b border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                <span>{PROFILE.status}</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeOpen(true);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-semibold cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume (Interactive)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setPaletteOpen(true);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-white/10 text-xs font-mono text-zinc-600 dark:text-zinc-400 cursor-pointer"
                >
                  <CommandIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Command Palette</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Palette */}
      <CommandPalette
        open={paletteOpen}
        setOpen={setPaletteOpen}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Modern Interactive ATS Resume Modal */}
      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  );
}
