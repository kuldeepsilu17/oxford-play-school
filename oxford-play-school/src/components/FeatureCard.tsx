// src/components/FeatureCard.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0
}: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 text-purple-600 mb-5 flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2.5 text-slate-800 leading-tight">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}
