'use client';

import React, { useState } from 'react';
import FadeIn from './FadeIn';

export default function WelcomeSection() {
  const [activeTab, setActiveTab] = useState<'atmosphere' | 'kids' | 'duration'>('atmosphere');

  const tabContent = {
    atmosphere: {
      title: "Atmosphere",
      description: "We care about you, not your wardrobe. Expect a warm greeting, freshly brewed local coffee, and a relaxed environment where you can truly be yourself.",
    },
    kids: {
      title: "Children",
      description: "Safe, clean, and highly engaging environments with background-checked leaders and age-appropriate spiritual curriculum.",
    },
    duration: {
      title: "Gathering",
      description: "75 minutes. Modern worship, an encouraging message, and intentional spaces for prayer.",
    }
  };

  return (
    <section id="about" className="bg-base border-b border-grid">
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-grid">
        
        {/* Left: Huge Title */}
        <div className="lg:col-span-7 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <FadeIn direction="up">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light block mb-8">
              Introduction
            </span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[100px] leading-[0.9] text-ink">
              Faith is a journey, <br />
              <span className="italic text-accent">not a destination.</span>
            </h2>
            <div className="mt-16 pl-8 border-l border-ink">
              <p className="font-serif text-2xl italic text-ink-light leading-relaxed max-w-xl">
                "We built a community where questions are welcomed, doubts are honored, and grace is the foundation. You don't have to believe before you can belong."
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right: Sharp Tabbed Interface */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-grid bg-white/30">
          <div className="p-8">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light mb-2">
              What to expect
            </p>
          </div>
          
          {(Object.keys(tabContent) as Array<keyof typeof tabContent>).map((key) => (
            <div key={key} className="flex-1 flex flex-col">
              <button
                onClick={() => setActiveTab(key)}
                className={`flex-1 p-8 text-left transition-colors flex items-center justify-between ${
                  activeTab === key ? 'bg-ink text-base' : 'hover:bg-grid'
                }`}
              >
                <span className="font-serif text-3xl italic">{tabContent[key].title}</span>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-50">
                  {activeTab === key ? '[-]' : '[+]'}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out bg-base ${
                  activeTab === key ? 'max-h-48 border-b border-grid' : 'max-h-0'
                }`}
              >
                <div className="p-8">
                  <p className="font-mono text-[11px] leading-relaxed tracking-wider text-ink-light">
                    {tabContent[key].description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
