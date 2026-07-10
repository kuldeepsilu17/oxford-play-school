// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo-config";
import { blogPosts, BlogPost } from "@/lib/blog-data";
import { blogPostSchema } from "@/lib/schema";
import Script from "next/script";
import { Calendar, User, Clock, ChevronLeft } from "lucide-react";

interface BlogPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params
}: BlogPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found"
    };
  }

  return generateSeoMetadata({
    title: post.title,
    description: post.description,
    canonical: `https://oxfordplayschool.com/blog/${post.slug}`
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-purple-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostSchema({
              title: post.title,
              description: post.description,
              image: post.image,
              date: post.date,
              author: post.author,
              content: post.content
            })
          )
        }}
      />

      <AnimatedSection className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6"
          >
            <ChevronLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                );
              }
              if (paragraph.startsWith('#')) {
                return (
                  <h3 key={index} className="text-2xl font-bold mt-6 mb-3">
                    {paragraph.replace('#', '').trim()}
                  </h3>
                );
              }
              if (paragraph.trim() === '') {
                return <div key={index} className="h-4" />;
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {relatedPosts.length > 0 && (
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg mb-4 group-hover:opacity-80 transition"
                    />
                    <h3 className="font-bold text-lg group-hover:text-purple-600 transition line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{relatedPost.category}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </AnimatedSection>
    </>
  );
}
