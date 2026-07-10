// src/app/facilities/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo-config";
import { BookOpen, Bus, Smile, Users, Shield, Utensils, TreesIcon as Trees, Music } from "lucide-react";

export const metadata: Metadata = generateSeoMetadata({
  title: "School Facilities | Oxford Play School - Best Infrastructure in Tibbi",
  description: "Explore Oxford Play School's modern facilities including smart classrooms, bus service, safe playground, and more in Tibbi, Hanumangarh, Rajasthan.",
  canonical: "https://oxfordplayschool.com/facilities"
});

export default function FacilitiesPage() {
  return (
    <>
      <Hero
        title="Our Facilities"
        subtitle="State-of-the-art Infrastructure"
        description="Modern facilities designed for safe, comfortable, and engaging learning environment."
      />

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Complete Facility Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen />}
              title="Smart Classrooms"
              description="Well-lit, spacious classrooms equipped with age-appropriate educational materials, interactive boards, and comfortable furniture for optimal learning."
              delay={0}
            />
            <FeatureCard
              icon={<Bus />}
              title="Safe Transportation"
              description="Comfortable school buses with GPS tracking, trained drivers, and attendants ensuring safe commute for all students."
              delay={0.1}
            />
            <FeatureCard
              icon={<Trees />}
              title="Outdoor Play Area"
              description="Spacious, well-maintained playground with age-appropriate equipment for physical development and outdoor activities."
              delay={0.2}
            />
            <FeatureCard
              icon={<Shield />}
              title="Security System"
              description="CCTV surveillance throughout campus, controlled access, trained security staff, and emergency protocols in place."
              delay={0.3}
            />
            <FeatureCard
              icon={<Music />}
              title="Activity Rooms"
              description="Dedicated spaces for art, music, dance, and creative activities supporting overall child development."
              delay={0.4}
            />
            <FeatureCard
              icon={<Utensils />}
              title="Meal Services"
              description="Nutritious, hygienic meals prepared by trained cooks. Special dietary needs accommodated upon request."
              delay={0.5}
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Safety & Security Measures</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { icon: "🎥", title: "24/7 CCTV Surveillance", description: "Complete campus surveillance for parents' peace of mind." },
              { icon: "🚨", title: "Emergency Response Plan", description: "Well-trained staff with emergency protocols and first aid training." },
              { icon: "✓", title: "Strict Entry/Exit Policy", description: "Only authorized persons allowed with proper verification." },
              { icon: "🛡️", title: "Background Verification", description: "All staff members undergo thorough background checks." },
              { icon: "🚑", title: "First Aid & Medical Support", description: "On-site first aid facilities with trained staff." },
              { icon: "🔒", title: "Secure Campus", description: "Well-maintained boundaries and controlled access points." }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 bg-white p-6 rounded-lg shadow">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { title: "Activity-Based Learning Materials", items: ["Sensory play kits", "Building blocks", "Educational toys", "Art supplies"] },
              { title: "Technology Integration", items: ["Interactive learning boards", "Educational apps", "Audio-visual aids", "Safe internet access"] }
            ].map((resource) => (
              <div key={resource.title} className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-purple-600">{resource.title}</h3>
                <ul className="space-y-3">
                  {resource.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
