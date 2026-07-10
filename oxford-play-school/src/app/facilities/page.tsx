// src/app/facilities/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo-config";
import { GraduationCap, BookOpen, Bus, Laptop, Smile, Video, Droplet, Music, Sparkles } from "lucide-react";

export const metadata: Metadata = generateSeoMetadata({
  title: "School Facilities | Oxford Play School - Best Infrastructure in Tibbi",
  description: "Explore Oxford Play School's modern facilities including smart classrooms, bus service, safe playground, and more in Tibbi, Hanumangarh, Rajasthan.",
  canonical: "https://oxfordplayschool.com/facilities"
});

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: <GraduationCap size={24} />,
      title: "B.Ed Teachers",
      description: "Our classes are taught by highly qualified, background-verified B.Ed educators focused on building core values and conceptual clarity in children."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Smart Classrooms",
      description: "Equipped with interactive audio-visual learning boards, colorful wall decorations, and kids-friendly learning kits that make lessons fun."
    },
    {
      icon: <Bus size={24} />,
      title: "School Bus Facility",
      description: "Comfortable and safe transport services covering all key villages near Tibbi and Hanumangarh, operated by experienced drivers."
    },
    {
      icon: <Laptop size={24} />,
      title: "Computer Learning",
      description: "Introducing children to foundational digital concepts and interactive brain games to foster early logical thinking and computational interest."
    },
    {
      icon: <Smile size={24} />,
      title: "Play Area",
      description: "Safe indoor and outdoor playgrounds with slides, building blocks, and games that encourage social engagement and physical development."
    },
    {
      icon: <Video size={24} />,
      title: "CCTV Security",
      description: "Comprehensive 24/7 security guard patrol and live CCTV surveillance coverage inside classrooms and school gates for maximum safety."
    },
    {
      icon: <Droplet size={24} />,
      title: "Safe Drinking Water",
      description: "Equipped with multi-stage RO water purification systems and chilled dispensers ensuring clean, safe, and hygienic water for everyone."
    },
    {
      icon: <Music size={24} />,
      title: "Cultural Activities",
      description: "Regular art, dance, musical activities, and seasonal festivals celebrating heritage and building stage confidence in young kids."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Clean Campus",
      description: "Strict sanitation protocols with regular disinfection of toys, tables, washrooms, and classrooms to maintain a germ-free environment."
    }
  ];

  return (
    <>
      <Hero
        title="Our Facilities"
        subtitle="State-of-the-art Infrastructure"
        description="Modern facilities designed for safe, comfortable, and engaging learning environment."
      />

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Complete Facility Overview</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              Our campus is equipped with best-in-class infrastructure designed to foster a healthy, safe, and engaging environment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {facilities.map((fac, idx) => (
              <FeatureCard
                key={idx}
                icon={fac.icon}
                title={fac.title}
                description={fac.description}
                delay={idx * 0.05}
              />
            ))}
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
