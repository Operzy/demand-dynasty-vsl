import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary', type = 'button', disabled = false, arrow = true }) => {
  const baseClasses = "font-medium text-[15px] tracking-[-0.01em] inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 border transition-colors duration-300 group";
  const variants = {
    // White pill, for dark surfaces
    primary: "bg-white text-brand-ink border-transparent hover:bg-brand-cream",
    // Ink pill, for light surfaces
    dark: "bg-brand-ink text-white border-transparent hover:bg-brand-ink-soft",
    outline: "bg-transparent text-white border-brand-cream/30 hover:border-brand-cream/70"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      {children}
      {arrow && <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>}
    </button>
  );
};

export default Button;
