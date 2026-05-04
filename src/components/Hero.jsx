import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { MessageCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useLanguage } from "../contexts/LanguageContext";
import warehouseImage from "../assets/7.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const aboutTextRef = useRef(null);
  const trustRef = useRef(null);
  const ctaRef = useRef(null);
  const carouselRef = useRef(null);
  const particlesContainerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.fromTo(
      badgeRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    )
      .fromTo(
        h1Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        aboutTextRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        trustRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        ctaRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      )
      .fromTo(
        carouselRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=0.5",
      );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(particlesContainerRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const isMobile = window.innerWidth < 1024;
    if (!isMobile) {
      gsap.to(leftColumnRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(rightColumnRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.3,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        line_linked: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: false,
          straight: false,
          outMode: "out",
          bounce: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.2,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
      alt: "Ocean Freight",
    },
    {
      url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      alt: "Air Freight",
    },
    {
      url: warehouseImage,
      alt: "Warehouse/LCL",
    },
    {
      url: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
      alt: "Truck/Courier",
    },
  ];

  return (
    <section
      ref={heroSectionRef}
      id="home"
      className="relative bg-navy overflow-hidden pt-20 min-h-screen flex items-center"
    >
      <div ref={particlesContainerRef} className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
        <div className="absolute inset-0 bg-navy/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={leftColumnRef} className="text-center lg:text-left">
            <div
              ref={badgeRef}
              className="inline-block mb-6 px-4 py-2 bg-accent/20 rounded-full"
            >
              <span className="text-accent font-semibold text-sm">
                {t("hero.badge")}
              </span>
            </div>
            <h1
              ref={h1Ref}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {t("hero.title")}
            </h1>
            <p
              ref={aboutTextRef}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              {t("hero.description")}
            </p>
            <div
              ref={trustRef}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <span className="text-gray-300 font-medium flex items-center gap-2">
                ✓ {t("hero.trust1")}
              </span>
              <span className="text-gray-300 font-medium flex items-center gap-2">
                •
              </span>
              <span className="text-gray-300 font-medium flex items-center gap-2">
                ✓ {t("hero.trust2")}
              </span>
              <span className="text-gray-300 font-medium flex items-center gap-2">
                •
              </span>
              <span className="text-gray-300 font-medium flex items-center gap-2">
                ✓ {t("hero.trust3")}
              </span>
            </div>
            <div ref={ctaRef}>
              <a
                href="https://wa.me/6281234567890?text=Hello%20MAUCargo,%20I%20am%20interested%20in%20your%20forwarding%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accentDark transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center lg:justify-start gap-2 w-full sm:w-auto"
              >
                <MessageCircle size={24} aria-label="WhatsApp Icon" />
                {t("hero.cta")}
              </a>
            </div>
          </div>

          <div
            ref={(el) => {
              rightColumnRef.current = el;
              carouselRef.current = el;
            }}
            className="w-full"
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              {carouselImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
