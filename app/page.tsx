import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import FeaturedFilm from "@/components/home/FeaturedFilm";
import WeddingProcess from "@/components/home/WeddingProcess";
import Testimonials from "@/components/home/Testimonials";
import Statistics from "@/components/home/Statistics";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioGrid limit={9} />
      <FeaturedFilm />
      <WeddingProcess />
      <Testimonials />
      <Statistics />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
