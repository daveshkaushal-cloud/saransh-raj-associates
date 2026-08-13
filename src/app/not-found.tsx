import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-ivory overflow-hidden">
      <div className="absolute inset-0 line-grid opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 grain" aria-hidden="true" />
      <div className="relative z-10 text-center px-6 max-w-xl">
        <p className="eyebrow mb-6">Error · 404</p>
        <h1 className="display-1 text-ink">
          Page not <span className="italic text-vermilion">found</span>
        </h1>
        <p className="mt-8 text-lg text-ink/65 leading-relaxed">
          The page you are looking for may have moved or does not exist. Please
          return to the homepage or use the navigation to continue.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-ivory text-sm font-medium hover:bg-cobalt transition-colors duration-300"
          >
            <span>Return home</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink/25 text-ink text-sm font-medium hover:border-ink transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
