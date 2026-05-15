"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Pages with light backgrounds at the top
  const isLightHero = pathname?.startsWith("/contact");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "NURSING (USA/CAN/AUS)", path: "/nursing" },
    { name: "MBBS ABROAD", path: "/mbbs" },
    { name: "PG GERMANY", path: "/pg-germany" },
    { name: "MS/MD/MDS", path: "/ms-md-mds" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] px-6 md:px-12 lg:px-16 flex items-center justify-between 
        ${isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-sm py-2" 
          : "bg-transparent py-5"}`}
    >
      {/* Logo Area - Balanced Size */}
      <div className="flex-shrink-0">
        <Link href="/" className="flex items-center">
          <motion.div
            animate={{ 
              scale: isScrolled ? 0.95 : 1,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`bg-center bg-no-repeat bg-contain transition-all duration-500 ${
              isScrolled ? "w-18 h-18" : "w-24 h-24"
            }`}
            style={{ 
              backgroundImage: "url('/logo.png')",
              width: isScrolled ? '72px' : '96px', // Explicit sizes for stability
              height: isScrolled ? '72px' : '96px' 
            }}
            aria-label="SAM Education logo"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`group relative text-[11px] font-bold tracking-[0.22em] transition-colors duration-300 ${
              isScrolled || isLightHero ? "text-slate-900" : "text-white drop-shadow-md"
            }`}
          >
            {item.name}
            <span className={`absolute -bottom-2 left-0 h-[1.5px] w-0 transition-all duration-500 ease-in-out group-hover:w-full ${
              isScrolled || isLightHero ? "bg-blue-600" : "bg-white"
            }`} />
          </Link>
        ))}
      </nav>

      {/* Premium Animated Hamburger */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative w-10 h-10 flex flex-col justify-center items-center z-[60] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 transition-all duration-500 transform ${
              isScrolled || isLightHero || isMobileMenuOpen ? "bg-slate-900" : "bg-white"
            } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled || isLightHero || isMobileMenuOpen ? "bg-slate-900" : "bg-white"
            } ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
            
            <span className={`block w-4 h-0.5 transition-all duration-500 transform ${
              isScrolled || isLightHero || isMobileMenuOpen ? "bg-slate-900" : "bg-white"
            } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2 w-6" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 h-screen bg-white z-50 flex flex-col justify-center px-12 space-y-8"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className="text-2xl font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2 block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};