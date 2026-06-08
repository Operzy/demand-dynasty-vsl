import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Button = ({ children, onClick, className = '', variant = 'primary', type = 'button', disabled = false }) => {
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const ctx = gsap.context(() => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.03, duration: 0.3, ease: 'power2.out' });
        if (bgRef.current) {
          gsap.to(bgRef.current, { top: 0, duration: 0.3, ease: 'power2.out' });
        }
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
        if (bgRef.current) {
          gsap.to(bgRef.current, { top: '100%', duration: 0.3, ease: 'power2.out' });
        }
      });
    }, btn);

    return () => ctx.revert();
  }, []);

  const baseClasses = "relative overflow-hidden font-semibold flex items-center justify-center transition-shadow group";
  const variants = {
    primary: "bg-brand-accent text-brand-dark px-8 py-4 rounded-[2rem] shadow-[0_0_20px_rgba(214,219,43,0.3)]",
    secondary: "bg-brand-card text-brand-light px-8 py-4 rounded-[2rem] border border-brand-border",
    outline: "bg-transparent text-brand-light px-8 py-4 rounded-[2rem] border border-brand-border hover:border-brand-accent transition-colors"
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      {variant === 'primary' && (
        <span
          ref={bgRef}
          className="absolute left-0 top-full w-full h-full bg-brand-light z-0"
        ></span>
      )}
      {variant === 'secondary' && (
        <span
          ref={bgRef}
          className="absolute left-0 top-full w-full h-full bg-brand-border z-0"
        ></span>
      )}
      <span className="relative z-10 w-full flex justify-center items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
