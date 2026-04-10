export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/4 bg-gold/[0.03] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-8 animate-fade-in-up">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Engineer & Inventor
              </span>
            </div>

            <h1 className="flex flex-col gap-2">
              <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
                Ola
              </span>
              <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient-gold">
                McCartney
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary font-light max-w-lg leading-relaxed">
              Clarity Trumps Complexity.{" "}
              <span className="text-text-muted">
                Building innovative solutions at the intersection of engineering
                excellence and inventive thinking.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-background text-sm font-semibold hover:bg-gold-light transition-colors duration-300"
              >
                View My Work
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border text-foreground text-sm font-medium hover:border-gold hover:text-gold transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right: Photo Placeholder */}
          <div className="relative hidden lg:flex justify-center animate-fade-in-up animate-delay-200">
            <div className="relative w-[420px] h-[520px] rounded-2xl overflow-hidden">
              {/* Gradient placeholder for headshot */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface-light via-surface to-background" />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.08] to-transparent" />

              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl border border-border" />

              {/* Placeholder text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border border-gold/20">
                  <span className="font-serif text-4xl font-bold text-gold/60">
                    OM
                  </span>
                </div>
                <span className="mt-4 text-xs text-text-muted tracking-wider uppercase">
                  Photo Coming Soon
                </span>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-gold/20 rounded-tr-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-gold/20 rounded-bl-2xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-400">
        <span className="text-xs text-text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
}
