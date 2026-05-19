'use client';

import React from 'react';

export default function ServiceTimesBar() {
  return (
    <div className="w-full bg-base border-b border-grid">
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-grid">
        
        <div className="p-8 flex flex-col justify-center">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light mb-2">When</p>
          <p className="font-serif text-2xl italic text-ink">Sundays, 9am & 11am</p>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light mb-2">Where</p>
          <p className="font-serif text-2xl italic text-ink">123 Community Ave</p>
        </div>

        <div className="p-8 flex flex-col justify-center md:col-span-2">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light mb-4">Actions</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="px-6 py-3 border border-ink text-ink hover:bg-ink hover:text-base transition-colors font-mono text-[9px] tracking-[0.2em] uppercase"
            >
              Directions
            </a>
            <a
              href="#live"
              className="px-6 py-3 bg-accent text-base hover:bg-ink transition-colors font-mono text-[9px] tracking-[0.2em] uppercase flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-base animate-pulse" />
              Stream
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
