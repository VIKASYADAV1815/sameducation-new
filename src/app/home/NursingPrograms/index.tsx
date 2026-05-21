"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function NursingPrograms() {
  const programs = [
    "FNP - Family Nurse Practitioner",
    "CNS - Clinical Nurse Specialist",
    "Paediatric Nurse",
    "Nursing Leadership",
    "Gerontology",
    "Psychiatric Mental Health"
  ];

  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="text-blue-600 font-semibold tracking-[0.15em] uppercase text-[10px] mb-4 block">
            [ GLOBAL NURSING SPOTLIGHT ]
          </span>
          <h2 className="text-2xl md:text-4xl font-medium leading-[1.1] tracking-tight uppercase text-slate-900 mb-4">
            Nursing Roles In Demand
          </h2>
          <p className="text-[12px] font-medium tracking-wider text-gray-500 uppercase max-w-xl mx-auto">
            Explore the advanced nursing roles featured across our USA, Canada, and Australia guidance pathways.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-gray-100 p-5 hover:border-blue-200 hover:shadow-md transition-all flex items-center justify-center text-center rounded-sm"
            >
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-wide text-slate-800">{prog}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/nursing"
            className="inline-flex items-center justify-center bg-black text-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            Explore Nursing Pathways
            <ArrowRight className="ml-2 w-3 h-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
