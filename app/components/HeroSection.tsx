'use client';

import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-base pt-[105px] md:pt-[133px] flex flex-col border-b border-grid">
      {/* Top Graphic Area */}
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* Left: Typography */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-end border-b lg:border-b-0 lg:border-r border-grid">
          <FadeIn direction="up">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-light mb-8">
              Sunday Gatherings — 09:00 & 11:00
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[140px] leading-[0.9] text-ink mb-6">
              Grace,<br />
              <span className="italic text-accent">Redefined.</span>
            </h1>
            <p className="font-mono text-[11px] leading-relaxed tracking-wider text-ink-light max-w-sm">
              We are a community exploring faith, architecture, and radical hospitality in the heart of the city. No matter your background, there is a seat at the table.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="flex gap-4 mt-12">
              <Link
                href="#visit"
                className="inline-block px-8 py-4 bg-ink text-base hover:bg-accent transition-colors font-mono text-[9px] tracking-[0.2em] uppercase"
              >
                Plan a Visit
              </Link>
              <Link
                href="#live"
                className="inline-block px-8 py-4 border border-grid text-ink hover:border-ink transition-colors font-mono text-[9px] tracking-[0.2em] uppercase"
              >
                Watch Live
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right: Architectural Imagery */}
        <div className="flex-1 relative min-h-[40vh] lg:min-h-full">
          <img
            src="/hero_architecture.png"
            alt="Church Architecture"
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
          />
        </div>

      </div>

      {/* Marquee / Bottom Bar */}
      <div className="border-t border-grid overflow-hidden bg-base py-4 flex items-center">
        <div className="whitespace-nowrap font-mono text-[10px] tracking-[0.3em] uppercase text-ink flex gap-12 animate-scroll">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>Seek Truth</span>
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Practice Grace</span>
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Love Well</span>
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            </span>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: 200%;
          animation: scroll 30s linear infinite;
        }
      `}} />
    </section>
  );
}
