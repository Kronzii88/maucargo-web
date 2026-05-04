import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    'Tailored Solutions',
    'Cost-Effective Transport',
    'Secure & Safe',
    'Global Network',
  ];

  return (
    <section id="whyus" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-navy/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose MAUCargo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" aria-label="Checkmark" />
              <h3 className="text-xl font-bold text-white">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
