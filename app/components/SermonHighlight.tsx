'use client';

import React, { useState } from 'react';
import FadeIn from './FadeIn';

export default function SermonHighlight() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="sermons" className="bg-base border-b border-grid">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grid">
        
        {/* Left: Text Content */}
        <div className="p-8 md:p-16 flex flex-col justify-between min-h-[500px]">
          <FadeIn direction="up">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light block mb-6">
              Current Teaching
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-ink leading-[1.1]">
              Presence over <br />
              <span className="italic text-accent">Productivity.</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={200} className="mt-12">
            <p className="font-mono text-[11px] leading-relaxed tracking-wider text-ink-light max-w-md mb-12">
              In a culture that measures worth by output and speed, Jesus invites us to a different rhythm of life. An exploration of the Sabbath and solitude.
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsPlaying(true)}
                className="px-8 py-4 bg-ink text-base hover:bg-accent transition-colors font-mono text-[9px] tracking-[0.2em] uppercase flex items-center gap-3"
              >
                Watch Message
                <span className="w-1.5 h-1.5 bg-base rounded-full animate-pulse" />
              </button>
              <a
                href="#podcast"
                className="px-8 py-4 border border-grid text-ink hover:border-ink transition-colors font-mono text-[9px] tracking-[0.2em] uppercase"
              >
                Podcast Audio
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right: Media Container */}
        <div className="relative h-[400px] lg:h-auto bg-ink overflow-hidden">
          {isPlaying ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Sermon Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div 
              className="absolute inset-0 group cursor-pointer" 
              onClick={() => setIsPlaying(true)}
            >
              <img
                src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2600"
                alt="Sermon thumbnail"
                className="w-full h-full object-cover filter grayscale contrast-125 opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-base/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-base group-hover:text-ink text-base transition-colors duration-500">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase ml-1">Play</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
