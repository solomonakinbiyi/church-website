'use client';

import React, { useState } from 'react';
import FadeIn from './FadeIn';

export default function ContactSection() {
  const [activeForm, setActiveForm] = useState<'contact' | 'prayer'>('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
        setContactData({ name: '', email: '', subject: '', message: '' });
      }, 2500);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-base border-b border-grid">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grid">
        
        {/* Left: General Info */}
        <div className="p-8 md:p-16 flex flex-col justify-between min-h-[500px]">
          <FadeIn direction="up">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light block mb-6">
              Inquiries & Prayer
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-ink leading-none">
              We are here <br />
              <span className="italic text-accent">to listen.</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={200} className="mt-16 grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light mb-4">Location</p>
              <p className="font-serif text-xl italic text-ink">123 Community Ave,<br />Austin, TX 78704</p>
            </div>
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light mb-4">Contact</p>
              <p className="font-serif text-xl italic text-ink">hello@sanctuary.org<br />(512) 555-0192</p>
            </div>
          </FadeIn>
        </div>

        {/* Right: Sharp Form */}
        <div className="bg-white">
          <FadeIn direction="up" delay={200} className="h-full">
            <div className="p-8 md:p-16 h-full flex flex-col">
              
              <div className="flex border-b border-grid mb-12">
                <button
                  type="button"
                  onClick={() => { setActiveForm('contact'); setSuccessMsg(false); }}
                  className={`pb-4 text-[9px] font-mono tracking-[0.2em] uppercase mr-8 transition-colors border-b-2 ${
                    activeForm === 'contact' ? 'border-ink text-ink' : 'border-transparent text-ink-light hover:text-ink'
                  }`}
                >
                  Send a Message
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveForm('prayer'); setSuccessMsg(false); }}
                  className={`pb-4 text-[9px] font-mono tracking-[0.2em] uppercase transition-colors border-b-2 ${
                    activeForm === 'prayer' ? 'border-ink text-ink' : 'border-transparent text-ink-light hover:text-ink'
                  }`}
                >
                  Prayer Request
                </button>
              </div>

              {successMsg ? (
                <div className="text-center py-16 flex-1 flex flex-col justify-center">
                  <span className="font-serif text-4xl italic text-ink block mb-4">Message Received.</span>
                  <p className="font-mono text-[11px] tracking-wider text-ink-light">
                    We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex-1 flex flex-col justify-between space-y-8">
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <input
                        type="text"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        placeholder={activeForm === 'prayer' ? "Name (Optional)" : "Your Name"}
                        className="w-full bg-transparent border-b border-grid focus:border-ink pb-4 font-mono text-[11px] tracking-wider text-ink focus:outline-none placeholder:text-ink-light transition-colors"
                      />
                      <input
                        type="email"
                        required={activeForm === 'contact'}
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-grid focus:border-ink pb-4 font-mono text-[11px] tracking-wider text-ink focus:outline-none placeholder:text-ink-light transition-colors"
                      />
                    </div>
                    <textarea
                      rows={5}
                      required
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder={activeForm === 'prayer' ? "Share your prayer request..." : "How can we help you?"}
                      className="w-full bg-transparent border-b border-grid focus:border-ink pb-4 font-mono text-[11px] tracking-wider text-ink focus:outline-none placeholder:text-ink-light transition-colors resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-ink text-base hover:bg-accent transition-colors font-mono text-[9px] tracking-[0.2em] uppercase mt-8"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
