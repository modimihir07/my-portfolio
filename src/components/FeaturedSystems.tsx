"use client";

import React, { useState } from "react";
import {
  Star,
  GitFork,
  ExternalLink,
  FileCode,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { FEATURED_PROJECTS, FeaturedProject } from "@/data/portfolio";
import { GitHubRepo, mergeProjectWithLiveStats } from "@/lib/github";
import { ArchitectureDrawer } from "./ArchitectureDrawer";
import { SectionReveal } from "./SectionReveal";

interface FeaturedSystemsProps {
  repos: GitHubRepo[];
}

type CategoryTab = "All" | "AI & Agents" | "DevOps & Cloud" | "Backend & Systems";

export function FeaturedSystems({ repos }: FeaturedSystemsProps) {
  const [selectedTab, setSelectedTab] = useState<CategoryTab>("All");
  const [activeProject, setActiveProject] = useState<
    (FeaturedProject & { stats?: { stars: number; forks: number } }) | null
  >(null);

  const tabs: CategoryTab[] = ["All", "AI & Agents", "DevOps & Cloud", "Backend & Systems"];

  // Merge live stats for all featured projects
  const enrichedProjects = FEATURED_PROJECTS.map((proj) =>
    mergeProjectWithLiveStats(proj, repos)
  );

  const filteredProjects =
    selectedTab === "All"
      ? enrichedProjects
      : enrichedProjects.filter((p) => p.category === selectedTab);

  return (
    <section id="systems" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURES • FLAGSHIP REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-zinc-100">
              Featured Systems
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              Curated production systems spanning multi-agent orchestration, cloud infrastructure, and lock-free/low-latency backends.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-zinc-200 dark:border-white/10 bg-slate-100/90 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedTab === tab
                    ? "bg-cyan-500 text-black font-semibold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-white/50 dark:hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Bento Grid Layout with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isHero = project.isHero && selectedTab === "All";

            return (
              <SectionReveal
                key={project.id}
                delay={idx * 0.08}
                direction="up"
                className={isHero ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <div
                  className={`spotlight-card group p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                    isHero ? "ring-1 ring-cyan-500/30" : ""
                  }`}
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-cyan-300 dark:border-cyan-500/30 bg-cyan-50/90 dark:bg-cyan-950/30 text-cyan-800 dark:text-cyan-300 font-medium">
                          {project.category}
                        </span>
                        {project.isHero && (
                          <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 flex items-center gap-1 font-medium">
                            <Sparkles className="w-2.5 h-2.5" />
                            HERO SYSTEM
                          </span>
                        )}
                      </div>

                      {/* Star & Fork Pill */}
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-slate-100/80 dark:bg-white/[0.03] px-2.5 py-1 rounded-full border border-zinc-200 dark:border-white/5">
                        <span className="flex items-center gap-1 text-amber-500 dark:text-amber-300">
                          <Star className="w-3 h-3 fill-amber-400" />
                          {project.stats?.stars || project.statsFallback.stars}
                        </span>
                        <span className="text-zinc-400 dark:text-zinc-600">•</span>
                        <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                          <GitFork className="w-3 h-3" />
                          {project.stats?.forks || project.statsFallback.forks}
                        </span>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                      {project.name}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    {/* Key Highlights Bullet points */}
                    <ul className="space-y-1.5 mb-5 text-xs text-zinc-700 dark:text-zinc-300">
                      {project.highlights.slice(0, isHero ? 4 : 3).map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-cyan-600 dark:text-cyan-400 font-mono mt-0.5 font-bold">▹</span>
                          <span className="text-zinc-600 dark:text-zinc-300 leading-normal">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/5 text-zinc-700 dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-200/80 dark:border-white/5">
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Architecture Brief -&gt;</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-slate-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                            title="View Live Docs"
                            aria-label={`View ${project.name} Live Docs`}
                          >
                            <FileCode className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-slate-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                          title="View GitHub Repository"
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      {/* Slide-over Architecture Drawer */}
      <ArchitectureDrawer
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
