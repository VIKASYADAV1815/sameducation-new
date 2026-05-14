"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MBBSTestimonials } from "@/components/Testimonials/MBBSTestimonials";
import { ArrowUpRight } from "lucide-react";

export default function MBBSPage() {
  const regions = [
    {
      id: "01",
      name: "CENTRAL AMERICA (CARIBBEAN)",
      focus: "USMLE Pathway & Clinicals in USA",
      desc: "The Caribbean pathway is specifically designed for students aiming for medical residency in the United States. Universities follow a US-based curriculum, preparing students for USMLE Step 1 and Step 2 from day one.",
      highlights: ["Direct US Clinical Rotations", "High USMLE Pass Rates", "English Medium Instruction", "No IELTS/TOEFL Required for Admission"]
    },
    {
      id: "02",
      name: "EUROPE",
      focus: "Affordable European Standard Education",
      desc: "Study in culturally rich, technologically advanced European nations like Georgia, Poland, and Italy. Degrees are universally recognized, offering a strong foundation for both clinical practice and research.",
      highlights: ["WHO & NMC Recognized", "State-of-the-Art Infrastructure", "Global Clinical Exposure", "Safe & Student-Friendly Environment"]
    },
    {
      id: "03",
      name: "INDIA",
      focus: "Expert Domestic Counseling",
      desc: "For those preferring to stay closer to home, we provide expert admission guidance for top medical colleges in India, ensuring you navigate the competitive landscape and cut-offs effectively.",
      highlights: ["NRI Seat Assistance", "Counseling Updates", "Budget-Friendly Options", "End-to-End Admission Support"]
    }
  ];

  const features = [
    { title: "Transparent Fee Structure", desc: "No hidden costs. Complete clarity on tuition, hostel, and processing fees before you apply." },
    { title: "NMC & WHO Approved", desc: "We only partner with universities recognized by major global medical councils." },
    { title: "USMLE & PLAB Alignment", desc: "Curriculums designed to help you clear international licensing exams effortlessly." },
    { title: "Clinical Rotations", desc: "Access to world-class teaching hospitals for hands-on clinical experience." }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-end pb-24 overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop"
          alt="MBBS in Central America and Europe"
          fill
          className="object-cover opacity-30 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ MEDICAL ADMISSIONS EXCELLENCE ]
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-white tracking-tight uppercase max-w-4xl"
          >
            Pursue MBBS<br />Abroad & In India
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-[13px] md:text-[15px] font-semibold tracking-wider text-gray-300 leading-relaxed max-w-2xl uppercase"
          >
            Exclusive opportunities to pursue your medical degree in Central America, Europe, and top institutions in India. Global recognition and premium education.
          </motion.p>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-gray-200">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#f8fafc_10px,#f8fafc_11px)] opacity-50 pointer-events-none -z-10" />
        
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ DESTINATIONS ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase"
          >
            Primary Study Regions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-gray-200 bg-white/80 backdrop-blur-sm">
          {regions.map((region, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={region.name} 
              className="flex flex-col border-r border-b border-gray-200 p-10 hover:bg-gray-50 transition-colors duration-500 group relative"
            >
              <div className="text-5xl md:text-6xl font-light text-slate-200 mb-8 transition-colors duration-500 group-hover:text-blue-600">
                {region.id}
              </div>
              <h3 className="text-2xl font-medium tracking-tight uppercase text-slate-900 mb-2">
                {region.name}
              </h3>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-blue-600 mb-6 block">
                {region.focus}
              </span>
              <p className="text-[12px] text-gray-500 font-medium leading-relaxed tracking-wide mb-10 h-[100px]">
                {region.desc}
              </p>

              <div className="mt-auto pt-8 border-t border-gray-200">
                <span className="text-slate-900 font-semibold tracking-[0.15em] uppercase text-[10px] block mb-4">
                  KEY ADVANTAGES
                </span>
                <ul className="space-y-3">
                  {region.highlights.map((req, i) => (
                    <li key={i} className="flex items-start text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      <span className="text-blue-600 mr-3">■</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
            >
              [ THE SAMEDUCATION ADVANTAGE ]
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase mb-10"
            >
              18 Years of Medical Admissions Success
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l border-gray-200 pl-6">
                <div className="text-4xl font-light text-slate-900 mb-2">31k+</div>
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">Successful Placements</div>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <div className="text-4xl font-light text-slate-900 mb-2">600+</div>
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">University Tie-Ups</div>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <div className="text-4xl font-light text-slate-900 mb-2">99%</div>
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">Visa Success Rate</div>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <div className="text-4xl font-light text-slate-900 mb-2">350+</div>
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500">Expert Counselors</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-gray-200">
            {features.map((feature, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="p-8 border-r border-b border-gray-200 hover:bg-slate-900 hover:text-white transition-colors duration-500 group"
              >
                <h3 className="text-sm font-bold tracking-widest uppercase mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[12px] text-gray-500 group-hover:text-gray-400 font-medium leading-relaxed tracking-wide">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MBBSTestimonials />

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block">
              [ KNOWLEDGE BASE ]
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="border-t border-gray-200">
            {[
              { q: "Is NEET mandatory for studying MBBS abroad?", a: "Yes, for Indian students, qualifying NEET is mandatory to study MBBS abroad if you intend to return and practice in India." },
              { q: "Are the universities WHO recognized?", a: "Absolutely. We exclusively partner with universities that are recognized by WHO, WDOMS, and approved by the NMC (National Medical Commission)." },
              { q: "What is the medium of instruction?", a: "All our partner universities in Central America and Europe offer the MBBS program entirely in English." },
              { q: "Do you help with education loans?", a: "Yes, our documentation and finance team provides complete assistance in securing education loans from major Indian banks." }
            ].map((faq, i) => (
              <div key={i} className="py-8 border-b border-gray-200 hover:px-6 transition-all duration-300">
                <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 mb-4">{faq.q}</h3>
                <p className="text-[12px] text-gray-500 font-medium leading-relaxed tracking-wide">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}