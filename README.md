# Developer Portfolio & Systems Control Center

> "Building resilient cloud infrastructure, multi-agent AI systems, and production-grade software."

A production-grade developer portfolio and live telemetry console showcasing my engineering work across DevOps, MLOps, and AI Systems. Built around systems thinking, operational reliability, and modern cloud and agent craft.

---

## Architectural Highlights

- Framework: Next.js 15 (App Router, React Server Components, TypeScript Strict)
- Styling: Tailwind CSS v4 with CSS-first custom variants and design tokens
- Motion: Hardware-accelerated GPU transforms with full prefers-reduced-motion support
- Smooth Scroll: Lenis smooth scroll engine with reduced-motion bypass
- Command Palette (Ctrl+K / Cmd+K): Instant section jumping, repo links, theme toggling, and clipboard actions
- Interactive Terminal: Linux CLI simulator with live metrics and interactive command switching
- Architecture Briefs: Slide-over panels detailing data pipelines, design decisions, and system trade-offs
- Live GitHub Explorer: ISR-cached GitHub API integration (3,600s revalidation) that automatically detects newly pushed public repositories

---

## Repository Structure

```
my-portfolio/
├── .eslintrc.json              # ESLint configuration (Next.js core-web-vitals + TS)
├── .gitignore                  # Git ignore rules
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and project scripts
├── postcss.config.mjs          # PostCSS configuration for Tailwind CSS v4
├── public/
│   ├── icon.svg                # Vector brand favicon
│   └── resume.pdf              # Generated ATS-compliant resume PDF
├── README.md                   # Project documentation and developer guide
├── scripts/
│   └── generate_resume.py      # Python script generating the ATS resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css         # CSS tokens, glass styling, and scrollbar rules
│   │   ├── layout.tsx          # Root layout with fonts, metadata, and OpenGraph tags
│   │   ├── page.tsx            # Main page assembling telemetry and sections
│   │   └── providers.tsx       # Theme provider and smooth scroll wrapper
│   ├── components/
│   │   ├── ArchitectureDrawer.tsx # Slide-over architecture brief drawer
│   │   ├── BackgroundGrid.tsx     # Ambient dot-grid and spotlight background
│   │   ├── BentoAbout.tsx         # Engineering philosophy and GitHub telemetry
│   │   ├── CommandPalette.tsx     # Cmd+K / Ctrl+K palette
│   │   ├── ContactSection.tsx     # Contact card with email copier
│   │   ├── FeaturedSystems.tsx    # Curated flagships with filter tabs
│   │   ├── Footer.tsx             # System status footer
│   │   ├── GithubExplorer.tsx     # Dynamic GitHub repository browser
│   │   ├── Hero.tsx               # Primary hero section with rotating focus
│   │   ├── icons.tsx              # Clean SVG icons
│   │   ├── InteractiveTerminal.tsx # Simulated Unix terminal
│   │   ├── JourneyTimeline.tsx    # Chronological milestones
│   │   ├── Navbar.tsx             # Sticky navigation bar with progress indicator
│   │   ├── ResumeModal.tsx        # Interactive resume preview modal
│   │   ├── SectionReveal.tsx      # Scroll-triggered entrance animation wrapper
│   │   └── TechStack.tsx          # Categorized domain capabilities matrix
│   ├── data/
│   │   └── portfolio.ts        # Single source of truth for bio, projects, and skills
│   └── lib/
│       ├── github.ts           # GitHub API fetcher with ISR and static fallbacks
│       └── utils.ts            # Formatting and class merging helpers
└── tsconfig.json               # TypeScript compiler configuration
```

---

## Local Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run TypeScript typecheck
npm run typecheck

# Build for production
npm run build

# Start production server locally
npm start
```

---

**Designed and built by Mihir N. Modi.**
