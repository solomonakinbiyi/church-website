'use client';

import React, { useState } from 'react';
import FadeIn from './FadeIn';

export default function GiveSection() {
  const [amount, setAmount] = useState<string>('100');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [fund, setFund] = useState<'general' | 'missions' | 'building'>('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const presetAmounts = ['25', '50', '100', '250', '500'];

  const handlePresetSelect = (val: string) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*$/.test(val)) {
      setCustomAmount(val);
      setAmount('');
    }
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  const handleReset = () => {
    setPaymentSuccess(false);
    setAmount('100');
    setCustomAmount('');
  };

  return (
    <section id="give" className="py-24 md:py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Theological Vision / FAQ */}
        <div className="lg:col-span-5 space-y-12">
          <FadeIn direction="up">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-sage">
              Generosity
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-stone-dark mt-4">
              Supporting <br />
              <span className="italic font-light text-sage">the vision</span> of Sanctuary.
            </h2>
            <p className="text-sm font-light text-stone-dark/70 mt-6 leading-relaxed">
              We believe that giving is a spiritual practice—a response to the radical generosity of God. Your financial support allows us to care for those in need, gather for worship, and seek the renewal of our city.
            </p>
          </FadeIn>

          {/* Theological Quote */}
          <FadeIn direction="up" delay={200} className="border-l border-sage/30 pl-6">
            <p className="font-serif text-lg italic text-stone-dark/80 font-light leading-relaxed">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <p className="text-[10px] tracking-wider uppercase font-medium text-stone-dark/60 mt-2">
              — 2 Corinthians 9:7
            </p>
          </FadeIn>

          {/* Quick FAQ summary */}
          <FadeIn direction="up" delay={400} className="space-y-4 pt-6 border-t border-slate-200">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-stone-dark">
              Giving Security & Details
            </h3>
            <div className="space-y-3 text-xs font-light text-stone-dark/70">
              <p>
                <strong>Is my gift secure?</strong> Yes. All transactions are encrypted and processed through industry-standard secure pathways (SSL).
              </p>
              <p>
                <strong>Is my gift tax-deductible?</strong> Absolutely. Sanctuary is a registered 501(c)(3) organization. You will receive an annual contribution statement every January.
              </p>
              <p>
                <strong>How can I give by check?</strong> Checks can be mailed to: <br />
                <span className="font-medium text-stone-dark">Sanctuary Church, Attn: Finance, 123 Community Ave, Austin, TX 78701</span>.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Interactive Giving Form */}
        <div className="lg:col-span-7 border border-slate-200 p-8 md:p-12 bg-white shadow-xs">
          <FadeIn direction="up">
            {paymentSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto text-sage">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-light text-stone-dark">Thank You for Your Gift</h3>
                  <p className="text-sm font-light text-stone-dark/70 max-w-sm mx-auto">
                    Your donation of <span className="font-semibold text-stone-dark">${amount || customAmount}</span> has been processed successfully. We are deeply grateful for your investment in our community.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 border border-slate-200 hover:border-sage bg-white text-stone-dark transition-all rounded-full text-xs font-semibold tracking-widest uppercase"
                >
                  Give Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit} className="space-y-8">
                {/* Toggle Frequency */}
                <div className="flex bg-white border border-slate-200 p-1 rounded-full w-full max-w-[280px]">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`flex-1 py-2 text-center text-[10px] tracking-widest uppercase font-semibold rounded-full transition-all duration-300 ${
                      frequency === 'one-time'
                        ? 'bg-sage text-white'
                        : 'text-stone-dark/60 hover:text-stone-dark'
                    }`}
                  >
                    Give Once
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`flex-1 py-2 text-center text-[10px] tracking-widest uppercase font-semibold rounded-full transition-all duration-300 ${
                      frequency === 'monthly'
                        ? 'bg-sage text-white'
                        : 'text-stone-dark/60 hover:text-stone-dark'
                    }`}
                  >
                    Give Monthly
                  </button>
                </div>

                {/* Amount Selectors */}
                <div className="space-y-3">
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60">
                    Select Donation Amount
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {presetAmounts.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handlePresetSelect(val)}
                        className={`py-3 text-sm font-light border transition-all rounded-xs ${
                          amount === val
                            ? 'bg-sage text-white border-sage'
                            : 'bg-white border-slate-200 text-stone-dark hover:border-sage'
                        }`}
                      >
                        ${val}
                      </button>
                    ))}
                  </div>
                  
                  {/* Custom Input */}
                  <div className="relative mt-2">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-dark/40 font-light text-sm">$</span>
                    <input
                      type="text"
                      placeholder="Enter Custom Amount"
                      value={customAmount}
                      onChange={handleCustomChange}
                      className="w-full pl-8 pr-4 py-3 bg-white border border-slate-200 focus:border-sage focus:outline-none text-stone-dark text-sm rounded-xs placeholder:text-stone-400"
                    />
                  </div>
                </div>

                {/* Fund Selection */}
                <div className="space-y-3">
                  <label className="block text-[10px] tracking-wider uppercase font-semibold text-stone-dark/60">
                    Direct Your Gift
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setFund('general')}
                      className={`py-3.5 text-xs font-semibold tracking-wider uppercase border transition-all rounded-xs ${
                        fund === 'general'
                          ? 'bg-stone-dark text-white border-stone-dark'
                          : 'bg-white border-slate-200 text-stone-dark/60 hover:border-sage hover:text-stone-dark'
                      }`}
                    >
                      General
                    </button>
                    <button
                      type="button"
                      onClick={() => setFund('missions')}
                      className={`py-3.5 text-xs font-semibold tracking-wider uppercase border transition-all rounded-xs ${
                        fund === 'missions'
                          ? 'bg-stone-dark text-white border-stone-dark'
                          : 'bg-white border-slate-200 text-stone-dark/60 hover:border-sage hover:text-stone-dark'
                      }`}
                    >
                      Missions
                    </button>
                    <button
                      type="button"
                      onClick={() => setFund('building')}
                      className={`py-3.5 text-xs font-semibold tracking-wider uppercase border transition-all rounded-xs ${
                        fund === 'building'
                          ? 'bg-stone-dark text-white border-stone-dark'
                          : 'bg-white border-slate-200 text-stone-dark/60 hover:border-sage hover:text-stone-dark'
                      }`}
                    >
                      Building
                    </button>
                  </div>
                </div>

                {/* Submission CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting || (!amount && !customAmount)}
                  className="w-full py-4 bg-sage disabled:bg-stone-300 disabled:cursor-not-allowed text-white hover:bg-stone-dark transition-all duration-300 text-xs font-semibold tracking-widest uppercase rounded-full shadow-xs flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Gift...
                    </>
                  ) : (
                    `Donate $${amount || customAmount || '0'} ${frequency === 'monthly' ? '/ Month' : ''}`
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
