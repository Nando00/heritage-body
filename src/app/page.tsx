import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { InsuranceSection } from "@/components/insurance-section";
import { InsurancePartners } from "@/components/insurance-partners";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { Reveal } from "@/components/reveal";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <Reveal>
        <ServicesSection />
      </Reveal>

      <Reveal>
        <AboutSection />
      </Reveal>

      <Reveal>
        <InsuranceSection />
      </Reveal>

      <Reveal>
        <InsurancePartners />
      </Reveal>

      <Reveal>
        <TestimonialsSection />
      </Reveal>

      <Reveal>
        <FAQSection />
      </Reveal>

      <Reveal>
        <ContactSection />
      </Reveal>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
