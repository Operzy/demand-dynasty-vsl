import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Workflow, Rocket, Search, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessMap = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line drawing down
      gsap.from('.process-line', {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: '.process-container',
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });

      // Animate each node as the line hits it
      const nodes = gsap.utils.toArray('.process-node');
      nodes.forEach((node, i) => {
        gsap.from(node, {
          opacity: 0,
          y: 16,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 82%",
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      phase: "01 / Offer",
      icon: <Search size={24} />,
      title: "We set you up to win in cold traffic.",
      description: "We learn your ideal client, then sharpen your offer to hook people who have never heard of you. Your messaging speaks to likely buyers, so each lead costs less and the same budget books more calls."
    },
    {
      phase: "02 / Build",
      icon: <Workflow size={24} />,
      title: "We build the system that turns strangers into booked calls.",
      description: "Scroll-stopping ads, a high-converting funnel, a CRM that nurtures every lead, and tracking across all of it. No lead slips through, prospects arrive ready to buy, and you see which ads and pages work."
    },
    {
      phase: "03 / Launch",
      icon: <Rocket size={24} />,
      title: "We launch your ads.",
      description: "We go live, watch the numbers daily, and test ads, audiences and angles to find what books the most calls."
    },
    {
      phase: "04 / Scale",
      icon: <TrendingUp size={24} />,
      title: "We scale your ad spend.",
      description: "Winners get more budget and the rest get cut, so results grow with your spend, not your costs. The numbers show what works, so you can invest more with confidence."
    }
  ];

  return (
    <section ref={containerRef} className="w-full section-dark text-white py-24 md:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <p className="kicker !text-white/55 mb-4">Process</p>
          <h2 className="display text-4xl md:text-5xl text-white mb-6">How it <em className="text-brand-lime-hi">works.</em></h2>
        </div>

        <div className="relative process-container max-w-4xl mx-auto py-10">
          {/* Background Track */}
          <div className="absolute left-[32px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          {/* Animated Glowing Line */}
          <div className="process-line absolute left-[32px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-lime via-brand-lime to-transparent md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12 md:gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`process-node relative flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                
                {/* Center Node Icon (Absolute on Desktop, static on mobile) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-brand-dark border border-brand-lime/60 items-center justify-center text-brand-lime-hi z-20">
                  {step.icon}
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden absolute left-[12px] top-6 w-10 h-10 rounded-full bg-brand-dark border border-brand-lime/60 flex items-center justify-center text-brand-lime-hi z-20">
                   {React.cloneElement(step.icon, { size: 16 })}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                   <div className="bg-brand-dark-2 border border-brand-dark-line rounded-card p-6 md:p-7 relative group hover:border-brand-lime/40 transition-colors">
                      
                      {/* Connector Line (Desktop) */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-px bg-brand-lime/40 ${index % 2 === 0 ? '-right-12' : '-left-12'}`}></div>

                      <span className="kicker !text-brand-lime-hi block mb-3">{step.phase}</span>
                      <h3 className="font-display text-xl md:text-2xl font-medium tracking-[-0.02em] text-white mb-3">{step.title}</h3>
                      <p className="text-white/60 leading-relaxed text-[14.5px]">{step.description}</p>
                   </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessMap;
