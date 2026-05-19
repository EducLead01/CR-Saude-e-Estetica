import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BannerSection } from "@/components/BannerSection";
import { AboutSection } from "@/components/AboutSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <TreatmentsSection />
        <LocationsSection />
        <TestimonialsSection />
        <BannerSection />
        <AboutSection />
        <NewsletterSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
