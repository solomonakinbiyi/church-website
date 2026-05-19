'use client';

import React, { useState } from 'react';
import FadeIn from './FadeIn';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  const events: Event[] = [
    {
      id: 'vespers',
      title: 'Vespers: Liturgy',
      date: 'Thursday, June 4',
      time: '19:00',
      location: 'Sanctuary Chapel',
      description: 'Acoustic worship, silent reflection, and communion.',
    },
    {
      id: 'potluck',
      title: 'Garden Potluck',
      date: 'Sunday, June 14',
      time: '12:30',
      location: 'The Courtyard',
      description: 'Shared food, local music, and community connection.',
    },
    {
      id: 'prayer',
      title: 'Prayer Workshop',
      date: 'Saturday, June 20',
      time: '09:00',
      location: 'Community Room',
      description: 'Historical Christian spiritual disciplines.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSuccess(true);
    setTimeout(() => {
      setSelectedEvent(null);
      setRsvpSuccess(false);
    }, 2000);
  };

  return (
    <section id="events" className="bg-base border-b border-grid">
      
      <div className="p-8 md:p-16 border-b border-grid flex items-end justify-between">
        <FadeIn direction="up">
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light block mb-6">
            Calendar
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-ink">
            Upcoming <span className="italic text-accent">Gatherings.</span>
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid">
        {events.map((event, idx) => (
          <div key={event.id} className="group relative">
            <FadeIn direction="up" delay={idx * 150} className="h-full flex flex-col justify-between p-8 md:p-16">
              
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="font-serif text-3xl italic text-ink">{event.date.split(',')[1]}</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light bg-grid px-2 py-1">
                    {event.time}
                  </span>
                </div>
                
                <h3 className="font-serif text-3xl text-ink mb-4">{event.title}</h3>
                <p className="font-mono text-[11px] leading-relaxed tracking-wider text-ink-light mb-4">
                  {event.description}
                </p>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light">
                  Locus: {event.location}
                </p>
              </div>

              <div className="pt-12">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink group-hover:text-accent transition-colors flex items-center gap-4"
                >
                  <span className="w-8 h-[1px] bg-ink group-hover:bg-accent transition-colors" />
                  Register
                </button>
              </div>
            </FadeIn>
            
            {/* Hover overlay border effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-ink transition-colors pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Brutalist RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-base/80 backdrop-blur-sm" onClick={() => setSelectedEvent(null)} />
          <div className="bg-base border border-ink w-full max-w-lg p-8 relative z-10 shadow-2xl">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-8 right-8 font-mono text-[9px] tracking-[0.2em] uppercase text-ink hover:text-accent"
            >
              Close [X]
            </button>

            {rsvpSuccess ? (
              <div className="text-center py-16">
                <h3 className="font-serif text-4xl italic text-ink mb-4">Confirmed.</h3>
                <p className="font-mono text-[11px] tracking-wider text-ink-light">We look forward to seeing you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8">
                <h3 className="font-serif text-3xl text-ink mb-2">{selectedEvent.title}</h3>
                <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light mb-12">
                  {selectedEvent.date} — {selectedEvent.time}
                </p>

                <div className="space-y-6 border-t border-grid pt-8">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-grid focus:border-ink pb-3 font-mono text-[11px] tracking-wider text-ink focus:outline-none placeholder:text-ink-light transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-grid focus:border-ink pb-3 font-mono text-[11px] tracking-wider text-ink focus:outline-none placeholder:text-ink-light transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 mt-8 bg-ink text-base hover:bg-accent transition-colors font-mono text-[9px] tracking-[0.2em] uppercase"
                  >
                    Confirm Registration
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
