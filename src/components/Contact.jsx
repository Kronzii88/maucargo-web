import { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Replace this URL with your Google Apps Script web app URL
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzPd2c-NgTtOe6jSDm3wy_QtP7eqjQqL-DJTzWFxwg1sSUqTuiCDmH4Hm2qtmTWFALY/exec";

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error(err.stack);
      setError(t("contact.error") || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-gray-600">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    {t("contact.successTitle") || "Message Sent!"}
                  </h3>
                  <p className="text-gray-600">
                    {t("contact.successMessage") ||
                      "Thank you for your message. We will get back to you soon!"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder={t("contact.name")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder={t("contact.email")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder={t("contact.message")}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accentDark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? t("contact.sending") || "Sending..."
                      : t("contact.send")}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div data-aos="fade-left" className="space-y-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="w-6 h-6 text-accent"
                    aria-label={t("contact.info.address")}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    {t("contact.info.address")}
                  </h3>
                  <a
                    href="https://maps.google.com/?q=Jl.+Catelya+Garden+No.+15+Banyumanik,+Semarang,+Central+Java+Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent transition-colors"
                    title="Lihat lokasi kantor MAUCargo di Google Maps"
                  >
                    Jl. Catelya Garden No. 15 Banyumanik, Semarang, Central
                    Java, Indonesia
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone
                    className="w-6 h-6 text-accent"
                    aria-label={t("contact.info.phone")}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    {t("contact.info.phone")}
                  </h3>
                  <p className="text-gray-600">+62 21 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail
                    className="w-6 h-6 text-accent"
                    aria-label={t("contact.info.email")}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">
                    {t("contact.info.email")}
                  </h3>
                  <a
                    href="mailto:inquiry@maucargo.com"
                    className="text-gray-600 hover:text-accent transition-colors"
                    title="Kirim email ke MAUCargo"
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
