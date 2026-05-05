import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserX, Crown, AlertTriangle, Clock, XCircle, Target, Zap, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TaleOfTwo = () => {
  const sectionRef = useRef(null);
  const leftTrackRef = useRef(null);
  const rightTrackRef = useRef(null);
  const leftFigureRef = useRef(null);
  const rightFigureRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate the figures down their respective tracks
      if (leftTrackRef.current && leftFigureRef.current) {
        gsap.to(leftFigureRef.current, {
          y: () => leftTrackRef.current.offsetHeight - leftFigureRef.current.offsetHeight,
          ease: "none",
          scrollTrigger: {
            trigger: leftTrackRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      }

      if (rightTrackRef.current && rightFigureRef.current) {
        gsap.to(rightFigureRef.current, {
          y: () => rightTrackRef.current.offsetHeight - rightFigureRef.current.offsetHeight,
          ease: "none",
          scrollTrigger: {
            trigger: rightTrackRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-6">Traditional Agencies vs. Our System</h2>
        <p className="text-xl text-brand-text max-w-2xl mx-auto font-light">Why you're losing market share to competitors with weaker offers but superior infrastructure.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: The Traditional Way */}
        <div className="bg-[#16181D] rounded-3xl p-8 border border-red-900/30 shadow-lg relative flex flex-col">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 bg-red-950/20 px-6 py-4 rounded-2xl border border-red-900/50 mb-10">
            <h3 className="text-xl font-bold text-red-400">The Traditional Way</h3>
            <span className="text-xs font-bold uppercase tracking-widest text-red-500/70 bg-red-950/40 px-3 py-1 rounded-full">100% Your Risk</span>
          </div>

          <div className="flex relative flex-1">
            
            {/* The Timeline Track */}
            <div className="w-12 md:w-16 flex-shrink-0 flex justify-center relative">
              <div ref={leftTrackRef} className="w-0.5 h-full bg-red-900/30 relative rounded-full">
                {/* The Scrolling Figure */}
                <div 
                  ref={leftFigureRef} 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#16181D] border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 z-10 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                >
                  <UserX size={16} />
                </div>
              </div>
            </div>

            {/* The Steps */}
            <div className="flex-1 flex flex-col justify-between py-4 gap-8">
              
              <div className="bg-[#1A1D24] p-6 rounded-2xl border border-red-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle size={18} className="text-red-400" />
                  <h4 className="font-bold text-brand-light">1. Zero Guarantees</h4>
                </div>
                <p className="text-brand-text text-sm">Launch with a generic agency and zero guarantee you'll get a single qualified lead.</p>
              </div>

              <div className="bg-[#1A1D24] p-6 rounded-2xl border border-red-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={18} className="text-red-400" />
                  <h4 className="font-bold text-brand-light">2. Wait 8 Grueling Weeks</h4>
                </div>
                <p className="text-brand-text text-sm">Endless onboarding, revisions, and delays before your ads are finally turned on.</p>
              </div>

              <div className="bg-[#1A1D24] p-6 rounded-2xl border border-red-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <XCircle size={18} className="text-red-400" />
                  <h4 className="font-bold text-brand-light">3. Unpredictable Results</h4>
                </div>
                <p className="text-brand-text text-sm">Relying on hope instead of a proven B2B client acquisition system.</p>
              </div>

            </div>
          </div>
        </div>


        {/* RIGHT COLUMN: The Dynasty Standard */}
        <div className="bg-[#0A0C10] rounded-3xl p-8 border-2 border-brand-accent/20 shadow-[0_0_40px_rgba(214,219,43,0.05)] relative flex flex-col group overflow-hidden">
          
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>

          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 bg-brand-accent/5 px-6 py-4 rounded-2xl border border-brand-accent/20 mb-10 relative z-10">
            <h3 className="text-xl font-bold text-brand-light">Our 14-21 Day Setup</h3>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-dark bg-brand-accent px-3 py-1 rounded-full shadow-[0_0_15px_rgba(214,219,43,0.3)]">100% Our Risk</span>
          </div>

          <div className="flex relative flex-1 z-10">
            
            {/* The Timeline Track */}
            <div className="w-12 md:w-16 flex-shrink-0 flex justify-center relative">
              <div ref={rightTrackRef} className="w-1 h-full bg-gradient-to-b from-brand-accent/40 via-brand-accent/10 to-transparent relative rounded-full">
                
                {/* Glowing track background line */}
                <div className="absolute inset-0 bg-brand-accent/20 blur-sm rounded-full"></div>

                {/* The Scrolling Figure */}
                <div 
                  ref={rightFigureRef} 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-brand-dark z-20 shadow-[0_0_20px_rgba(214,219,43,0.6)]"
                >
                  <Crown size={20} className="fill-brand-dark" />
                </div>
              </div>
            </div>

            {/* The Steps */}
            <div className="flex-1 flex flex-col justify-between py-4 gap-8">
              
              <div className="bg-[#111318] p-6 rounded-2xl border border-brand-accent/20 hover:border-brand-accent/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Target size={18} className="text-brand-accent" />
                  <h4 className="font-bold text-brand-light">1. Guaranteed 20 Qualified Calls</h4>
                </div>
                <p className="text-brand-text text-sm">We don't get paid unless we deliver the exact volume of high-intent B2B appointments promised.</p>
              </div>

              <div className="bg-[#111318] p-6 rounded-2xl border border-brand-accent/20 hover:border-brand-accent/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Zap size={18} className="text-brand-accent" />
                  <h4 className="font-bold text-brand-light">2. Live in 14-21 Days</h4>
                </div>
                <p className="text-brand-text text-sm">Your VSL page is built, Meta ads are launched, and your acquisition system is fully active in two to three weeks.</p>
              </div>

              <div className="bg-[#111318] p-6 rounded-2xl border border-brand-accent/20 hover:border-brand-accent/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck size={18} className="text-brand-accent" />
                  <h4 className="font-bold text-brand-light">3. Consistent B2B Appointments</h4>
                </div>
                <p className="text-brand-text text-sm">A reliable Meta ads system that consistently brings qualified B2B leads straight to your sales calendar.</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TaleOfTwo;
