import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';

// Post-booking page, in the same format as the GYREC Cold Funnel
// confirmation page: "your booking isn't confirmed yet", one video to watch,
// the most common pre-call questions as short videos.
//
// To set a video, paste its Wistia media ID (the code at the end of the
// Wistia share link) into mediaId. An empty ID shows a placeholder box.
// Every slot currently uses the main VSL (xiflezxu0f) as a stand-in.
const CONFIRM_VIDEO = { mediaId: 'xiflezxu0f' };

// Placeholder titles and descriptions; replace with the real questions.
// The section heading counts this list, so adding or removing one updates it.
const QUESTION_VIDEOS = [
  { title: "What's the process and how long does it take?", description: 'Offer, build, launch, scale: what happens in each stage and how long each one takes.', mediaId: 'xiflezxu0f' },
  { title: 'How fast will I start seeing leads?', description: 'The typical timeline from live ads to the first booked calls, and what speeds it up.', mediaId: 'xiflezxu0f' },
  { title: 'Will the leads be qualified?', description: 'How the funnel filters for people who fit the offer and can afford it, before they reach your calendar.', mediaId: 'xiflezxu0f' },
  { title: 'What are my responsibilities and time commitment?', description: 'The input we need from you each week, and everything our team handles so you do not have to.', mediaId: 'xiflezxu0f' },
  { title: 'Will this work for my industry?', description: 'Where Meta ads work for high-ticket offers, where they do not, and how we tell the difference.', mediaId: 'xiflezxu0f' },
  { title: 'Who is this not a good fit for?', description: 'The businesses we turn away, and why we would rather say so on the first call.', mediaId: 'xiflezxu0f' },
  { title: 'How much do I need to spend on ads?', description: 'The budget it takes to get a clear read on Meta, and how spend scales once something works.', mediaId: 'xiflezxu0f' },
  { title: 'How do I know this will pay for itself?', description: 'How we track every dollar through to the sale, so you can see what the spend is earning.', mediaId: 'xiflezxu0f' }
];

function WistiaVideo({ mediaId, label, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-brand-dark ${className}`}>
      {mediaId ? (
        <wistia-player media-id={mediaId} aspect="1.7777777777777777"></wistia-player>
      ) : (
        <div className="aspect-video flex flex-col items-center justify-center gap-3 text-white/60">
          <div className="w-14 h-14 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center">
            <Play size={20} className="fill-current ml-0.5" />
          </div>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em]">{label}</span>
        </div>
      )}
    </div>
  );
}

const ThankYou = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ty-elem', {
        y: 16,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-brand-ink flex flex-col">

      {/* HEADLINE + CONFIRMATION VIDEO */}
      <div className="w-full hero-light relative overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-6 pt-12 md:pt-16 pb-16 md:pb-20 flex flex-col items-center text-center relative z-10">

          <div className="ty-elem mb-8 flex justify-center">
            <img src="/logo-black.png" alt="Demand Dynasty" className="h-10 md:h-11 w-auto object-contain" />
          </div>

          <h1 className="ty-elem display text-4xl md:text-6xl mb-4">
            Wait… your booking isn't <em className="text-brand-olive">confirmed yet.</em>
          </h1>
          <p className="ty-elem text-[17px] md:text-xl text-brand-muted max-w-2xl mx-auto mb-10">
            Watch the entire video below to lock in your spot.
          </p>

          <div className="ty-elem w-full max-w-3xl">
            <WistiaVideo
              mediaId={CONFIRM_VIDEO.mediaId}
              label="Confirmation video"
              className="rounded-card border border-brand-line shadow-[0_30px_80px_-30px_rgba(16,17,18,0.35)]"
            />
          </div>
        </div>
      </div>

      {/* THE QUESTIONS */}
      <section className="w-full bg-brand-soft border-t border-brand-line py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="kicker mb-4">Do your research</p>
            <h2 className="display text-4xl md:text-5xl max-w-3xl mx-auto mb-5">
              The {QUESTION_VIDEOS.length} most common questions people ask <em className="text-brand-olive">before speaking with us.</em>
            </h2>
            <p className="text-[17px] text-brand-muted max-w-2xl mx-auto leading-relaxed">
              Skip to whichever one you care about. Watch them all if you want to show up fully informed.
            </p>
          </div>

          {/* Two per row; with an odd count the last card centers on the last row. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {QUESTION_VIDEOS.map((q, i) => (
              <article
                key={q.title}
                className={`flex flex-col bg-white rounded-card border border-brand-line overflow-hidden hover:border-brand-line-strong transition-colors ${
                  i === QUESTION_VIDEOS.length - 1 && QUESTION_VIDEOS.length % 2 ? 'sm:col-span-2 sm:w-[calc(50%-0.5rem)] sm:mx-auto' : ''
                }`}
              >
                <WistiaVideo mediaId={q.mediaId} label={`Question ${i + 1} video`} />
                <div className="p-5 md:p-6">
                  <span className="kicker !text-[10px]">{String(i + 1).padStart(2, '0')} / {QUESTION_VIDEOS.length}</span>
                  <h3 className="mt-3 mb-2 font-display text-xl font-medium tracking-[-0.02em] leading-snug">{q.title}</h3>
                  <p className="text-brand-muted text-[14.5px] leading-relaxed">{q.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full mt-auto py-8 text-center flex flex-col items-center justify-center gap-2 bg-brand-dark">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">&copy; {new Date().getFullYear()} Demand Dynasty. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default ThankYou;
