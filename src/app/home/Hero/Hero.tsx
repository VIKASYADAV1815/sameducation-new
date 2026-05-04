"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { HeroButton } from "./HeroButton";
import { HeroHeadline } from "./HeroHeadline";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white">
      {/* Refined Background - Subtle & Sharp */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] bg-gradient-to-br from-blue-50/50 to-purple-50/50 blur-[120px] rounded-full" />
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0z'/%3E%3C/g%3E%3C/svg%3E")` }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left: Focused Content */}
          <div className="w-full lg:max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider text-slate-600 uppercase">Expert Guidance 2026</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <HeroHeadline
                title="Global Education Strategy."
                highlight="Simplified."
                subtitle="Expert university admissions and study abroad consulting. We provide the roadmap to your academic future with precision and worldwide support."
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex items-center gap-5"
            >
              <HeroButton className="h-12 px-8 rounded-lg shadow-sm hover:shadow-md transition-all font-semibold">
                Get Started
              </HeroButton>
              <button className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                View Success Stories
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right: Sharp Professional Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-5/12 relative"
          >
            {/* The "Centerpiece" Card */}
            <div className="relative bg-slate-50 rounded-2xl p-2 ring-1 ring-slate-200 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                  alt="Education Success"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating Status - "The Micro-UI" */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-12 bg-white ring-1 ring-slate-200 p-4 rounded-xl shadow-lg flex items-center gap-3"
              >
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Application Status</p>
                  <p className="text-sm font-bold text-slate-900 leading-none">Accepted</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-6 bottom-12 bg-white ring-1 ring-slate-200 p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex -space-x-1.5">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                    ].map((src, i) => (
                      <img 
                        key={i} 
                        src={src} 
                        alt="User" 
                        className="h-6 w-6 rounded-full border-2 border-white bg-slate-200 object-cover" 
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-900 ml-1">4.9/5</span>
                </div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Trust Score</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}