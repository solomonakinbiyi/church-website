'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-ink text-base">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-grid/20 border-b border-grid/20">
        
        {/* Brand Info */}
        <div className="p-8 md:p-16 flex flex-col justify-between min-h-[400px]">
          <span className="font-serif text-4xl italic text-base">
            Sanctuary.
          </span>
          <p className="font-mono text-[11px] leading-relaxed tracking-wider text-base/60 mt-8">
            A space carved out of time, designed for finding peace, authentic community, and radical grace in our city.
          </p>
        </div>

        {/* Service Times & Location */}
        <div className="p-8 md:p-16 flex flex-col">
          <h4 className="font-mono text-[9px] tracking-[0.2em] uppercase text-base/40 mb-12">
            Join Us
          </h4>
          <div className="space-y-8 font-serif text-xl italic text-base">
            <div>
              <p className="mb-2">Sundays In-Person & Online</p>
              <p className="text-base/60">09:00 & 11:00</p>
            </div>
            <div>
              <p className="mb-2">Sanctuary Chapel</p>
              <p className="text-base/60">123 Community Ave, Austin</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-8 md:p-16 flex flex-col">
          <h4 className="font-mono text-[9px] tracking-[0.2em] uppercase text-base/40 mb-12">
            Explore
          </h4>
          <ul className="space-y-4 font-mono text-[11px] tracking-wider uppercase text-base">
            {['About', 'Connect', 'Sermons', 'Events', 'Give'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors flex items-center gap-4">
                  <span className="w-4 h-[1px] bg-base/40" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="p-8 md:p-16 flex flex-col justify-between bg-ink-light">
          <div>
            <h4 className="font-mono text-[9px] tracking-[0.2em] uppercase text-base/40 mb-12">
              Keep in Touch
            </h4>
            <p className="font-serif text-2xl italic text-base mb-12">
              Subscribe to receive weekly reflections and event details.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-transparent border-b border-grid/40 focus:border-base pb-4 font-mono text-[11px] tracking-wider text-base focus:outline-none placeholder:text-base/40 transition-colors"
            />
            <button
              type="submit"
              className="w-full py-4 bg-base text-ink hover:bg-accent hover:text-base transition-colors font-mono text-[9px] tracking-[0.2em] uppercase mt-4"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="p-8 flex flex-col md:flex-row justify-between items-center font-mono text-[9px] tracking-[0.2em] uppercase text-base/40 gap-4">
        <p>© {new Date().getFullYear()} Sanctuary. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-base transition-colors">Privacy</a>
          <a href="#" className="hover:text-base transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
