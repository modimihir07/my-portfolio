"use client";

import React, { useState, useMemo } from "react";
import {
  FolderGit2,
  Search,
  Star,
  GitFork,
  ExternalLink,
  Calendar,
  Filter,
} from "lucide-react";
import { GitHubRepo } from "@/lib/github";
import { FEATURED_PROJECTS } from "@/data/portfolio";
import { timeAgo } from "@/lib/utils";
import { SectionReveal } from "./SectionReveal";

interface GithubExplorerProps {
  repos: GitHubRepo[];
}

export function GithubExplorer({ repos }: GithubExplorerProps) {
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [showAll, setShowAll] = useState(false);

  // Set of featured repo names to omit by default so user sees other repos
  const featuredNames = useMemo(
    () => new Set(FEATURED_PROJECTS.map((p) => p.repoName.toLowerCase())),
    []
  );

  // Extract unique languages
  const availableLanguages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => {
      if (r.language) set.add(r.language);
    });
    return ["All", ...Array.from(set)];
  }, [repos]);

  // Filtered repos list
  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      // Exclude featured unless showAll is checked
      if (!showAll && featuredNames.has(repo.name.toLowerCase())) {
        return false;
      }

      // Filter by language
      if (selectedLanguage !== "All" && repo.language !== selectedLanguage) {
        return false;
      }

      // Filter by search keyword
      if (search.trim()) {
        const query = search.toLowerCase();
        const nameMatch = repo.name.toLowerCase().includes(query);
        const descMatch = repo.description?.toLowerCase().includes(query);
        const topicMatch = repo.topics?.some((t) => t.toLowerCase().includes(query));
        const langMatch = repo.language?.toLowerCase().includes(query);
        return nameMatch || descMatch || topicMatch || langMatch;
      }

      return true;
    });
  }, [repos, showAll, featuredNames, selectedLanguage, search]);

  return (
    <section id="repos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>LIVE GITHUB PIPELINE • AUTOMATIC DISCOVERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900 dark:text-zinc-100">
              Live GitHub Explorer
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Real-time feed connected directly to GitHub API with 3600s ISR. Any newly pushed repository appears here dynamically.
            </p>
          </div>

          {/* Toggle to show all including featured/forks */}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showAll}
                onChange={(e) => setShowAll(e.target.checked)}
                className="rounded border-zinc-400 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-cyan-500 focus:ring-cyan-500/30"
              />
              <span>Include Featured Repos</span>
            </label>
          </div>
        </SectionReveal>

        {/* Filter & Search Bar with Glass effect */}
        <SectionReveal delay={0.1} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 rounded-2xl border border-zinc-200 dark:border-white/10 bg-slate-100/90 dark:bg-zinc-900/60 backdrop-blur-md mb-8 shadow-sm">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by repo name, tech, or topic..."
              className="w-full bg-transparent pl-9 pr-4 py-2 text-xs text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-500 focus:outline-none"
            />
          </div>

          {/* Language filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-mono">
            <Filter className="w-3.5 h-3.5 text-zinc-400 shrink-0 ml-1" />
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setSelectedLanguage(lang)}
                className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedLanguage === lang
                    ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-200 hover:bg-white/50 dark:hover:bg-white/5 border border-transparent"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Repos Grid */}
        {filteredRepos.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-white/10 font-mono text-xs text-zinc-500 space-y-2">
            <p>No repositories match the current filters.</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedLanguage("All");
                setShowAll(true);
              }}
              className="text-cyan-600 dark:text-cyan-400 underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRepos.map((repo, idx) => (
              <SectionReveal
                key={repo.id}
                delay={idx * 0.04}
                direction="up"
                className="h-full"
              >
                <div className="spotlight-card group p-5 rounded-xl flex flex-col justify-between h-full hover:border-emerald-500/50 transition-all duration-200">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold font-heading text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors truncate">
                        {repo.name}
                      </h3>

                      <div className="flex items-center gap-1.5 shrink-0 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-500 fill-amber-400" />
                          {repo.stargazers_count}
                        </span>
                        <span className="text-zinc-400 dark:text-zinc-600">•</span>
                        <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                          <GitFork className="w-3 h-3" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4 min-h-[32px]">
                      {repo.description || "Experimental engineering repository and prototype."}
                    </p>

                    {/* Topics Pills */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="font-mono text-[9px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.03] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/5"
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-200/80 dark:border-white/5 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      {repo.language && (
                        <span className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 text-[11px]">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          {repo.language}
                        </span>
                      )}
                      <span className="text-zinc-500 flex items-center gap-1 text-[10px]">
                        <Calendar className="w-3 h-3" />
                        {timeAgo(repo.pushed_at || repo.updated_at)}
                      </span>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                      aria-label={`Open repository ${repo.name}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
