// src/app/school-activities/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo-config";
import { Palette, Music, Trees, Users, BookOpen, Smile } from "lucide-react";

export const metadata: Metadata = generateSeoMetadata({
  title: "School Activities | Oxford Play School - Activity-Based Learning",
  description: "Explore our activity-based learning programs including art, music, outdoor play, and sports at Oxford Play School in Tibbi, Hanumangarh.",
  canonical: "https://oxfordplayschool.com/school-activities"
});

export default function ActivitiesPage() {
  return (
    <>
      <Hero
        title="School Activities"
        subtitle="Learning Through Play"
        description="Comprehensive activity-based learning program designed for holistic child development."
      />

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Activity Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="text-pink-500" size={40} />,
                title: "Arts & Crafts",
                description: "Creative activities including painting, drawing, clay modeling, and craft projects that develop fine motor skills and creativity."
              },
              {
                icon: <Music className="text-purple-500" size={40} />,
                title: "Music & Dance",
                description: "Rhythmic activities, rhymes, songs, and dance that develop auditory skills, rhythm, and coordination."
              },
              {
                icon: <Trees className="text-green-500" size={40} />,
                title: "Outdoor Play",
                description: "Outdoor activities including sports, games, and nature exploration for physical development and fresh air."
              },
              {
                icon: <Users className="text-blue-500" size={40} />,
                title: "Group Games",
                description: "Team games and activities that develop social skills, cooperation, and leadership abilities."
              },
              {
                icon: <BookOpen className="text-orange-500" size={40} />,
                title: "Story Time",
                description: "Interactive storytelling sessions that develop language, imagination, and listening skills."
              },
              {
                icon: <Smile className="text-yellow-500" size={40} />,
                title: "Play-Based Learning",
                description: "Hands-on learning through structured play that develops cognitive and problem-solving skills."
              }
            ].map((activity) => (
              <div key={activity.title} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <div className="mb-4 flex justify-center">{activity.icon}</div>
                <h3 className="text-2xl font-bold text-center mb-4">{activity.title}</h3>
                <p className="text-gray-700 text-center">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Annual Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { event: "Annual Day", description: "Grand celebration showcasing children's talents with performances and cultural programs." },
              { event: "Sports Day", description: "Fun sports events promoting physical fitness and healthy competition among students." },
              { event: "Science Exhibition", description: "Interactive science projects and experiments teaching basic scientific concepts." },
              { event: "Art Exhibition", description: "Display of children's artwork, crafts, and creative projects throughout the year." },
              { event: "Field Trips", description: "Educational outings to farms, gardens, and historical sites for experiential learning." },
              { event: "Summer Camp", description: "Engaging summer activities including art, music, sports, and educational games." }
            ].map((item) => (
              <div key={item.event} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-600">{item.event}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Learning Benefits</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Develops creativity and imagination",
              "Enhances motor skills development",
              "Improves social and communication skills",
              "Builds confidence and self-esteem",
              "Develops problem-solving abilities",
              "Encourages teamwork and cooperation",
              "Promotes physical health and fitness",
              "Fosters love for learning",
              "Develops critical thinking",
              "Enhances memory and concentration",
              "Encourages self-expression",
              "Builds academic foundation"
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white">✓</div>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
