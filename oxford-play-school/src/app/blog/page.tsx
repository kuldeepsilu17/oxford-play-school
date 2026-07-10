// src/app/blog/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo-config";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = generateSeoMetadata({
  title: "Blog | Oxford Play School - Child Education Tips & School News",
  description: "Read expert articles about early childhood education, parenting tips, learning strategies, and school news from Oxford Play School.",
  canonical: "https://oxfordplayschool.com/blog"
});

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Our Blog"
        subtitle="Learning & Development"
        description="Expert tips on child education, parenting, and early childhood development."
      />

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {post.readTime} min read
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User size={16} />
                    {post.author}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Blog</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Get expert tips on child education and school news delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </AnimatedSection>
    </>
  );
}
