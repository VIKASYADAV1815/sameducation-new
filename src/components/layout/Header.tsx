"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "Free Eligibility Check", path: "/eligibility" },
    { name: "Migrate", path: "/migrate" },
    { name: "Work", path: "/work" },
    { name: "Study", path: "/study" },
    { name: "Visa", path: "/visa" },
    { name: "Coaching", path: "/coaching" },
    { name: "Refer", path: "/refer" },
    { name: "Jobsite", path: "/jobsite" },
    { name: "Global Indian", path: "/global-indian" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-end items-center py-2 text-sm text-gray-700 space-x-4 md:space-x-6 border-b border-gray-100">
          <div className="hidden sm:flex items-center space-x-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-semibold">+1 (800) 555-0199</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="font-semibold">+1 (800) 555-0198</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 font-semibold">
            <Link href="/signup" className="hover:text-primary transition-colors">Signup</Link>
            <Link href="/login" className="hover:text-primary transition-colors">Login</Link>
            <Link href="/contact" className="hover:text-primary transition-colors hidden sm:block">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex flex-col z-10 shrink-0">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">SAMEDUCATION</span>
            <span className="text-[10px] text-gray-500 tracking-wider">Creating Global Leaders</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-primary transition-all duration-200 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4 z-10 shrink-0">
            {isSearchOpen && (
              <div className="absolute right-16 sm:right-20 top-1/2 -translate-y-1/2 w-48 sm:w-64 transition-all">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white shadow-sm"
                  autoFocus
                />
              </div>
            )}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 transition-colors" 
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isSearchOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                )}
              </svg>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-900 p-2 transition-colors" 
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
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-2 z-50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-all duration-200 sm:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
