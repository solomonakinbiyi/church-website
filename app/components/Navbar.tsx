'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLive, setIsLive] = useState(false); // Live stream status

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Simulate live stream active status for visual demo
    setIsLive(true);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-slate-200/80 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-serif text-2xl font-light tracking-wide text-stone-dark transition-colors group-hover:text-sage">
            S A N C T U A R Y
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm font-light tracking-wider text-stone-dark/80 hover:text-sage transition-colors uppercase"
          >
            About
          </Link>
          <Link
            href="#connect"
            className="text-sm font-light tracking-wider text-stone-dark/80 hover:text-sage transition-colors uppercase"
          >
            Connect
          </Link>
          <Link
            href="#sermons"
            className="text-sm font-light tracking-wider text-stone-dark/80 hover:text-sage transition-colors uppercase"
          >
            Sermons
          </Link>
          <Link
            href="#events"
            className="text-sm font-light tracking-wider text-stone-dark/80 hover:text-sage transition-colors uppercase"
          >
            Events
          </Link>
          <Link
            href="#contact"
            className="text-sm font-light tracking-wider text-stone-dark/80 hover:text-sage transition-colors uppercase"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-5">
          {isLive && (
            <Link
              href="#live"
              className="flex items-center gap-2 px-4 py-2 border border-slate-200 hover:border-sage rounded-full bg-[#ffffff] text-stone-dark hover:bg-white transition-all duration-300 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
              </span>
              <span className="text-[11px] font-medium tracking-widest uppercase">
                Watch Live
              </span>
            </Link>
          )}
          <Link
            href="#give"
            className="px-6 py-2 bg-sage text-stone-light hover:bg-stone-dark transition-all duration-300 rounded-full text-xs font-semibold tracking-wider uppercase"
          >
            Give
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-stone-dark hover:text-sage focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-white border-b border-slate-200 py-8 px-6 shadow-lg animate-fadeIn duration-200">
          <nav className="flex flex-col gap-6 text-center">
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light tracking-wider text-stone-dark hover:text-sage transition-colors uppercase"
            >
              About
            </Link>
            <Link
              href="#connect"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light tracking-wider text-stone-dark hover:text-sage transition-colors uppercase"
            >
              Connect
            </Link>
            <Link
              href="#sermons"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light tracking-wider text-stone-dark hover:text-sage transition-colors uppercase"
            >
              Sermons
            </Link>
            <Link
              href="#events"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light tracking-wider text-stone-dark hover:text-sage transition-colors uppercase"
            >
              Events
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light tracking-wider text-stone-dark hover:text-sage transition-colors uppercase"
            >
              Contact
            </Link>

            <div className="flex flex-col items-center gap-4 mt-6">
              {isLive && (
                <Link
                  href="#live"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full max-w-[240px] py-3 border border-slate-200 rounded-full bg-[#ffffff] text-stone-dark hover:bg-white transition-all"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-light opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase">
                    Watch Live
                  </span>
                </Link>
              )}
              <Link
                href="#give"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-[240px] py-3 bg-sage text-stone-light hover:bg-stone-dark transition-all rounded-full text-xs font-semibold tracking-wider text-center uppercase"
              >
                Give
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
