// src/app/transport-facility/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { generateMetadata as generateSeoMetadata, SEO_CONFIG } from "@/lib/seo-config";
import { Bus, Shield, Users, MapPin, Clock, Phone } from "lucide-react";

export const metadata: Metadata = generateSeoMetadata({
  title: "School Bus & Transport Facility | Oxford Play School Tibbi",
  description: "Learn about safe and comfortable school bus transport services at Oxford Play School covering nearby villages in Tibbi and Hanumangarh Rajasthan.",
  canonical: "https://oxfordplayschool.com/transport-facility"
});

export default function TransportPage() {
  const safetyFeatures = [
    {
      icon: <Shield className="text-purple-600" size={32} />,
      title: "GPS Tracking & Speed Limiters",
      description: "Our school buses are equipped with real-time GPS tracking and strict speed governors for high passenger security."
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: "Trained Drivers & Attendants",
      description: "Every bus has a qualified, background-verified driver and a caring assistant to guide children safely during the commute."
    },
    {
      icon: <Clock className="text-green-600" size={32} />,
      title: "Punctual Timing & Alerts",
      description: "We maintain highly reliable pick-up and drop schedules, ensuring students reach school refreshed and ready to learn."
    }
  ];

  const villagesCovered = [
    "Khara Kheda (School Location)",
    "Tibbi Town",
    "Surewala",
    "Ratanpura",
    "Silwala Khurd",
    "Talwara Jhil",
    "Masitawali Head",
    "Sabji Mandi Road & Nearby Areas"
  ];

  return (
    <>
      <Hero
        title="School Bus Facility"
        subtitle="Safe & Comfortable Commute"
        description="Providing convenient and secure transport services for students across Tibbi and surrounding villages."
        backgroundImage="/images/school-bus.jpg"
      />

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-800">Our Commute Philosophy</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Oxford Play School, child safety is our highest priority. We understand the concern of parents regarding transportation. Our school bus fleet is custom-designed, highly maintained, and operated by professional staff to ensure a secure, stress-free journey.
              </p>
              
              <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                  <Bus className="text-purple-600" /> Key Transport Highlights
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Safe speed limit monitoring (under 40 km/h)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> First aid kits and emergency fire extinguishers on board
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Strict attendance log during pickup and drop
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Comfortable and spacious individual seating for kids
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/school-bus.jpg"
                alt="School bus safety and transportation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">Safety & Crew Features</h2>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Ensuring a safe journey for your children with modern equipment and trained personnel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {safetyFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
                <div className="mb-4 flex justify-start">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="order-2 lg:order-1 relative h-[350px] rounded-2xl overflow-hidden shadow-lg bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.0!2d74.3045!3d29.4242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3933f6b6b6b6b6b7%3A0x0!2sKhara%20Kheda%2C%20Tibbi%2C%20Hanumangarh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 text-slate-800">Village Coverage & Routes</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our buses safely travel along routes connecting key residential communities in the Hanumangarh region, pick-and-dropping children directly at secure spots near their homes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {villagesCovered.map((village, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-purple-50 p-4 rounded-xl border border-purple-100/50">
                    <MapPin className="text-purple-600 flex-shrink-0" size={20} />
                    <span className="font-semibold text-slate-700 text-sm">{village}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-purple-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Need Transport Services?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Ensure an easy and reliable commute for your child. Speak with our transport coordinator to check route timings and secure a seat today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${SEO_CONFIG.school.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition shadow"
            >
              <Phone size={18} />
              Call Coordinator
            </a>
            <a
              href="/contact-us"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition"
            >
              Contact Transport Team
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
