import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutTemplate, PenTool, MonitorPlay, Mail, CheckSquare, Activity, Workflow } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Deliverables = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.deliverable-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const items = [
    { title: "Funnel & Landing Page", desc: "We design and develop high-converting architecture optimized to capture your ideal B2B prospects.", icon: <LayoutTemplate size={24} /> },
    { title: "VSL Scripting & Editing", desc: "We write the psychological sales copy and handle the video editing to build instant authority.", icon: <PenTool size={24} /> },
    { title: "Ad Ideation & Editing", desc: "We script, direct, and edit your Meta ad creatives to stop the scroll and capture high-intent traffic.", icon: <MonitorPlay size={24} /> },
    { title: "Email Automations", desc: "We build out your opt-in sequences and post-booking nurture flows to drastically increase show rates.", icon: <Mail size={24} /> },
    { title: "Thank You Page", desc: "A strategic post-opt-in page designed to immediately push qualified leads into booking a strategy call.", icon: <CheckSquare size={24} /> },
    { title: "Pixel & CAPI Setup", desc: "We configure your Meta Pixel and Conversions API to ensure flawlessly tracked data and attribution.", icon: <Activity size={24} /> },
    { title: "CRM & Automation Setup", desc: "We build out your GoHighLevel infrastructure, sales pipelines, and automated lead routing systems.", icon: <Workflow size={24} /> },
  ];

  return (
    <section ref={containerRef} className="w-full bg-[#050608] py-24 relative overflow-hidden reveal-section border-t border-brand-accent/20">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest block mb-4">
            The Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6">Here's How We Help You</h2>
          <p className="text-xl text-brand-text max-w-2xl mx-auto font-light">
            We handle the heavy lifting so you can focus on taking sales calls and closing deals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 items-stretch">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="deliverable-card w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-[#111318] border border-brand-accent/20 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-brand-accent/50 transition-colors shadow-lg hover:-translate-y-1 duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-accent/10 transition-colors pointer-events-none"></div>
              
              <div className="w-14 h-14 shrink-0 rounded-xl bg-[#0b0c10] border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-6 shadow-[0_0_15px_rgba(214,219,43,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(214,219,43,0.3)] transition-all duration-300 relative z-10">
                {item.icon}
              </div>
              <h3 className="text-brand-light font-bold text-lg leading-tight relative z-10 mb-3 w-full truncate whitespace-normal">{item.title}</h3>
              <p className="text-brand-text text-sm font-light leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
