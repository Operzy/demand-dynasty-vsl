import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Booking = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.booking-elem', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
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
    <div ref={containerRef} className="min-h-screen bg-brand-dark flex flex-col items-center py-20 px-6 relative overflow-hidden">
      
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 items-center text-center relative z-10">
        
        {/* Brand Logo */}
        <div className="booking-elem mb-2 flex justify-center">
          <img src="/logo.png" alt="Demand Dynasty" className="h-16 w-auto object-contain" />
        </div>

        {/* Top Context */}
        <div className="flex flex-col gap-4 booking-elem">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-light mb-4 leading-tight">
              Schedule Your Strategy Session
            </h1>
            <p className="text-lg text-brand-text font-light leading-relaxed max-w-2xl mx-auto">
              Pick a time below to schedule your strategy session. We'll discuss your business, review your current acquisition process, and see if our done-for-you system is a fit to help you scale.
            </p>
          </div>
        </div>
        
        <div className="booking-elem w-full max-w-4xl mt-4">
          <div className="w-full bg-white rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(214,219,43,0.15)] border border-brand-accent/30">
            
            {/* Calendly inline widget begin */}
            <div 
              className="calendly-inline-widget w-full" 
              data-url="https://calendly.com/operzy/discovery-meeting-with-jake?primary_color=ffc300" 
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
