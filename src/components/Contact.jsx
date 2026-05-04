import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option>Air Freight</option>
                    <option>Ocean Freight</option>
                    <option>LCL (Less Container Load)</option>
                    <option>Courier</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div data-aos="fade-left" className="space-y-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="w-6 h-6 text-accent"
                    aria-label="Address"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Address</h3>
                  <a
                    href="https://maps.google.com/?q=Jl.+Catelya+Garden+No.+15+Banyumanik,+Semarang,+Central+Java+Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors"
                  >
                    Jl. Catelya Garden No. 15 Banyumanik, Semarang, Central
                    Java, Indonesia
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" aria-label="Phone" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Phone</h3>
                  <p className="text-gray-600">+62 21 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" aria-label="Email" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">Email</h3>
                  <a
                    href="mailto:inquiry@maucargo.com"
                    className="text-gray-600 hover:text-accent transition-colors"
                  >
                    inquiry@maucargo.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                title="MAUCargo Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.764448254082!2d110.41661907585377!3d-6.983198968353668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b2a3e06979d%3A0x70c18e358d93a230!2sJl.%20Catelya%20Garden%2C%20Banyumanik%2C%20Semarang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1714790000000!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
