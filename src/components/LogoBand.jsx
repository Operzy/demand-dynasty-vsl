import React from 'react';

// Client logos, matching the "Trusted by teams at" band on demanddynasty.com
const logos = [
  { alt: "D5 Health", src: "/logos/D5_Health_Logo_Transparent-e1754595747676-opt.webp" },
  { alt: "Client logo", src: "/logos/new_logo-opt.webp" },
  { alt: "Client logo", src: "/logos/logo-png-opt.webp" },
  { alt: "Truevine", src: "/logos/truevine-logo-Linear.webp" },
  { alt: "Adolphe Law Group", src: "/logos/adolphe-wordmark-opt.webp" },
  { alt: "Luxe", src: "/logos/Luxe_Logo_white-1-opt.webp" },
  { alt: "Legacy Business Plans", src: "/logos/legacy-business-plans-opt.webp" },
  { alt: "Eupraxis", src: "/logos/eupraxis_white_logo__1_-1-opt.webp" },
];

const LogoBand = () => {
  return (
    <section className="w-full bg-white py-12 md:py-14" aria-label="Clients">
      <p className="kicker text-center mb-8">Trusted by teams at</p>
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={i < logos.length ? logo.alt : ""}
              aria-hidden={i >= logos.length}
              loading="lazy"
              decoding="async"
              className="h-7 w-auto shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBand;
