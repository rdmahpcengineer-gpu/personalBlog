export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-lg font-bold tracking-wide text-foreground"
          >
            Ola<span className="text-gold">.</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-text-muted">
            &copy; 2026 Ola McCartney. All rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-gold transition-colors duration-200 tracking-wider uppercase"
          >
            Back to top
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
