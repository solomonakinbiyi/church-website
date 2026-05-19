'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-base/95 backdrop-blur-md border-b border-grid' : 'bg-base border-b border-grid'
        }`}
      >
        {/* Utility Bar */}
        <div className="hidden md:flex justify-between items-center px-8 py-2 border-b border-grid text-[9px] font-mono tracking-[0.2em] uppercase text-ink-light">
          <span>Est. 2024 — Austin, TX</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Live Broadcast Active
          </span>
          <span>Sanctuary Community</span>
        </div>

        {/* Main Nav */}
        <div className="px-6 md:px-8 flex items-center justify-between h-20 md:h-24">
          
          <div className="flex items-center md:flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[10px] font-mono tracking-[0.2em] uppercase hover:text-accent transition-colors flex items-center gap-2"
            >
              {isMobileMenuOpen ? 'Close [x]' : 'Menu [+]'}
            </button>
          </div>

          <div className="text-center md:flex-1">
            <Link href="/" className="font-serif text-3xl md:text-4xl italic tracking-tight text-ink hover:text-accent transition-colors">
              Sanctuary
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-end gap-6 items-center">
            <Link
              href="#give"
              className="text-[10px] font-mono tracking-[0.2em] uppercase hover:text-accent transition-colors"
            >
              Give
            </Link>
            <Link
              href="#visit"
              className="text-[9px] font-mono tracking-[0.2em] uppercase bg-ink text-base px-6 py-3 hover:bg-accent hover:text-base transition-colors"
            >
              Plan a Visit
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-base border-b border-grid p-8 animate-fadeIn">
            <nav className="flex flex-col gap-6 text-center">
              {['About', 'Sermons', 'Events', 'Contact', 'Give'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl italic text-ink hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#visit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 text-[9px] font-mono tracking-[0.2em] uppercase bg-ink text-base px-6 py-4 hover:bg-accent hover:text-base transition-colors inline-block mx-auto"
              >
                Plan a Visit
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
