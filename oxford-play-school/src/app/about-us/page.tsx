// src/app/about-us/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo-config";
import { breadcrumbSchema } from "@/lib/schema";
import Script from "next/script";
import { Users, Award, Heart, BookOpen } from "lucide-react";

export const metadata: Metadata = generateSeoMetadata({
  title: "About Oxford Play School | Quality Education in Tibbi, Hanumangarh",
  description: "Learn about Oxford Play School's mission, vision, experienced teachers, and commitment to providing quality early childhood education in Tibbi, Hanumangarh, Rajasthan.",
  canonical: "https://oxfordplayschool.com/about-us"
});

export default function AboutPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "About Us", url: "/about-us" }
            ])
          )
        }}
      />

      <Hero
        title="About Oxford Play School"
        subtitle="Our Story & Mission"
        description="Dedicated to providing quality early childhood education with love, care, and modern learning methods."
      />

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Our Mission & Vision</h1>
            <p className="text-xl text-gray-700 mb-6">
              At Oxford Play School in Khara Kheda, Tibbi, we believe that early childhood education is the foundation for lifelong learning and personal development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-purple-600">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide quality, activity-based early childhood education that develops each child&apos;s cognitive, social, emotional, and physical abilities in a safe, nurturing, and loving environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the leading play school in Hanumangarh region, known for creating confident, curious, creative, and compassionate learners prepared for academic and personal success.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="text-red-500" size={40} />,
                title: "Love & Care",
                description: "We treat every child with love and provide a caring environment that feels like home."
              },
              {
                icon: <BookOpen className="text-blue-500" size={40} />,
                title: "Quality Education",
                description: "We focus on activity-based learning that develops critical thinking and creativity."
              },
              {
                icon: <Award className="text-yellow-500" size={40} />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from facilities to teaching methods."
              },
              {
                icon: <Users className="text-green-500" size={40} />,
                title: "Community",
                description: "We build strong partnerships between school, parents, and community."
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Parents Choose Us</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { title: "B.Ed Qualified Teachers", description: "All our teachers are B.Ed qualified with specialized training in early childhood education." },
              { title: "Activity-Based Learning", description: "We focus on hands-on learning through activities, play, and exploration." },
              { title: "Safe & Secure", description: "CCTV surveillance, trained staff, and strict safety protocols ensure your child's safety." },
              { title: "Transportation Facility", description: "Comfortable and safe school bus service covering nearby villages." },
              { title: "Holistic Development", description: "We focus on cognitive, social, emotional, and physical development of each child." },
              { title: "Affordable Fees", description: "Quality education at reasonable fees with flexible payment options." }
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
