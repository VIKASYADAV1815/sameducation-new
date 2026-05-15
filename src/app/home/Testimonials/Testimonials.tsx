"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
};

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "Same Education transformed my learning experience. The personalized approach and expert guidance helped me achieve my academic goals faster than I ever imagined.",
      author: "Priya Sharma",
      role: "Engineering Student",
      avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "The quality of education and mentorship at Same Education is outstanding. Their innovative teaching methods made complex subjects accessible and engaging.",
      author: "Rahul Kumar",
      role: "Medical Student",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "As a working professional, Same Education helped me balance career and education perfectly. Their flexible scheduling and comprehensive support system made all the difference.",
      author: "Anjali Patel",
      role: "Software Engineer",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    {
      quote: "The career guidance and placement assistance from Same Education opened doors I never knew existed. Their network and expertise in the industry is unmatched.",
      author: "Vikram Singh",
      role: "MBA Graduate",
      avatarUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "Same Education doesn't just teach subjects - they build confidence and critical thinking skills. My daughter's academic performance improved dramatically after joining.",
      author: "Mrs. Gupta",
      role: "Parent",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    },
    {
      quote: "The support I received for my visa application and university selection in Germany was incredible. They truly care about student success.",
      author: "Amit Chen",
      role: "International Student",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="relative py-32 bg-slate-50 overflow-hidden border-b border-gray-200">
      {/* Background Image with low opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1675445991060-14c7f43d8fd6?q=80&w=1074&auto=format&fit=crop" 
          alt="Background pattern" 
          className="w-full h-full object-cover opacity-[0.08] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/90 via-slate-50/60 to-slate-50/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block">
            [ TESTIMONIALS ]
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase max-w-3xl mx-auto text-slate-900">
            Student Success Stories
          </h2>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 text-left max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TestimonialCard 
                quote={t.quote} 
                author={t.author} 
                role={t.role} 
                avatarUrl={t.avatarUrl} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
