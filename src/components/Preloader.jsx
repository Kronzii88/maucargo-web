import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Plane } from "lucide-react";

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const lettersRef = useRef([]);
  const lineRef = useRef(null);
  const planeRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          left: e.clientX,
          top: e.clientY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.easeInOut",
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    tl.fromTo(
      lettersRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power3.inOut" },
        "-=0.2",
      )
      .fromTo(
        planeRef.current,
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1.2, ease: "power3.inOut" },
        "<",
      )
      .to({}, { duration: 0.5 });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      tl.kill();
    };
  }, [onComplete]);

  const text = "MAUCargo";

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "#062A5C" }}
    >
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-64 h-64 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(47,143,212,0.55) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="flex flex-col items-center">
        <div className="flex mb-8">
          {text.split("").map((letter, index) => (
            <span
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className="text-4xl sm:text-6xl font-bold text-white"
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="relative w-48 sm:w-72">
          <div
            ref={lineRef}
            className="h-1 bg-white/30 origin-left"
          />
          <div
            ref={planeRef}
            className="absolute top-1/2 -translate-y-1/2 text-white"
          >
            <Plane size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
