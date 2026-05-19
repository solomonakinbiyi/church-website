'use client';

import React, { useState } from 'react';
import FadeIn from './FadeIn';

export default function ContactSection() {
  const [activeForm, setActiveForm] = useState<'contact' | 'prayer'>('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', subject: '', message: '' });
  const [prayerData, setPrayerData] = useState({ name: '', email: '', request: '', isConfidential: true });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
        setContactData({ name: '', email: '', subject: '', message: '' });
        setPrayerData({ name: '', email: '', request: '', isConfidential: true });
      }, 2500);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      {/* Structural grid lines */}
      <div className="absolute inset-y-0 left-12 w-px bg-slate-200/40 hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-px bg-slate-200/40 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left: General Info & Logistics */}
        <div className="lg:col-span-5 space-y-10">
          <FadeIn direction="up">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-sage">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-dark mt-4">
              We are here <br />
              <span className="italic font-light text-sage">to listen</span> and support.
            </h2>
          </FadeIn>

          {/* Details Grid */}
          <FadeIn direction="up" delay={200} className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-light text-stone-dark/70">
            <div className="space-y-2">
              <p className="font-semibold text-stone-dark tracking-wider uppercase text-[10px]">Office Hours</p>
              <p>Monday — Thursday</p>
              <p>9:00 AM — 4:00 PM</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-stone-dark tracking-wider uppercase text-[10px]">Direct Contact</p>
              <p>hello@sanctuary.org</p>
              <p>(512) 555-0192</p>
            </div>
          </FadeIn>

          {/* Visitor Logistics Panel */}
          <FadeIn direction="up" delay={400} className="bg-white border border-slate-200 p-6 space-y-4 rounded-xs shadow-xs">
            <h3 className="text-[10px] tracking-widest uppercase font-semibold text-sage flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
              Visitor Logistics
            </h3>
            <div className="space-y-3 text-xs font-light text-stone-dark/70 leading-relaxed">
              <p>
                <strong>Where do I park?</strong> Parking is available in the main lot located directly off 4th Street. Accessible parking spaces are located adjacent to the chapel entrance.
              </p>
              <p>
                <strong>What should I wear?</strong> Dress is completely casual. You will see people in t-shirts and jeans, and others in business casual. Come in whatever makes you comfortable.
              </p>
              <p>
                <strong>Where do I go when I arrive?</strong> Head toward the central stone arbor. Our Host Team will meet you in the courtyard with guides, coffee, and direction to classrooms.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right: Interactive Tabbed Form (Contact vs Prayer) */}
        <div className="lg:col-span-7 border border-slate-200 p-8 md:p-12 bg-white shadow-xs">
          <FadeIn direction="up">
            {/* Tab Headers */}
            <div className="flex border-b border-slate-200 pb-6 mb-8">
              <button
                type="button"
                onClick={() => { setActiveForm('contact'); setSuccessMsg(false); }}
                className={`pb-2.5 text-xs font-semibold tracking-wider uppercase border-b-2 mr-8 transition-all ${
                  activeForm === 'contact'
                    ? 'border-sage text-stone-dark'
                    : 'border-transparent text-stone-dark/40 hover:text-stone-dark'
                }`}
              >
                Send a Message
              </button>
              <button
                type="button"
                onClick={() => { setActiveForm('prayer'); setSuccessMsg(false); }}
                className={`pb-2.5 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all ${
                  activeForm === 'prayer'
                    ? 'border-sage text-stone-dark'
                    : 'border-transparent text-stone-dark/40 hover:text-stone-dark'
                }`}
              >
                Submit Prayer Request
              </button>
            </div>

            {successMsg ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto text-sage">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-light text-stone-dark">Submission Received</h3>
                <p className="text-sm font-light text-stone-dark/70">
                  {activeForm === 'contact'
                    ? "Thank you for reaching out. We will get back to you within 24–48 hours."
                    : "Your request has been received. Our leadership and prayer team will lift you up this week."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {activeForm === 'contact' ? (
                  /* Contact Form Fields */
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60 mb-1.5" htmlFor="contact-name">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={contactData.name}
                          onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm placeholder:text-stone-400 rounded-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60 mb-1.5" htmlFor="contact-email">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={contactData.email}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm placeholder:text-stone-400 rounded-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60 mb-1.5" htmlFor="contact-subject">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={contactData.subject}
                        onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                        placeholder="General Inquiry, Serve Team, Life Groups..."
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm placeholder:text-stone-400 rounded-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60 mb-1.5" htmlFor="contact-message">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={contactData.message}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm placeholder:text-stone-400 rounded-xs resize-none"
                      />
                    </div>
                  </>
                ) : (
                  /* Prayer Request Form Fields */
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60 mb-1.5" htmlFor="prayer-name">
                          Name (Optional)
                        </label>
                        <input
                          id="prayer-name"
                          type="text"
                          value={prayerData.name}
                          onChange={(e) => setPrayerData({ ...prayerData, name: e.target.value })}
                          placeholder="Anonymous or Your Name"
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm placeholder:text-stone-400 rounded-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60 mb-1.5" htmlFor="prayer-email">
                          Email (For follow-up support)
                        </label>
                        <input
                          id="prayer-email"
                          type="email"
                          value={prayerData.email}
                          onChange={(e) => setPrayerData({ ...prayerData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm placeholder:text-stone-400 rounded-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60 mb-1.5" htmlFor="prayer-request">
                        Prayer Request
                      </label>
                      <textarea
                        id="prayer-request"
                        rows={5}
                        required
                        value={prayerData.request}
                        onChange={(e) => setPrayerData({ ...prayerData, request: e.target.value })}
                        placeholder="Share your prayer request with us..."
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm placeholder:text-stone-400 rounded-xs resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={prayerData.isConfidential}
                          onChange={(e) => setPrayerData({ ...prayerData, isConfidential: e.target.checked })}
                          className="w-4 h-4 accent-sage border-slate-200 rounded-xs cursor-pointer focus:ring-0 focus:outline-none"
                        />
                        <span className="text-xs font-light text-stone-dark">
                          Keep this confidential (staff and elder prayer circles only)
                        </span>
                      </label>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-sage text-white hover:bg-stone-dark disabled:bg-stone-300 disabled:cursor-not-allowed transition-all duration-300 text-xs font-semibold tracking-widest uppercase rounded-full shadow-xs flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            )}
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
