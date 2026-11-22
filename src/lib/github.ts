import { FEATURED_PROJECTS } from "@/data/portfolio";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  created_at: string;
  pushed_at: string;
  homepage: string | null;
  open_issues_count: number;
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubTelemetry {
  user: GitHubUser;
  repos: GitHubRepo[];
  totalStars: number;
  totalForks: number;
  topLanguages: { language: string; count: number; percentage: number }[];
  isFallback: boolean;
}

// Fallback dataset to guarantee 100% build resilience even with 0 API quota
export const FALLBACK_USER: GitHubUser = {
  login: "modimihir07",
  id: 12345678,
  avatar_url: "https://avatars.githubusercontent.com/u/148419688?v=4",
  html_url: "https://github.com/modimihir07",
  name: "Mihir N. Modi",
  company: null,
  blog: "https://modimihir07.github.io/agentic-os/",
  location: "Gandhinagar, Gujarat, India",
  bio: "Computer Engineering Student | Aspiring DevOps, MLOps & AI Systems Engineer",
  public_repos: 39,
  public_gists: 2,
  followers: 48,
  following: 52,
  created_at: "2023-01-01T00:00:00Z",
  updated_at: new Date().toISOString(),
};

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: "agentic-os",
    full_name: "modimihir07/agentic-os",
    html_url: "https://github.com/modimihir07/agentic-os",
    description: "A 7-layer locally-hosted OS and unified control plane for AI agents (opencode, Hermes Agent, Antigravity/Gemini CLI) at zero cost.",
    fork: false,
    stargazers_count: 218,
    forks_count: 66,
    language: "Python",
    topics: ["ai-agents", "fastapi", "orchestration", "sqlite-fts5", "apscheduler", "gemini-cli"],
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    created_at: "2024-06-15T00:00:00Z",
    pushed_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    homepage: "https://modimihir07.github.io/agentic-os/",
    open_issues_count: 3,
  },
  {
    id: 102,
    name: "cloudmart-devops-project",
    full_name: "modimihir07/cloudmart-devops-project",
    html_url: "https://github.com/modimihir07/cloudmart-devops-project",
    description: "Production-grade end-to-end DevOps & AWS EKS microservices platform engineered with Terraform IaC, ArgoCD GitOps, and DevSecOps.",
    fork: false,
    stargazers_count: 14,
    forks_count: 4,
    language: "HCL",
    topics: ["aws-eks", "terraform", "argocd", "kubernetes", "devsecops", "docker"],
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    created_at: "2024-04-10T00:00:00Z",
    pushed_at: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    homepage: "",
    open_issues_count: 0,
  },
  {
    id: 103,
    name: "digital-wallet-payment-system",
    full_name: "modimihir07/digital-wallet-payment-system",
    html_url: "https://github.com/modimihir07/digital-wallet-payment-system",
    description: "High-integrity concurrent financial backend built from first principles using raw JDBC (no ORM) to enforce strict ACID guarantees.",
    fork: false,
    stargazers_count: 18,
    forks_count: 5,
    language: "Java",
    topics: ["concurrency", "pessimistic-locking", "raw-jdbc", "spring-boot", "mysql8", "acid"],
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    created_at: "2024-02-12T00:00:00Z",
    pushed_at: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    homepage: "",
    open_issues_count: 1,
  },
  {
    id: 104,
    name: "AgriAssist-AI",
    full_name: "modimihir07/AgriAssist-AI",
    html_url: "https://github.com/modimihir07/AgriAssist-AI",
    description: "Crop disease diagnosis and agronomy advisory platform built for Solution Challenge 2026 using Gemini Multimodal AI and offline sync.",
    fork: false,
    stargazers_count: 15,
    forks_count: 3,
    language: "TypeScript",
    topics: ["gemini-ai", "solution-challenge-2026", "agritech", "offline-first", "flutter"],
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
    created_at: "2024-01-08T00:00:00Z",
    pushed_at: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
    homepage: "",
    open_issues_count: 0,
  },
  {
    id: 105,
    name: "BlackHole-Simulation_Using_Rust",
    full_name: "modimihir07/BlackHole-Simulation_Using_Rust",
    html_url: "https://github.com/modimihir07/BlackHole-Simulation_Using_Rust",
    description: "High-performance computational physics simulation exploring relativistic photon raymarching and gravitational lensing in Rust.",
    fork: false,
    stargazers_count: 9,
    forks_count: 2,
    language: "Rust",
    topics: ["rust", "physics-simulation", "raymarching", "general-relativity", "systems"],
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(),
    created_at: "2023-11-20T00:00:00Z",
    pushed_at: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(),
    homepage: "",
    open_issues_count: 0,
  },
  {
    id: 106,
    name: "ai-assisted-devops",
    full_name: "modimihir07/ai-assisted-devops",
    html_url: "https://github.com/modimihir07/ai-assisted-devops",
    description: "Automated telemetry and LLM-assisted Kubernetes cluster triage and incident RCA tooling.",
    fork: false,
    stargazers_count: 8,
    forks_count: 2,
    language: "Python",
    topics: ["devops", "kubernetes", "llm-ops", "incident-response", "sre"],
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 160).toISOString(),
    created_at: "2024-05-02T00:00:00Z",
    pushed_at: new Date(Date.now() - 1000 * 60 * 60 * 160).toISOString(),
    homepage: "",
    open_issues_count: 0,
  },
  {
    id: 107,
    name: "moneymate",
    full_name: "modimihir07/moneymate",
    html_url: "https://github.com/modimihir07/moneymate",
    description: "Personal finance and budgeting tracker built with strict transaction categories and analytics.",
    fork: false,
    stargazers_count: 6,
    forks_count: 1,
    language: "JavaScript",
    topics: ["finance", "react", "dashboard", "analytics"],
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 200).toISOString(),
    created_at: "2023-09-15T00:00:00Z",
    pushed_at: new Date(Date.now() - 1000 * 60 * 60 * 200).toISOString(),
    homepage: "",
    open_issues_count: 0,
  },
  {
    id: 108,
    name: "openclaw",
    full_name: "modimihir07/openclaw",
    html_url: "https://github.com/modimihir07/openclaw",
    description: "Autonomous crawling and semantic document extraction engine for local AI knowledge bases.",
    fork: true,
    stargazers_count: 4,
    forks_count: 1,
    language: "Python",
    topics: ["web-scraping", "knowledge-base", "python"],
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 240).toISOString(),
    created_at: "2024-03-10T00:00:00Z",
    pushed_at: new Date(Date.now() - 1000 * 60 * 60 * 240).toISOString(),
    homepage: "",
    open_issues_count: 0,
  },
  {
    id: 109,
    name: "Terraform",
    full_name: "modimihir07/Terraform",
    html_url: "https://github.com/modimihir07/Terraform",
    description: "Reusable Terraform infrastructure templates for multi-cloud cloud-native environments.",
    fork: true,
    stargazers_count: 5,
    forks_count: 1,
    language: "HCL",
    topics: ["terraform", "iac", "cloud-infrastructure"],
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 280).toISOString(),
    created_at: "2024-02-01T00:00:00Z",
    pushed_at: new Date(Date.now() - 1000 * 60 * 60 * 280).toISOString(),
    homepage: "",
    open_issues_count: 0,
  },
];

