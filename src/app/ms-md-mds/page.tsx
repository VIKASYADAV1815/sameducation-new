"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MSMDMDSPage() {
  const specializations = [
    { title: "General Medicine", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop" },
    { title: "Radiodiagnosis", img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=400&auto=format&fit=crop" },
    { title: "Dermatology", img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=400&auto=format&fit=crop" },
    { title: "Pediatrics", img: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=400&auto=format&fit=crop" },
    { title: "Orthopedics", img: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=400&auto=format&fit=crop" },
    { title: "Obstetrics", img: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=400&auto=format&fit=crop" },
    { title: "General Surgery", img: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=400&auto=format&fit=crop&brightness=0.7" },
    { title: "Anesthesiology", img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=400&auto=format&fit=crop&brightness=0.7" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="relative h-[75vh] w-full flex items-end pb-16 pt-32 overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1920&auto=format&fit=crop"
          alt="MS MD MDS"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ POSTGRADUATE MEDICAL ADMISSIONS ]
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-white tracking-tight uppercase max-w-4xl"
          >
            MS / MD / MDS<br />Specialization
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-[13px] md:text-[15px] font-semibold tracking-wider text-gray-300 leading-relaxed max-w-2xl uppercase"
          >
            Secure your medical or dental specialization. We make the complex postgraduate admission process seamless, predictable, and transparent.
          </motion.p>
        </div>
      </section>

      {/* Strategic Planning */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-gray-200 bg-slate-50">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1920&auto=format&fit=crop" 
            alt="Pattern background" 
            fill 
            className="object-cover opacity-[0.15] mix-blend-multiply" 
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
            >
              [ CLINICAL PATHWAYS ]
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase mb-8"
            >
              Strategic Specialization Planning
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[12px] text-gray-500 font-medium leading-relaxed tracking-wide uppercase mb-6"
            >
              Gaining admission into top MS, MD, or MDS programs requires more than just good scores. It demands strategic planning, flawless documentation, and expert guidance. 
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[12px] text-gray-500 font-medium leading-relaxed tracking-wide uppercase mb-10"
            >
              Whether you are looking for clinical or non-clinical branches, we provide end-to-end support to ensure you secure a seat in your desired specialization without the usual stress.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-gray-200">
              <div className="bg-white p-6 border-r border-gray-200 hover:bg-slate-900 hover:text-white transition-colors group">
                <span className="block text-3xl font-light text-slate-900 group-hover:text-white mb-2">MD</span>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-500 group-hover:text-gray-400">Doctor of Medicine</span>
              </div>
              <div className="bg-white p-6 border-r border-gray-200 hover:bg-slate-900 hover:text-white transition-colors group">
                <span className="block text-3xl font-light text-slate-900 group-hover:text-white mb-2">MS</span>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-500 group-hover:text-gray-400">Master of Surgery</span>
              </div>
              <div className="bg-white p-6 hover:bg-slate-900 hover:text-white transition-colors group">
                <span className="block text-3xl font-light text-slate-900 group-hover:text-white mb-2">MDS</span>
                <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-500 group-hover:text-gray-400">Master of Dental Surgery</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full bg-slate-100 overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
              alt="Surgical Team"
              fill
              className="object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Top Specializations */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-gray-200">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ HIGH DEMAND ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase max-w-4xl"
          >
            Top Specializations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-[12px] font-medium tracking-wider text-gray-500 leading-relaxed uppercase max-w-2xl"
          >
            We guide students into high-demand clinical and non-clinical branches across top medical institutions globally.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-200">
          {specializations.map((spec, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              key={i} 
              className="relative h-[300px] bg-slate-900 border-r border-b border-gray-200 group cursor-pointer flex flex-col items-center justify-end text-center overflow-hidden"
            >
              <Image 
                src={spec.img} 
                alt={spec.title} 
                fill 
                className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <h4 className="relative z-10 text-[11px] font-bold tracking-[0.15em] uppercase text-white mb-8 px-4">
                {spec.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3-Step Strategy */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto bg-slate-900 text-white">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop" 
            alt="Pattern background dark" 
            fill 
            className="object-cover opacity-20 mix-blend-overlay" 
          />
        </div>
        <div className="mb-20 relative z-10">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-400 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ THE METHODOLOGY ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase max-w-4xl text-white"
          >
            Our 3-Step Strategy
          </motion.h2>
        </div>

        <div className="flex flex-col relative z-10">
          {[
            { step: "01", title: "PROFILE EVALUATION", desc: "We rigorously analyze your academic background, NEET PG/MDS test scores, and clinical experience to shortlist the best-fit institutions and programs for your specialization goals." },
            { step: "02", title: "APPLICATION STRATEGY", desc: "Our experts assist with crafting compelling statements of purpose, optimizing your medical resume, and ensuring all documentation meets the strict criteria of top medical boards and universities." },
            { step: "03", title: "COUNSELING & PLACEMENT", desc: "From mock interview preparation to final seat allocation and counseling rounds, we stand by your side, ensuring you navigate the competitive admission landscape with confidence." }
          ].map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 border-t border-slate-700 relative hover:bg-slate-800 transition-colors -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24"
            >
              <div className="text-5xl md:text-6xl font-light text-slate-600 w-24 md:w-48 shrink-0 mb-6 md:mb-0 transition-colors duration-500 group-hover:text-blue-400">
                {item.step}
              </div>
              <div className="flex-1 md:pr-16 flex flex-col justify-center">
                <h3 className="text-xl md:text-3xl font-medium tracking-tight uppercase text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-[12px] font-medium tracking-wider text-slate-400 leading-relaxed uppercase max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-slate-700" />
        </div>
      </section>
    </main>
  );
}