import React from 'react';
import { TrendingDown, Zap, ShieldAlert, DollarSign, CalendarX2, UserX } from 'lucide-react';

const ProblemStacking = () => {
  return (
    <section className="w-full bg-[#050608] relative">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-red-900/5 blur-[120px] pointer-events-none"></div>

      <div className="sticky top-0 pt-24 text-center z-50 pointer-events-none pb-8 bg-gradient-to-b from-[#050608] via-[#050608]/90 to-transparent">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-4 drop-shadow-md">Why Your Deal Flow is Broken</h2>
        <p className="text-lg text-brand-text max-w-2xl mx-auto font-light drop-shadow-md">
          Most B2B agencies are trapped in a cycle of feast or famine because their client acquisition infrastructure is fractured in these three critical places.
        </p>
      </div>

      <div className="w-full px-6 pb-48 relative pt-10">
        
        {/* Card 1: Referrals */}
        <div className="sticky top-40 w-full max-w-4xl mx-auto h-[50vh] min-h-[350px] bg-[#0b0c10] rounded-[2rem] border border-red-900/30 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center p-8 md:p-12 overflow-hidden mb-24 z-10 transition-transform">
          <div className="flex-1 flex flex-col gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-900/50 flex items-center justify-center text-red-500">
              <TrendingDown size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-brand-light">1. Relying on Referrals</h3>
            <p className="text-lg text-brand-text font-light leading-relaxed">
              Not knowing where your next client is coming from makes it impossible to reliably forecast revenue. The input to your system is weak, unpredictable, and entirely out of your control.
            </p>
          </div>
          <div className="flex-1 w-full h-full flex items-center justify-center relative opacity-40 md:opacity-100 mt-8 md:mt-0">
            {/* Visual: The Empty Calendar Void */}
            <div className="w-full max-w-[220px] h-48 border border-red-900/30 rounded-2xl bg-[#08090b] flex flex-col items-center justify-center relative overflow-hidden shadow-[inset_0_0_20px_rgba(239,68,68,0.05)]">
               <CalendarX2 size={64} className="text-red-900/50 mb-4" />
               <div className="text-red-900/50 font-mono text-sm tracking-widest uppercase">0 Appointments</div>
               
               {/* Scanning failure line */}
               <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-[scan_3s_linear_infinite]"></div>
            </div>
          </div>
        </div>

        {/* Card 2: Burning Cash */}
        <div className="sticky top-48 w-full max-w-4xl mx-auto h-[50vh] min-h-[350px] bg-[#0d0e12] rounded-[2rem] border border-red-900/40 shadow-[0_-15px_40px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center p-8 md:p-12 overflow-hidden mb-24 z-20 transition-transform">
          <div className="flex-1 flex flex-col gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <Zap size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-brand-light">2. Burning Cash on Ads</h3>
            <p className="text-lg text-brand-text font-light leading-relaxed">
              Sending traffic to generic landing pages results in unqualified leads. Capital and attention are physically burning up before they ever book a call. You are literally setting money on fire.
            </p>
          </div>
          <div className="flex-1 w-full h-full flex items-center justify-center relative opacity-40 md:opacity-100 mt-8 md:mt-0">
            {/* Visual: Burning Money Dashboard */}
            <div className="w-full max-w-[240px] h-32 border border-red-900/50 rounded-xl bg-gradient-to-b from-[#111] to-[#220000] flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              
              {/* Money Value */}
              <div className="flex items-center text-red-500 font-mono text-3xl font-bold z-10">
                <DollarSign size={32} />
                <span>10,000</span>
              </div>
              <div className="absolute top-2 left-3 text-red-500/50 text-xs uppercase tracking-widest font-mono">Ad Spend</div>

              {/* CSS Fire Animation layered over it */}
              <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-20 flex justify-center items-end opacity-80">
                <div className="w-[120%] h-24 bg-red-600 blur-[15px] animate-[flicker_0.3s_infinite_alternate] translate-y-12 mix-blend-screen"></div>
                <div className="w-full h-32 bg-orange-500 blur-[20px] animate-[flicker_0.4s_infinite_alternate_reverse] translate-y-16 mix-blend-screen absolute"></div>
                <div className="w-[80%] h-40 bg-yellow-400 blur-[25px] animate-[flicker_0.5s_infinite_alternate] translate-y-20 mix-blend-screen absolute"></div>
              </div>
              
              <style jsx="true">{`
                @keyframes flicker {
                  0% { transform: translateY(50px) scaleY(1); opacity: 0.8; }
                  100% { transform: translateY(40px) scaleY(1.3); opacity: 1; }
                }
              `}</style>

            </div>
          </div>
        </div>

        {/* Card 3: Unqualified Leads */}
        <div className="sticky top-56 w-full max-w-4xl mx-auto h-[50vh] min-h-[350px] bg-[#111318] rounded-[2rem] border border-red-500/50 shadow-[0_-20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(239,68,68,0.1)] flex flex-col md:flex-row items-center p-8 md:p-12 overflow-hidden z-30 transition-transform">
          <div className="flex-1 flex flex-col gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-brand-dark shadow-[0_0_30px_rgba(239,68,68,0.4)]">
              <ShieldAlert size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-brand-light">3. Chasing Unqualified Leads</h3>
            <p className="text-lg text-brand-text font-light leading-relaxed">
              Without an automated CRM, your pipeline hits a dead end. Your sales team is permanently stuck wasting their time manually chasing down prospects who will never buy.
            </p>
          </div>
          <div className="flex-1 w-full h-full flex flex-col items-center justify-center gap-3 relative opacity-40 md:opacity-100 mt-8 md:mt-0">
            {/* Visual: JUNK Lead List */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full max-w-[260px] h-12 border border-red-900/30 rounded-lg bg-[#0b0c10] flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                  <UserX size={16} className="text-red-900" />
                  <div className="w-16 h-2 bg-red-900/20 rounded-full"></div>
                </div>
                <span className="text-red-500/70 text-xs font-mono font-bold border border-red-900/50 px-2 py-0.5 rounded bg-red-900/10">JUNK</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx="true">{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default ProblemStacking;
