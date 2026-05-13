"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileToggleWrapperClass = isScrolled
    ? "bg-stone-100/95 shadow-lg border border-stone-200/80 backdrop-blur"
    : "bg-slate-900/55 border border-white/15 shadow-lg backdrop-blur-md";

  const mobileToggleButtonClass = isScrolled
    ? "text-slate-900 hover:bg-stone-200/80 active:bg-stone-300/70"
    : "text-white hover:bg-white/10 active:bg-white/15";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "NURSING (CANADA/UK)", path: "/nursing" },
    { name: "MBBS ABROAD & INDIA", path: "/mbbs" },
    { name: "MEDICAL PG IN GERMANY", path: "/pg-germany" },
    { name: "MS/MD/MDS", path: "/ms-md-mds" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 ${isScrolled ? "pt-3" : "pt-4"} px-6 md:px-12 lg:px-16 flex items-center justify-between`}>
      {/* Logo Area - Floating Box */}
      <div className={`pointer-events-auto transition-all duration-500 rounded-sm ${isScrolled ? "bg-transparent p-2" : "bg-transparent p-1"}`}>
        <Link href="/" className="flex items-center justify-center">
          <div className="w-24 h-24 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('/logo.png')" }} aria-label="SAM Education logo" />
        </Link>
      </div>

      {/* Desktop Navigation - Floating Box */}
      <div className={`hidden lg:flex items-center pointer-events-auto transition-all duration-500 rounded-sm ${isScrolled ? "bg-white shadow-lg border border-gray-100 px-8 py-4" : "bg-transparent px-6 py-3"}`}>
        <nav className="flex items-center space-x-6 xl:space-x-10 pointer-events-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-[11px] font-semibold tracking-widest whitespace-nowrap transition-colors ${
                isScrolled
                  ? "text-slate-900 hover:text-blue-600"
                  : "text-white hover:text-white/80 drop-shadow-md"
              }`}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Toggle - Floating Box */}
      <div className={`lg:hidden pointer-events-auto transition-all duration-500 rounded-sm ${mobileToggleWrapperClass}`}>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`rounded-sm p-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 ${mobileToggleButtonClass} ${
            isScrolled ? "focus-visible:ring-slate-300" : "focus-visible:ring-white/40"
          }`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-6 right-6 mt-4 pointer-events-auto bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-sm py-4 px-4 flex flex-col space-y-2 z-50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="px-4 py-3 text-xs font-semibold text-white/80 hover:bg-white/5 hover:text-white rounded-sm transition-colors uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
