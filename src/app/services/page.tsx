"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "PROFILE EVALUATION",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
      desc: "Comprehensive assessment of academic records, language proficiency, and career goals to identify the best global pathways.",
      details: ["Academic Transcript Review", "Language Proficiency Check", "Career Path Alignment", "Budget & Scholarship Assessment"]
    },
    {
      id: "02",
      title: "UNIVERSITY SELECTION",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
      desc: "Curating a tailored list of top-tier, recognized institutions worldwide that match your profile and aspirations.",
      details: ["Program Matching", "Accreditation Verification", "Acceptance Rate Analysis", "Application Timeline Planning"]
    },
    {
      id: "03",
      title: "ADMISSION ASSISTANCE",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      desc: "End-to-end support in preparing compelling applications, statements of purpose, and organizing necessary documentation.",
      details: ["SOP & Resume Drafting", "LOR Guidance", "Application Form Filling", "Document Legalization & Apostille"]
    },
    {
      id: "04",
      title: "VISA PROCESSING",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      desc: "Navigating complex visa regulations with high success rates through meticulous documentation and interview preparation.",
      details: ["Financial Proof Guidance", "Visa Form Filling", "Mock Visa Interviews", "Embassy Appointment Booking"]
    },
    {
      id: "05",
      title: "FINANCIAL AID & LOANS",
      img: "https://images.unsplash.com/photo-1554224154-26032ffc0d04?q=80&w=800&auto=format&fit=crop",
      desc: "Connecting students with trusted financial partners to secure education loans and identifying scholarship opportunities.",
      details: ["Education Loan Assistance", "Scholarship Hunting", "Sponsor Documentation", "Fee Payment Guidance"]
    },
    {
      id: "06",
      title: "PRE-DEPARTURE BRIEFING",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
      desc: "Preparing students for cultural transition, essential packing, travel arrangements, and what to expect upon arrival.",
      details: ["Cultural Orientation", "Forex & Forex Cards", "Travel & Health Insurance", "Flight Ticketing Assistance"]
    },
    {
      id: "07",
      title: "POST-ARRIVAL SUPPORT",
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      desc: "Our on-ground network ensures a smooth transition with pickup, accommodation, and local registration assistance.",
      details: ["Airport Pickup", "Accommodation Search", "Local Sim & Bank Account", "University Registration Setup"]
    },
    {
      id: "08",
      title: "LANGUAGE TRAINING",
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
      desc: "In-house coaching for essential proficiency tests to meet the admission criteria of international universities.",
      details: ["IELTS & TOEFL Prep", "German A1-B2 Coaching", "Mock Tests", "Study Materials"]
    },
    {
      id: "09",
      title: "CAREER COUNSELING",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
      desc: "Guiding students beyond education towards global career opportunities, licensing exams, and post-study work visas.",
      details: ["Post-Study Work Visa Guidance", "Licensing Exam Info (USMLE, NMC)", "Resume Building", "Global Job Market Insights"]
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="relative h-[75vh] w-full flex items-end pb-16 pt-32 overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop"
          alt="Our Services"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ END-TO-END SUPPORT ]
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-white tracking-tight uppercase max-w-4xl"
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-[13px] md:text-[15px] font-semibold tracking-wider text-gray-300 leading-relaxed max-w-2xl uppercase"
          >
            From the moment you decide to study abroad to long after you land, our comprehensive suite of services ensures your journey is smooth, secure, and successful.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-gray-200 bg-slate-50">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=1920&auto=format&fit=crop" 
            alt="Pattern background" 
            fill 
            className="object-cover opacity-[0.15] mix-blend-multiply" 
          />
        </div>
        
        <div className="mb-20 relative z-10">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
          >
            [ OUR EXPERTISE ]
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase max-w-4xl"
          >
            Comprehensive Global Support
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-[12px] font-medium tracking-wider text-gray-500 leading-relaxed uppercase max-w-2xl"
          >
            We don't just secure your admission; we manage your entire transition. Our dedicated teams across multiple countries ensure you are never alone on your journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200 bg-white/90 backdrop-blur-sm">
          {services.map((service, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              key={service.id} 
              className="flex flex-col border-r border-b border-gray-200 p-10 hover:bg-slate-900 hover:text-white transition-colors duration-500 group relative"
            >
              <div className="text-5xl md:text-6xl font-light text-slate-200 mb-8 transition-colors duration-500 group-hover:text-blue-600">
                {service.id}
              </div>
              <h3 className="text-xl font-medium tracking-tight uppercase text-slate-900 group-hover:text-white mb-6">
                {service.title}
              </h3>
              <p className="text-[12px] text-gray-500 group-hover:text-gray-400 font-medium leading-relaxed tracking-wide flex-1">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto bg-slate-900 text-white">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop" 
            alt="Pattern background dark" 
            fill 
            className="object-cover opacity-20 mix-blend-overlay" 
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-400 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
            >
              [ BEYOND BORDERS ]
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase mb-10 text-white"
            >
              With You, <br/><span className="text-blue-400">Every Step of the Way.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[12px] font-medium tracking-wider text-slate-300 leading-relaxed uppercase mb-12 max-w-xl"
            >
              Our support doesn't end when you board your flight. With a robust international network and local offices in key destination countries, we provide on-the-ground pastoral care, accommodation assistance, and emergency support.
            </motion.p>
            <div className="grid grid-cols-2 gap-8 border-t border-slate-700 pt-10">
              <div className="border-l border-slate-700 pl-6">
                <div className="text-4xl font-light text-white mb-2">24/7</div>
                <div className="text-[10px] tracking-[0.15em] uppercase font-bold text-slate-400">Emergency Support</div>
              </div>
              <div className="border-l border-slate-700 pl-6">
                <div className="text-4xl font-light text-white mb-2">10+</div>
                <div className="text-[10px] tracking-[0.15em] uppercase font-bold text-slate-400">Global Offices</div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full bg-slate-800 overflow-hidden shadow-2xl rounded-sm">
             <Image
               src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop"
               alt="Global Network"
               fill
               className="object-cover transition-all duration-700 hover:scale-105"
             />
          </div>
        </div>
      </section>
    </main>
  );
}