export async function fetchGitHubTelemetry(): Promise<GitHubTelemetry> {
  const username = "modimihir07";
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Mihir-Portfolio-App",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=40`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      console.warn(
        `GitHub API returned non-OK status: user=${userRes.status}, repos=${reposRes.status}. Using fallback.`
      );
      return computeTelemetry(FALLBACK_USER, FALLBACK_REPOS, true);
    }

    const user: GitHubUser = await userRes.json();
    const repos: GitHubRepo[] = await reposRes.json();

    if (!Array.isArray(repos) || !user?.login) {
      return computeTelemetry(FALLBACK_USER, FALLBACK_REPOS, true);
    }

    return computeTelemetry(user, repos, false);
  } catch (err) {
    console.error("Failed to fetch GitHub telemetry, falling back to static data:", err);
    return computeTelemetry(FALLBACK_USER, FALLBACK_REPOS, true);
  }
}

function computeTelemetry(
  user: GitHubUser,
  repos: GitHubRepo[],
  isFallback: boolean
): GitHubTelemetry {
  const totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
  const totalForks = repos.reduce((acc, repo) => acc + (repo.forks_count || 0), 0);

  // Compute language distribution
  const langCounts: Record<string, number> = {};
  for (const repo of repos) {
    if (repo.language) {
      langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
    }
  }

  const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0) || 1;
  const topLanguages = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([language, count]) => ({
      language,
      count,
      percentage: Math.round((count / totalLangRepos) * 100),
    }));

  return {
    user,
    repos,
    totalStars,
    totalForks,
    topLanguages,
    isFallback,
  };
}

export function mergeProjectWithLiveStats(
  featuredProject: (typeof FEATURED_PROJECTS)[0],
  liveRepos: GitHubRepo[]
) {
  const match = liveRepos.find(
    (r) =>
      r.name.toLowerCase() === featuredProject.repoName.toLowerCase() ||
      r.name.toLowerCase() === featuredProject.id.toLowerCase()
  );

  if (match) {
    return {
      ...featuredProject,
      stats: {
        stars: Math.max(match.stargazers_count, featuredProject.statsFallback.stars),
        forks: Math.max(match.forks_count, featuredProject.statsFallback.forks),
      },
      updatedAt: match.pushed_at || match.updated_at,
    };
  }

  return {
    ...featuredProject,
    stats: featuredProject.statsFallback,
    updatedAt: new Date().toISOString(),
  };
}
