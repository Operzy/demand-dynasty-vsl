import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointerClick, Filter, Video, CalendarCheck, Workflow, DollarSign, ArrowRight, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FunnelDiagram = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the title
      gsap.from('.diagram-header', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      // Stagger in the nodes
      gsap.from('.diagram-node', {
        scale: 0.9,
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.diagram-grid',
          start: 'top 75%',
        }
      });

      // Animate the connection lines (pulses)
      gsap.to('.pulse-line', {
        opacity: 0.8,
        scale: 1.05,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const nodes = [
    { id: 1, title: 'B2B Meta Ads', desc: 'Targeted Traffic', icon: <MousePointerClick size={24} />, border: 'border-blue-500/50', bg: 'bg-blue-500/10', color: 'text-blue-400' },
    { id: 2, title: 'Opt-In Page', desc: 'Capture Info', icon: <Filter size={24} />, border: 'border-brand-accent/50', bg: 'bg-brand-accent/10', color: 'text-brand-accent' },
    { id: 3, title: 'The VSL', desc: 'Conversion Mechanism', icon: <Video size={24} />, border: 'border-brand-accent/50', bg: 'bg-brand-accent/10', color: 'text-brand-accent' },
    { id: 4, title: 'Application', desc: 'Filter Unqualified', icon: <CalendarCheck size={24} />, border: 'border-brand-accent/50', bg: 'bg-brand-accent/10', color: 'text-brand-accent' },
    { id: 5, title: 'CRM Nurture', desc: 'Automated SMS/Email', icon: <Workflow size={24} />, border: 'border-purple-500/50', bg: 'bg-purple-500/10', color: 'text-purple-400' },
    { id: 6, title: 'Sales Call', desc: 'Close Deal', icon: <DollarSign size={24} />, border: 'border-green-500/50', bg: 'bg-green-500/10', color: 'text-green-400' }
  ];

  return (
    <section ref={containerRef} className="w-full bg-[#050608] py-24 relative overflow-hidden border-t border-brand-accent/20">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 diagram-header">
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4 border border-brand-accent/30 w-max mx-auto px-4 py-1 rounded-full bg-brand-accent/5">
            System Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6">The Lead Generation Engine</h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto font-light">
            A visual breakdown of how we consistently turn cold B2B traffic into highly qualified appointments on your calendar.
          </p>
        </div>

        {/* Desktop Layout (Horizontal Flow) */}
        <div className="hidden lg:flex items-start justify-center relative w-full pt-10 diagram-grid px-8">
          
          <div className="flex w-full relative z-10">
            {nodes.map((node, i) => (
              <React.Fragment key={node.id}>
                {/* Node */}
                <div className="flex flex-col items-center group diagram-node w-36 relative shrink-0">
                  <div className={`w-16 h-16 rounded-2xl border ${node.border} ${node.bg} ${node.color} flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:border-opacity-100 transition-all duration-300 relative bg-[#0b0c10] z-20`}>
                    {node.icon}
                    {/* Glowing dot on top */}
                    <div className={`absolute -top-1 w-2 h-2 rounded-full bg-current pulse-line`}></div>
                  </div>
                  <h3 className="text-brand-light font-bold text-center text-sm mb-1">{node.title}</h3>
                  <p className="text-brand-text text-xs text-center px-2 leading-snug">{node.desc}</p>
                </div>
                
                {/* Connector line with arrow */}
                {i < nodes.length - 1 && (
                  <div className="flex-1 flex items-start justify-center pt-8 relative z-0 diagram-node min-w-[20px]">
                     <div className="w-full h-[2px] bg-gradient-to-r from-brand-border/10 via-brand-accent/30 to-brand-border/10 relative flex items-center justify-center">
                        <ArrowRight size={24} className="text-brand-accent absolute bg-[#050608] px-1 shadow-[0_0_10px_#050608]" />
                     </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout (Vertical Flow) */}
        <div className="flex flex-col items-center lg:hidden relative pt-10 diagram-grid gap-4">
          {/* Vertical connection line behind */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-1 bg-brand-border/30 rounded-full z-0"></div>

          {nodes.map((node, i) => (
            <React.Fragment key={node.id}>
              <div className="diagram-node w-full max-w-sm bg-[#111318] border border-brand-accent/20 rounded-2xl p-4 flex items-center gap-4 relative z-10 shadow-lg">
                <div className={`w-12 h-12 rounded-xl border ${node.border} ${node.bg} ${node.color} flex shrink-0 items-center justify-center bg-[#0b0c10]`}>
                  {node.icon}
                </div>
                <div>
                  <h3 className="text-brand-light font-bold text-base">{node.title}</h3>
                  <p className="text-brand-text text-sm">{node.desc}</p>
                </div>
              </div>
              
              {/* Arrow to next node */}
              {i < nodes.length - 1 && (
                <div className="text-brand-border/60 z-10 diagram-node">
                  <ArrowDown size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FunnelDiagram;
