"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "Dependent Visa / Visa Extension Assistance",
      desc: "We have an efficient and experienced Operations Team that gives end-to-end admission and visa filing assistance. Our team is spread across domestic and international offices. Once you move overseas, we continue to help you in filing Dependent Visas, Visa Extensions, and taking admission in new study programs. We handhold you not only in your home country but even after you move.",
    },
    {
      id: "02",
      title: "Airport Transfers",
      desc: "We facilitate airport pickups from international airports to your new home. We make sure that you reach your destination safely and comfortably. A staff member is present at the airport to welcome you.",
    },
    {
      id: "03",
      title: "Accommodation",
      desc: "We assist you in finding safe and comfortable housing arrangements in any country you go to. We help you through our large alumni network so your family can rest knowing you will stay in pleasant surroundings at convenient locations.",
    },
    {
      id: "04",
      title: "Immigration Consulting",
      desc: "Our in-house Regulated Immigration Consultants are licensed to represent you in Temporary and Permanent Residence applications. With deep knowledge of immigration laws, we ensure a smooth process from documentation to permit acquisition.",
    },
    {
      id: "05",
      title: "Job Placement Assistance",
      desc: "We help you find both part-time and full-time job opportunities. As one of our students, you can also look forward to job opportunities within our extensive international organizational network.",
    },
    {
      id: "06",
      title: "Pastoral Support",
      desc: "We provide pastoral support to ensure your general wellbeing and to improve your social, emotional, as well as behavioural skills in an environment that is new and alien to you.",
    },
    {
      id: "07",
      title: "NCLEX-RN & OBA Exam Preparation",
      desc: "Our trainers prepare you to pass the National Council Licensure Examination (NCLEX-RN) and Australian OBA. You will be provided with individual feedback and a study plan. We also assist with the application process from the initial assessment stage to obtaining licensure.",
    },
    {
      id: "08",
      title: "Nursing Licensure Application",
      desc: "At our global facilities, we offer comprehensive assistance with the nursing licensure application. Our dedicated team is equipped to guide you through every step, ensuring that your application is completed accurately and efficiently.",
    },
    {
      id: "09",
      title: "IELTS / PTE / German Training",
      desc: "We offer comprehensive language training tailored specifically for healthcare and medical professionals. Our expert trainers cover all modules, providing personalized feedback and proven strategies. Training includes regular mock tests to simulate the actual exam environment.",
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-end pb-24 overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop"
          alt="Our Services"
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
      <section className="relative py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-gray-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />
        
        <div className="mb-20">
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
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block"
            >
              [ BEYOND BORDERS ]
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase mb-10"
            >
              With You, <br/><span className="text-blue-600">Every Step of the Way.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[12px] font-medium tracking-wider text-gray-500 leading-relaxed uppercase mb-12 max-w-xl"
            >
              Our support doesn't end when you board your flight. With a robust international network and local offices in key destination countries, we provide on-the-ground pastoral care, accommodation assistance, and emergency support.
            </motion.p>
            <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-10">
              <div className="border-l border-gray-200 pl-6">
                <div className="text-4xl font-light text-slate-900 mb-2">24/7</div>
                <div className="text-[10px] tracking-[0.15em] uppercase font-bold text-gray-500">Emergency Support</div>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <div className="text-4xl font-light text-slate-900 mb-2">10+</div>
                <div className="text-[10px] tracking-[0.15em] uppercase font-bold text-gray-500">Global Offices</div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full bg-slate-100 overflow-hidden shadow-2xl">
             <Image
               src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop"
               alt="Global Network"
               fill
               className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>
      </section>
    </main>
  );
}