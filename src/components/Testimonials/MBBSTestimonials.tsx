"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma's Parents",
    region: "PUNJAB",
    quote: "We were so worried about sending Aarav abroad, but SAMEDUCATION made the entire process transparent. The university in Europe is excellent, and he is thriving.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya Patel's Father",
    region: "GUJARAT",
    quote: "The team guided us through every step of the MBBS admission in India. Their knowledge of the counseling process helped us secure a great college within our budget.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Rohan Das's Mother",
    region: "DELHI",
    quote: "From visa assistance to airport pickup in Central America, everything was flawless. Rohan is now well on his way to completing his USMLE preparations.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop"
  }
];

export const MBBSTestimonials = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-gray-200 overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            [ Trusted by Families ]
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4 uppercase">
            What Parents Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We understand that sending your child to pursue medicine is a big decision. Hear from parents who trusted us with their children's future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 md:p-10 border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-16 h-16 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-red-100">
                  <Image src={t.image} alt={t.name} fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-slate-900">{t.name}</h4>
                  <p className="text-xs text-red-600 font-bold uppercase tracking-wider">{t.region}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic relative z-10">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
