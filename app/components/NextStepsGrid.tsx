'use client';

import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function NextStepsGrid() {
  const steps = [
    {
      id: "I",
      title: "Life Groups",
      description: "Faith is best lived out in community. Join a small group in your neighborhood.",
      link: "#connect",
    },
    {
      id: "II",
      title: "Serve",
      description: "Use your unique gifts to serve. Welcome guests, or join city outreach teams.",
      link: "#connect",
    },
    {
      id: "III",
      title: "Ministries",
      description: "Dedicated spiritual gatherings for children, students, men, and women.",
      link: "#connect",
    }
  ];

  return (
    <section id="connect" className="bg-base border-b border-grid">
      
      {/* Header Area */}
      <div className="p-8 md:p-16 border-b border-grid">
        <FadeIn direction="up">
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light block mb-6">
            Next Steps
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-ink">
            Belonging means <span className="italic text-accent">participating.</span>
          </h2>
        </FadeIn>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid">
        {steps.map((step, idx) => (
          <div key={step.id} className="p-8 md:p-16 flex flex-col group hover:bg-ink transition-colors duration-500 min-h-[400px]">
            <FadeIn direction="up" delay={idx * 150} className="h-full flex flex-col justify-between">
              <div>
                <span className="font-serif text-6xl text-grid-hover group-hover:text-base/20 transition-colors block mb-12">
                  {step.id}
                </span>
                <h3 className="font-serif text-4xl text-ink group-hover:text-base transition-colors mb-6">
                  {step.title}
                </h3>
                <p className="font-mono text-[11px] leading-relaxed tracking-wider text-ink-light group-hover:text-base/70 transition-colors">
                  {step.description}
                </p>
              </div>

              <div className="pt-12">
                <Link
                  href={step.link}
                  className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink group-hover:text-base flex items-center gap-4 transition-colors"
                >
                  <span className="w-8 h-[1px] bg-ink group-hover:bg-base transition-colors" />
                  Explore
                </Link>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
}
