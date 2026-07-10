// src/components/FAQSection.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/faq-data";

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{title}</h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-600">Find answers to common questions about Oxford Play School</p>
        </motion.div>

        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full text-left px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 flex justify-between items-center gap-2 hover:bg-slate-50 transition"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-purple-600 transition transform flex-shrink-0 ${expandedIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              {expandedIndex === index && (
                <motion.div
                  className="px-3 sm:px-4 md:px-6 pb-2.5 sm:pb-3 md:pb-4 border-t border-gray-200"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
