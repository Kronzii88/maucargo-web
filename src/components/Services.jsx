import { Plane, Ship, Truck, Warehouse, FileText, Shield } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Ship,
      key: "oceanFreight",
    },
    {
      icon: Plane,
      key: "airFreight",
    },
    {
      icon: Truck,
      key: "landTransport",
    },
    {
      icon: Warehouse,
      key: "warehousing",
    },
    {
      icon: FileText,
      key: "customsClearance",
    },
    {
      icon: Shield,
      key: "insurance",
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            {t("services.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Icon
                    className="w-8 h-8 text-accent"
                    aria-label={t(`services.${service.key}.title`)}
                  />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
