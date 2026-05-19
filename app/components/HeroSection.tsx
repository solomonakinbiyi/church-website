'use client';

import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white pt-24 flex items-center border-b border-slate-200">
      {/* Decorative vertical grid lines to emphasize architectural minimalist feel */}
      <div className="absolute inset-y-0 left-12 w-px bg-slate-200/40 hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-px bg-slate-200/40 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Typography & Action */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
          <FadeIn direction="up" delay={200}>
            <div className="inline-flex items-center gap-3 py-1.5 px-3 rounded-full border border-sage/20 bg-sage/[0.03] text-sage">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase">
                Gathering In-Person & Online
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={400}>
            <h1 className="font-serif text-5xl md:text-7xl font-extralight tracking-tight text-stone-dark leading-[1.05]">
              A space carved <br />
              out for <span className="italic font-light text-sage">stillness</span> and <br />
              connection.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={600}>
            <p className="text-base md:text-lg font-light text-stone-dark/70 max-w-xl leading-relaxed">
              Welcome to Sanctuary. We are a community exploring faith, practice, and radical hospitality in the heart of the city. No matters where you are on your spiritual journey, you belong.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#connect"
                className="px-8 py-4 bg-sage text-stone-light hover:bg-stone-dark transition-all duration-300 rounded-full text-xs font-semibold tracking-widest uppercase text-center shadow-xs"
              >
                Plan a Visit
              </Link>
              <Link
                href="#live"
                className="px-8 py-4 border border-slate-200 hover:border-sage bg-[#ffffff] hover:bg-white text-stone-dark transition-all duration-300 rounded-full text-xs font-semibold tracking-widest uppercase text-center"
              >
                Join Online Stream
              </Link>
            </div>
          </FadeIn>

          {/* Service Times Quick info */}
          <FadeIn direction="up" delay={1000} className="pt-8 border-t border-slate-200 max-w-lg">
            <div className="grid grid-cols-2 gap-8 text-xs tracking-wider uppercase font-light text-stone-dark/60">
              <div>
                <p className="font-semibold text-stone-dark mb-1">Weekly Gatherings</p>
                <p>Sundays — 9:00 AM & 11:00 AM</p>
              </div>
              <div>
                <p className="font-semibold text-stone-dark mb-1">Physical Location</p>
                <p>123 Community Ave, Austin TX</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Editorial Architecture Photo */}
        <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[650px] overflow-hidden group border border-slate-200 p-3 bg-white shadow-xs">
          <div className="relative w-full h-full overflow-hidden bg-stone-100">
            {/* Elegant, desaturated image representing light and architectural serenity */}
            <img
              src="https://images.unsplash.com/photo-1548625361-1a3b12f71826?q=80&w=2600"
              alt="Light streaming into a modern architectural sanctuary"
              className="w-full h-full object-cover transition-transform duration-10000 ease-out group-hover:scale-105 filter grayscale hover:grayscale-0 duration-500"
            />
            {/* Subtle shadow layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Aesthetic editorial stamp/label in the corner */}
          <div className="absolute bottom-6 right-6 bg-white border border-slate-200 px-4 py-2 text-[10px] tracking-widest uppercase font-light text-stone-dark">
            EST. 2026 / CHAPEL
          </div>
        </div>
      </div>
    </section>
  );
}
