"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
};

export function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState<Testimonial>({ quote: "", author: "", role: "" });
  
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      quote: "I was very satisfied with the work. Always available and detail orientated. Thank you again",
      author: "Christophe",
      role: "Founder",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "Excellent designer! Very skilled and polite person. He was very attentive to my project and provided great results. Looking forward to working with him again!",
      author: "Alex",
      role: "Mobile Developer",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "Rustam is very attentive and he has excellent design skills. He really understood my brief, produced some interesting concepts and then created a professional and beautiful logo. We worked together to make a few tweaks, and I am delighted with the final result. I would not hesitate to recommend him.",
      author: "Craig",
      role: "Founder & CEO",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    {
      quote: "Rustam is an incredible designer! This is the second project we have worked on together and hope to have many more. Quick communication, very fast turnaround, great attitude to feedback - you couldn't want anything better!",
      author: "Thomas",
      role: "CEO",
      avatarUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=100&auto=format&fit=crop"
    },
    {
      quote: "I've gone through a lot of designer profiles but Rustam knows what he is doing. Great job in his styles and editing.",
      author: "Sameer",
      role: "Founder",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTestimonial.quote && newTestimonial.author) {
      setTestimonials(prev => [...prev, newTestimonial]);
      setNewTestimonial({ quote: "", author: "", role: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-gray-200 text-gray-700 text-xs font-bold tracking-widest uppercase mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            35+ Happy Clients
          </h2>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 text-left max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TestimonialCard 
                quote={t.quote} 
                author={t.author} 
                role={t.role} 
                avatarUrl={t.avatarUrl} 
              />
            </motion.div>
          ))}

          {/* "You?" Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: testimonials.length * 0.1 }}
            className="break-inside-avoid mb-6"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full min-h-[200px] border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="font-medium">you?</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Add Testimonial Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Add Your Testimonial</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Quote</label>
                  <textarea 
                    required
                    value={newTestimonial.quote}
                    onChange={(e) => setNewTestimonial({...newTestimonial, quote: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[100px]"
                    placeholder="Share your experience..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      required
                      value={newTestimonial.author}
                      onChange={(e) => setNewTestimonial({...newTestimonial, author: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role (Optional)</label>
                    <input 
                      type="text" 
                      value={newTestimonial.role}
                      onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Student"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-4"
                >
                  Post Testimonial
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
