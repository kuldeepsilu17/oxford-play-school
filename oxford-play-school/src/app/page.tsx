// src/app/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import { School, Award, Users, Smile, BookOpen, Bus, Heart } from "lucide-react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo-config";
import { schoolSchema, organizationSchema, faqSchema } from "@/lib/schema";
import { faqs } from "@/lib/faq-data";
import Script from "next/script";

export const metadata: Metadata = generateSeoMetadata({
  title: "Oxford Play School | Best Play School in Tibbi, Hanumangarh Rajasthan",
  description: "Oxford Play School offers quality early childhood education with activity-based learning, friendly environment, B.Ed qualified teachers, and safe transport in Tibbi, Hanumangarh, Rajasthan. Admissions Open 2026.",
  keywords: "best play school in Tibbi, best school in Hanumangarh, Oxford Play School, nursery school Rajasthan, preschool Tibbi, kids school Khara Kheda",
  canonical: "https://oxfordplayschool.com"
});

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent",
    image: "/images/testimonial-priya.jpg",
    text: "Oxford Play School has been wonderful for my daughter. The teachers are caring and the learning environment is fantastic. She loves going to school!",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    role: "Parent",
    image: "/images/testimonial-rajesh.jpg",
    text: "The bus facility and safety measures are top-notch. I feel confident sending my son to Oxford Play School. Highly recommended!",
    rating: 5
  },
  {
    name: "Neha Patel",
    role: "Parent",
    image: "/images/testimonial-neha.jpg",
    text: "Excellent activity-based learning approach. My child has developed great confidence and social skills. Worth every penny!",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Parent",
    image: "/images/testimonial-vikram.jpg",
    text: "Best decision for our child's early education. The infrastructure is modern, teachers are trained professionals, and they genuinely care for every student!",
    rating: 5
  }
];

export default function Home() {
  return (
    <>
      <Script
        id="school-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
      />
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs.slice(0, 5).map(f => ({ question: f.question, answer: f.answer })))) }}
      />

      {/* Hero Section */}
      <Hero
        title="Welcome to Oxford Play School — A Place Where Learning Becomes Fun"
        subtitle="“Building Bright Futures with Love & Learning”"
        description="Providing quality education, caring teachers, safe transport, and a friendly learning environment in Khara Kheda, Tibbi, Hanumangarh, Rajasthan. Admissions Open for 2026."
        cta={{ text: "Admission Open", href: "/admissions" }}
        secondaryCta={{ text: "Contact Us", href: "/contact-us" }}
        scrollTo="#about"
        dynamicBg={true}
      />

      {/* About Section */}
      <AnimatedSection
        id="about"
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-800">Why Choose Oxford Play School?</h2>
              <p className="text-lg text-gray-700 mb-4 font-semibold text-purple-700">
                “Building Bright Futures with Love & Learning”
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Oxford Play School provides quality education with a friendly and caring environment. Our B.Ed graduate teachers focus on both education and moral values. Students learn with happiness, discipline, creativity, and confidence.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our activity-based learning approach, combined with experienced B.Ed qualified teachers, ensures each child&apos;s holistic development and prepares them for future success.
              </p>
              <ul className="space-y-3">
                {[
                  "B.Ed Qualified & Experienced Teachers",
                  "Activity-Based Learning Curriculum",
                  "Safe & Secure Environment with CCTV",
                  "School Bus Facility Available",
                  "Nutritious Meals Provided Daily",
                  "Modern Learning Infrastructure"
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/classroom-learning.png"
                alt="Oxford Play School classroom with children learning"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection
        id="facilities"
        className="py-8 sm:py-12 md:py-16 bg-slate-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Our Facilities & Features</h2>
            <p className="text-xs sm:text-sm md:text-xl text-gray-600">Best-in-class infrastructure for comprehensive child development</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <FeatureCard
              icon={<BookOpen />}
              title="Smart Classrooms"
              description="Modern learning spaces with interactive educational materials, age-appropriate activities, and personalized attention for each child."
              delay={0}
            />
            <FeatureCard
              icon={<Bus />}
              title="Safe Transport"
              description="Comfortable school buses with trained attendants ensuring safe commute for students across Tibbi and surrounding areas."
              delay={0.1}
            />
            <FeatureCard
              icon={<Smile />}
              title="Friendly Environment"
              description="Nurturing atmosphere where children feel secure, loved, and encouraged to explore, learn, and grow at their own pace."
              delay={0.2}
            />
            <FeatureCard
              icon={<Heart />}
              title="Caring Teachers"
              description="B.Ed qualified educators with years of experience in early childhood education, trained to handle children with care and professionalism."
              delay={0.3}
            />
            <FeatureCard
              icon={<Award />}
              title="Quality Activities"
              description="Art, music, sports, outdoor play, and educational games designed to develop cognitive, physical, and social skills."
              delay={0.4}
            />
            <FeatureCard
              icon={<Users />}
              title="Small Class Size"
              description="Limited students per class ensuring individual attention, personalized feedback, and better learning outcomes for each child."
              delay={0.5}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Student Care Section */}
      <AnimatedSection className="py-8 sm:py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-slate-800">Caring Beyond Education</h2>
            <p className="text-xs sm:text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              How our dedicated teachers support and guide children during lunch, play, and daily school activities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-b from-purple-50 to-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-md border border-purple-100/50 hover:-translate-y-1 transition duration-300">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">🍱</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-slate-800">Healthy Eating Guidance</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Teachers sit with students during lunch hours, guiding them on eating properly, table manners, and developing healthy eating habits.
              </p>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-md border border-blue-100/50 hover:-translate-y-1 transition duration-300">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">🧼</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-slate-800">Cleanliness & Hygiene</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Students are actively taught personal hygiene, regular hand washing before and after meals, and self-discipline in keeping their campus clean.
              </p>
            </div>
            <div className="bg-gradient-to-b from-green-50 to-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-md border border-green-100/50 hover:-translate-y-1 transition duration-300">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">🤝</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-slate-800">Friendly Interactions</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Educators build warm, supportive, and friendly relationships with kids, helping them feel secure, happy, and confident at school.
              </p>
            </div>
            <div className="bg-gradient-to-b from-yellow-50 to-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-md border border-yellow-100/50 hover:-translate-y-1 transition duration-300">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">✨</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-slate-800">Good Manners & Values</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                We focus on instilling moral values, politeness, sharing, cooperation, and positive behavioral manners in every child.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Statistics Section */}
      <AnimatedSection className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { value: 500, suffix: "+", label: "Happy Students" },
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 20, suffix: "", label: "B.Ed Teachers" },
              { value: 100, suffix: "%", label: "Parent Satisfaction" }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm md:text-lg leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <Testimonials
        testimonials={testimonials}
        title="Parent Reviews"
      />

      {/* FAQ Section */}
      <FAQSection faqs={faqs.slice(0, 6)} />

      {/* CTA Section */}
      <AnimatedSection className="py-8 sm:py-12 md:py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">Ready to Start Your Child&apos;s Learning Journey?</h2>
          <p className="text-xs sm:text-sm md:text-xl mb-4 sm:mb-8 max-w-2xl mx-auto">
            Admissions are now open for the 2026 session. Join Oxford Play School and give your child the best start in life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="/admissions"
              className="bg-white text-purple-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3 text-xs sm:text-sm md:text-base rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Apply for Admission
            </a>
            <a
              href="/contact-us"
              className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3 text-xs sm:text-sm md:text-base rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
