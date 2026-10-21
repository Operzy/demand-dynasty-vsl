import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BadgeCheck, Users, Crown, Hourglass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Selection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.selection-card', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const items = [
    { text: "Something proven that sells, with room in the margin to reinvest", icon: <BadgeCheck size={24} /> },
    { text: "The capacity to handle more customers than you have now", icon: <Users size={24} /> },
    { text: "The ambition to lead your market, not just keep up with it", icon: <Crown size={24} /> },
    { text: "Willing to give it longer than a month to prove itself", icon: <Hourglass size={24} /> },
  ];

  return (
    <section ref={containerRef} className="w-full bg-brand-soft border-t border-brand-line py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="kicker mb-4">Selection</p>
          <h2 className="display text-4xl md:text-5xl mb-6">We don't build campaigns <em className="text-brand-olive">for everyone.</em></h2>
          <p className="text-[17px] text-brand-muted max-w-2xl mx-auto leading-relaxed">
            We work with a small number of businesses at a time, and only where we think paid ads can become a real source of customers. The first call runs both ways. You are deciding about us, and we are deciding about you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {items.map((item, index) => (
            <div
              key={index}
              className="selection-card bg-white border border-brand-line rounded-card p-6 flex flex-col items-start text-left hover:border-brand-line-strong transition-colors duration-300"
            >
              <div className="w-full flex items-center justify-between mb-6">
                <div className="w-[52px] h-[52px] shrink-0 rounded-card bg-brand-dark flex items-center justify-center text-brand-lime-hi">
                  {item.icon}
                </div>
                <span className="kicker !text-[10px]">0{index + 1} / 0{items.length}</span>
              </div>
              <h3 className="font-display font-medium tracking-[-0.015em] text-[19px] leading-snug w-full">{item.text}</h3>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-muted text-[15.5px] leading-relaxed max-w-2xl mx-auto mt-12">
          If paid ads are not the right move for you yet, we will say so on the call and tell you what we think is.
        </p>
      </div>
    </section>
  );
};

export default Selection;
