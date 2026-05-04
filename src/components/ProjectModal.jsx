import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectModal = ({ isOpen, onClose, project, language }) => {
  const backdropRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    gsap.set(backdropRef.current, { opacity: 0 });
    gsap.set(modalRef.current, { opacity: 0, scale: 0.8, y: 12 });

    const tl = gsap.timeline();
    tl.to(backdropRef.current, { opacity: 1, duration: 0.25, ease: "power2.out" })
      .to(
        modalRef.current,
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power3.out" },
        "-=0.1",
      );

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      tl.kill();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) {
    return null;
  }

  const content = project.content[language] ?? project.content.en;
  const labels = project.labels[language] ?? project.labels.en;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        ref={backdropRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-label="Close modal"
      />

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={content.title}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-gray-200">
          <div className="min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-navy truncate">
              {content.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{content.shortDesc}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-navy" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(85vh-76px)]">
          <div className="p-6">
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={12}
                slidesPerView={1}
              >
                {project.gallery.map((img) => (
                  <SwiperSlide key={img.src}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-56 sm:h-72 object-cover"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2">
                <div className="space-y-5">
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      {labels.challenge}
                    </div>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      {content.details.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      {labels.solution}
                    </div>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      {content.details.solution}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">
                      {labels.result}
                    </div>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      {content.details.result}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 h-fit">
                <div className="text-sm font-bold text-navy mb-4">
                  {labels.metadataTitle}
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-gray-500">{labels.serviceType}</div>
                    <div className="text-navy font-medium text-right">
                      {content.meta.serviceType}
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-gray-500">{labels.route}</div>
                    <div className="text-navy font-medium text-right">
                      {content.meta.route}
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-gray-500">{labels.status}</div>
                    <div className="text-navy font-medium text-right">
                      {content.meta.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
