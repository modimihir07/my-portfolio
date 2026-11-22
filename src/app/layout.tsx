import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { PROFILE } from "@/data/portfolio";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07080A" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mihir.dev"),
  title: {
    default: `${PROFILE.name} • DevOps, MLOps & AI Systems Engineer`,
    template: `%s | ${PROFILE.name}`,
  },
  description: `${PROFILE.bio} Creator of Agentic OS (218+ stars). Specializing in Kubernetes, AWS EKS, Terraform, raw concurrency, and autonomous multi-agent systems.`,
  keywords: [
    "Mihir N. Modi",
    "Mihir Modi",
    "DevOps Engineer",
    "MLOps Engineer",
    "AI Systems",
    "Agentic OS",
    "Kubernetes",
    "AWS EKS",
    "Terraform",
    "ArgoCD",
    "FastAPI",
    "Rust Systems",
    "Concurrency",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.links.github }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mihir.dev",
    title: `${PROFILE.name} • DevOps, MLOps & AI Systems Engineer`,
    description: PROFILE.tagline,
    siteName: `${PROFILE.name} Engineering Command Center`,
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/148419688?v=4",
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} - Engineering Command Center`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} • DevOps, MLOps & AI Systems Engineer`,
    description: PROFILE.tagline,
    creator: "@modimihir07",
    images: ["https://avatars.githubusercontent.com/u/148419688?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-cyan-500/20 selection:text-cyan-400">
        <Providers>
          <div className="scroll-progress-bar" id="scroll-progress" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
