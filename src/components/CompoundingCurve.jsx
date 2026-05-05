import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, TrendingDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CompoundingCurve = () => {
  const containerRef = useRef(null);
  const graphRevealRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate the reveal from left to right smoothly
      gsap.fromTo(graphRevealRef.current, 
        { width: "0%" },
        {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          }
        }
      );

      // Animate text reveals
      gsap.from('.graph-text', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#050608] border-y border-brand-accent/20 py-32 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-10 pointer-events-none">
        {/* Subtle grid in background of graph */}
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#2B2F36 1px, transparent 1px), linear-gradient(90deg, #2B2F36 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6 graph-text">Linear Growth vs. Exponential Systems</h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto font-light graph-text">Standard agencies deliver linear results that eventually flatline. A true system compounds your deal flow exponentially over time.</p>
        </div>

        <div className="w-full max-w-4xl relative aspect-[2/1] border-b-2 border-l-2 border-brand-border/50 pb-4 pl-4">
          
          <div ref={graphRevealRef} className="absolute inset-0 w-full h-full overflow-hidden origin-left">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 500" preserveAspectRatio="none">
              {/* The Traditional Agency Line (Red, bumpy, flatlining) */}
              <path 
                d="M 0 450 Q 100 400 200 420 T 400 380 T 600 390 T 800 400 T 1000 410" 
                fill="none" 
                stroke="#EF4444" 
                strokeWidth="4" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]"
              />
              
              {/* The Dynasty Standard Line (Gold, compounding exponential) */}
              <path 
                d="M 0 450 Q 300 440 500 350 T 800 100 Q 900 0 1000 -50" 
                fill="none" 
                stroke="#D6DB2B" 
                strokeWidth="8" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_20px_rgba(214,219,43,0.6)]"
              />
            </svg>
          </div>

          {/* Labels */}
          <div className="absolute bottom-[20%] right-8 graph-text flex items-center gap-2 bg-black/60 px-4 py-2 rounded-xl border border-red-900/50 backdrop-blur-sm text-red-400 font-bold">
            <TrendingDown size={18} />
            Linear Agency Growth
          </div>

          <div className="absolute top-[10%] right-8 graph-text flex items-center gap-2 bg-[#D6DB2B]/10 px-6 py-3 rounded-xl border border-brand-accent/30 backdrop-blur-sm text-brand-accent font-serif font-bold text-xl drop-shadow-lg">
            <TrendingUp size={24} />
            Our Compounding System
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CompoundingCurve;
