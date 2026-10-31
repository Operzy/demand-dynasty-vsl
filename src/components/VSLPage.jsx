import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './ui/Button';

gsap.registerPlugin(ScrollTrigger);

const VSLPage = ({ onOpenQualifier }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from('.hero-elem', {
        y: 18,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power2.out',
        delay: 0.1
      });

      // Reveal sections on scroll
      const sections = gsap.utils.toArray('.reveal-section');
      sections.forEach(sec => {
        gsap.from(sec, {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out',
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
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
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
      <header className="w-full bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 h-[68px] flex justify-center items-center">
          <img src="/logo-black.png" alt="Demand Dynasty" className="h-9 md:h-10 w-auto object-contain" />
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="w-full hero-light relative overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-14 md:pb-20 flex flex-col items-center text-center relative z-10">

          <p className="kicker !text-brand-ink !tracking-[0.16em] md:!tracking-[0.2em] md:!text-[12px] whitespace-nowrap mb-5 md:mb-7 hero-elem inline-flex items-center gap-2.5 rounded-full bg-white border border-brand-line-strong px-4 py-2 shadow-[0_6px_20px_-10px_rgba(16,17,18,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
            Attention B2B Market Leaders
          </p>

          <h1 className="display text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] mb-5 md:mb-6 hero-elem [text-wrap:balance]">
            We'll Build an AI-Powered Quiz Funnel That Will Fill Your Calendar With <em className="text-brand-olive">50</em> Qualified Leads in <em className="text-brand-olive">60 Days</em> Guaranteed, or You Don't Pay.
          </h1>

          <p className="hidden md:block text-base md:text-[17px] text-brand-muted max-w-3xl mb-10 hero-elem leading-relaxed">
            In Just 14 Days, We'll Build Your Done-For-You Funnel, Write the VSL, Run the Meta Ads, and Automate Your CRM So You Can Stop Worrying About Where Your Next Client Comes From.
          </p>

          {/* VIDEO PLAYER */}
          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-card border border-brand-line bg-black shadow-[0_30px_80px_-30px_rgba(16,17,18,0.35)] mb-8 md:mb-10 hero-elem overflow-hidden">
            <wistia-player
              media-id="xiflezxu0f"
              aspect="1.7777777777777777"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            ></wistia-player>
          </div>

          <div className="w-full sm:w-auto flex flex-col items-center gap-4 hero-elem">
            <Button variant="dark" onClick={onOpenQualifier} className="w-full sm:w-auto whitespace-nowrap">
              Book Your Strategy Session
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-brand-dark text-white/55 text-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center">
          <img src="/logo-light-opt.webp" alt="Demand Dynasty" className="h-10 w-auto object-contain" />
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">&copy; {new Date().getFullYear()} Demand Dynasty. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
};

export default VSLPage;
