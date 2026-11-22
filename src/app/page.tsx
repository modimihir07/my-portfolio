import { fetchGitHubTelemetry } from "@/lib/github";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoAbout } from "@/components/BentoAbout";
import { FeaturedSystems } from "@/components/FeaturedSystems";
import { GithubExplorer } from "@/components/GithubExplorer";
import { TechStack } from "@/components/TechStack";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

// ISR Revalidation every 3600 seconds
export const revalidate = 3600;

export default async function Home() {
  const telemetry = await fetchGitHubTelemetry();

  return (
    <main className="relative min-h-screen flex flex-col justify-between selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Ambience & Mouse Spotlight */}
      <BackgroundGrid />

      {/* Sticky Glass Navbar + ⌘K Command Palette */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="flex-1 flex flex-col">
        <Hero telemetry={telemetry} />
        <BentoAbout telemetry={telemetry} />
        <FeaturedSystems repos={telemetry.repos} />
        <GithubExplorer repos={telemetry.repos} />
        <TechStack />
        <JourneyTimeline />
        <ContactSection />
      </div>

      {/* Telemetry Footer */}
      <Footer />
    </main>
  );
}
