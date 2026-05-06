import React from 'react';
import { MousePointerClick, Video, CalendarCheck } from 'lucide-react';

const PaidAdsSystem = () => {
  return (
    <section className="w-full bg-[#050608] py-24 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 via-[#050608] to-[#050608] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-24">
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4 border border-brand-accent/30 w-max mx-auto px-4 py-1 rounded-full bg-brand-accent/5">
            Here's How We Fix It
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6">A Proven System That Books Qualified Calls on Demand</h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto font-light">
            We don't use abstract pipelines or generic funnels. We run highly targeted paid ads and drive them into a proven conversion mechanism to book calls directly on your calendar.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32 max-w-6xl mx-auto">

          {/* Step 1: Paid Ads */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 flex flex-col gap-6">
              <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20 shadow-[0_0_15px_rgba(214,219,43,0.1)]">
                <MousePointerClick size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-light">1. Targeted B2B Meta Acquisition</h3>
              <p className="text-lg text-brand-text font-light leading-relaxed">
                We deploy capital into highly-targeted Meta campaigns designed exclusively for B2B client acquisition. We bypass gatekeepers, utilize dynamic creative testing, and force the algorithm to find exact-match buyers for your high-ticket offer.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="text-xs font-mono text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">B2B META ADS</span>
                <span className="text-xs font-mono text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">LEAD GENERATION</span>
                <span className="text-xs font-mono text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">SCALABLE CAMPAIGNS</span>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              {/* Ads Dashboard Mockup */}
              <div className="w-full aspect-[4/3] bg-[#0b0c10] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 relative overflow-hidden group hover:border-brand-accent/30 transition-colors">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/10 blur-[60px] pointer-events-none"></div>

                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5 relative z-10">
                  <div className="text-white/80 font-medium">Campaign Manager</div>
                  <div className="text-green-400 text-xs font-bold px-2 py-1 bg-green-400/10 rounded">● ACTIVE</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                  <div className="bg-[#111318] p-4 rounded-lg border border-white/5">
                    <div className="text-white/40 text-xs mb-1">Ad Spend</div>
                    <div className="text-xl font-bold text-white">$14,250</div>
                  </div>
                  <div className="bg-[#111318] p-4 rounded-lg border border-white/5">
                    <div className="text-white/40 text-xs mb-1">Qualified Clicks</div>
                    <div className="text-xl font-bold text-brand-accent">1,208</div>
                  </div>
                </div>

                <div className="w-full h-32 bg-[#111318] rounded-lg border border-white/5 flex items-end gap-2 p-4 relative z-10">
                  {[30, 45, 60, 40, 75, 90, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-brand-accent/60 rounded-t-sm relative group-hover:bg-brand-accent transition-colors duration-500" style={{ height: `${h}%` }}>
                      <div className="absolute top-0 w-full h-1 bg-white/50 rounded-t-sm"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: VSL */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 flex flex-col gap-6">
              <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20 shadow-[0_0_15px_rgba(214,219,43,0.1)]">
                <Video size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-light">2. The Asymmetric Sales Asset</h3>
              <p className="text-lg text-brand-text font-light leading-relaxed">
                We replace unpredictable organic marketing with a psychological, high-fidelity Video Sales Letter. This 5-to-10 minute asset systematically dismantles objections, builds institutional authority, and pre-indoctrinates your prospects before you ever speak a word to them.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              {/* VSL Mockup */}
              <div className="w-full aspect-[4/3] bg-[#0b0c10] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center p-3 relative group hover:border-brand-accent/30 transition-colors">
                <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                <div className="w-full h-full rounded-xl bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative overflow-hidden flex items-center justify-center border border-white/5 shadow-inner">
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center text-[#050608] shadow-[0_0_30px_#D6DB2B] z-10 cursor-pointer group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 z-10">
                    <div className="text-white text-xs font-mono">02:14</div>
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-brand-accent"></div>
                    </div>
                    <div className="text-white text-xs font-mono">10:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: CRM */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 flex flex-col gap-6">
              <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20 shadow-[0_0_15px_rgba(214,219,43,0.1)]">
                <CalendarCheck size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-light">3. Automated Deal Flow Routing</h3>
              <p className="text-lg text-brand-text font-light leading-relaxed">
                Tire-kickers are locked out. We architect a custom backend infrastructure that filters traffic, captures data, and automatically nurtures leads via SMS and Email. By the time a prospect hits your calendar, they are fully qualified, highly motivated, and ready to buy.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              {/* Calendar Mockup */}
              <div className="w-full aspect-[4/3] bg-[#0b0c10] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 relative hover:border-brand-accent/30 transition-colors">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                  <div className="text-white/80 font-medium flex items-center gap-2">
                    <CalendarCheck size={18} className="text-brand-accent" />
                    Sales Calendar
                  </div>
                  <div className="text-brand-accent text-xs font-mono bg-brand-accent/10 border border-brand-accent/20 px-3 py-1.5 rounded-full">
                    TODAY
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { time: "9:00 AM", status: "Qualified", budget: "$10k+" },
                    { time: "11:30 AM", status: "Qualified", budget: "$25k+" },
                    { time: "2:00 PM", status: "Qualified", budget: "$15k+" }
                  ].map((slot, i) => (
                    <div key={i} className="w-full bg-[#111318] rounded-xl p-4 border-l-4 border-brand-accent flex justify-between items-center relative overflow-hidden group hover:bg-[#1a1c23] transition-colors cursor-default">
                      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-accent/5 to-transparent"></div>
                      <div className="relative z-10">
                        <div className="text-brand-light text-sm font-bold mb-1">Strategy Session</div>
                        <div className="text-brand-text text-xs flex items-center gap-2">
                          <span className="text-green-400">{slot.status}</span> • <span>Budget: {slot.budget}</span>
                        </div>
                      </div>
                      <div className="text-brand-accent font-mono text-sm relative z-10">{slot.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaidAdsSystem;
