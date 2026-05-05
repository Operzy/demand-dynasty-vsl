import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, PlaySquare, Workflow } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GoldPipeline = () => {
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
    <section ref={containerRef} className="w-full bg-[#050608] pb-32 pt-16 relative overflow-hidden">
      
      {/* Connector glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand-accent/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center relative z-20">
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4 border border-brand-accent/30 w-max mx-auto px-4 py-1 rounded-full bg-brand-accent/5">The Infrastructure</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6">The B2B Client Acquisition Pipeline</h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto font-light">
            We don't sell random services. We install a complete, done-for-you infrastructure that turns cold B2B traffic into qualified sales appointments on autopilot.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex justify-center py-10">
          
          {/* The SVG Pipeline Background */}
          <div className="absolute inset-y-0 w-[200px] md:w-[240px] left-1/2 -translate-x-1/2 flex justify-center overflow-visible z-0 pointer-events-none">
            <svg viewBox="0 0 240 1000" className="w-full h-full" preserveAspectRatio="none">
              
              {/* Pipeline Fill */}
              <rect x="40" y="0" width="160" height="1000" fill="url(#pipelineGradient)" opacity="0.15" />
              
              {/* Left Wall */}
              <line x1="40" y1="0" x2="40" y2="1000" stroke="#D6DB2B" strokeWidth="4" filter="drop-shadow(0 0 10px rgba(214,219,43,0.3))" opacity="0.6" />
              
              {/* Right Wall */}
              <line x1="200" y1="0" x2="200" y2="1000" stroke="#D6DB2B" strokeWidth="4" filter="drop-shadow(0 0 10px rgba(214,219,43,0.3))" opacity="0.6" />
              
              <defs>
                <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#050608" />
                  <stop offset="50%" stopColor="#D6DB2B" />
                  <stop offset="100%" stopColor="#050608" />
                </linearGradient>
              </defs>

              {/* Flow Data */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <g key={i} className="fast-flow" transform={`translate(${120 + (Math.random() * 100 - 50)}, 0)`}>
                  <line x1="0" y1="0" x2="0" y2="80" stroke="#D6DB2B" strokeWidth="6" strokeLinecap="round" filter="drop-shadow(0 0 10px #D6DB2B)" />
                  <polygon points="-8,80 8,80 0,100" fill="#D6DB2B" filter="drop-shadow(0 0 10px #D6DB2B)" />
                </g>
              ))}
            </svg>
          </div>

          <div className="w-full flex flex-col gap-24 md:gap-40 relative z-10 mt-10">
            
            {/* Node 1 */}
            <div className="pipeline-node flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
              <div className="md:w-1/2 md:pr-12 flex justify-end">
                <div className="bg-[#0b0c10] border border-brand-accent/20 rounded-xl p-6 shadow-2xl relative w-full md:w-[380px] group hover:border-brand-accent/50 transition-colors">
                  <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-6 h-px bg-brand-accent hidden md:block"></div>
                  <div className="w-3 h-3 bg-brand-accent rounded-full absolute right-[-28px] top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_15px_#D6DB2B]"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="text-brand-accent shrink-0" size={20} />
                    <h3 className="text-xl font-serif font-bold text-brand-light">1. Capture Demand (Paid Ads)</h3>
                  </div>
                  <p className="text-brand-text font-light text-sm leading-relaxed">
                    We launch highly targeted Meta & YouTube campaigns to put your offer directly in front of qualified B2B operators. No more waiting around for referrals.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Node 2 */}
            <div className="pipeline-node flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="md:w-1/2 md:pl-12 flex justify-start">
                <div className="bg-[#0b0c10] border border-brand-accent/20 rounded-xl p-6 shadow-2xl relative w-full md:w-[380px] group hover:border-brand-accent/50 transition-colors">
                  <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-6 h-px bg-brand-accent hidden md:block"></div>
                  <div className="w-3 h-3 bg-brand-accent rounded-full absolute left-[-28px] top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_15px_#D6DB2B]"></div>

                  <div className="flex items-center gap-3 mb-3">
                    <PlaySquare className="text-brand-accent shrink-0" size={20} />
                    <h3 className="text-xl font-serif font-bold text-brand-light">2. Pre-Sell & Educate (VSL)</h3>
                  </div>
                  <p className="text-brand-text font-light text-sm leading-relaxed">
                    Traffic is routed into a high-fidelity Video Sales Letter. This acts as your best salesperson, automatically filtering out unqualified leads and pre-selling your highest-ticket offers.
                  </p>
                </div>
              </div>
            </div>

            {/* Node 3 */}
            <div className="pipeline-node flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
              <div className="md:w-1/2 md:pr-12 flex justify-end">
                <div className="bg-[#0b0c10] border border-brand-accent/20 rounded-xl p-6 shadow-2xl relative w-full md:w-[380px] group hover:border-brand-accent/50 transition-colors">
                  <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-6 h-px bg-brand-accent hidden md:block"></div>
                  <div className="w-3 h-3 bg-brand-accent rounded-full absolute right-[-28px] top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_15px_#D6DB2B]"></div>

                  <div className="flex items-center gap-3 mb-3">
                    <Workflow className="text-brand-accent shrink-0" size={20} />
                    <h3 className="text-xl font-serif font-bold text-brand-light">3. Qualify & Book (CRM)</h3>
                  </div>
                  <p className="text-brand-text font-light text-sm leading-relaxed">
                    The final step routes leads through GoHighLevel automation. Unqualified prospects are dropped, and your calendar fills up exclusively with operators ready to buy right now.
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

export default GoldPipeline;
