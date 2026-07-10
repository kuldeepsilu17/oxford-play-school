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
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-slate-800">{title}</h2>
          <p className="text-xs sm:text-sm text-gray-600">Find answers to common questions about Oxford Play School</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = expandedIndex === index;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full text-left px-4 sm:px-6 py-4 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition duration-200"
                  onClick={() => setExpandedIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base font-semibold text-slate-800">{faq.question}</h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 hover:bg-purple-100 transition duration-200">
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 pt-1 border-t border-slate-100 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
