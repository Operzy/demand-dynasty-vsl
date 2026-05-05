import React from 'react';
import { Shield, MonitorPlay, Zap, GitBranch } from 'lucide-react';

const StickyStacking = () => {
  return (
    <section className="w-full bg-[#050608] border-y border-brand-accent/20 relative">
      
      <div className="sticky top-0 pt-16 text-center z-50 pointer-events-none pb-8 bg-gradient-to-b from-[#050608] via-[#050608]/90 to-transparent">
        <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block flex items-center justify-center gap-2 drop-shadow-md mb-2">
          <Shield size={16} /> 
          The Solution
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-light drop-shadow-md max-w-4xl mx-auto px-4">
          How Our Done-For-You Paid Funnel Acquisition System Generates Consistent Revenue
        </h2>
      </div>

      <div className="w-full px-6 pb-48 relative pt-10">
        
        {/* Card 1 */}
        <div className="sticky top-48 w-full max-w-4xl mx-auto h-[60vh] min-h-[400px] bg-[#0b0c10] rounded-[2rem] border border-brand-accent/20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center p-8 md:p-12 overflow-hidden mb-24 z-10 transition-transform">
          <div className="flex-1 flex flex-col gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
              <Zap size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-light">1. Deploy a Paid Acquisition Engine</h3>
            <p className="text-lg md:text-xl text-brand-text font-light leading-relaxed">
              We eliminate your reliance on unpredictable referrals. We launch and manage institutional-grade Meta Ad campaigns designed specifically to open the floodgates and generate qualified B2B pipeline on demand.
            </p>
          </div>
          <div className="flex-1 w-full h-full flex items-center justify-center relative opacity-30 md:opacity-100 mt-8 md:mt-0 px-4">
            {/* Visual Motif: Wide Open Pipeline / Floodgates */}
            <div className="w-full max-w-[250px] h-32 border-y-4 border-brand-accent/40 rounded-[100px] relative overflow-hidden shadow-[inset_0_0_30px_rgba(214,219,43,0.1)]">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="absolute h-1 bg-brand-accent rounded-full shadow-[0_0_15px_#D6DB2B]" 
                  style={{ 
                    top: `${i * 18 + 10}%`, 
                    width: '30%', 
                    left: '-30%', 
                    animation: `shootRight ${1.5 + Math.random()}s linear infinite`, 
                    animationDelay: `${Math.random() * 2}s` 
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="sticky top-56 w-full max-w-4xl mx-auto h-[60vh] min-h-[400px] bg-[#0d0e12] rounded-[2rem] border border-brand-accent/40 shadow-[0_-15px_40px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center p-8 md:p-12 overflow-hidden mb-24 z-20 transition-transform">
          <div className="flex-1 flex flex-col gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent shadow-[0_0_20px_rgba(214,219,43,0.2)]">
              <MonitorPlay size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-light">2. Install a Cinematic VSL</h3>
            <p className="text-lg md:text-xl text-brand-text font-light leading-relaxed">
              We seal the leaks. We replace your leaky, generic landing pages with a high-fidelity Video Sales Letter (VSL). This creates a perfectly sealed conversion environment that filters out bad leads and pre-sells your most expensive packages.
            </p>
          </div>
          <div className="flex-1 w-full h-full flex items-center justify-center relative opacity-30 md:opacity-100 mt-8 md:mt-0">
            {/* Visual Motif: Sealed Cylinder / Zero Leaks */}
            <div className="w-full max-w-[200px] h-48 rounded-[40px] border-4 border-brand-accent shadow-[0_0_50px_rgba(214,219,43,0.3),inset_0_0_30px_rgba(214,219,43,0.2)] flex items-center justify-center relative overflow-hidden bg-brand-accent/5">
              <div className="w-full h-full bg-gradient-to-b from-transparent via-brand-accent/30 to-transparent animate-pulse"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <Shield size={48} className="text-brand-accent drop-shadow-[0_0_10px_rgba(214,219,43,0.8)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="sticky top-64 w-full max-w-4xl mx-auto h-[60vh] min-h-[400px] bg-[#111318] rounded-[2rem] border-2 border-brand-accent shadow-[0_-20px_50px_rgba(0,0,0,0.9),0_0_50px_rgba(214,219,43,0.1)] flex flex-col md:flex-row items-center p-8 md:p-12 overflow-hidden z-30 transition-transform">
          <div className="flex-1 flex flex-col gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark shadow-[0_0_30px_rgba(214,219,43,0.4)]">
              <GitBranch size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-light">3. Automated CRM Backend</h3>
            <p className="text-lg md:text-xl text-brand-text font-light leading-relaxed">
              We completely remove the choke point. We configure GoHighLevel to instantly qualify, route, and nurture leads. The flow is fast, organized, and perfectly automated. Your sales team only talks to buyers.
            </p>
          </div>
          <div className="flex-1 w-full h-full flex flex-col items-center justify-center gap-6 relative opacity-30 md:opacity-100 mt-8 md:mt-0 px-8">
            {/* Visual Motif: High-Speed Routing Automation */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full h-3 bg-brand-accent/10 rounded-full relative overflow-hidden border border-brand-accent/20">
                <div 
                  className="absolute top-0 bottom-0 w-1/4 bg-brand-accent rounded-full shadow-[0_0_15px_#D6DB2B]" 
                  style={{ 
                    left: '-25%', 
                    animation: `shootRight 1.2s ease-in-out infinite`, 
                    animationDelay: `${i * 0.4}s` 
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx="true">{`
        @keyframes shootRight {
          0% { left: -30%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 120%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default StickyStacking;
