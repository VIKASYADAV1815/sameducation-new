"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  const stats = [
    { title: "10 Years Experience", desc: "Decade of excellence in educational consulting worldwide." },
    { title: "10k+ Satisfied Students", desc: "Helping students achieve their academic dreams globally." },
    { title: "Free Assessment", desc: "Get started with our comprehensive evaluation at zero cost." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
              Germany and Medical Study Paths, Simplified
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We focus on the exact pathways your client requested: Germany Bachelors/Masters, AUSBILDUNG, Opportunity Card, MBBS in Central America, and MS/MD/MDS.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team delivers clear application guidance and reliable support for admissions, documentation, and program selection without the extras.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25">
              Discover Our Services
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-3xl overflow-hidden bg-gray-200 shadow-xl border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Team of experts"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <FeatureCard title={stat.title} description={stat.desc} className="text-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
