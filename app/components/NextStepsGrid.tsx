'use client';

import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function NextStepsGrid() {
  const steps = [
    {
      num: "01",
      title: "Life Groups",
      tagline: "Grow in circles, not rows.",
      description: "Faith is best lived out in community. Join a small group in your local neighborhood to share meals, study scripture, and support one another through life.",
      cta: "Find your group",
      link: "#connect"
    },
    {
      num: "02",
      title: "Serve & Support",
      tagline: "Be part of the difference.",
      description: "Use your unique gifts to serve. Whether you want to welcome guests on Sunday mornings, run audio/visual tech, or join our city outreach teams.",
      cta: "Join a serve team",
      link: "#connect"
    },
    {
      num: "03",
      title: "Ministries",
      tagline: "Tailored spiritual spaces.",
      description: "Dedicated gatherings and teaching structures for children, middle & high school students, young adults, men, and women at all stages of life.",
      cta: "Explore ministries",
      link: "#connect"
    }
  ];

  return (
    <section id="connect" className="py-24 md:py-32 bg-stone-light border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn direction="up" className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-sage">
            Take Your Next Step
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-dark mt-4">
            Belonging means participating.
          </h2>
          <p className="text-sm font-light text-stone-dark/70 mt-4 leading-relaxed">
            There are many ways to engage with Sanctuary beyond Sunday mornings. Find a circle, join a service team, or dive into one of our community ministries.
          </p>
        </FadeIn>

        {/* Editorial Divided Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 bg-white divide-y md:divide-y-0 md:divide-x divide-slate-200 shadow-xs">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-8 md:p-12 flex flex-col justify-between group hover:bg-white/40 transition-colors duration-500 min-h-[420px]"
            >
              <div className="space-y-6">
                {/* Number & Header */}
                <div className="flex justify-between items-baseline">
                  <span className="font-serif text-5xl font-extralight text-sage/30 group-hover:text-sage transition-colors duration-500">
                    {step.num}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-light text-stone-dark/40">
                    SANCTUARY / {step.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-light text-stone-dark">
                    {step.title}
                  </h3>
                  <p className="text-xs tracking-wider uppercase font-semibold text-sage">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-sm font-light text-stone-dark/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-8">
                <Link
                  href={step.link}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-dark hover:text-sage group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>{step.cta}</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
