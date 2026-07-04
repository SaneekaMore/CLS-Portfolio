import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FeaturedReel from "./components/sections/FeaturedReel";
import Work from "./components/sections/Work";
import Services from "./components/sections/Services";
import Clients from "./components/sections/Clients";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedReel />
      <Work />
      <Services />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;