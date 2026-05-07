"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
      src: "https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1920&auto=format&fit=crop",
      title: "Study in Germany",
      subtitle: "Bachelors • Masters • Ausbildung • Opportunity Card",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
      title: "MBBS in Central America",
      subtitle: "Affordable medical degrees with global recognition",
    },
    {
      src: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1920&auto=format&fit=crop",
      title: "MS • MD • MDS",
      subtitle: "Postgraduate medical admissions made seamless",
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
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-slate-900 font-sans">
      {/* Background Carousel */}
      <AnimatePresence>
        <motion.img
          key={activeSlide}
          src={slides[activeSlide].src}
          alt={slides[activeSlide].title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-end h-full pb-20 md:pb-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-white tracking-tight uppercase"
          >
            Turn Your Study<br />Abroad Dream<br />Into Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl font-light leading-relaxed"
          >
            Expert guidance for Germany (Bachelors, Masters, Ausbildung, Opportunity Card), MBBS in Central America, and MS/MD/MDS. 
            From licensure applications to airport transfers — we've got you covered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <button className="px-8 py-4 bg-white text-slate-900 font-medium text-[15px] tracking-wide hover:bg-gray-100 transition-colors uppercase">
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Block Bottom Right */}
      <div className="absolute bottom-0 right-0 w-full md:w-auto bg-[#1a232c]/80 backdrop-blur-sm hidden md:block">
        <div className="flex flex-col sm:flex-row px-8 py-10 md:px-12 md:py-12 gap-10 md:gap-16">
          <div className="flex flex-col">
            <div className="flex items-start">
              <span className="text-5xl md:text-6xl font-light text-white">1200</span>
              <span className="text-2xl md:text-3xl font-light text-white mt-1">+</span>
            </div>
            <span className="text-white/70 text-xs tracking-widest uppercase mt-4">Students Placed</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-start">
              <span className="text-5xl md:text-6xl font-light text-white">4.9</span>
              <span className="text-xl font-light text-white mt-2 ml-1">/5</span>
            </div>
            <span className="text-white/70 text-xs tracking-widest uppercase mt-4">Success Rating</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-start">
              <span className="text-5xl md:text-6xl font-light text-white">10</span>
              <span className="text-xl font-light text-white mt-2 ml-2">YRS</span>
            </div>
            <span className="text-white/70 text-xs tracking-widest uppercase mt-4">Migration Expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
}