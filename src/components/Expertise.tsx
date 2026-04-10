"use client";

import { useEffect, useRef } from "react";

const expertiseAreas = [
  {
    number: "01",
    title: "Engineering & Development",
    description:
      "Architecting high-performance computing systems and scalable infrastructure solutions. From GPU-accelerated pipelines to distributed architectures, I build systems that perform at the edge of possibility.",
    link: "#work",
  },
  {
    number: "02",
    title: "Innovation & Patents",
    description:
      "Transforming novel ideas into protected intellectual property. With multiple patents filed across computing and systems design, I bring a rigorous, inventive approach to every technical challenge.",
    link: "#work",
  },
  {
    number: "03",
    title: "Technical Publishing",
    description:
      "Distilling complex engineering concepts into accessible, impactful publications. My books and articles bridge the gap between cutting-edge research and practical application.",
    link: "#work",
  },
];

export default function Expertise() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-32 lg:py-40 bg-surface relative"
    >
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
              Services
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Areas of{" "}
            <em className="font-serif italic text-gold">Expertise</em>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {expertiseAreas.map((area) => (
            <div
              key={area.number}
              className="reveal group card-hover rounded-2xl border border-border bg-surface-light p-8 lg:p-10 flex flex-col gap-6"
            >
              {/* Number */}
              <span className="font-serif text-5xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors duration-300">
                {area.number}
              </span>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                {area.description}
              </p>

              {/* Link */}
              <a
                href={area.link}
                className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors duration-200 group/link"
              >
                <span className="tracking-wide uppercase text-xs font-medium">
                  Learn More
                </span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
