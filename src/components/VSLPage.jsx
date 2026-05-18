import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, CheckCircle2, TrendingUp, TrendingDown, Shield, Zap, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import TaleOfTwo from './TaleOfTwo';
import PaidAdsSystem from './PaidAdsSystem';
import FunnelDiagram from './FunnelDiagram';
import ProcessMap from './ProcessMap';
import Bottleneck from './Bottleneck';
import Deliverables from './Deliverables';

gsap.registerPlugin(ScrollTrigger);

const VSLPage = ({ onOpenQualifier }) => {
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });

      // Video pulse
      gsap.to('.video-glow', {
        opacity: 0.6,
        scale: 1.05,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });

      // Reveal sections on scroll
      const sections = gsap.utils.toArray('.reveal-section');
      sections.forEach(sec => {
        gsap.from(sec, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
          }
        });
      });
      
      // Card stagger
      const cardGrids = gsap.utils.toArray('.card-grid');
      cardGrids.forEach(grid => {
        gsap.from(grid.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center relative z-10">
      
      {/* HEADER / NAVIGATION (Minimal) */}
      <header className="w-full max-w-6xl mx-auto px-6 py-1 md:py-2 flex justify-center items-center hero-elem">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Demand Dynasty" className="h-8 md:h-10 w-auto object-contain" />
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-0 pb-6 md:pt-0 md:pb-10 flex flex-col items-center text-center relative overflow-hidden">

        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-brand-accent/20 bg-brand-card text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 hero-elem shadow-lg relative z-10">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-accent animate-pulse"></span>
          Attention B2B Market Leaders
        </div>

        <h1 className="text-[28px] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold md:leading-[1.1] tracking-tight mb-3 md:mb-4 hero-elem text-brand-light relative z-10">
          We'll Build a Custom Quiz Funnel That Will Fill Your Calendar With <span className="text-brand-accent italic">50</span> Qualified Leads in <span className="text-brand-accent italic">60 Days</span> Guaranteed, or You Don't Pay.
        </h1>

        <p className="hidden md:block text-base md:text-lg text-brand-text max-w-4xl mb-6 hero-elem font-light leading-relaxed relative z-10">
          In Just 14 Days, We'll Build Your Done-For-You Funnel, Write the VSL, Run the Meta Ads, and Automate Your CRM So You Can Stop Worrying About Where Your Next Client Comes From.
        </p>

        {/* VIDEO PLAYER */}
        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl md:rounded-3xl border-2 border-[#D6DB2B]/30 bg-black shadow-[0_0_50px_rgba(214,219,43,0.1)] mb-4 md:mb-6 hero-elem overflow-hidden">
          <wistia-player
            media-id="xiflezxu0f"
            aspect="1.7777777777777777"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          ></wistia-player>
        </div>

        <div className="flex flex-col items-center gap-4 hero-elem">
          <Button onClick={onOpenQualifier} className="text-lg w-auto whitespace-nowrap">
            Book Your Strategy Session
          </Button>
        </div>
      </section>

      {/* THE PROBLEM (Bottleneck) */}
      <Bottleneck />

      {/* THE SOLUTION (Literal Paid Ads System) */}
      <PaidAdsSystem />

      {/* THE DEPLOYMENT PROCESS */}
      <ProcessMap />

      {/* SYSTEM DIAGRAM */}
      <FunnelDiagram />

      {/* DELIVERABLES */}
      <Deliverables />

      {/* TALE OF TWO BUSINESSES */}
      <TaleOfTwo />

      {/* FAQS */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24 reveal-section">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12">Common Questions</h2>
        <div className="flex flex-col gap-4">
          {[
            { q: "Is this really 100% Done-For-You?", a: "Yes. From the funnel architecture, copy, design, to the ad campaigns and backend automation. We handle the technical infrastructure so you focus on closing." },
            { q: "What happens if we don't hit the 10-20 calls?", a: "We operate on a strict performance guarantee. If we don't deliver the qualified calls as promised, you don't pay. It's that simple." },
            { q: "How long does it take to launch?", a: "Our typical turnaround for a complete, institutional-grade infrastructure is 14 to 21 days from onboarding to having ads live." },
          ].map((faq, i) => (
            <div 
              key={i} 
              className="bg-brand-card rounded-2xl border border-brand-border/50 p-6 cursor-pointer hover:border-brand-accent/30 transition-colors"
              onClick={() => toggleFaq(i)}
            >
              <h4 className="text-lg font-bold flex items-center justify-between select-none">
                {faq.q}
                <ChevronDown className={`text-brand-accent transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
              </h4>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-brand-text text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full bg-[#0a0c0f] border-t border-brand-accent/20 reveal-section relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-12 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-brand-light">Ready to Scale Your Business?</h2>
          <p className="text-xl text-brand-text mb-10 max-w-2xl font-light">
            Secure your spot now. We only partner with a select group of business owners each month to guarantee performance.
          </p>
          <Button onClick={onOpenQualifier} className="text-lg">
            Apply To Book Your Strategy Session
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-6 text-center text-brand-text text-sm flex flex-col items-center justify-center gap-2 relative z-10 bg-[#050608] border-t border-white/5">
        <div>&copy; {new Date().getFullYear()} Demand Dynasty. All rights reserved.</div>
      </footer>

    </div>
  );
};

export default VSLPage;
