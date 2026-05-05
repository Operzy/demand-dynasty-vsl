import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingDown, Zap, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DownwardGraph = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw the downward red SVG line
      const path = document.querySelector('.graph-path');
      const length = path.getTotalLength();
      
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: '.graph-wrapper',
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });

      // Animate the cards popping in
      const nodes = gsap.utils.toArray('.graph-node');
      nodes.forEach((node, i) => {
        gsap.from(node, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          duration: 0.5,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: '.graph-wrapper',
            start: `top+=${(i + 1) * 20}% center`,
            toggleActions: "play none none reverse"
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#050608] py-24 relative overflow-hidden">
      {/* Background dark red ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-red-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6">Are you tired of...</h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto font-light">Most B2B operators are exhausted from dealing with the same three infrastructure bottlenecks that destroy profit margins.</p>
        </div>

        <div className="graph-wrapper relative w-full h-[800px] md:h-[600px] border-l-2 border-b-2 border-red-900/30 rounded-bl-xl mt-10 mr-4">
          
          {/* Axis Labels */}
          <div className="absolute -left-10 top-10 -rotate-90 text-red-500/50 text-xs font-mono tracking-widest uppercase origin-left whitespace-nowrap">Profit Margins</div>
          <div className="absolute bottom-[-30px] right-0 text-red-500/50 text-xs font-mono tracking-widest uppercase">Time Spent Scaling</div>

          {/* SVG Graph Line - 100x100 viewBox allows for perfect percentage scaling */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* Grid lines */}
            <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(239,68,68,0.05)" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(239,68,68,0.05)" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(239,68,68,0.05)" strokeWidth="0.5" strokeDasharray="2,2" />

            {/* The crashing path */}
            <path 
              className="graph-path"
              d="M 0,5 L 20,30 L 50,65 L 90,95" 
              fill="none" 
              stroke="url(#redGradient)" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              filter="drop-shadow(0 0 2px rgba(239,68,68,0.8))"
            />
            
            <defs>
              <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
            </defs>
          </svg>

          {/* HTML Nodes Positioned via % to match the SVG Path */}
          
          {/* Node 1: Matches L 20,30 */}
          <div className="graph-node absolute" style={{ top: '30%', left: '20%' }}>
            {/* The Dot */}
            <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-[#0b0c10] shadow-[0_0_15px_rgba(239,68,68,0.8)] absolute -top-2 -left-2 z-20"></div>
            {/* The Card */}
            <div className="absolute top-6 -left-10 w-[280px] md:w-[320px] bg-[#0b0c10] border border-red-900/40 rounded-xl p-5 shadow-2xl z-10 group hover:border-red-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="text-red-500 shrink-0" size={18} />
                <h3 className="text-base font-serif font-bold text-brand-light">Relying on Referrals?</h3>
              </div>
              <p className="text-brand-text font-light text-xs leading-relaxed">Not knowing where your next client is coming from makes it impossible to reliably forecast revenue. It's a slow burn.</p>
            </div>
          </div>

          {/* Node 2: Matches L 50,65 */}
          <div className="graph-node absolute" style={{ top: '65%', left: '50%' }}>
            <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-[#0b0c10] shadow-[0_0_15px_rgba(239,68,68,0.8)] absolute -top-2 -left-2 z-20"></div>
            <div className="absolute top-6 -left-20 md:left-6 w-[280px] md:w-[320px] bg-[#0b0c10] border border-red-900/40 rounded-xl p-5 shadow-2xl z-10 group hover:border-red-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="text-red-500 shrink-0" size={18} />
                <h3 className="text-base font-serif font-bold text-brand-light">Burning Cash on Ads?</h3>
              </div>
              <p className="text-brand-text font-light text-xs leading-relaxed">Running standard ads to generic landing pages results in unqualified leads and high acquisition costs that eat margins.</p>
            </div>
          </div>

          {/* Node 3: Matches L 90,95 */}
          <div className="graph-node absolute" style={{ top: '95%', left: '90%' }}>
            <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-[#0b0c10] shadow-[0_0_15px_rgba(239,68,68,0.8)] absolute -top-2 -left-2 z-20"></div>
            <div className="absolute bottom-6 -left-64 md:-left-80 w-[280px] md:w-[320px] bg-[#0b0c10] border border-red-900/40 rounded-xl p-5 shadow-2xl z-10 group hover:border-red-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <ShieldAlert className="text-red-500 shrink-0" size={18} />
                <h3 className="text-base font-serif font-bold text-brand-light">Chasing Unqualified Leads?</h3>
              </div>
              <p className="text-brand-text font-light text-xs leading-relaxed">Without an automated CRM routing leads, your sales team is constantly wasting time chasing prospects who will never buy.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownwardGraph;
