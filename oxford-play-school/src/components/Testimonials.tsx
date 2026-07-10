// src/components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title: string;
}

export default function Testimonials({ testimonials, title }: TestimonialsProps) {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{title}</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">What parents say about Oxford Play School</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-6 italic leading-relaxed flex-grow">&ldquo;{testimonial.text}&rdquo;</p>

              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-100 flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 text-sm sm:text-base truncate">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
