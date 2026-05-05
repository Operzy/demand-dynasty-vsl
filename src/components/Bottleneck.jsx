import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingDown, Zap, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Bottleneck = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the cards
      const nodes = gsap.utils.toArray('.bottleneck-node');
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

      // Animate flowing money getting stuck in the bottleneck
      gsap.fromTo('.flow-line', 
        {
          y: -50,
          opacity: 1
        },
        {
          y: 600,
          opacity: 0,
          duration: 3,
          stagger: {
            each: 0.3,
            repeat: -1
          },
          ease: "power1.in"
        }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#050608] py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-red-900/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6">Common Bottlenecks in B2B Client Acquisition</h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto font-light">
            If you're stuck in feast-or-famine mode, it usually traces back to these four problems.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex justify-center py-10">
          
          {/* The SVG Funnel/Bottleneck Background */}
          <div className="absolute inset-y-0 w-[300px] md:w-[400px] left-1/2 -translate-x-1/2 flex justify-center overflow-visible z-0 pointer-events-none">
            <svg viewBox="0 0 400 1200" className="w-full h-full" preserveAspectRatio="none">
              {/* Funnel Fill */}
              <path 
                d="M 20,0 C 20,250 170,350 170,800 L 170,1200 L 230,1200 L 230,800 C 230,350 380,250 380,0 Z" 
                fill="url(#funnelGradient)" 
                opacity="0.15" 
              />
              
              {/* Left Wall */}
              <path 
                d="M 20,0 C 20,250 170,350 170,800 L 170,1200" 
                fill="none" 
                stroke="#ef4444" 
                strokeWidth="3" 
                strokeLinecap="round"
                filter="drop-shadow(0 0 10px rgba(239,68,68,0.5))"
              />
              
              {/* Right Wall */}
              <path 
                d="M 380,0 C 380,250 230,350 230,800 L 230,1200" 
                fill="none" 
                stroke="#ef4444" 
                strokeWidth="3" 
                strokeLinecap="round"
                filter="drop-shadow(0 0 10px rgba(239,68,68,0.5))"
              />
              
              <defs>
                <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                  <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Animated Money Particles dropping into the choke point */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <text 
                  key={i} 
                  className="flow-line font-mono font-bold text-2xl" 
                  x={180 + (Math.random() * 40 - 20)} 
                  y={0} 
                  fill="#D6DB2B" 
                  filter="drop-shadow(0 0 8px #D6DB2B)"
                >
                  $
                </text>
              ))}
            </svg>
          </div>

          <div className="w-full flex flex-col gap-16 md:gap-32 relative z-10 mt-10">
            
            {/* Node 1 */}
            <div className="bottleneck-node flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
              <div className="md:w-1/2 md:pr-12 flex justify-end">
                <div className="bg-[#0b0c10] border border-red-900/40 rounded-xl p-6 shadow-2xl relative w-full md:w-[380px] group hover:border-red-500/40 transition-colors">
                  <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-6 h-px bg-red-500 hidden md:block"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full absolute right-[-28px] top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_#ef4444]"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldAlert className="text-red-500 shrink-0" size={20} />
                    <h3 className="text-lg font-serif font-bold text-brand-light">1. Unqualified Prospects</h3>
                  </div>
                  <p className="text-brand-text font-light text-sm leading-relaxed">
                    Your sales team is permanently stuck wasting their time manually chasing down prospects who don't have the budget and will never buy.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Node 2 */}
            <div className="bottleneck-node flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="md:w-1/2 md:pl-12 flex justify-start">
                <div className="bg-[#0b0c10] border border-red-900/40 rounded-xl p-6 shadow-2xl relative w-full md:w-[380px] group hover:border-red-500/40 transition-colors">
                  <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-6 h-px bg-red-500 hidden md:block"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full absolute left-[-28px] top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_#ef4444]"></div>

                  <div className="flex items-center gap-3 mb-3">
                    <TrendingDown className="text-red-500 shrink-0" size={20} />
                    <h3 className="text-lg font-serif font-bold text-brand-light">2. Inconsistent Growth</h3>
                  </div>
                  <p className="text-brand-text font-light text-sm leading-relaxed">
                    You are trapped in a cycle of feast or famine. One month is a record breaker, the next month you are scrambling to keep the lights on.
                  </p>
                </div>
              </div>
            </div>

            {/* Node 3 */}
            <div className="bottleneck-node flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
              <div className="md:w-1/2 md:pr-12 flex justify-end">
                <div className="bg-[#0b0c10] border border-red-900/40 rounded-xl p-6 shadow-2xl relative w-full md:w-[380px] group hover:border-red-500/40 transition-colors">
                  <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-6 h-px bg-red-500 hidden md:block"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full absolute right-[-28px] top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_#ef4444]"></div>

                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="text-red-500 shrink-0" size={20} />
                    <h3 className="text-lg font-serif font-bold text-brand-light">3. Overreliance on Referrals</h3>
                  </div>
                  <p className="text-brand-text font-light text-sm leading-relaxed">
                    Not knowing where your next client is coming from makes it impossible to forecast revenue. The top of your funnel is empty and out of your control.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Node 4 */}
            <div className="bottleneck-node flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="md:w-1/2 md:pl-12 flex justify-start">
                <div className="bg-[#0b0c10] border border-red-900/40 rounded-xl p-6 shadow-2xl relative w-full md:w-[380px] group hover:border-red-500/40 transition-colors">
                  <div className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-6 h-px bg-red-500 hidden md:block"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full absolute left-[-28px] top-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_#ef4444]"></div>

                  <div className="flex items-center gap-3 mb-3">
                    <ShieldAlert className="text-red-500 shrink-0" size={20} />
                    <h3 className="text-lg font-serif font-bold text-brand-light">4. Wasting Cash on Ads</h3>
                  </div>
                  <p className="text-brand-text font-light text-sm leading-relaxed">
                    Sending traffic to generic landing pages results in high CPA. You are burning money on ads that don't convert into qualified B2B appointments.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottleneck;
