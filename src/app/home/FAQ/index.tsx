"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We offer end-to-end guidance for study visas, permanent residency (PR), work visas, business visas, and specialized language coaching like IELTS, PTE, and TOEFL."
    },
    {
      question: "Which countries do you help students and professionals migrate to?",
      answer: "We primarily assist with applications for top destinations including Canada, Australia, the United Kingdom, the United States, Germany, and several other European nations."
    },
    {
      question: "How long does the visa application process typically take?",
      answer: "Processing times vary significantly based on the destination country and visa type. However, our streamlined process ensures your application is filed flawlessly and as quickly as possible to minimize delays."
    },
    {
      question: "Do you offer test preparation or coaching?",
      answer: "Yes! We provide expert coaching for IELTS, PTE-Academic, PTE-Core, TOEFL, CELPIP, OET, and German Language. We even offer free demo classes so you can experience our teaching quality."
    },
    {
      question: "Can you guarantee that my visa will be approved?",
      answer: "While no consultant can legally guarantee a visa approval, we proudly maintain a 99% success rate. Our thorough evaluation and meticulous application process give you the highest possible chance of success."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to the most common questions about our services and the immigration process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isActive ? "border-primary/50 bg-blue-50/30 shadow-md" : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  <span className={`font-semibold text-lg pr-4 ${isActive ? "text-primary" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100/0">
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