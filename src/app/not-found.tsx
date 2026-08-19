import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-surface text-fg overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-xl">
        <p className="mono-label text-fg-muted mb-6">Error · 404</p>
        <h1 className="display-mega text-fg">
          Page not{" "}
          <span className="serif-italic text-vermilion">found</span>
        </h1>
        <p className="lead mt-8 text-fg-muted">
          The page you are looking for may have moved or does not exist. Please
          return to the homepage or use the navigation to continue.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white text-sm font-medium hover:bg-coral transition-colors duration-300"
          >
            <span>Return home</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-line-strong text-fg text-sm font-medium hover:border-fg transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        {/* colour bar */}
        <div className="mt-16 grid grid-cols-6 h-1.5 max-w-xs mx-auto">
          <div className="bg-accent" />
          <div className="bg-coral" />
          <div className="bg-saffron" />
          <div className="bg-teal" />
          <div className="bg-violet" />
          <div className="bg-surface-soft" />
        </div>
      </div>
    </section>
  );
}
