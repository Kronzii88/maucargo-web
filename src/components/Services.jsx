import { Plane, Ship, Package, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description:
        "In addition to fast, reliable service, we strive to provide tailored solutions dependent on the cargo specifications and the needs of our customers.",
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description:
        "Maritime transport is one of the most economical options for transporting large shipments. Container shipping involves delivery to the destination without reloading, without the risk of damage, even with the change of vehicle. On the fact of delivery of the cargo at the port, we provide an overload on road or rail transport with further delivery to the final recipient. Our company has practical experience with sea and river ports in shipping industrial goods.",
    },
    {
      icon: Package,
      title: "LCL (Less Container Load)",
      description:
        "There comes a point in every shipper’s life when they start daydreaming about container interior dimensions and consolidation centers. Well, maybe not daydreaming. But at least realizing that it’s time to decide if LCL shipping is right for them. If you have smaller freight shipments, take a look at this guide to learn all about LCL shipping. This guide will cover what it costs, how long it takes, how LCL compares to other modes, and more. You’re one step closer to getting your goods moving.",
    },
    {
      icon: Truck,
      title: "Courier",
      description:
        "Courier (from English: courier, French: courrier/coursier, also known as courier service) is a company or individual in charge of sending messages, small to medium packages, or letters from one place to another using land routes, sea and air.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
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
                    aria-label={service.title}
                  />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.description}
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
