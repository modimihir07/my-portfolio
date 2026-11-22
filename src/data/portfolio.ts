export interface ArchitectureDetails {
  diagramType: "svg" | "flow";
  svgDiagram?: string;
  flowSteps?: { title: string; desc: string; tag: string }[];
  keyDecisions: string[];
  takeaways: string[];
}

export interface FeaturedProject {
  id: string;
  name: string;
  repo: string;
  repoName: string;
  liveUrl?: string;
  category: "AI & Agents" | "DevOps & Cloud" | "Backend & Systems";
  badge?: string;
  isHero?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
  statsFallback: {
    stars: number;
    forks: number;
  };
  architecture: ArchitectureDetails;
}

export interface SkillCategory {
  title: string;
  description: string;
  badge: string;
  skills: {
    name: string;
    level?: "Production" | "Advanced" | "Proficient" | "Core";
    tag?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  role: string;
  organization?: string;
  description: string;
  highlights: string[];
  tags: string[];
  metric?: string;
}

export interface CandidateProfile {
  name: string;
  shortName: string;
  handle: string;
  headline: string;
  tagline: string;
  location: string;
  timezone: string;
  status: string;
  bio: string;
  email: string;
  resumeUrl: string;
  links: {
    github: string;
    linkedin: string;
    agenticOsDocs: string;
  };
  telemetry: {
    uptime: string;
    focus: string;
    statusBadge: string;
  };
}

export const PORTFOLIO_CONFIG = {
  EMAIL: "modimihirn@gmail.com",
  RESUME_PATH: "/resume.pdf",
  GITHUB_USERNAME: "modimihir07",
  LINKEDIN_URL: "https://www.linkedin.com/in/mihir-n-modi-632018377",
  AGENTIC_OS_DOCS: "https://modimihir07.github.io/agentic-os/",
};

export const PROFILE: CandidateProfile = {
  name: "Mihir N. Modi",
  shortName: "Mihir",
  handle: "modimihir07",
  headline: "Computer Engineering Student | Aspiring DevOps, MLOps & AI Systems Engineer",
  tagline: "Building resilient cloud infrastructure, multi-agent AI systems, and production-grade software.",
  location: "Gandhinagar, Gujarat, India",
  timezone: "Asia/Kolkata",
  status: "Building in Public • Open to DevOps / AI Engineering Roles",
  bio: "I am a computer engineering student focused on production-level systems at the intersection of AI, DevOps, and MLOps. I learn by shipping: from multi-agent orchestration platforms to AWS EKS microservices and high-concurrency backends.",
  email: PORTFOLIO_CONFIG.EMAIL,
  resumeUrl: PORTFOLIO_CONFIG.RESUME_PATH,
  links: {
    github: `https://github.com/${PORTFOLIO_CONFIG.GITHUB_USERNAME}`,
    linkedin: PORTFOLIO_CONFIG.LINKEDIN_URL,
    agenticOsDocs: PORTFOLIO_CONFIG.AGENTIC_OS_DOCS,
  },
  telemetry: {
    uptime: "99.99%",
    focus: "DEVOPS • MLOPS • AI SYSTEMS",
    statusBadge: "PRODUCTION_READY",
  },
};

export const ROTATING_ROLES: string[] = [
  "DevOps & Cloud Infrastructure",
  "Multi-Agent AI Systems",
  "MLOps & Production Backends",
  "High-Concurrency Systems",
];

export const EXPLORING_CHIPS: string[] = [
  "Kubernetes Control Plane",
  "MLOps Pipelines & Artifact Registry",
  "Autonomous Agent Orchestration",
  "Rust Systems & Relativistic Raymarching",
  "DevSecOps & Supply Chain Security",
  "eBPF Observability & Linux Internals",
];

export const ENGINEERING_PHILOSOPHY = [
  {
    title: "Linux & Terminal First",
    desc: "Production runs on Linux. From daily driver workflows to containerized pods, systems rigor begins at the CLI.",
    tag: "SYS.KERNEL",
  },
  {
    title: "Raw Concurrency & Zero-ORM Rigor",
    desc: "Understanding database engines means mastering row-level locks, transaction isolation, and preventing TOCTOU deadlocks by hand.",
    tag: "ACID.ENGINE",
  },
  {
    title: "Zero-Cost Agent Orchestration",
    desc: "Building production-grade multi-agent swarms using local LLMs, tool protocols, and deterministic scheduling without recurring API debt.",
    tag: "AGENTIC.CORE",
  },
  {
    title: "Immutable Infrastructure as Code",
    desc: "If it is not codified in Terraform, GitOps-synced via ArgoCD, and automated in CI/CD, it does not exist in production.",
    tag: "IAC.GITOPS",
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "agentic-os",
    name: "Agentic OS",
    repo: "https://github.com/modimihir07/agentic-os",
    repoName: "agentic-os",
    liveUrl: "https://modimihir07.github.io/agentic-os/",
    category: "AI & Agents",
    badge: "⭐ HERO SYSTEM • 7-LAYER CONTROL PLANE",
    isHero: true,
    summary:
      "A 7-layer, locally-hosted operating system and unified control plane for AI agents, orchestrating opencode (Code/DevOps), Hermes Agent (Memory/Scheduling), and Antigravity (agy) / Gemini CLI (Research) at zero subscription cost.",
    highlights: [
      "Automated multi-agent task routing across local & remote LLM runtimes",
      "15+ executable SKILL.md packs with standardized evaluation scoring",
      "Shared persistent memory via SQLite FTS5 hybrid search engine",
      "APScheduler cron daemon for background agent automations & watchdogs",
      "Token cost & inference analytics with proactive free-tier limit alerts",
      "One-click tar.gz point-in-time system and agent memory snapshots",
    ],
    stack: [
      "Python",
      "FastAPI",
      "SQLite FTS5",
      "APScheduler",
      "JavaScript",
      "Tailwind CSS",
      "Gemini CLI",
    ],
    statsFallback: {
      stars: 218,
      forks: 66,
    },
    architecture: {
      diagramType: "flow",
      flowSteps: [
        {
          title: "Layer 1: Unified CLI & Control Plane",
          desc: "Entry point accepting multi-modal user instructions, dispatching tasks through an intent parser.",
          tag: "GATEWAY",
        },
        {
          title: "Layer 2: Multi-Agent Dispatch Router",
          desc: "Dynamic task delegation between opencode, Hermes Agent, and Antigravity (agy).",
          tag: "ROUTING",
        },
        {
          title: "Layer 3: Skill Packs & Tool Registry",
          desc: "15+ modular SKILL.md bundles executed in isolated runtime sandboxes with eval scoring.",
          tag: "SKILLS",
        },
        {
          title: "Layer 4: Persistent Memory & FTS5 Index",
          desc: "SQLite FTS5 full-text and semantic retrieval for conversation context across all agents.",
          tag: "MEMORY",
        },
        {
          title: "Layer 5: Background Cron & Watchdog",
          desc: "APScheduler engine driving autonomous tasks, health checks, and scheduled syncs.",
          tag: "DAEMON",
        },
        {
          title: "Layer 6: Token & Inference Telemetry",
          desc: "Real-time usage counters with deterministic free-tier quota guards to prevent billing spills.",
          tag: "METRICS",
        },
        {
          title: "Layer 7: Snapshot & Backup Engine",
          desc: "Deterministic tar.gz state snapshots enabling instant portability across developer machines.",
          tag: "STORAGE",
        },
      ],
      keyDecisions: [
        "Avoided vendor lock-in by designing local-first routing without proprietary proxy servers.",
        "Engineered SQLite FTS5 memory tier for zero-dependency local full-text search with sub-millisecond retrieval.",
        "Decoupled skill definitions into human-readable markdown SKILL.md specifications with verifiable unit tests.",
      ],
      takeaways: [
        "Proved multi-agent systems achieve 99.8% execution reliability when bound to strict tool schemas.",
        "Zero subscription infrastructure drastically lowers barriers for AI engineering experimentation.",
      ],
    },
  },
  {
    id: "cloudmart-devops-project",
    name: "CloudMart DevOps Platform",
    repo: "https://github.com/modimihir07/cloudmart-devops-project",
    repoName: "cloudmart-devops-project",
    category: "DevOps & Cloud",
    badge: "AWS EKS • GITOPS • IAC",
    summary:
      "Production-grade end-to-end DevOps & AWS EKS microservices platform engineered around Infrastructure as Code, GitOps continuous delivery, and automated DevSecOps security gates.",
    highlights: [
      "Modular AWS EKS cluster provisioning with Terraform and remote S3/DynamoDB state locking",
      "Declarative continuous deployment via ArgoCD following strict GitOps pull principles",
      "Containerized microservices CI/CD pipelines with automated Docker image build & tag workflows",
      "Integrated DevSecOps static analysis and image vulnerability scanning before production promotion",
      "Prometheus & Grafana observability manifests with structured logging standards",
    ],
    stack: [
      "AWS EKS",
      "Terraform",
      "Kubernetes",
      "ArgoCD",
      "Docker",
      "DevSecOps",
      "Python",
      "GitHub Actions",
    ],
    statsFallback: {
      stars: 12,
      forks: 4,
    },
    architecture: {
      diagramType: "flow",
      flowSteps: [
        {
          title: "Infrastructure as Code (Terraform)",
          desc: "VPC, Subnets, IAM roles, Security Groups, and AWS EKS Managed Node Groups codified declaratively.",
          tag: "PROVISION",
        },
        {
          title: "Continuous Integration Pipeline",
          desc: "GitHub Actions runner executes linters, tests, builds multi-arch Docker images, and triggers scans.",
          tag: "BUILD/TEST",
        },
        {
          title: "DevSecOps Vulnerability Gate",
          desc: "Container image scan gates push to Amazon ECR; blocks release upon high/critical CVE discovery.",
          tag: "SECURITY",
        },
        {
          title: "GitOps Sync (ArgoCD)",
          desc: "ArgoCD reconciles live Kubernetes cluster state with desired state tracked in the manifest repository.",
          tag: "DELIVERY",
        },
        {
          title: "Production Cluster Observability",
          desc: "Metrics scraping via Prometheus operator, alerting rules, and Grafana dashboard visualization.",
          tag: "OBSERVE",
        },
      ],
      keyDecisions: [
        "Enforced GitOps pull model over CI push model to prevent credential leakage into CI runners.",
        "Structured Terraform into reusable modules with strict variable type constraints and remote state isolation.",
      ],
      takeaways: [
        "Demonstrated zero-downtime rolling updates on AWS EKS with properly tuned pod disruption budgets and probes.",
      ],
    },
  },
  {
    id: "digital-wallet-payment-system",
    name: "Concurrent Digital Wallet & Payment Engine",
    repo: "https://github.com/modimihir07/digital-wallet-payment-system",
    repoName: "digital-wallet-payment-system",
    category: "Backend & Systems",
    badge: "RAW JDBC • HIGH CONCURRENCY • ACID",
    summary:
      "High-integrity concurrent financial backend built from first principles using raw JDBC (no ORM) to enforce strict ACID transactional guarantees and eliminate race conditions.",
    highlights: [
      "Pessimistic row-level locking (SELECT ... FOR UPDATE) eliminating Time-of-Check to Time-of-Use (TOCTOU) races",
      "Deadlock prevention via deterministic alphanumeric account ordering during multi-wallet fund transfers",
      "Distributed idempotency key enforcement preventing double-spend and duplicate transaction replay",
      "Append-only double-entry ledger preserving absolute auditability with zero balance discrepancy",
      "Database-trigger audit logging and stress tests verified across 100 concurrent threads",
    ],
    stack: [
      "Java 17",
      "Spring Boot 3",
      "MySQL 8",
      "Raw JDBC",
      "H2 Database",
      "JUnit 5",
      "Concurrent Testing",
    ],
    statsFallback: {
      stars: 18,
      forks: 5,
    },
    architecture: {
      diagramType: "flow",
      flowSteps: [
        {
          title: "Idempotency & Request Validation",
          desc: "Inbound payment request validated against idempotency cache to reject duplicate submissions.",
          tag: "FILTER",
        },
        {
          title: "Deterministic Lock Acquisition",
          desc: "Wallets sorted by ID before acquiring pessimistic locks to mathematically prevent circular deadlock.",
          tag: "LOCKING",
        },
        {
          title: "Atomic Row-Level Update (Raw JDBC)",
          desc: "SELECT ... FOR UPDATE locks balance rows, performs precision math, and executes transactional update.",
          tag: "TRANSACTION",
        },
        {
          title: "Append-Only Double-Entry Ledger",
          desc: "Debit and credit entries recorded simultaneously in an unalterable financial transaction journal.",
          tag: "AUDIT",
        },
        {
          title: "Commit & Instant Event Dispatch",
          desc: "Transaction commits cleanly or rolls back completely on any transient fault.",
          tag: "CONSISTENCY",
        },
      ],
      keyDecisions: [
        "Intentionally stripped Spring Data JPA/Hibernate ORM to retain exact deterministic control over SQL queries and locks.",
        "Implemented deterministic account sorting (min(fromId, toId) locked first) to guarantee zero deadlocks.",
      ],
      takeaways: [
        "100 concurrent threads completed 1,000 inter-wallet transfers with 0% data corruption and 100% balance reconciliation.",
      ],
    },
  },
  {
    id: "AgriAssist-AI",
    name: "AgriAssist AI / GreenGuard AI",
    repo: "https://github.com/modimihir07/AgriAssist-AI",
    repoName: "AgriAssist-AI",
    category: "AI & Agents",
    badge: "GOOGLE SOLUTION CHALLENGE 2026",
    summary:
      "AI-powered crop disease detection & agronomy assistant built for Google Solution Challenge 2026, targeting low-connectivity farming environments with real-time multimodal diagnosis.",
    highlights: [
      "Real-time multimodal disease diagnosis powered by Gemini AI computer vision models",
      "Offline-first mobile client architecture with transparent sync when connectivity restores",
      "Multilingual voice and text interface tailored for regional agricultural communities",
      "Localized micro-climate intelligence combined with actionable preventative treatment guides",
    ],
    stack: [
      "Gemini AI",
      "TypeScript",
      "Flutter",
      "Firebase",
      "Python",
      "Offline Sync",
    ],
    statsFallback: {
      stars: 15,
      forks: 3,
    },
    architecture: {
      diagramType: "flow",
      flowSteps: [
        {
          title: "Field Image Capture & Edge Preprocessing",
          desc: "Farmer captures crop leaf symptoms; image compressed and normalized on edge device.",
          tag: "EDGE",
        },
        {
          title: "Connectivity Check & Local Cache",
          desc: "If offline, queues payload in local storage; otherwise streams to diagnosis backend.",
          tag: "SYNC",
        },
        {
          title: "Multimodal Gemini Diagnosis Pipeline",
          desc: "High-resolution visual inference combined with botanical knowledge base for pathogen classification.",
          tag: "INFERENCE",
        },
        {
          title: "Localized Treatment Formulation",
          desc: "Generates organic and chemical remedial advisories translated into regional vernacular.",
          tag: "ADVISORY",
        },
      ],
      keyDecisions: [
        "Adopted offline-first SQLite cache on Flutter frontend to remain usable during remote field outages.",
        "Engineered strict JSON schema prompts for Gemini to guarantee structured agronomy output.",
      ],
      takeaways: [
        "Reduced diagnostic turnaround from days to under 3 seconds in simulated agricultural trials.",
      ],
    },
  },
  {
    id: "BlackHole-Simulation_Using_Rust",
    name: "Black Hole Relativistic Physics Simulation",
    repo: "https://github.com/modimihir07/BlackHole-Simulation_Using_Rust",
    repoName: "BlackHole-Simulation_Using_Rust",
    category: "Backend & Systems",
    badge: "RUST • COMPUTATIONAL PHYSICS • RAYMARCHING",
    summary:
      "High-performance computational physics simulation exploring relativistic photon raymarching and gravitational lensing around a Schwarzschild black hole using memory-safe systems programming in Rust.",
    highlights: [
      "Numerical integration of null geodesics under General Relativity equations of motion",
      "Accretion disk rendering with Doppler boosting and gravitational redshift simulation",
      "SIMD-optimized vector math kernels delivering high frame-rate interactive rendering",
      "Zero-overhead concurrency with Rust's ownership model guaranteeing memory safety",
    ],
    stack: [
      "Rust",
      "Systems Programming",
      "Computational Physics",
      "Raymarching",
      "Linear Algebra",
    ],
    statsFallback: {
      stars: 9,
      forks: 2,
    },
    architecture: {
      diagramType: "flow",
      flowSteps: [
        {
          title: "Photon Ray Camera Initialization",
          desc: "Generates initial photon coordinates and momentum vectors in curved spacetime.",
          tag: "INITIALIZE",
        },
        {
          title: "Runge-Kutta Geodesic Integrator",
          desc: "Numerically integrates Schwarzschild geodesic differential equations per ray step.",
          tag: "INTEGRATE",
        },
        {
          title: "Event Horizon & Disk Collision Detection",
          desc: "Detects photon absorption into event horizon or intersection with radiating accretion disk.",
          tag: "COLLISION",
        },
        {
          title: "Relativistic Beaming & Redshift Calculation",
          desc: "Applies relativistic Doppler factor and gravitational time dilation to spectral radiance.",
          tag: "SHADING",
        },
      ],
      keyDecisions: [
        "Selected Rust over C++ to achieve bare-metal numerical throughput without risking undefined behavior or memory leaks.",
        "Implemented adaptive step-size Runge-Kutta integrator to preserve accuracy near photon spheres.",
      ],
      takeaways: [
        "Deepened intuition for systems-level memory management and mathematical physics algorithms.",
      ],
    },
  },
];

export const SKILL_MATRIX: SkillCategory[] = [
  {
    title: "Cloud & DevOps",
    badge: "INFRASTRUCTURE",
    description: "Cloud-native provisioning, container orchestration, and declarative GitOps pipelines.",
    skills: [
      { name: "AWS EKS", level: "Production", tag: "K8s Cloud" },
      { name: "Kubernetes", level: "Production", tag: "Orchestration" },
      { name: "Docker", level: "Production", tag: "Containers" },
      { name: "Terraform", level: "Production", tag: "IaC" },
      { name: "ArgoCD", level: "Advanced", tag: "GitOps" },
      { name: "GitHub Actions", level: "Production", tag: "CI/CD" },
      { name: "Linux (Mint/Ubuntu/WSL)", level: "Production", tag: "Daily Driver" },
      { name: "Bash & PowerShell", level: "Advanced", tag: "Scripting" },
      { name: "DevSecOps", level: "Advanced", tag: "Security Gates" },
      { name: "Prometheus & Grafana", level: "Proficient", tag: "Telemetry" },
    ],
  },
  {
    title: "AI & MLOps",
    badge: "INTELLIGENCE",
    description: "Agent orchestration, local LLM runtimes, prompt engineering, and model evaluation.",
    skills: [
      { name: "Multi-Agent Orchestration", level: "Production", tag: "Autonomous Swarms" },
      { name: "Gemini API & CLI", level: "Production", tag: "Multimodal AI" },
      { name: "FastAPI", level: "Production", tag: "Inference APIs" },
      { name: "Python", level: "Production", tag: "Core Language" },
      { name: "LLM Tool Protocols", level: "Advanced", tag: "Function Calling" },
      { name: "Model Routing & Cost Analytics", level: "Advanced", tag: "Optimization" },
      { name: "Eval Scoring & Benchmarks", level: "Advanced", tag: "Reliability" },
      { name: "Prompt Architecture", level: "Production", tag: "System Prompts" },
    ],
  },
  {
    title: "Backend, Data & Systems",
    badge: "SYSTEMS",
    description: "High-concurrency data persistence, memory-safe systems programming, and typed APIs.",
    skills: [
      { name: "Java 17", level: "Advanced", tag: "Enterprise Backend" },
      { name: "Spring Boot 3", level: "Advanced", tag: "Microservices" },
      { name: "MySQL 8 (Raw JDBC/Locking)", level: "Production", tag: "ACID Concurrency" },
      { name: "SQLite FTS5", level: "Production", tag: "Search / Memory" },
      { name: "Rust", level: "Proficient", tag: "Systems & Math" },
      { name: "TypeScript", level: "Production", tag: "Type Safety" },
      { name: "Next.js 15", level: "Production", tag: "Modern Web" },
      { name: "Tailwind CSS v4", level: "Production", tag: "Design Systems" },
      { name: "Firebase", level: "Proficient", tag: "Sync Engine" },
    ],
  },
];

export const TIMELINE_JOURNEY: TimelineItem[] = [
  {
    id: "journey-agentic-os",
    period: "2026",
    title: "Architect & Maintainer :: Agentic OS",
    role: "Open Source Creator",
    organization: "modimihir07/agentic-os",
    description:
      "Created and open-sourced Agentic OS, a 7-layer local operating system orchestrating multi-agent LLM systems with zero subscription costs. Earned 218+ GitHub stars and 66+ forks from global developers.",
    highlights: [
      "Engineered multi-agent router connecting opencode, Hermes, and Antigravity CLI",
      "Built SQLite FTS5 persistent memory layer and APScheduler automated watchdog",
      "Created 15+ executable tool skill packs with automated evaluation benchmarks",
    ],
    tags: ["Multi-Agent AI", "FastAPI", "SQLite FTS5", "APScheduler", "Python"],
    metric: "218+ Stars • 66+ Forks",
  },
  {
    id: "journey-cloudmart",
    period: "2026",
    title: "CloudMart Enterprise DevOps & EKS GitOps",
    role: "DevOps & Cloud Architect",
    organization: "CloudMart Microservices",
    description:
      "Engineered an automated end-to-end cloud infrastructure on AWS EKS using Terraform and ArgoCD, incorporating DevSecOps security scanning and container pipelines.",
    highlights: [
      "Codified complete VPC, IAM, and EKS cluster architecture in modular Terraform",
      "Implemented continuous delivery GitOps pull reconciliation via ArgoCD",
      "Configured container scanning and DevSecOps gates in automated CI/CD",
    ],
    tags: ["AWS EKS", "Terraform", "ArgoCD", "Kubernetes", "Docker", "DevSecOps"],
    metric: "Zero-Downtime Rolling Deploys",
  },
  {
    id: "journey-concurrency",
    period: "2026",
    title: "High-Concurrency Payment & Double-Entry Ledger Engine",
    role: "Backend & Systems Engineer",
    organization: "Financial Systems Research",
    description:
      "Built a concurrent digital wallet backend from scratch without an ORM, employing raw JDBC with pessimistic locking (SELECT ... FOR UPDATE) to guarantee atomic ACID transactions.",
    highlights: [
      "Eliminated TOCTOU race conditions and deadlock cycles via deterministic lock sorting",
      "Enforced idempotency keys and immutable double-entry ledger bookkeeping",
      "Validated consistency under 100 concurrent threads without a single ledger discrepancy",
    ],
    tags: ["Java 17", "Spring Boot 3", "MySQL 8", "Raw JDBC", "ACID", "Concurrency"],
    metric: "100-Thread Stress Tested",
  },
  {
    id: "journey-solution-challenge",
    period: "2025",
    title: "AgriAssist AI / GreenGuard AI",
    role: "Applied AI Engineer",
    organization: "Google Solution Challenge",
    description:
      "Developed an AI-driven crop pathology and agronomy assistant for rural farmers with low-connectivity constraints, leveraging Gemini multimodal vision and offline sync.",
    highlights: [
      "Architected sub-3s multimodal image diagnosis pipeline with Gemini API",
      "Engineered offline-first local cache synchronization for low-bandwidth environments",
      "Localized multilingual voice and vernacular guidance interfaces",
    ],
    tags: ["Gemini AI", "TypeScript", "Flutter", "Firebase", "Offline First"],
    metric: "Sub-3s Diagnosis Latency",
  },
  {
    id: "journey-academics",
    period: "2025 -> Present",
    title: "B.Tech in Computer Engineering",
    role: "Undergraduate Student",
    organization: "Gandhinagar, Gujarat, India",
    description:
      "Focusing on operating systems, distributed architectures, database internals, and Linux systems programming. Daily Linux user applying theoretical concepts directly into shipping software.",
    highlights: [
      "Deep-dive into OS process scheduling, memory hierarchies, and concurrency",
      "Relativistic computational physics simulation implemented in Rust",
      "Active open-source contributor and technical architecture writer",
    ],
    tags: ["Computer Engineering", "Operating Systems", "Distributed Systems", "Rust"],
    metric: "Gandhinagar, Gujarat, India",
  },
];
