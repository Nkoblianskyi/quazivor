import AgeVerificationModal from "@/components/age-verification-modal"
import StructuredData from "./structured-data"
import HeroSection from "@/components/home/hero-section"
import GameFeatures from "@/components/home/game-features"
import GameplayPreview from "@/components/home/gameplay-preview"
import CharacterShowcase from "@/components/home/character-showcase"
import TestimonialSection from "@/components/home/testimonial-section"
import NewsletterSignup from "@/components/home/newsletter-signup"
import FaqSection from "@/components/home/faq-section"
import DownloadCta from "@/components/home/download-cta"
import ResponsibleGaming from "@/components/home/responsible-gaming"

export default function Home() {
  return (
    <>
      <StructuredData />
      <AgeVerificationModal />

      {/* Hero Section */}
      <HeroSection />

      {/* Game Features Section */}
      <GameFeatures />

      {/* Gameplay Preview Section */}
      <GameplayPreview />

      {/* Character Showcase Section */}
      <CharacterShowcase />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Newsletter Signup Section */}
      <NewsletterSignup />

      {/* FAQ Section */}
      <FaqSection />

      {/* Download CTA Section */}
      <DownloadCta />

      {/* Responsible Gaming Section */}
      <ResponsibleGaming />
    </>
  )
}
