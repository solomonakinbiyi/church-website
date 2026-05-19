'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our weekly bulletin!');
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-6">
            <span className="font-serif text-3xl font-light tracking-widest text-white">
              SANCTUARY
            </span>
            <p className="text-sm font-light text-stone-300 leading-relaxed max-w-xs">
              A space carved out of time, designed for finding peace, authentic community, and radical grace in our city.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-white/60 hover:text-sand transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-sand transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-sand transition-colors" aria-label="Spotify">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12.18c2.5-1.5 5.5-1.5 8 0M9 9.5c2-1 4.5-1 6.5 0M9.5 14.8c1.5-.7 3.5-.7 5 0"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Service Times & Location */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-light tracking-wider text-white uppercase">
              Join Us
            </h4>
            <div className="space-y-4 text-sm font-light text-stone-300">
              <div>
                <p className="font-medium text-white mb-1">Sundays In-Person & Online</p>
                <p>9:00 AM & 11:00 AM</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Sanctuary Chapel</p>
                <p>123 Community Ave</p>
                <p>Austin, TX 78701</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-light tracking-wider text-white uppercase">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-light text-stone-300">
              <li>
                <Link href="#about" className="hover:text-sand transition-colors">
                  Our Story & Team
                </Link>
              </li>
              <li>
                <Link href="#connect" className="hover:text-sand transition-colors">
                  Life Groups & Serving
                </Link>
              </li>
              <li>
                <Link href="#sermons" className="hover:text-sand transition-colors">
                  Sermon Library
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-sand transition-colors">
                  Upcoming Gatherings
                </Link>
              </li>
              <li>
                <Link href="#give" className="hover:text-sand transition-colors">
                  Support the Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-light tracking-wider text-white uppercase">
              Keep in Touch
            </h4>
            <p className="text-sm font-light text-stone-300 leading-relaxed">
              Subscribe to receive weekly reflections, sermon bulletins, and events.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-[#222222] border border-[#333333] focus:border-sand focus:outline-none text-white text-xs tracking-wider transition-colors placeholder:text-stone-500 rounded-xs"
              />
              <button
                type="submit"
                className="w-full py-3 bg-sand text-stone-dark hover:bg-white hover:text-stone-dark transition-all duration-300 text-xs font-semibold tracking-widest uppercase rounded-xs"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[11px] font-light text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Sanctuary Church. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Staff Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
