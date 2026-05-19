'use client';

import React, { useState } from 'react';
import FadeIn from './FadeIn';

export default function SermonHighlight() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="sermons" className="py-24 md:py-32 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Sermon Series Visual / Video Player */}
          <div className="lg:col-span-6 relative group border border-slate-200 p-3 bg-white shadow-xs">
            <div className="relative aspect-video w-full overflow-hidden bg-stone-900 flex items-center justify-center">
              {isPlaying ? (
                /* Embedded Mock YouTube Player (responsive video) */
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Sermon Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* Thumbnail with Overlay */
                <>
                  <img
                    src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2600"
                    alt="Misty forest path representing the 'Presence over Productivity' sermon series"
                    className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-rose-600/30 mix-blend-multiply" />
                  
                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white/95 text-stone-dark hover:bg-sage hover:text-stone-light shadow-lg transition-all duration-300 scale-95 group-hover:scale-100 focus:outline-none"
                    aria-label="Play latest sermon"
                  >
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs border border-slate-200 px-3 py-1 text-[9px] tracking-widest uppercase font-semibold text-stone-dark">
                    Latest Teaching
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right: Sermon Details & Theological Description */}
          <div className="lg:col-span-6 space-y-8">
            <FadeIn direction="up">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-sage">
                Current Teaching Series
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-dark mt-4">
                Presence over <br />
                <span className="italic font-light text-sage">Productivity</span>
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <p className="text-base font-light text-stone-dark/70 leading-relaxed max-w-xl">
                In a culture that measures worth by output and speed, Jesus invites us to a different rhythm of life. Join us for this 6-week exploration of the Sabbath, solitude, and finding our souls in a hyper-active world.
              </p>
            </FadeIn>

            {/* Meta Details */}
            <FadeIn direction="up" delay={400} className="grid grid-cols-2 gap-6 py-6 border-y border-slate-200 max-w-md">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-stone-dark/40 font-semibold">Speaker</p>
                <p className="text-sm font-light text-stone-dark mt-0.5">Marcus Vance, Lead Pastor</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-stone-dark/40 font-semibold">Scripture</p>
                <p className="text-sm font-light text-stone-dark mt-0.5">Matthew 11:28-30</p>
              </div>
            </FadeIn>

            {/* Actions */}
            <FadeIn direction="up" delay={600} className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsPlaying(true)}
                className="px-6 py-3 bg-sage text-stone-light hover:bg-stone-dark transition-all rounded-full text-xs font-semibold tracking-widest uppercase shadow-xs flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Watch Message
              </button>
              <a
                href="#podcast"
                className="px-6 py-3 border border-slate-200 hover:border-sage bg-white text-stone-dark transition-all rounded-full text-xs font-semibold tracking-widest uppercase flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"></path>
                </svg>
                Podcast Audio
              </a>
              <a
                href="#archive"
                className="w-full sm:w-auto text-center px-6 py-3 text-xs font-semibold tracking-widest uppercase text-stone-dark hover:text-sage transition-all mt-1 underline underline-offset-4"
              >
                Browse Sermon Library
              </a>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
