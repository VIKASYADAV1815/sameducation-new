"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dr. Aditya V.",
    specialty: "Internal Medicine",
    text: "The language training was intense but exactly what I needed. Mission Germany guided me through the entire Approbation process. Now I am working in a reputed hospital in Munich, learning and earning at the same time. The zero tuition fee structure and the fully paid residency makes Germany the absolute best choice for any Indian medical graduate. The support from the team didn't just end at the visa stage; they helped me settle in, find accommodation, and even prep for my hospital interviews.",
    image: "https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Dr. Neha K.",
    specialty: "Pediatrics",
    text: "I was extremely confused about the FSP and KP exams. The structured 5-step roadmap provided by SAMEDUCATION cleared all my doubts. I highly recommend their services to any doctor looking to specialize abroad without the stress of NEET PG. The observership they arranged was the turning point in my career. The German healthcare system is highly advanced and being a part of it has been a dream come true.",
    image: "https://images.unsplash.com/photo-1594824432258-2904b6848135?q=80&w=800&auto=format&fit=crop"
  }
];

const ParallaxCard = ({ testimonial }: { testimonial: any }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative h-[500px] w-full overflow-hidden shadow-2xl group border border-gray-200">
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-125 origin-center">
        <Image src={testimonial.image} alt={testimonial.name} fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 z-10 transition-colors duration-500 group-hover:from-slate-900 group-hover:via-slate-900/90 group-hover:to-slate-900/60" />
      
      <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-end">
        <div className="mb-8">
          <svg className="w-10 h-10 text-blue-500 opacity-50 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <h4 className="text-white text-3xl font-bold uppercase tracking-widest mb-2">{testimonial.name}</h4>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">{testimonial.specialty}</p>
        </div>
        
        {/* Auto Scrolling Text Container */}
        <div className="h-40 overflow-y-auto custom-scrollbar relative pr-4 border-l-2 border-blue-500 pl-4">
          <div className="animate-autoscroll hover:[animation-play-state:paused] flex flex-col gap-6">
            <p className="text-white/90 text-sm leading-relaxed font-light">
              {testimonial.text}
            </p>
            <p className="text-white/90 text-sm leading-relaxed font-light">
              {testimonial.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PGGermanyTestimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-4">
            Doctor Success Stories
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Real experiences from German Hospitals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <ParallaxCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};
