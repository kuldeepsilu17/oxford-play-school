// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
  dynamicBg?: boolean;
  cta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  scrollTo?: string;
}

const DEFAULT_SLIDES = [
  "/images/hero-slide-1.jpg",
  "/images/hero-slide-2.jpg",
  "/images/hero-slide-3.jpg",
  "/images/hero-slide-4.jpg"
];

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  dynamicBg = false,
  cta,
  secondaryCta,
  scrollTo
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!dynamicBg) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DEFAULT_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [dynamicBg]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={(!dynamicBg && backgroundImage) ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      } : !dynamicBg ? {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      } : undefined}
    >
      {/* Dynamic Background Slideshow & Animated Blobs */}
      {dynamicBg && (
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
          {DEFAULT_SLIDES.map((slide, index) => (
            <motion.div
              key={slide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Image
                src={slide}
                alt="School background slide"
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/75 to-blue-900/80 mix-blend-multiply" />
            </motion.div>
          ))}
          
          {/* Animated/Floating Translucent Blobs */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {[...Array(6)].map((_, i) => {
              const sizes = [150, 220, 300, 260, 200, 180];
              const delays = [0, 2, 4, 1, 3, 5];
              const durations = [18, 22, 28, 20, 25, 17];
              const colors = [
                "rgba(236, 72, 153, 0.2)",  // pink
                "rgba(147, 51, 234, 0.2)",  // purple
                "rgba(59, 130, 246, 0.2)",   // blue
                "rgba(251, 191, 36, 0.15)",  // yellow
                "rgba(16, 185, 129, 0.15)",  // green
                "rgba(239, 68, 68, 0.15)"    // red
              ];
              const initialPositions = [
                { top: "5%", left: "5%" },
                { top: "15%", left: "75%" },
                { top: "55%", left: "10%" },
                { top: "65%", left: "70%" },
                { top: "35%", left: "45%" },
                { top: "75%", left: "35%" }
              ];
              
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full filter blur-3xl"
                  style={{
                    width: sizes[i],
                    height: sizes[i],
                    backgroundColor: colors[i],
                    top: initialPositions[i].top,
                    left: initialPositions[i].left,
                  }}
                  animate={{
                    x: [0, 60, -60, 0],
                    y: [0, -70, 50, 0],
                    scale: [1, 1.25, 0.85, 1],
                  }}
                  transition={{
                    duration: durations[i],
                    delay: delays[i],
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <motion.div
        className="text-center text-white z-20 px-3 sm:px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <p className="text-xs sm:text-sm md:text-lg text-blue-100 mb-2 sm:mb-4 font-semibold tracking-wide uppercase">{subtitle}</p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-6 leading-tight tracking-tight drop-shadow-md"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-lg text-blue-50 mb-4 sm:mb-8 max-w-2xl mx-auto font-medium drop-shadow"
          >
            {description}
          </motion.p>
        )}

        {(cta || secondaryCta) && (
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4 sm:mt-8">
            {cta && (
              <a
                href={cta.href}
                className="inline-block bg-white text-purple-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base rounded-lg md:rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-slate-100 transition duration-300 transform hover:-translate-y-0.5"
              >
                {cta.text}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-block border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base rounded-lg md:rounded-xl font-bold hover:bg-white hover:text-purple-600 transition duration-300 transform hover:-translate-y-0.5"
              >
                {secondaryCta.text}
              </a>
            )}
          </motion.div>
        )}
      </motion.div>

      {scrollTo && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href={scrollTo} className="text-white opacity-75 hover:opacity-100 transition">
            <ChevronDown size={36} />
          </a>
        </motion.div>
      )}
    </section>
  );
}
