"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1627556704353-016baeb12c79?q=80&w=1920&auto=format&fit=crop",
    title: "Nursing & Medical Excellence",
    subtitle: "Expert Guidance for Global Healthcare Careers",
  },
  {
    src: "https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?q=80&w=1920&auto=format&fit=crop",
    title: "Pioneer Your Future",
    subtitle: "Comprehensive Support for International Admissions",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto carousel every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center bg-slate-900 font-sans">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.img
          key={activeSlide}
          src={slides[activeSlide].src}
          alt={slides[activeSlide].title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center md:justify-end h-full pt-20 pb-32 md:pb-32 lg:pb-24 xl:pb-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-white tracking-tight uppercase"
          >
            Build Your Medical
            <br className="hidden sm:block" /> Career Abroad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl font-light leading-relaxed"
          >
            Focused guidance for Nursing in USA, Canada, and Australia, MBBS medical universities abroad,
            and the Germany medical route covering MS, MD, MDS, Approbation, FSP, and hospital applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-8 sm:mt-10"
          >
            <Link href="/contact" className="inline-block px-6 py-3.5 sm:px-10 sm:py-4 bg-white text-slate-900 font-bold text-[11px] sm:text-[13px] tracking-[0.2em] hover:bg-gray-100 transition-all duration-300 uppercase shadow-xl hover:scale-105 active:scale-95">
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Block Bottom Right */}
      <div className="absolute bottom-0 right-0 w-full md:w-auto bg-slate-900/80 backdrop-blur-lg border-t md:border-l border-white/10">
        <div className="flex flex-row px-6 py-6 sm:px-10 sm:py-8 md:px-16 md:py-12 gap-6 sm:gap-12 md:gap-20 justify-between md:justify-start overflow-x-auto no-scrollbar">
          <div className="flex flex-col shrink-0">
            <div className="flex items-start">
              <span className="text-3xl sm:text-5xl md:text-6xl font-light text-white tabular-nums">1200</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-light text-blue-400 mt-0.5 sm:mt-1">+</span>
            </div>
            <span className="text-white/50 text-[9px] sm:text-xs tracking-[0.2em] uppercase mt-2 sm:mt-4 font-medium">Students Placed</span>
          </div>

          <div className="flex flex-col shrink-0">
            <div className="flex items-start">
              <span className="text-3xl sm:text-5xl md:text-6xl font-light text-white tabular-nums">4.9</span>
              <span className="text-sm sm:text-xl font-light text-blue-400 mt-1.5 sm:mt-2.5 ml-1">/5</span>
            </div>
            <span className="text-white/50 text-[9px] sm:text-xs tracking-[0.2em] uppercase mt-2 sm:mt-4 font-medium">Success Rating</span>
          </div>

          <div className="flex flex-col shrink-0">
            <div className="flex items-start">
              <span className="text-3xl sm:text-5xl md:text-6xl font-light text-white tabular-nums">10</span>
              <span className="text-sm sm:text-xl font-light text-blue-400 mt-1.5 sm:mt-2.5 ml-1.5 sm:ml-2">YRS</span>
            </div>
            <span className="text-white/50 text-[9px] sm:text-xs tracking-[0.2em] uppercase mt-2 sm:mt-4 font-medium">Expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
}
