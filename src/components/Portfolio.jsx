import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../contexts/LanguageContext";
import industrialImage from "../assets/7.jpg";
import ProjectModal from "./ProjectModal";

const Portfolio = () => {
  const { language, toggleLanguage } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const statsSectionRef = useRef(null);
  const counterRefs = useRef([]);

  const copy = useMemo(
    () => ({
      title: {
        en: "Portfolio & Success Stories",
        id: "Portofolio & Kisah Sukses",
      },
      subtitle: {
        en: "Proof of performance across ocean, air, and multi-modal shipments. Built for reliability, speed, and clear end-to-end execution.",
        id: "Bukti performa pengiriman laut, udara, dan multi-moda. Dibangun untuk keandalan, kecepatan, dan eksekusi ujung-ke-ujung yang jelas.",
      },
      toggle: { en: "EN", id: "ID" },
      viewDetails: { en: "View Details", id: "Lihat Detail" },
      kpis: [
        {
          value: 800,
          suffix: "+",
          decimals: 0,
          title: { en: "Containers Shipped", id: "Kontainer Terkirim" },
          label: { en: "Yearly Ocean Freight Volume", id: "Volume Tahunan Ocean Freight" },
        },
        {
          value: 150,
          suffix: "+",
          decimals: 0,
          title: { en: "Tons Cargo Handled", id: "Ton Kargo Ditangani" },
          label: { en: "Air Freight Efficiency", id: "Efisiensi Air Freight" },
        },
        {
          value: 25,
          suffix: "+",
          decimals: 0,
          title: { en: "Major Destinations", id: "Destinasi Utama" },
          label: { en: "Worldwide Network", id: "Jaringan Global" },
        },
        {
          value: 99.9,
          suffix: "%",
          decimals: 1,
          title: { en: "On-Time Delivery", id: "Pengiriman Tepat Waktu" },
          label: { en: "Reliability Rate", id: "Tingkat Keandalan" },
        },
      ],
      modalLabels: {
        en: {
          challenge: "Challenge",
          solution: "Solution",
          result: "Result",
          metadataTitle: "Project Details",
          serviceType: "Service Type",
          route: "Origin/Destination",
          status: "Status",
        },
        id: {
          challenge: "Tantangan",
          solution: "Solusi",
          result: "Hasil",
          metadataTitle: "Detail Proyek",
          serviceType: "Jenis Layanan",
          route: "Asal/Tujuan",
          status: "Status",
        },
      },
    }),
    [],
  );

  const projects = useMemo(
    () => [
      {
        id: "industrial",
        cover: industrialImage,
        coverAlt: "MAUCargo Success Story - Industrial Machinery Export to Germany",
        gallery: [
          {
            src: industrialImage,
            alt: "MAUCargo Success Story - Industrial Machinery Export to Germany (1)",
          },
          {
            src: "https://source.unsplash.com/featured/1200x800/?industrial,machinery,shipping",
            alt: "MAUCargo Success Story - Industrial Machinery Export to Germany (2)",
          },
          {
            src: "https://source.unsplash.com/featured/1200x800/?container,port,logistics",
            alt: "MAUCargo Success Story - Industrial Machinery Export to Germany (3)",
          },
        ],
        content: {
          en: {
            title: "Industrial Machinery Export to Germany",
            shortDesc:
              "Handling end-to-end logistics for 50-ton industrial components. We managed heavy-lift transport, custom clearance, and international sea freight.",
            details: {
              challenge:
                "Oversized, heavy cargo required strict lift planning, secure packing, and precise scheduling across multiple stakeholders to avoid demurrage and delays.",
              solution:
                "We coordinated heavy-lift trucking, port handling, and export customs clearance with detailed documentation and milestone-based tracking throughout the move.",
              result:
                "Cargo shipped on schedule with compliant documentation, safe handling, and clear visibility from pickup to arrival in Germany.",
            },
            meta: {
              serviceType: "Heavy-lift + Ocean Freight (FCL)",
              route: "Indonesia → Germany",
              status: "Completed",
            },
          },
          id: {
            title: "Ekspor Mesin Industri ke Jerman",
            shortDesc:
              "Menangani logistik ujung-ke-ujung untuk komponen industri seberat 50 ton. Kami mengelola transportasi angkutan berat, bea cukai, dan pengiriman laut internasional.",
            details: {
              challenge:
                "Kargo oversized dan berat membutuhkan perencanaan lifting yang ketat, pengemasan aman, serta penjadwalan presisi lintas pihak untuk menghindari demurrage dan keterlambatan.",
              solution:
                "Kami mengoordinasikan truk heavy-lift, penanganan pelabuhan, dan bea cukai ekspor dengan dokumentasi lengkap serta pelacakan berbasis milestone.",
              result:
                "Kargo berangkat sesuai jadwal dengan dokumen patuh regulasi, penanganan aman, dan visibilitas jelas dari pickup hingga tiba di Jerman.",
            },
            meta: {
              serviceType: "Heavy-lift + Ocean Freight (FCL)",
              route: "Indonesia → Jerman",
              status: "Selesai",
            },
          },
        },
      },
      {
        id: "technology",
        cover: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
        coverAlt: "MAUCargo Success Story - Tech Component Import from China",
        gallery: [
          {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
            alt: "MAUCargo Success Story - Tech Component Import from China (1)",
          },
          {
            src: "https://source.unsplash.com/featured/1200x800/?air-cargo,freight,airport",
            alt: "MAUCargo Success Story - Tech Component Import from China (2)",
          },
          {
            src: "https://source.unsplash.com/featured/1200x800/?electronics,components,warehouse",
            alt: "MAUCargo Success Story - Tech Component Import from China (3)",
          },
        ],
        content: {
          en: {
            title: "Tech Component Import from China",
            shortDesc:
              "Fast-track air freight delivery for high-value electronic components. Ensuring zero-damage and rapid door-to-door distribution.",
            details: {
              challenge:
                "High-value electronics required fast transit, controlled handling, and tight documentation to prevent inspection delays and damage risk.",
              solution:
                "We prioritized air freight lanes, prepared clearance documentation early, and managed secure last-mile delivery with handling SOPs.",
              result:
                "Rapid door-to-door delivery with zero-damage handling and predictable arrival for production timelines.",
            },
            meta: {
              serviceType: "Air Freight + Customs Clearance",
              route: "China → Indonesia",
              status: "Completed",
            },
          },
          id: {
            title: "Impor Komponen Teknologi dari China",
            shortDesc:
              "Pengiriman kargo udara jalur cepat untuk komponen elektronik bernilai tinggi. Memastikan nol kerusakan dan distribusi pintu-ke-pintu yang cepat.",
            details: {
              challenge:
                "Elektronik bernilai tinggi membutuhkan transit cepat, penanganan terkontrol, dan dokumen ketat agar tidak tertahan inspeksi serta meminimalkan risiko kerusakan.",
              solution:
                "Kami memprioritaskan jalur air freight, menyiapkan dokumen clearance lebih awal, dan mengelola pengantaran last-mile yang aman dengan SOP penanganan.",
              result:
                "Pengiriman pintu-ke-pintu yang cepat dengan penanganan nol kerusakan dan estimasi kedatangan yang stabil untuk kebutuhan produksi.",
            },
            meta: {
              serviceType: "Air Freight + Bea Cukai",
              route: "China → Indonesia",
              status: "Selesai",
            },
          },
        },
      },
      {
        id: "sme",
        cover: "https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&w=900&q=80",
        coverAlt: "MAUCargo Success Story - FMCG Distribution to Middle East",
        gallery: [
          {
            src: "https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&w=1200&q=80",
            alt: "MAUCargo Success Story - FMCG Distribution to Middle East (1)",
          },
          {
            src: "https://source.unsplash.com/featured/1200x800/?fmcg,warehouse,logistics",
            alt: "MAUCargo Success Story - FMCG Distribution to Middle East (2)",
          },
          {
            src: "https://source.unsplash.com/featured/1200x800/?shipping,containers,stack",
            alt: "MAUCargo Success Story - FMCG Distribution to Middle East (3)",
          },
        ],
        content: {
          en: {
            title: "FMCG Distribution to Middle East",
            shortDesc:
              "Cost-optimized LCL consolidation for consumer goods. Strategic routing to minimize transit time and maximize cost efficiency for SMEs.",
            details: {
              challenge:
                "SME shipments needed lower costs without sacrificing reliability, requiring careful consolidation planning and route optimization.",
              solution:
                "We consolidated LCL shipments, synchronized documentation, and optimized routing based on sailing schedules and destination requirements.",
              result:
                "Reduced shipping cost per unit with consistent lead times, helping SMEs scale distribution to Middle East markets.",
            },
            meta: {
              serviceType: "LCL Consolidation + Ocean Freight",
              route: "Indonesia → Middle East",
              status: "Ongoing",
            },
          },
          id: {
            title: "Distribusi FMCG ke Timur Tengah",
            shortDesc:
              "Konsolidasi LCL yang dioptimalkan biaya untuk barang konsumsi. Perutean strategis untuk meminimalkan waktu transit dan memaksimalkan efisiensi biaya bagi UMKM.",
            details: {
              challenge:
                "Pengiriman UMKM membutuhkan biaya lebih rendah tanpa mengorbankan keandalan, sehingga perlu perencanaan konsolidasi dan optimasi rute yang tepat.",
              solution:
                "Kami mengonsolidasikan pengiriman LCL, menyelaraskan dokumentasi, dan mengoptimalkan rute berdasarkan jadwal kapal serta kebutuhan tujuan.",
              result:
                "Biaya kirim per unit lebih rendah dengan lead time yang konsisten, membantu UMKM memperluas distribusi ke pasar Timur Tengah.",
            },
            meta: {
              serviceType: "Konsolidasi LCL + Ocean Freight",
              route: "Indonesia → Timur Tengah",
              status: "Berjalan",
            },
          },
        },
      },
    ],
    [industrialImage],
  );

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) ?? null,
    [projects, selectedProjectId],
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const formatValue = (value, decimals) => {
      if (decimals > 0) {
        return Number(value).toFixed(decimals);
      }
      return String(Math.round(Number(value)));
    };

    const trigger = ScrollTrigger.create({
      trigger: statsSectionRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        copy.kpis.forEach((kpi, index) => {
          const el = counterRefs.current[index];
          if (!el) {
            return;
          }

          const state = { value: 0 };
          gsap.to(state, {
            value: kpi.value,
            duration: 2,
            ease: "power2.out",
            delay: index * 0.08,
            onUpdate: () => {
              el.textContent = `${formatValue(state.value, kpi.decimals)}${kpi.suffix}`;
            },
          });
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [copy.kpis]);

  const onCardClick = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const onClose = () => {
    setSelectedProjectId(null);
  };

  const activeLanguage = language === "id" ? "id" : "en";

  return (
    <>
      <section id="portfolio" className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-start justify-between gap-6 mb-10">
            <div data-aos="fade-up" className="text-center sm:text-left w-full">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                {copy.title[activeLanguage]}
              </h2>
              <p className="text-gray-600 max-w-3xl mt-3">
                {copy.subtitle[activeLanguage]}
              </p>
            </div>

            <div className="shrink-0">
              <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => {
                    if (language !== "en") {
                      toggleLanguage();
                    }
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${activeLanguage === "en" ? "bg-navy text-white" : "text-navy hover:bg-gray-50"}`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (language !== "id") {
                      toggleLanguage();
                    }
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${activeLanguage === "id" ? "bg-navy text-white" : "text-navy hover:bg-gray-50"}`}
                >
                  ID
                </button>
              </div>
            </div>
          </div>

          <div
            ref={statsSectionRef}
            className="rounded-2xl bg-[#0F172A] border border-white/10 shadow-2xl p-8 sm:p-10 mb-14"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {copy.kpis.map((kpi, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/5 border border-white/10 p-6"
                >
                  <div
                    ref={(el) => (counterRefs.current[index] = el)}
                    className="text-3xl sm:text-4xl font-extrabold text-orange-400"
                  >
                    {kpi.suffix === "%" ? "0%" : "0+"}
                  </div>
                  <div className="text-white font-semibold mt-2">
                    {kpi.title[activeLanguage]}
                  </div>
                  <div className="text-white/70 text-sm mt-1">
                    {kpi.label[activeLanguage]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const content = project.content[activeLanguage] ?? project.content.en;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => onCardClick(project.id)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="text-left bg-white rounded-2xl border border-gray-200 shadow-sm hover:-translate-y-3 transition-transform overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={project.cover}
                      alt={`MAUCargo Success Story - ${content.title}`}
                      className="w-full h-44 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white font-semibold backdrop-blur-sm">
                        {copy.viewDetails[activeLanguage]}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {content.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={Boolean(selectedProject)}
        onClose={onClose}
        project={
          selectedProject
            ? { ...selectedProject, labels: copy.modalLabels }
            : null
        }
        language={activeLanguage}
      />
    </>
  );
};

export default Portfolio;
