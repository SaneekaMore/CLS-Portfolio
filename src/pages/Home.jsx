import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import Services from "../components/sections/Services";
import FeaturedReel from "../components/sections/FeaturedReel";
import WorkSection from "../components/sections/WorkSection";
import TeamSection from "../components/sections/TeamSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <FeaturedReel />
      <WorkSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;