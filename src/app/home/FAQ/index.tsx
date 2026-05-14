"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exact pathways does SAMEDUCATION support?",
      answer: "We specialize in Nursing pathways for USA, Canada, and Australia, Germany (Bachelors/Masters, Ausbildung, Opportunity Card), MBBS in Central America, and MS/MD/MDS."
    },
    {
      question: "What are the eligibility criteria for M.Sc Nursing abroad?",
      answer: "For USA, Canada, and Australia, the primary requirements are a B.Sc Nursing degree and an IELTS score of 7 Band. The duration for these programs is typically 2 years."
    },
    {
      question: "Which Nursing specializations can I pursue?",
      answer: "Popular programs include Family Nurse Practitioner (FNP), Clinical Nurse Specialist (CNS), Paediatric Nursing, Nursing Leadership & Health Systems, Gerontology, and Psychiatric Mental Health."
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 font-sans border-b border-gray-200 overflow-hidden">
      {/* Background Image with low opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545679216-ad934fececb0?q=80&w=1170&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-[0.10] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/90 via-slate-50/60 to-slate-50/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block">
            [ GOT QUESTIONS? ]
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight uppercase max-w-3xl mx-auto text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-sm font-medium tracking-wider text-gray-500 uppercase">
            Find answers to the most common questions about the Germany and medical study pathways featured on this page.
          </p>
        </div>

        <div className="space-y-0 border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-gray-200 bg-transparent backdrop-blur-sm"
              >
                <button
                  className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  <span className={`text-[13px] font-semibold tracking-wider uppercase transition-colors pr-4 ${isActive ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 text-gray-400 transition-colors ${isActive ? "text-blue-600" : "group-hover:text-blue-600"}`}>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-8 text-[12px] font-medium tracking-wider text-gray-500 leading-relaxed uppercase">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};