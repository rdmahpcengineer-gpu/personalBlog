"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "8", label: "Publications" },
  { value: "12", label: "Patents Filed" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 lg:py-40 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Section Label */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                About
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Building the{" "}
              <em className="font-serif italic text-gold">Future</em>
            </h2>
          </div>

          {/* Right: Bio Text */}
          <div className="reveal flex flex-col gap-6">
            <p className="text-lg text-text-secondary font-light leading-relaxed">
              With over 15 years of experience in engineering and innovation, I
              specialize in transforming complex technical challenges into
              elegant, scalable solutions. My work spans high-performance
              computing, systems architecture, and breakthrough inventions that
              push the boundaries of what&apos;s possible.
            </p>

            <p className="text-base text-text-muted leading-relaxed">
              As a published author and patent holder, I believe that true
              innovation lies at the intersection of deep technical expertise and
              clear, purposeful communication. Every project I undertake is
              guided by a simple principle:{" "}
              <span className="text-foreground font-medium">
                clarity trumps complexity
              </span>
              .
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border">
          {stats.map((stat, i) => (
            <div key={stat.label} className="reveal text-center md:text-left">
              <div
                className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-2"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-text-muted tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
