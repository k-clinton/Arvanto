import { HeroSection } from "@/components/home/HeroSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { SolutionsGrid } from "@/components/home/SolutionsGrid";
import { AdvisorySpotlight } from "@/components/home/AdvisorySpotlight";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { VideoBanner } from "@/components/home/VideoBanner";
import { MethodologyFAQ } from "@/components/home/MethodologyFAQ";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <SolutionsGrid />
      <AdvisorySpotlight />
      <TestimonialsSection />
      <InsightsSection />
      <VideoBanner />
      <MethodologyFAQ />
    </>
  );
}
