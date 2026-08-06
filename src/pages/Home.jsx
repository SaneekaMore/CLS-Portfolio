import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import WorkSection from "../components/sections/WorkSection";
import FeaturedReel from "../components/sections/FeaturedReel";
import Services from "../components/sections/Services";
import TeamSection from "../components/sections/TeamSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Hero />

      {/* Who are we */}
      <AboutSection />

      {/* Selected Work */}
      <WorkSection />

      {/* Featured Reel */}
      <FeaturedReel />

      {/* Services */}
      <Services />

      {/* The Studio */}
      <TeamSection />

      {/* Q&A */}
      <FAQSection />

      {/* Contact */}
      <CTASection />

      <Footer />
    </>
  );
}

export default Home;