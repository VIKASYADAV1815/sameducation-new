"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquareText } from "lucide-react";

export function PopupEnquiryForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedAutomatically, setHasOpenedAutomatically] = useState(false);

  useEffect(() => {
    // Automatically open the form after 5 seconds
    const timer = setTimeout(() => {
      if (!hasOpenedAutomatically) {
        setIsOpen(true);
        setHasOpenedAutomatically(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasOpenedAutomatically]);

  const toggleForm = () => setIsOpen(!isOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for your enquiry! We will get back to you soon.");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleForm}
        aria-label="Open Enquiry Form"
      >
        <MessageSquareText size={24} />
      </motion.button>

      {/* Popup Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleForm}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-100"
            >
              {/* Header */}
              <div className="bg-slate-900 text-white p-6 relative">
                <button
                  onClick={toggleForm}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                >
                  <X size={20} />
                </button>
                <h3 className="text-2xl font-semibold mb-2 font-poppins">Get in Touch</h3>
                <p className="text-sm text-gray-300 font-inter">
                  Have questions about our programs? Fill out the form below and our experts will guide you.
                </p>
              </div>

              {/* Form Body */}
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4 font-inter">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      Program of Interest
                    </label>
                    <select
                      id="interest"
                      required
                      defaultValue=""
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm bg-white"
                    >
                      <option value="" disabled>Select a program</option>
                      <option value="nursing">Nursing Across the World</option>
                      <option value="medical-pg">Medical PG</option>
                      <option value="dental-pg">Dental PG</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-6"
                  >
                    <span>Submit Enquiry</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
