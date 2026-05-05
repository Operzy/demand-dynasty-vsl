import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingDown, Zap, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FracturedCircuit = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the cards
      const nodes = gsap.utils.toArray('.circuit-node');
      nodes.forEach((node, i) => {
        gsap.from(node, {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
          duration: 0.6,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: '.circuit-wrapper',
            start: `top+=${(i + 1) * 25}% center`,
            toggleActions: "play none none reverse"
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#050608] py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-red-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6">Why Your Deal Flow is Broken</h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto font-light">
            Most B2B agencies are trapped in a cycle of feast or famine because their client acquisition infrastructure is fractured in these three critical places.
          </p>
        </div>

        <div className="circuit-wrapper relative w-full h-[900px] md:h-[700px] max-w-5xl mx-auto mt-10">
          
          {/* The SVG Circuit Background - 100x100 viewBox for perfect % alignment */}
          <div className="absolute inset-x-0 top-0 bottom-0 w-[150px] md:w-[200px] left-1/2 -translate-x-1/2 flex justify-center overflow-visible z-0 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              
              {/* Main Trunk Background */}
              <line x1="50" y1="0" x2="50" y2="100" stroke="#111318" strokeWidth="4" />

              {/* ----- FRACTURE 1: Weak Source (Referrals) - 20% down ----- */}
              <path d="M 25,0 C 25,10 50,15 50,20" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 4" className="animate-[dash_3s_linear_infinite]" opacity="0.4" />
              <path d="M 75,0 C 75,10 50,15 50,20" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 4" className="animate-[dash_4s_linear_infinite]" opacity="0.4" />
              <circle cx="50" cy="20" r="4" fill="#0b0c10" stroke="#ef4444" strokeWidth="1.5" className="animate-pulse" />

              {/* ----- MAIN TRUNK CONTINUES ----- */}
              <line x1="50" y1="20" x2="50" y2="50" stroke="#ef4444" strokeWidth="2.5" opacity="0.8" filter="drop-shadow(0 0 4px rgba(239,68,68,0.5))" />

              {/* ----- FRACTURE 2: Leaking Ad Spend - 50% down ----- */}
              <circle cx="50" cy="50" r="5" fill="#0b0c10" stroke="#ef4444" strokeWidth="2" />
              {/* Leaking branches spraying out */}
              <path d="M 50,50 Q 20,60 10,75" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 3" className="animate-[dash_1s_linear_infinite]" opacity="0.7" />
              <path d="M 50,50 Q 80,60 90,75" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 3" className="animate-[dash_1.5s_linear_infinite]" opacity="0.7" />
              <path d="M 50,50 Q 30,65 20,80" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 3" className="animate-[dash_1.2s_linear_infinite]" opacity="0.5" />

              {/* ----- MAIN TRUNK DIMINISHED ----- */}
              {/* Line gets thinner because of leaks */}
              <line x1="50" y1="50" x2="50" y2="85" stroke="#ef4444" strokeWidth="1" opacity="0.5" />

              {/* ----- FRACTURE 3: Dead End (No CRM) - 85% down ----- */}
              {/* The line hits a hard stop */}
              <rect x="35" y="84" width="30" height="2" fill="#0b0c10" stroke="#ef4444" strokeWidth="1" />
              <line x1="30" y1="87" x2="70" y2="87" stroke="#ef4444" strokeWidth="1.5" className="animate-pulse" />
              <line x1="40" y1="89" x2="60" y2="89" stroke="#ef4444" strokeWidth="1" className="animate-pulse" opacity="0.5" />

              {/* Data pools up / bounces back */}
              <circle cx="50" cy="82" r="1.5" fill="#ef4444" className="animate-bounce" />
              
            </svg>
          </div>

          {/* HTML Nodes Positioned via % to match the SVG Path precisely */}
          
          {/* Node 1: Matches cy=20% */}
          <div className="circuit-node absolute w-[85%] md:w-[400px] right-[5%] md:right-[50%] md:mr-16" style={{ top: '15%' }}>
            <div className="bg-[#0b0c10] border border-red-900/40 rounded-xl p-6 shadow-2xl relative group hover:border-red-500/40 transition-colors">
              <div className="absolute right-[-48px] top-1/2 -translate-y-1/2 w-12 h-px bg-red-500/50 hidden md:block"></div>
              
              <div className="flex items-center gap-3 mb-3">
                <TrendingDown className="text-red-500 shrink-0" size={20} />
                <h3 className="text-lg font-serif font-bold text-brand-light">Relying on Referrals?</h3>
              </div>
              <p className="text-brand-text font-light text-sm leading-relaxed">
                Not knowing where your next client is coming from makes it impossible to reliably forecast revenue. The input to your system is weak and unpredictable.
              </p>
            </div>
          </div>

          {/* Node 2: Matches cy=50% */}
          <div className="circuit-node absolute w-[85%] md:w-[400px] left-[5%] md:left-[50%] md:ml-16" style={{ top: '45%' }}>
            <div className="bg-[#0b0c10] border border-red-900/40 rounded-xl p-6 shadow-2xl relative group hover:border-red-500/40 transition-colors">
              <div className="absolute left-[-48px] top-1/2 -translate-y-1/2 w-12 h-px bg-red-500/50 hidden md:block"></div>

              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-red-500 shrink-0" size={20} />
                <h3 className="text-lg font-serif font-bold text-brand-light">Burning Cash on Ads?</h3>
              </div>
              <p className="text-brand-text font-light text-sm leading-relaxed">
                Sending traffic to generic landing pages results in unqualified leads. Capital and attention are physically leaking out of your architecture before they ever book a call.
              </p>
            </div>
          </div>

          {/* Node 3: Matches cy=85% */}
          <div className="circuit-node absolute w-[85%] md:w-[400px] right-[5%] md:right-[50%] md:mr-16" style={{ top: '80%' }}>
            <div className="bg-[#0b0c10] border border-red-900/40 rounded-xl p-6 shadow-2xl relative group hover:border-red-500/40 transition-colors">
              <div className="absolute right-[-48px] top-1/2 -translate-y-1/2 w-12 h-px bg-red-500/50 hidden md:block"></div>

              <div className="flex items-center gap-3 mb-3">
                <ShieldAlert className="text-red-500 shrink-0" size={20} />
                <h3 className="text-lg font-serif font-bold text-brand-light">Chasing Unqualified Leads?</h3>
              </div>
              <p className="text-brand-text font-light text-sm leading-relaxed">
                Without an automated CRM, the flow hits a dead end. Your sales team is permanently stuck wasting time manually chasing prospects who will never buy.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx="true">{`
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
      `}</style>
    </section>
  );
};

export default FracturedCircuit;
