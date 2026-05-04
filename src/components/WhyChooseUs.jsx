import { Clock, Truck, Globe, Headphones } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    { key: "experience", icon: Clock },
    { key: "reliability", icon: Truck },
    { key: "network", icon: Globe },
    { key: "customerService", icon: Headphones },
  ];

  return (
    <section id="whyus" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-navy/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("whyChooseUs.title")}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t("whyChooseUs.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Icon
                  className="w-12 h-12 text-accent mx-auto mb-4"
                  aria-label="Checkmark"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(`whyChooseUs.${feature.key}.title`)}
                </h3>
                <p className="text-gray-300 text-sm">
                  {t(`whyChooseUs.${feature.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
