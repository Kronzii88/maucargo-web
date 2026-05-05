import { useState, useEffect, lazy, Suspense } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import AOS from "aos";
import { LanguageProvider } from "./contexts/LanguageContext";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Services = lazy(() => import("./components/Services"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

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
            Jasa Forwarder Semarang Terpercaya | PT Mega Anugrah Utama
            (MAUCargo)
          </title>
          <meta
            name="description"
            content="MAUCargo menyediakan jasa forwarder Semarang terbaik untuk ekspor-impor. Layanan pengiriman kargo laut (Ocean Freight), udara (Air Freight), dan LCL dengan harga kompetitif dan aman."
          />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PT Mega Anugrah Utama",
              description:
                "MAUCargo menyediakan jasa forwarder Semarang terbaik untuk ekspor-impor. Layanan pengiriman kargo laut (Ocean Freight), udara (Air Freight), dan LCL dengan harga kompetitif dan aman.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Catelya Garden No. 15 Banyumanik",
                addressLocality: "Semarang",
                addressRegion: "Central Java",
                addressCountry: "ID",
              },
              telephone: "+62 21 1234 5678",
              url: window.location.origin,
              areaServed: ["Indonesia", "International"],
              serviceType: "Freight Forwarding",
            })}
          </script>
        </Helmet>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div className="min-h-[200px]"></div>}>
              <Services />
            </Suspense>
            <Suspense fallback={<div className="min-h-[200px]"></div>}>
              <WhyChooseUs />
            </Suspense>
            <Suspense fallback={<div className="min-h-[200px]"></div>}>
              <Portfolio />
            </Suspense>
            <Suspense fallback={<div className="min-h-[200px]"></div>}>
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={<div className="min-h-[100px]"></div>}>
            <Footer />
          </Suspense>
        </div>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
