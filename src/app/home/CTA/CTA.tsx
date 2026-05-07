"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative py-32 bg-slate-900 font-sans overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1074&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 font-semibold tracking-[0.15em] uppercase text-[11px] mb-6 block">
            [ READY TO START? ]
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.1] tracking-tight uppercase text-white mb-8">
            Take The Next Step<br />Towards Your Future
          </h2>
          
          <p className="text-[13px] font-medium tracking-wider text-white/70 leading-relaxed uppercase max-w-2xl mx-auto mb-12">
            Get precise support for Germany and medical pathways so you can move forward with confidence and clarity.
          </p>

          <Link 
            href="/contact"
            className="inline-block bg-white text-slate-900 text-[12px] font-bold tracking-[0.2em] uppercase px-12 py-5 hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book A Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
