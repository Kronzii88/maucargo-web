import { useState, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import AOS from "aos";
import { LanguageProvider } from "./contexts/LanguageContext";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quad",
      once: false,
    });
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <LanguageProvider>
      <HelmetProvider>
        <Helmet>
          <title>
            MAUCargo - Your Trusted Export-Import Forwarding Partner
          </title>
          <meta
            name="description"
            content="PT Mega Anugrah Utama (MAUCargo) provides tailored, reliable, and cost-effective export-import solutions across land, sea, and air."
          />
        </Helmet>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
