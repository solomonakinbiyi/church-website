'use client';

import React from 'react';
import FadeIn from './FadeIn';

export default function ServiceTimesBar() {
  return (
    <div className="w-full bg-slate-900 text-white py-6 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Section 1: Times */}
        <div className="flex items-center gap-4 text-center lg:text-left">
          <div className="w-2 h-2 rounded-full bg-sand" />
          <div>
            <p className="text-[10px] tracking-widest text-white/50 uppercase font-medium">Sunday Gatherings</p>
            <p className="text-sm font-light tracking-wide mt-0.5">9:00 AM & 11:00 AM (Central Standard Time)</p>
          </div>
        </div>

        {/* Section 2: Address */}
        <div className="flex items-center gap-4 text-center lg:text-left">
          <div className="w-2 h-2 rounded-full bg-sand" />
          <div>
            <p className="text-[10px] tracking-widest text-white/50 uppercase font-medium">Location</p>
            <p className="text-sm font-light tracking-wide mt-0.5">123 Community Ave, Austin, TX 78701</p>
          </div>
        </div>

        {/* Section 3: Interactive Call to action */}
        <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-end">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-widest uppercase py-2 px-5 border border-slate-800 hover:border-sand hover:bg-white hover:text-stone-dark transition-all duration-300 rounded-full"
          >
            Get Directions
          </a>
          <a
            href="#live"
            className="text-xs font-semibold tracking-widest uppercase py-2 px-5 bg-sand text-stone-dark hover:bg-white transition-all duration-300 rounded-full"
          >
            Stream Link
          </a>
        </div>
      </div>
    </div>
  );
}
