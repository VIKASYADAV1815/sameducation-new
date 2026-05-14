"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PGGermanyTestimonials } from "@/components/Testimonials/PGGermanyTestimonials";
import { ArrowUpRight } from "lucide-react";

export default function PGGermanyPage() {
  const pathways = [
    {
      id: "01",
      title: "MEDICAL PG (APPROBATION)",
      desc: "Super specialization without competitive MCQ exams. Work as a fully-paid doctor (Assistenzarzt) while pursuing your Medical PG. The specialist degree (Facharzt) is a by-product of your employment.",
      highlights: ["No Tuition Fees", "Earn While You Learn", "FSP & KP Exam Prep", "Direct Hospital Placement"]
    },
    {
      id: "02",
      title: "MASTERS IN GERMANY",
      desc: "Pursue globally acclaimed Master's programs in engineering, management, and sciences. Germany's cost-effective education features mostly tuition-free programs at public universities.",
      highlights: ["Public Universities", "Post-Study Work Visa", "English Taught Programs", "APS Certification Support"]
    },
    {
      id: "03",
      title: "AUSBILDUNG (VOCATIONAL)",
      desc: "Germany's dual vocational training system. Work as an apprentice in a German company while attending vocational school. Gain a highly respected German qualification and a steady income.",
      highlights: ["Nursing & IT Focus", "Guaranteed Stipend", "B2 German Required", "Direct Employment"]
    },
    {
      id: "04",
      title: "OPPORTUNITY CARD (CHANCENKARTE)",
      desc: "The new points-based immigration system allowing skilled workers to enter Germany for up to one year to find employment or explore Ausbildung opportunities.",
      highlights: ["No Prior Job Offer Needed", "Points Based System", "Part-Time Work Allowed", "Fast-Track Visa"]
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-end pb-24 overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format&fit=crop"
          alt="Medical PG in Germany"
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
            [ MISSION GERMANY ]
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-white tracking-tight uppercase max-w-4xl"
          >
            Your Pathway to<br />Success in Germany
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-[13px] md:text-[15px] font-semibold tracking-wider text-gray-300 leading-relaxed max-w-2xl uppercase"
          >
            Comprehensive guidance for Medical PG, Masters, Ausbildung, and the new Opportunity Card. Zero tuition fees and high employability.
          </motion.p>
        </div>
      </section>

      {/* Pathways Grid */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />
        
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ OUR PROGRAMS ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase"
          >
            German Education & Careers
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-gray-200 bg-white/90 backdrop-blur-sm">
          {pathways.map((pathway, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={pathway.id} 
              className="p-10 border-r border-b border-gray-200 hover:bg-slate-900 hover:text-white transition-colors duration-500 group flex flex-col relative"
            >
              <div className="text-5xl md:text-6xl font-light text-slate-200 mb-8 transition-colors duration-500 group-hover:text-blue-600">
                {pathway.id}
              </div>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase text-slate-900 group-hover:text-white mb-6">
                {pathway.title}
              </h3>
              <p className="text-[12px] text-gray-500 group-hover:text-gray-400 font-medium leading-relaxed tracking-wide mb-10 flex-1">
                {pathway.desc}
              </p>
              
              <div className="pt-6 border-t border-gray-200 group-hover:border-gray-700">
                <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[10px] block mb-4">
                  [ KEY ADVANTAGES ]
                </span>
                <ul className="space-y-2">
                  {pathway.highlights.map((h, i) => (
                    <li key={i} className="text-[11px] font-bold text-slate-900 group-hover:text-white uppercase tracking-wider">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="absolute top-10 right-10 text-gray-300 group-hover:text-blue-600 transition-colors">
                <ArrowUpRight size={28} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-gray-200">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ THE FACHARZT ROADMAP ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase max-w-4xl"
          >
            Medical Specialization Process
          </motion.h2>
        </div>

        <div className="flex flex-col">
          {[
            { step: "01", title: "GERMAN LANGUAGE MASTERY", desc: "Master German from A1 to B2 level. Strong communication is non-negotiable for working in German hospitals." },
            { step: "02", title: "DEFİZITBESCHEID & VISA", desc: "Document assessment by the German medical council and applying for the correct medical visa." },
            { step: "03", title: "MEDICAL GERMAN (C1) & FSP", desc: "Clear the specialized medical language exam (Fachsprachprüfung) focusing on doctor-patient communication." },
            { step: "04", title: "TEMPORARY LICENSE (BERUFSERLAUBNIS)", desc: "Begin working as a paid assistant doctor while preparing for your final medical exam." },
            { step: "05", title: "KENNTNISPRÜFUNG (KP) & APPROBATION", desc: "Clear the knowledge exam (KP) to receive your permanent medical license and continue your Facharzt training." }
          ].map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 border-t border-gray-200 relative hover:bg-gray-50 transition-colors -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24"
            >
              <div className="text-5xl md:text-6xl font-light text-slate-900 w-24 md:w-48 shrink-0 mb-6 md:mb-0 transition-colors duration-500 group-hover:text-blue-600">
                {item.step}
              </div>
              <div className="flex-1 md:pr-16 flex flex-col justify-center">
                <h3 className="text-xl md:text-3xl font-medium tracking-tight uppercase text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-[12px] font-medium tracking-wider text-gray-500 leading-relaxed uppercase max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase mb-8"
            >
              Every new language <span className="text-blue-600">we learn</span> opens new possibilities.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[12px] text-gray-500 font-medium leading-relaxed tracking-wide uppercase mb-10"
            >
              We offer preparatory German Language courses to help you achieve your academic and career requisites for Germany. The shortage of skilled workers in Germany opens doors for qualified professionals worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact" className="inline-block bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase px-10 py-5 hover:bg-gray-800 transition-colors">
                Start Language Training
              </Link>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-900 text-white p-12 lg:p-16">
              <h3 className="text-2xl font-medium tracking-tight uppercase mb-8">
                So, what are you waiting for?
              </h3>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">■</span>
                  <span className="text-[12px] font-medium tracking-wider uppercase text-gray-300 leading-relaxed">Honest applications for medical PG & Masters in Germany.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">■</span>
                  <span className="text-[12px] font-medium tracking-wider uppercase text-gray-300 leading-relaxed">A complete roadmap towards your Facharzt or career goal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">■</span>
                  <span className="text-[12px] font-medium tracking-wider uppercase text-gray-300 leading-relaxed">Collaboration with successful practitioners in Germany.</span>
                </li>
              </ul>
              <div className="pt-8 border-t border-gray-800">
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 mb-2">IF YOU CHANGE NOTHING,</p>
                <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-white">NOTHING WILL CHANGE.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PGGermanyTestimonials />
    </main>
  );
}