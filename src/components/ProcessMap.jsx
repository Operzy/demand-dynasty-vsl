import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Workflow, Rocket, CheckCircle, Search, Video, Target } from 'lucide-react';

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
          y: 30,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: node,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      phase: "Phase 1",
      icon: <Search size={24} />,
      title: "Understanding Your Business",
      description: "We completely dissect your business. We analyze your offer, ideal client profile, current bottlenecks, and set the foundational strategy for your new acquisition pipeline."
    },
    {
      phase: "Phase 2",
      icon: <Video size={24} />,
      title: "VSL & Landing Page",
      description: "We engineer a high-converting Video Sales Letter and landing page designed specifically to filter out the unqualified and compel your ideal targets to book a strategy session."
    },
    {
      phase: "Phase 3",
      icon: <Target size={24} />,
      title: "Ad Strategy & Creative",
      description: "We develop the exact angles, scripts, and visual creatives needed for your Meta campaigns to capture high-intent B2B traffic."
    },
    {
      phase: "Phase 4",
      icon: <Workflow size={24} />,
      title: "CRM & Automation",
      description: "We construct your backend logic in GoHighLevel. We set up your pipelines, lead routing, and build out automated email and SMS nurture flows to recover lost leads."
    },
    {
      phase: "Phase 5",
      icon: <Rocket size={24} />,
      title: "Launch & Optimization",
      description: "The system goes live. We launch the paid campaigns, monitor the data daily, aggressively optimize cost-per-call, and scale what works."
    }
  ];

  return (
    <section ref={containerRef} className="w-full bg-[#0a0c0f] py-32 relative overflow-hidden border-y border-brand-accent/20">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4 border border-brand-accent/30 w-max mx-auto px-4 py-1 rounded-full bg-brand-accent/5">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6">We'll install your client acquisition system in 14 to 21 days.</h2>
        </div>

        <div className="relative process-container max-w-4xl mx-auto py-10">
          {/* Background Track */}
          <div className="absolute left-[32px] md:left-1/2 top-0 bottom-0 w-1 bg-brand-border/30 md:-translate-x-1/2 rounded-full"></div>
          
          {/* Animated Glowing Line */}
          <div className="process-line absolute left-[32px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-accent via-brand-accent to-transparent md:-translate-x-1/2 rounded-full shadow-[0_0_15px_#D6DB2B]"></div>

          <div className="flex flex-col gap-12 md:gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`process-node relative flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                
                {/* Center Node Icon (Absolute on Desktop, static on mobile) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0b0c10] border-2 border-brand-accent items-center justify-center text-brand-accent shadow-[0_0_20px_rgba(214,219,43,0.3)] z-20">
                  {step.icon}
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden absolute left-[12px] top-6 w-10 h-10 rounded-full bg-[#0b0c10] border-2 border-brand-accent flex items-center justify-center text-brand-accent shadow-[0_0_20px_rgba(214,219,43,0.3)] z-20">
                   {React.cloneElement(step.icon, { size: 16 })}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                   <div className="bg-[#111318] border border-brand-accent/20 rounded-2xl p-6 md:p-8 shadow-lg relative group hover:border-brand-accent/50 transition-colors">
                      
                      {/* Connector Line (Desktop) */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-brand-accent/50 ${index % 2 === 0 ? '-right-12' : '-left-12'}`}></div>

                      <span className="text-brand-accent font-bold tracking-widest uppercase text-xs md:text-sm block mb-2">{step.phase}</span>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-light mb-3">{step.title}</h3>
                      <p className="text-brand-text font-light leading-relaxed text-sm">{step.description}</p>
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
