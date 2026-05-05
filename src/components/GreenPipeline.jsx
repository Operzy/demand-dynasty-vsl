import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, PlaySquare, Workflow } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GreenPipeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the cards
      const nodes = gsap.utils.toArray('.pipeline-node');
      nodes.forEach((node, i) => {
        gsap.from(node, {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
          duration: 0.6,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: node,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Animate high-speed flow lines shooting through the pipeline
      gsap.fromTo('.fast-flow', 
        {
          y: -150,
          opacity: 0
        },
        {
          y: 1100,
          opacity: 1,
          duration: 1.5,
          stagger: {
            each: 0.25,
            repeat: -1
          },
          ease: "none"
        }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#050608] py-24 relative overflow-hidden border-t border-green-900/20">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-green-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <span className="text-green-500 text-sm font-bold uppercase tracking-widest block mb-4">How We Fix It</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6">The High-Velocity Pipeline</h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto font-light">
            We replace the broken funnel with a perfectly sealed, automated acquisition engine that generates revenue on demand.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex justify-center py-10">
          
          {/* The SVG Pipeline Background */}
          <div className="absolute inset-y-0 w-[200px] md:w-[240px] left-1/2 -translate-x-1/2 flex justify-center overflow-visible z-0 pointer-events-none">
            <svg viewBox="0 0 240 1000" className="w-full h-full" preserveAspectRatio="none">
              
              {/* Pipeline Fill */}
              <rect x="40" y="0" width="160" height="1000" fill="url(#pipelineGradient)" opacity="0.15" />
              
              {/* Left Wall */}
              <line x1="40" y1="0" x2="40" y2="1000" stroke="#22c55e" strokeWidth="4" filter="drop-shadow(0 0 10px rgba(34,197,94,0.5))" />
              
              {/* Right Wall */}
              <line x1="200" y1="0" x2="200" y2="1000" stroke="#22c55e" strokeWidth="4" filter="drop-shadow(0 0 10px rgba(34,197,94,0.5))" />
              
              <defs>
                <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#050608" />
                  <stop offset="50%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#050608" />
                </linearGradient>
              </defs>

              {/* High-Speed Data Packets (Arrows/Lines) */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <g key={i} className="fast-flow" transform={`translate(${120 + (Math.random() * 100 - 50)}, 0)`}>
                  <line x1="0" y1="0" x2="0" y2="80" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" filter="drop-shadow(0 0 10px #4ade80)" />
                  <polygon points="-8,80 8,80 0,100" fill="#4ade80" filter="drop-shadow(0 0 10px #4ade80)" />
                </g>
              ))}
            </svg>
          </div>

          <div className="w-full flex flex-col gap-24 md:gap-40 relative z-10 mt-10">
            
            {/* Node 1 */}
            <div className="pipeline-node flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
              <div className="md:w-1/2 md:pr-12 flex justify-end">
                <div className="bg-[#0b0c10] border border-green-900/40 rounded-xl p-6 shadow-2xl relative w-full md:w-[380px] group hover:border-green-500/40 transition-colors">
                  <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-6 h-px bg-green-500 hidden md:block"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full absolute right-[-28px] top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_15px_#22c55e]"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="text-green-500 shrink-0" size={20} />
                    <h3 className="text-xl font-serif font-bold text-brand-light">1. Targeted Paid Ads</h3>
                  </div>
                  <p className="text-brand-text font-light text-sm leading-relaxed">
                    We flood the top of your pipeline. We launch institutional-grade Meta & YouTube ads to capture high-intent B2B prospects, completely replacing unpredictable referrals.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Node 2 */}
            <div className="pipeline-node flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="md:w-1/2 md:pl-12 flex justify-start">
                <div className="bg-[#0b0c10] border border-green-900/40 rounded-xl p-6 shadow-2xl relative w-full md:w-[380px] group hover:border-green-500/40 transition-colors">
                  <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-6 h-px bg-green-500 hidden md:block"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full absolute left-[-28px] top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_15px_#22c55e]"></div>

                  <div className="flex items-center gap-3 mb-3">
                    <PlaySquare className="text-green-500 shrink-0" size={20} />
                    <h3 className="text-xl font-serif font-bold text-brand-light">2. Cinematic VSL</h3>
                  </div>
                  <p className="text-brand-text font-light text-sm leading-relaxed">
                    We seal the leaks. A high-fidelity Video Sales Letter pre-sells your most expensive offers, automatically filtering out unqualified leads before they ever book a call.
                  </p>
                </div>
              </div>
            </div>

            {/* Node 3 */}
            <div className="pipeline-node flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
              <div className="md:w-1/2 md:pr-12 flex justify-end">
                <div className="bg-[#0b0c10] border border-green-900/40 rounded-xl p-6 shadow-2xl relative w-full md:w-[380px] group hover:border-green-500/40 transition-colors">
                  <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-6 h-px bg-green-500 hidden md:block"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full absolute right-[-28px] top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_15px_#22c55e]"></div>

                  <div className="flex items-center gap-3 mb-3">
                    <Workflow className="text-green-500 shrink-0" size={20} />
                    <h3 className="text-xl font-serif font-bold text-brand-light">3. Automated CRM</h3>
                  </div>
                  <p className="text-brand-text font-light text-sm leading-relaxed">
                    We remove the choke point entirely. GoHighLevel automatically routes and nurtures leads, filling your calendar with prospects who are ready to buy right now.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenPipeline;
