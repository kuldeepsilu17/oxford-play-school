// src/app/gallery/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Gallery | Oxford Play School - Photos & Videos",
  description: "View our school gallery featuring students, activities, facilities, and events at Oxford Play School in Tibbi, Hanumangarh.",
  canonical: "https://oxfordplayschool.com/gallery"
});

export default function GalleryPage() {
  const galleryImages = [
    { src: "/images/gallery-classroom-1.jpg", alt: "Classroom learning" },
    { src: "/images/gallery-building-1.jpg", alt: "School building" },
    { src: "/images/hero-slide-4.jpg", alt: "Children playing" },
    { src: "/images/gallery-art-1.jpg", alt: "Art activity" },
    { src: "/images/gallery-event-1.jpg", alt: "School event" },
    { src: "/images/gallery-group-1.jpg", alt: "Children group" }
  ];

  const gallerySections = [
    {
      title: "Classroom Learning",
      description: "Interactive learning sessions and activities in our smart classrooms.",
      images: [
        { src: "/images/hero-slide-1.jpg", alt: "Children in classroom" },
        { src: "/images/gallery-project-1.jpg", alt: "Kids working on project" },
        { src: "/images/gallery-building-1.jpg", alt: "Classroom writing" },
        { src: "/images/gallery-library-1.jpg", alt: "Reading library" },
        { src: "/images/hero-slide-3.jpg", alt: "Kids and blocks" },
        { src: "/images/gallery-classroom-1.jpg", alt: "Smart classroom" }
      ]
    },
    {
      title: "Outdoor Activities",
      description: "Fun outdoor games, sports, and nature exploration activities.",
      images: [
        { src: "/images/hero-slide-2.jpg", alt: "Kids running outside" },
        { src: "/images/hero-slide-4.jpg", alt: "Kids playing together" },
        { src: "/images/gallery-garden-1.jpg", alt: "Kids in garden" },
        { src: "/images/gallery-running-1.jpg", alt: "Children running on grass" },
        { src: "/images/gallery-slide-1.jpg", alt: "Playground slide" },
        { src: "/images/gallery-sports-1.jpg", alt: "Sports games" }
      ]
    },
    {
      title: "Special Events",
      description: "Annual day, sports day, and other special celebrations throughout the year.",
      images: [
        { src: "/images/gallery-presentation-1.jpg", alt: "Event presentation" },
        { src: "/images/gallery-event-1.jpg", alt: "School performance" },
        { src: "/images/gallery-science-1.jpg", alt: "Science project display" },
        { src: "/images/gallery-art-1.jpg", alt: "Art gallery/exhibition" },
        { src: "/images/gallery-celebration-1.jpg", alt: "Celebration ceremony" },
        { src: "/images/gallery-camp-1.jpg", alt: "Fun camp gathering" }
      ]
    }
  ];

  return (
    <>
      <Hero
        title="Gallery"
        subtitle="Memories from Oxford Play School"
        description="Explore moments and memories from our school activities and events."
      />

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our School in Pictures</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition group cursor-pointer h-64"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional gallery sections */}
          <div className="space-y-16">
            {gallerySections.map((section) => (
              <div key={section.title} className="border-t border-gray-100 pt-12">
                <h3 className="text-3xl font-bold mb-2">{section.title}</h3>
                <p className="text-gray-600 mb-8 max-w-2xl">{section.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {section.images.map((image, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition group cursor-pointer h-48"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Follow Us On Social Media</h2>
          <p className="text-xl text-gray-700 mb-8">
            Stay updated with latest photos and videos from Oxford Play School
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Facebook
            </a>
            <a href="#" className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
              Instagram
            </a>
            <a href="#" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              WhatsApp
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
