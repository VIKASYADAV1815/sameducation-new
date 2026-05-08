"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    course: "Palliative Care, Seneca Polytechnic",
    quote: "The transition program completely transformed my career. The clinical exposure and the supportive faculty made my journey to becoming a Registered Nurse in Canada seamless and empowering.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    course: "MSc Nursing Practice, UK",
    quote: "I was initially overwhelmed by the licensure process, but the step-by-step guidance provided by the team here took all the stress away. I am now working at a top NHS hospital in London.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emily Chen",
    course: "Nursing Leadership, Niagara College",
    quote: "From IELTS preparation to visa filing and finally securing my admission, the end-to-end support was phenomenal. They truly care about the success of every international nurse.",
    image: "https://images.unsplash.com/photo-1594824432258-2904b6848135?q=80&w=200&auto=format&fit=crop"
  }
];

export const NursingTestimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            [ Success Stories ]
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase text-slate-900 mb-6">
            Hear from our Global Nurses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image src={t.image} alt={t.name} fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-slate-900">{t.name}</h4>
                  <p className="text-xs text-blue-600 font-medium">{t.course}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
