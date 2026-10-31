import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';

// Post-booking page, in the same format as the GYREC Cold Funnel
// confirmation page: "your booking isn't confirmed yet", one video to watch,
// the most common pre-call questions as short videos.
//
// To set a video, paste its Wistia media ID (the code at the end of the
// Wistia share link) into mediaId. An empty ID shows a placeholder box.
// Top confirmation video.
const CONFIRM_VIDEO = { mediaId: 'gfmwvyakok' };

// The eight pre-call questions. Each card shows the video, then the
// question, then the answer. mediaId is the Wistia media ID.
const QUESTION_VIDEOS = [
  { title: 'How fast will I start seeing results?', description: 'Most clients get leads in the first week, and some get them on day one. The first 30 days are for testing, so leads can come in up and down. After day 30, we know what works, and your leads become steady.', mediaId: 'bpv99rg1s7' },
  { title: 'Will the leads be qualified?', description: 'Yes. We study your best clients first, then write ads that speak to them and turn off people who aren’t a fit. Our forms ask questions that screen out bad leads before they reach your calendar.', mediaId: 'seqrablzlp' },
  { title: "What's the process and how long does it take?", description: 'In week one, we learn your business and plan your offer. In weeks two to four, we build your ads, pages and follow-up. Your ads go live in week five, and we meet with you every two weeks.', mediaId: 'sa9ey0fli1' },
  { title: 'What are my responsibilities and time commitment?', description: 'Plan on 3 to 4 hours at the start, mostly for a strategy call and filming your videos. After that, it’s about 2 to 3 hours a month to film new ads. Our team does the rest.', mediaId: 'lvdaj6xcdi' },
  { title: 'Will this work for my industry?', description: 'Your offer matters more than your industry. This works best for B2B businesses with a proven offer and clients worth $5,000 or more. You bring the industry know-how, and we bring the marketing.', mediaId: 'i0htd9k0jd' },
  { title: 'How much do I need to spend on ads?', description: 'The minimum is $50 a day, but we recommend $100 a day or more. More spend means faster testing and faster results. Pick an amount you can keep up for at least 45 days. Ad spend goes straight to Meta and is separate from our fee.', mediaId: 'tgc4g8rz5z' },
  { title: 'Can I speak to some of your clients before the call?', description: 'We used to do this, but it took up our clients’ time, so we stopped. When you work with us, no one will ever ask you to take calls either. You can see real results on our website and ask me anything on our call.', mediaId: 'mbmqdq979t' },
  { title: 'What if it doesn’t work? Is there a guarantee?', description: 'Yes. If we don’t help you make back what you invested, we keep working for free until we do. We only win when you win.', mediaId: 'cdol0kgf8o' }
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

  // Wistia needs player.js (already in index.html) plus one embed script per
  // media ID. Add the ones this page uses, once.
  useEffect(() => {
    const ids = [CONFIRM_VIDEO.mediaId, ...QUESTION_VIDEOS.map((q) => q.mediaId)].filter(Boolean);
    ids.forEach((id) => {
      if (document.querySelector(`script[src="https://fast.wistia.com/embed/${id}.js"]`)) return;
      const script = document.createElement('script');
      script.src = `https://fast.wistia.com/embed/${id}.js`;
      script.async = true;
      script.type = 'module';
      document.head.appendChild(script);
    });
  }, []);

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
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 flex flex-col items-center text-center relative z-10">

          <div className="ty-elem mb-8 flex justify-center">
            <img src="/logo-black.png" alt="Demand Dynasty" className="h-10 md:h-11 w-auto object-contain" />
          </div>

          <h1 className="ty-elem display text-[30px] sm:text-4xl md:text-6xl mb-4 [text-wrap:balance]">
            Wait… your booking isn't <em className="text-brand-olive">confirmed yet.</em>
          </h1>
          <p className="ty-elem text-base sm:text-[17px] md:text-xl text-brand-muted max-w-2xl mx-auto mb-8 md:mb-10">
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
      <section className="w-full bg-brand-soft border-t border-brand-line py-14 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="kicker mb-4">Do your research</p>
            <h2 className="display text-[28px] sm:text-4xl md:text-5xl max-w-3xl mx-auto mb-5 [text-wrap:balance]">
              The {QUESTION_VIDEOS.length} most common questions people ask <em className="text-brand-olive">before speaking with us.</em>
            </h2>
            <p className="text-base sm:text-[17px] text-brand-muted max-w-2xl mx-auto leading-relaxed">
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
      <footer className="w-full mt-auto py-8 px-6 text-center flex flex-col items-center justify-center gap-2 bg-brand-dark">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">&copy; {new Date().getFullYear()} Demand Dynasty. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default ThankYou;
