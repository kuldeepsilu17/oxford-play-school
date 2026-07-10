// src/app/contact-us/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo-config";
import { SEO_CONFIG } from "@/lib/seo-config";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = generateSeoMetadata({
  title: "Contact Oxford Play School | Get in Touch - Tibbi, Hanumangarh",
  description: "Contact Oxford Play School for admissions, inquiries, and school information. Phone, email, and location details for the best play school in Tibbi, Hanumangarh.",
  canonical: "https://oxfordplayschool.com/contact-us"
});

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We'd love to hear from you. Reach out with any questions about admissions or our school."
      />

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Location</h3>
                    <p className="text-gray-700">Khara Kheda, Tibbi Tehsil,</p>
                    <p className="text-gray-700">Hanumangarh District, Rajasthan 335523</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <a href={`tel:${SEO_CONFIG.school.phone}`} className="text-purple-600 hover:underline">
                      {SEO_CONFIG.school.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a href={`mailto:${SEO_CONFIG.school.email}`} className="text-purple-600 hover:underline">
                      {SEO_CONFIG.school.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${SEO_CONFIG.school.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:underline"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-2">School Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 12:30 PM</p>
                    <p className="text-gray-700">Saturday: 8:00 AM - 11:30 AM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    placeholder="Message subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Your message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us on Map</h2>
          <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.0!2d74.3045!3d29.4242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3933f6b6b6b6b6b7%3A0x0!2sKhara%20Kheda%2C%20Tibbi%2C%20Hanumangarh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height={400}
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
