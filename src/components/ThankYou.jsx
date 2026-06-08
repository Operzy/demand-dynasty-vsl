import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CheckCircle2, AlertTriangle, CalendarPlus, MessageSquare } from 'lucide-react';

const ThankYou = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ty-elem', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-dark text-brand-light flex flex-col items-center">

      {/* TOP SUCCESS BAR */}
      <div className="w-full bg-brand-accent/10 border-b border-brand-accent/20 py-3 flex justify-center items-center gap-2 ty-elem">
        <CheckCircle2 size={18} className="text-brand-accent" />
        <span className="text-sm font-semibold text-brand-accent tracking-wide">Your Discovery Session Is Reserved</span>
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-16 flex flex-col items-center">

        {/* Brand Logo */}
        <div className="ty-elem mb-8 flex justify-center">
          <img src="/logo.png" alt="Demand Dynasty" className="h-12 md:h-16 w-auto object-contain" />
        </div>

        {/* HEADER */}
        <div className="text-center mb-12 ty-elem">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            Booking Confirmed
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-2 text-brand-light">
            Thank You For Booking
            <br />
            Your
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif italic text-brand-accent">
            discovery session.
          </h2>
        </div>

        {/* WARNING BOX */}
        <div className="w-full max-w-3xl bg-brand-accent/5 border border-brand-accent/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 mb-10 shadow-[0_0_30px_rgba(214,219,43,0.07)] ty-elem">
          <div className="w-12 h-12 shrink-0 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20 text-brand-accent">
            <AlertTriangle size={24} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-brand-accent font-bold text-xl mb-2 uppercase tracking-wide">Two Quick Steps To Lock In Your Spot</h3>
            <p className="text-brand-light/70 font-light">
              Take a moment to complete the two steps below so your session stays confirmed. It only takes a few seconds.
            </p>
          </div>
        </div>

        {/* TWO STEPS GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {/* STEP 1 */}
          <div className="ty-elem bg-brand-card border border-brand-border/50 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-brand-accent/40 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-brand-accent text-brand-dark font-bold flex items-center justify-center text-lg">1</div>
              <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest">
                <CalendarPlus size={16} /> Add to Calendar
              </div>
            </div>

            {/* Email Mockup */}
            <div className="w-full h-[300px] bg-white rounded-xl p-6 mb-8 shadow-inner relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-accent to-brand-muted"></div>
              <h4 className="text-gray-900 font-semibold text-2xl leading-snug mb-5 mt-2">Your discovery session is scheduled!</h4>
              <button className="flex items-center gap-2 border border-gray-300 text-gray-800 px-4 py-2.5 rounded shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium self-start">
                <CalendarPlus size={16} /> Add to Calendar
              </button>
              <div className="mt-auto border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-500"><strong>Demand Dynasty</strong> &lt;info@demanddynasty.com&gt;</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Click Add to Calendar on the email we sent you</h3>
            <p className="text-brand-text font-light leading-relaxed">
              We've sent you a confirmation email for your booking. Open it and click <strong className="text-white">Add to Calendar</strong> so the session is locked into your schedule.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="ty-elem bg-brand-card border border-brand-border/50 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-brand-accent/40 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-brand-accent text-brand-dark font-bold flex items-center justify-center text-lg">2</div>
              <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-widest">
                <MessageSquare size={16} /> Reply to our SMS
              </div>
            </div>

            {/* SMS Mockup */}
            <div className="w-full h-[300px] bg-black rounded-xl p-6 mb-8 shadow-inner flex flex-col justify-center gap-4 border border-white/10">
              <div className="bg-[#262629] text-gray-200 rounded-2xl rounded-tl-sm p-4 text-sm w-11/12 leading-relaxed">
                Hello Michael, your discovery call with Demand Dynasty is scheduled for June 7th at 4 PM EST.
                <br /><br />
                Please respond "Yes" to confirm you will be attending this meeting.
              </div>
              <div className="bg-brand-accent text-brand-dark font-medium rounded-full rounded-br-sm px-5 py-2 self-end shadow-[0_0_15px_rgba(214,219,43,0.35)]">
                Yes
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Reply YES to confirm you'll join the appointment</h3>
            <p className="text-brand-text font-light leading-relaxed">
              We've just sent you an SMS. Please reply <strong className="text-white">"YES"</strong> to confirm you're going to attend your discovery session.
            </p>
          </div>

        </div>

        {/* BOTTOM WARNING */}
        <div className="ty-elem w-full max-w-2xl bg-brand-card border border-brand-border/50 rounded-xl p-6 md:p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"></div>
          <p className="text-brand-text leading-relaxed">
            Once both steps are done, you're all set. <strong className="text-white font-serif italic">We're looking forward to speaking with you and helping you scale.</strong>
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="w-full py-6 text-center text-brand-text text-sm flex flex-col items-center justify-center gap-2 bg-[#050608] border-t border-white/5">
        <div>&copy; {new Date().getFullYear()} Demand Dynasty. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default ThankYou;
