import React from 'react';
import { Play, TrendingUp, CalendarCheck, ShieldCheck, ArrowRight } from 'lucide-react';

const AcquisitionEngine = () => {
  return (
    <section className="w-full bg-[#050608] py-32 relative overflow-hidden border-t border-brand-accent/20">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 via-[#050608] to-[#050608] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-4">
            <ShieldCheck size={16} /> 
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6 max-w-4xl mx-auto leading-tight">
            Our Done-For-You Paid Funnel Acquisition System
          </h2>
          <p className="text-xl text-brand-text font-light max-w-3xl mx-auto">
            We don't just run ads. We install a fully automated, high-velocity infrastructure that turns cold traffic into qualified, booked appointments on autopilot.
          </p>
        </div>

        {/* The System Blueprint - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Phase 1: Traffic Engine (1 Col) */}
          <div className="bg-[#0b0c10] border border-brand-accent/20 rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-brand-accent/50 transition-all duration-500 shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/5 rounded-bl-full blur-3xl group-hover:bg-brand-accent/10 transition-colors"></div>
            
            <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8 border border-brand-accent/20 shadow-[0_0_15px_rgba(214,219,43,0.1)]">
              <TrendingUp size={24} />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-brand-light mb-4">1. Targeted Traffic</h3>
            <p className="text-brand-text font-light mb-10 flex-1 leading-relaxed">
              We deploy institutional-grade Meta & YouTube ad campaigns designed to capture high-intent B2B prospects, completely eliminating your reliance on organic referrals.
            </p>

            {/* UI Mockup: Traffic Chart */}
            <div className="w-full h-40 bg-[#111318] rounded-2xl border border-white/5 flex flex-col justify-end p-5 relative overflow-hidden group-hover:border-brand-accent/20 transition-colors">
               <div className="text-xs text-white/40 font-mono mb-4">Campaign ROI (30 Days)</div>
               <div className="flex items-end gap-3 w-full h-full">
                 <div className="w-full h-[20%] bg-brand-accent/20 rounded-t-md"></div>
                 <div className="w-full h-[40%] bg-brand-accent/40 rounded-t-md"></div>
                 <div className="w-full h-[60%] bg-brand-accent/60 rounded-t-md"></div>
                 <div className="w-full h-[90%] bg-brand-accent shadow-[0_0_20px_#D6DB2B] rounded-t-md"></div>
               </div>
            </div>
          </div>

          {/* Phase 2: The VSL (2 Cols) */}
          <div className="bg-[#0b0c10] border border-brand-accent/20 rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-brand-accent/50 transition-all duration-500 lg:col-span-2 shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] group-hover:bg-brand-accent/10 transition-colors"></div>
            
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20 shadow-[0_0_15px_rgba(214,219,43,0.1)]">
                <Play size={24} className="ml-1" />
              </div>
              <span className="text-brand-accent text-xs font-mono border border-brand-accent/30 px-4 py-1.5 rounded-full bg-brand-accent/5 tracking-widest">
                THE CONVERSION MECHANISM
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 relative z-10 flex-1">
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-light mb-4">2. Cinematic Video Sales Letter</h3>
                <p className="text-brand-text font-light leading-relaxed mb-6">
                  We replace leaky landing pages with a high-fidelity VSL. This acts as your best salesperson, working 24/7 to educate, build extreme authority, and pre-sell your highest-ticket offers before a call is ever booked.
                </p>
                <button className="flex items-center gap-2 text-brand-accent font-bold group-hover:text-white transition-colors w-max mt-auto">
                  Watch Example <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* UI Mockup: Video Player */}
              <div className="flex-1 w-full min-h-[220px] bg-[#050608] rounded-2xl border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl group-hover:border-brand-accent/30 transition-colors">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-700"></div>
                <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center text-[#050608] cursor-pointer hover:scale-110 transition-transform z-10 shadow-[0_0_30px_#D6DB2B]">
                  <Play size={24} className="ml-1" />
                </div>
                {/* Timeline bar */}
                <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-brand-accent relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: CRM / Calendar (Full Width) */}
          <div className="bg-[#0b0c10] border border-brand-accent/20 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden group hover:border-brand-accent/50 transition-all duration-500 lg:col-span-3 shadow-2xl">
             <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none"></div>

             <div className="flex-1 relative z-10 lg:pr-10">
                <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent border border-brand-accent/20 mb-8 shadow-[0_0_15px_rgba(214,219,43,0.1)]">
                  <CalendarCheck size={24} />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-light mb-6">3. Automated Booking & CRM</h3>
                <p className="text-lg text-brand-text font-light mb-8 leading-relaxed">
                  We plug the final leaks. We integrate GoHighLevel to instantly qualify, route, and nurture leads via SMS and email. Unqualified prospects are filtered out, and your calendar fills up exclusively with ready-to-buy B2B operators.
                </p>
             </div>

             <div className="flex-1 w-full relative z-10">
                {/* UI Mockup: Calendar/CRM */}
                <div className="w-full bg-[#111318] rounded-2xl border border-white/5 p-6 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-brand-accent/20 transition-colors">
                  
                  <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                    <div className="text-white/90 font-medium flex items-center gap-2">
                      <CalendarCheck size={18} className="text-brand-accent" />
                      Sales Calendar
                    </div>
                    <div className="text-brand-accent text-xs font-mono bg-brand-accent/10 border border-brand-accent/20 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(214,219,43,0.1)]">
                      +5 NEW BOOKINGS
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {[
                      { time: "9:00 AM", status: "Qualified", budget: "$10k+" },
                      { time: "11:30 AM", status: "Qualified", budget: "$25k+" },
                      { time: "2:00 PM", status: "Qualified", budget: "$15k+" }
                    ].map((slot, i) => (
                      <div key={i} className="w-full bg-[#050608] rounded-xl p-4 border-l-4 border-brand-accent flex justify-between items-center relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-accent/10 to-transparent"></div>
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

export default AcquisitionEngine;
