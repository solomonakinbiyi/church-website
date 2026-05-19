'use client';

import React, { useState } from 'react';
import FadeIn from './FadeIn';

export default function WelcomeSection() {
  const [activeTab, setActiveTab] = useState<'atmosphere' | 'kids' | 'duration'>('atmosphere');

  const tabContent = {
    atmosphere: {
      title: "An Open, Casual Space",
      description: "We care about you, not your wardrobe. Expect a warm greeting, freshly brewed local coffee, and a relaxed environment where you can truly be yourself.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    },
    kids: {
      title: "Safe & Inspired Classrooms",
      description: "Your children (ages 0-11) will enjoy a safe, clean, and highly engaging environment with background-checked leaders and age-appropriate spiritual curriculum.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    duration: {
      title: "Intentional & Focused Gatherings",
      description: "Our gatherings last approximately 75 minutes. They include modern, contemplative worship, an encouraging, scripture-based message, and opportunities for prayer.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Editorial Introduction & Interactive Expectations */}
        <div className="lg:col-span-7 space-y-12">
          <FadeIn direction="up">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-sage">
              Who We Are
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-dark mt-4 leading-tight">
              Believing that faith is a journey, <br />
              not a destination.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="border-l border-sage/30 pl-6 space-y-4">
              <p className="font-serif text-xl italic text-stone-dark/80 font-light leading-relaxed">
                "We wanted to create a community where questions are welcomed, doubts are honored, and grace is the foundation of everything we do. You don't have to believe before you can belong."
              </p>
              <p className="text-xs tracking-wider uppercase font-medium text-stone-dark/60">
                — Pastors Marcus & Sarah Vance, Lead Leaders
              </p>
            </div>
          </FadeIn>

          {/* Interactive Expectations Drawer */}
          <FadeIn direction="up" delay={400} className="space-y-6 pt-6 border-t border-slate-200">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-stone-dark">
              What To Expect
            </h3>
            
            {/* Interactive Tab Headers */}
            <div className="flex flex-wrap gap-2">
              {(Object.keys(tabContent) as Array<keyof typeof tabContent>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-sage text-stone-light'
                      : 'border border-slate-200 bg-white text-stone-dark hover:border-sage'
                  }`}
                >
                  {key === 'atmosphere' ? 'Atmosphere' : key === 'kids' ? 'Kids & Family' : 'Service Length'}
                </button>
              ))}
            </div>

            {/* Tab Description Container */}
            <div className="p-6 bg-white border border-slate-200 rounded-xs space-y-3 shadow-xs min-h-[160px] flex flex-col justify-center">
              <div className="flex items-center gap-3 text-sage">
                {tabContent[activeTab].icon}
                <h4 className="font-serif text-lg font-light text-stone-dark">
                  {tabContent[activeTab].title}
                </h4>
              </div>
              <p className="text-sm font-light text-stone-dark/70 leading-relaxed">
                {tabContent[activeTab].description}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Editorial Lifestyle Photo */}
        <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[550px] overflow-hidden border border-slate-200 p-3 bg-white shadow-xs lg:mt-12">
          <div className="relative w-full h-full overflow-hidden bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2600"
              alt="Community gathering, sharing food and laughter"
              className="w-full h-full object-cover transition-transform duration-10000 ease-out filter grayscale hover:grayscale-0 duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-rose-600/10 mix-blend-overlay" />
          </div>
          <div className="absolute top-6 left-6 bg-slate-900 text-white px-4 py-2 text-[10px] tracking-widest uppercase font-light">
            OUR COMMUNITY
          </div>
        </div>

      </div>
    </section>
  );
}
