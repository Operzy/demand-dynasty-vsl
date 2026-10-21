import React, { useRef } from 'react';
import { Puzzle, MousePointerClick, CalendarX, Layers, Target, ShieldCheck } from 'lucide-react';

const TaleOfTwo = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="w-full bg-white border-t border-brand-line relative z-10">
      <div className="w-full max-w-6xl mx-auto px-6 py-20 md:py-24">
      
      <div className="text-center mb-16">
        <p className="kicker mb-4">Why Demand Dynasty</p>
        <h2 className="display text-4xl md:text-5xl mb-6">Other agencies manage ads. <em className="text-brand-olive">We bring you customers.</em></h2>
        <p className="text-[17px] text-brand-muted max-w-2xl mx-auto leading-relaxed">Ordinary agency thinking sells one tactic and hands you to an account manager. We build the whole system, and you talk to the people running your account.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
        
        {/* LEFT COLUMN: Other agencies */}
        <div className="bg-brand-soft rounded-card p-6 md:p-8 border border-brand-line relative flex flex-col">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 pb-5 border-b border-brand-line mb-8">
            <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-brand-muted">Other Agencies</h3>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand-muted border border-brand-line-strong px-3 py-1.5 rounded-full">Manage Ads</span>
          </div>

          <div className="flex relative flex-1">
            
            {/* The Timeline Track */}
            <div className="w-12 md:w-16 flex-shrink-0 flex justify-center relative">
              <div className="w-px h-full bg-brand-line-strong relative">
              </div>
            </div>

            {/* The Steps */}
            <div className="flex-1 flex flex-col justify-between py-4 gap-8">
              
              <div className="bg-white p-5 rounded-[10px] border border-brand-line">
                <div className="flex items-center gap-3 mb-2">
                  <Puzzle size={18} className="text-brand-muted" />
                  <h4 className="font-display font-medium tracking-[-0.015em] text-[17px] text-brand-ink">1. One tactic, sold alone</h4>
                </div>
                <p className="text-brand-muted text-[14.5px] leading-relaxed">Ordinary agency thinking sells one tactic and hands you to an account manager.</p>
              </div>

              <div className="bg-white p-5 rounded-[10px] border border-brand-line">
                <div className="flex items-center gap-3 mb-2">
                  <MousePointerClick size={18} className="text-brand-muted" />
                  <h4 className="font-display font-medium tracking-[-0.015em] text-[17px] text-brand-ink">2. Anyone who will click</h4>
                </div>
                <p className="text-brand-muted text-[14.5px] leading-relaxed">Ads built to chase clicks, not the customer who fits the offer and can afford it.</p>
              </div>

              <div className="bg-white p-5 rounded-[10px] border border-brand-line">
                <div className="flex items-center gap-3 mb-2">
                  <CalendarX size={18} className="text-brand-muted" />
                  <h4 className="font-display font-medium tracking-[-0.015em] text-[17px] text-brand-ink">3. Done at the booked call</h4>
                </div>
                <p className="text-brand-muted text-[14.5px] leading-relaxed">The job ends when the call is booked, so they optimise for calls that only get booked.</p>
              </div>

            </div>
          </div>
        </div>


        {/* RIGHT COLUMN: Demand Dynasty */}
        <div className="media-dark text-white rounded-card p-6 md:p-8 relative flex flex-col group overflow-hidden">
          

          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 pb-5 border-b border-brand-dark-line mb-8 relative z-10">
            <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-white">Demand Dynasty</h3>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand-dark bg-brand-lime px-3 py-1.5 rounded-full">Bring You Customers</span>
          </div>

          <div className="flex relative flex-1 z-10">
            
            {/* The Timeline Track */}
            <div className="w-12 md:w-16 flex-shrink-0 flex justify-center relative">
              <div className="w-px h-full bg-brand-lime/60 relative">
              </div>
            </div>

            {/* The Steps */}
            <div className="flex-1 flex flex-col justify-between py-4 gap-8">
              
              <div className="bg-white/[0.07] p-5 rounded-[10px] border border-brand-dark-line hover:border-brand-lime/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Layers size={18} className="text-brand-lime-hi" />
                  <h4 className="font-display font-medium tracking-[-0.015em] text-[17px] text-white">1. The whole system</h4>
                </div>
                <p className="text-white/60 text-[14.5px] leading-relaxed">Media buying, creative, funnels and tracking, all tied to your unit economics.</p>
              </div>

              <div className="bg-white/[0.07] p-5 rounded-[10px] border border-brand-dark-line hover:border-brand-lime/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Target size={18} className="text-brand-lime-hi" />
                  <h4 className="font-display font-medium tracking-[-0.015em] text-[17px] text-white">2. Your ideal customer</h4>
                </div>
                <p className="text-white/60 text-[14.5px] leading-relaxed">We are after your ideal customer, the one who fits the offer and can afford it.</p>
              </div>

              <div className="bg-white/[0.07] p-5 rounded-[10px] border border-brand-dark-line hover:border-brand-lime/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck size={18} className="text-brand-lime-hi" />
                  <h4 className="font-display font-medium tracking-[-0.015em] text-[17px] text-white">3. Tracked through to the sale</h4>
                </div>
                <p className="text-white/60 text-[14.5px] leading-relaxed">Our job ends when the money is in your bank. We optimise for calls that close, not calls that only get booked.</p>
              </div>

            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
};

export default TaleOfTwo;
