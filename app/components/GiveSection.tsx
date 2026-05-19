'use client';

import React, { useState } from 'react';
import FadeIn from './FadeIn';

export default function GiveSection() {
  const [amount, setAmount] = useState<string>('100');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const presetAmounts = ['25', '50', '100', '250', '500'];

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setPaymentSuccess(true); }, 2000);
  };

  return (
    <section id="give" className="bg-base border-b border-grid">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grid">
        
        {/* Left Side: Theological Vision */}
        <div className="p-8 md:p-16 flex flex-col justify-between">
          <FadeIn direction="up">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-light block mb-6">
              Generosity
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-ink leading-none">
              Supporting the <span className="italic text-accent">Vision.</span>
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={200} className="mt-16 border-l border-ink pl-8">
            <p className="font-serif text-2xl italic text-ink-light leading-relaxed max-w-md">
              Giving is a spiritual practice—a response to the radical generosity of God. Your support allows us to seek the renewal of our city.
            </p>
          </FadeIn>
        </div>

        {/* Right Side: Giving Form */}
        <div className="bg-white">
          <FadeIn direction="up" delay={200} className="h-full">
            <div className="p-8 md:p-16 h-full flex flex-col justify-center">
              
              {paymentSuccess ? (
                <div className="text-center py-16">
                  <span className="font-serif text-6xl italic text-ink block mb-6">Thank You.</span>
                  <p className="font-mono text-[11px] tracking-wider text-ink-light mb-12">
                    Your gift of ${amount || customAmount} has been processed.
                  </p>
                  <button
                    onClick={() => { setPaymentSuccess(false); setAmount('100'); }}
                    className="px-8 py-4 bg-ink text-base hover:bg-accent transition-colors font-mono text-[9px] tracking-[0.2em] uppercase"
                  >
                    Give Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDonateSubmit} className="space-y-12">
                  
                  {/* Frequency Toggle */}
                  <div className="grid grid-cols-2 border border-ink">
                    <button
                      type="button"
                      onClick={() => setFrequency('one-time')}
                      className={`py-4 text-[9px] tracking-[0.2em] uppercase font-mono transition-colors ${
                        frequency === 'one-time' ? 'bg-ink text-base' : 'bg-transparent text-ink hover:bg-grid'
                      }`}
                    >
                      One Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency('monthly')}
                      className={`py-4 text-[9px] tracking-[0.2em] uppercase font-mono transition-colors border-l border-ink ${
                        frequency === 'monthly' ? 'bg-ink text-base' : 'bg-transparent text-ink hover:bg-grid'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>

                  {/* Amounts */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-5 border border-ink divide-x divide-ink">
                      {presetAmounts.map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => { setAmount(val); setCustomAmount(''); }}
                          className={`py-6 text-sm font-serif italic transition-colors ${
                            amount === val ? 'bg-ink text-base' : 'bg-transparent text-ink hover:bg-grid'
                          }`}
                        >
                          ${val}
                        </button>
                      ))}
                    </div>
                    
                    <div className="border border-ink flex items-center px-4 bg-transparent">
                      <span className="font-serif italic text-ink-light text-lg">$</span>
                      <input
                        type="text"
                        placeholder="Custom Amount"
                        value={customAmount}
                        onChange={(e) => {
                          if (/^\d*$/.test(e.target.value)) {
                            setCustomAmount(e.target.value);
                            setAmount('');
                          }
                        }}
                        className="w-full py-4 px-4 bg-transparent focus:outline-none font-serif text-lg text-ink placeholder:text-ink-light italic"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || (!amount && !customAmount)}
                    className="w-full py-6 bg-accent hover:bg-ink disabled:bg-grid disabled:text-ink-light disabled:cursor-not-allowed text-base transition-colors font-mono text-[9px] tracking-[0.2em] uppercase"
                  >
                    {isSubmitting ? 'Processing...' : `Donate $${amount || customAmount || '0'} ${frequency === 'monthly' ? '/ Month' : ''}`}
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
