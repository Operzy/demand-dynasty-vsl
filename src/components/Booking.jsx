import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Booking = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.booking-elem', {
        y: 16,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
      });
    }, containerRef);
    
    // Load Calendly Script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      ctx.revert();
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-soft flex flex-col items-center py-14 md:py-20 px-6 relative overflow-hidden">
      
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 items-center text-center relative z-10">
        
        {/* Brand Logo */}
        <div className="booking-elem mb-2 flex justify-center">
          <img src="/logo-black.png" alt="Demand Dynasty" className="h-11 w-auto object-contain" />
        </div>

        {/* Top Context */}
        <div className="flex flex-col gap-4 booking-elem">
          <div>
            <p className="kicker mb-4">Next Step</p>
            <h1 className="display text-4xl md:text-5xl mb-4">
              Schedule Your <em className="text-brand-olive">Strategy Session</em>
            </h1>
            <p className="text-[17px] text-brand-muted leading-relaxed max-w-2xl mx-auto">
              Pick a time below to schedule your strategy session. We'll discuss your business, review your current acquisition process, and see if our done-for-you system is a fit to help you scale.
            </p>
          </div>
        </div>
        
        <div className="booking-elem w-full max-w-4xl mt-4">
          <div className="w-full bg-white rounded-card border border-brand-line overflow-hidden">
            
            {/* Calendly inline widget begin */}
            <div 
              className="calendly-inline-widget w-full" 
              data-url="https://calendly.com/demanddynasty/discovery-meeting-with-jake?primary_color=101112" 
              style={{ minWidth: '320px', height: '1050px' }}
            ></div>
            {/* Calendly inline widget end */}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Booking;
