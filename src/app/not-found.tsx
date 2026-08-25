import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-ivory text-espresso overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-xl">
        <p className="mono-label text-stone mb-6">Error · 404</p>
        <h1 className="display-mega text-espresso">
          Page not{" "}
          <span className="serif-italic text-rose">found</span>
        </h1>
        <p className="lead mt-8 text-charcoal">
          The page you are looking for may have moved or does not exist. Please
          return to the homepage or use the navigation to continue.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-rose-dark text-white text-sm font-medium hover:bg-burgundy transition-colors duration-300"
          >
            <span>Return home</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-line-strong text-espresso text-sm font-medium hover:border-rose-dark hover:text-rose-dark transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        {/* rose-gold colour bar */}
        <div className="mt-16 grid grid-cols-6 h-1.5 max-w-xs mx-auto">
          <div className="bg-rose" />
          <div className="bg-burgundy" />
          <div className="bg-blush" />
          <div className="bg-beige" />
          <div className="bg-rose" />
          <div className="bg-burgundy" />
        </div>
      </div>
    </section>
  );
}
