"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CTAButton } from "./CTAButton";

export function CTA() {
  const challenges = [
    "Struggling to understand university requirements?",
    "Confused about scholarship and funding options?",
    "Need help drafting an outstanding statement of purpose?",
    "Overwhelmed by the student visa application process?",
    "Seeking guidance for post-graduation career pathways?",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-xl"
        >
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 leading-tight">
              Which of These Challenges Are You Facing as a Student?
            </h2>
            <p className="text-primary-light/90 mb-8 leading-relaxed max-w-md">
              A complex admissions process doesn't mean your dreams should be put on hold. There's a much easier way to secure your future abroad, fast and stress-free.
            </p>
          </div>
          
          <div className="md:w-1/2 bg-white m-2 md:m-4 rounded-[2rem] p-8 md:p-12 shadow-sm">
            <h3 className="text-xl font-bold text-secondary mb-6">Select your challenges:</h3>
            <ul className="space-y-4 mb-8">
              {challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 p-1 rounded text-primary">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm">{challenge}</span>
                </li>
              ))}
            </ul>
            <CTAButton>Talk To An Expert</CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
