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
  childcare: boolean;
  image: string;
}

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', count: '1', childcare: false });

  const events: Event[] = [
    {
      id: 'vespers',
      title: 'Vespers: Liturgy & Acoustic Song',
      date: 'Thursday, June 4',
      time: '7:00 PM — 8:15 PM',
      location: 'Sanctuary Chapel',
      description: 'An evening carved out for acoustic worship, candlelight, silent reflection, and communion. Come join us to unplug and seek peace.',
      childcare: false,
      image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2600',
    },
    {
      id: 'potluck',
      title: 'Garden Neighborhood Potluck',
      date: 'Sunday, June 14',
      time: '12:30 PM — 2:30 PM',
      location: 'The Courtyard Garden',
      description: 'Gather directly after the second service for shared food, local singer-songwriter music, and community connection. Bring a dish to share.',
      childcare: true,
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2600',
    },
    {
      id: 'prayer',
      title: 'Contemplative Prayer Workshop',
      date: 'Saturday, June 20',
      time: '9:00 AM — 12:00 PM',
      location: 'Community Room B',
      description: 'Learn historical Christian spiritual disciplines including silence, breath prayer, and centering prayer in this practical, half-day workshop.',
      childcare: true,
      image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2600',
    },
  ];

  const handleOpenRsvp = (event: Event) => {
    setSelectedEvent(event);
    setRsvpSuccess(false);
  };

  const handleCloseRsvp = () => {
    setSelectedEvent(null);
    setFormData({ name: '', email: '', count: '1', childcare: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSuccess(true);
    setTimeout(() => {
      handleCloseRsvp();
    }, 2000);
  };

  return (
    <section id="events" className="py-24 md:py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <FadeIn direction="up" className="max-w-xl">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-sage">
              What's Happening
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-dark mt-4">
              Gatherings around <br />
              <span className="italic font-light text-sage">the table</span> and in prayer.
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <a
              href="#calendar"
              className="text-xs font-semibold tracking-widest uppercase py-3 px-6 border border-slate-200 hover:border-sage bg-white text-stone-dark hover:bg-stone-light transition-all rounded-full"
            >
              Full Calendar View
            </a>
          </FadeIn>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <FadeIn key={event.id} direction="up" delay={idx * 150} className="flex">
              <div className="flex flex-col bg-white border border-slate-200 p-3 shadow-xs hover:shadow-md transition-all duration-300 w-full group">
                {/* Visual */}
                <div className="relative aspect-3/2 w-full overflow-hidden bg-stone-100 mb-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white border border-slate-200 px-2.5 py-1 text-[9px] tracking-widest uppercase font-semibold text-stone-dark shadow-xs">
                    {event.date.split(',')[1]}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between px-3 pb-3">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-[10px] tracking-widest uppercase font-semibold text-sage">
                        {event.time}
                      </p>
                      <h3 className="font-serif text-xl font-light text-stone-dark leading-snug">
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-sm font-light text-stone-dark/70 leading-relaxed line-clamp-3">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-light text-stone-dark/50 pt-2">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                        </svg>
                        {event.location}
                      </span>
                      {event.childcare && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-sage/10 text-sage uppercase tracking-wider">
                          Childcare
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenRsvp(event)}
                    className="w-full mt-6 py-3 border border-slate-200 group-hover:border-sage bg-white hover:bg-sage hover:text-stone-light text-stone-dark text-xs font-semibold tracking-widest uppercase rounded-xs transition-colors"
                  >
                    RSVP & Register
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-dark/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white border border-slate-200 max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={handleCloseRsvp}
              className="absolute top-4 right-4 text-stone-dark/60 hover:text-stone-dark focus:outline-none"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {rsvpSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-sage/15 rounded-full flex items-center justify-center mx-auto text-sage">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-light text-stone-dark">RSVP Registered</h3>
                <p className="text-sm font-light text-stone-dark/70">
                  You are registered for {selectedEvent.title}. A confirmation email has been sent.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-semibold tracking-widest uppercase text-sage">
                    Registering for
                  </span>
                  <h3 className="font-serif text-2xl font-light text-stone-dark leading-tight mt-1">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-xs font-light text-stone-dark/50 mt-1">
                    {selectedEvent.date} @ {selectedEvent.time}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60 mb-1.5" htmlFor="rsvp-name">
                      Full Name
                    </label>
                    <input
                      id="rsvp-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm placeholder:text-stone-400 rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60 mb-1.5" htmlFor="rsvp-email">
                      Email Address
                    </label>
                    <input
                      id="rsvp-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm placeholder:text-stone-400 rounded-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60 mb-1.5" htmlFor="rsvp-count">
                        Attendees
                      </label>
                      <select
                        id="rsvp-count"
                        value={formData.count}
                        onChange={(e) => setFormData({ ...formData, count: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm rounded-xs"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5+">5+ People</option>
                      </select>
                    </div>

                    {selectedEvent.childcare && (
                      <div className="flex flex-col justify-end pb-3">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={formData.childcare}
                            onChange={(e) => setFormData({ ...formData, childcare: e.target.checked })}
                            className="w-4 h-4 accent-sage border-slate-200 rounded-xs cursor-pointer focus:ring-0 focus:outline-none"
                          />
                          <span className="text-xs font-light text-stone-dark">Need Childcare?</span>
                        </label>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 bg-sage text-stone-light hover:bg-stone-dark transition-all text-xs font-semibold tracking-widest uppercase rounded-xs"
                  >
                    Confirm RSVP
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
