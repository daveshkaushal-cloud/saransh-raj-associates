import Link from "next/link";

/**
 * Editorial 404 — quiet, in keeping with the refined palette
 * (paper / ivory / ink / oxblood / copper / clay).
 */
export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-paper text-ink overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-xl">
        <p className="mono-label text-stone-dark mb-6">Error · 404</p>
        <h1 className="display-mega text-ink">
          Page not{" "}
          <span className="serif-italic">found</span>
        </h1>
        <p className="lead mt-8 text-charcoal measure mx-auto">
          The page you are looking for may have moved or does not exist. Please
          return to the homepage or use the navigation to continue.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-oxblood text-ivory text-sm font-medium hover:bg-ink transition-colors duration-300"
          >
            <span>Return home</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-line-strong text-ink text-sm font-medium hover:border-copper hover:text-copper transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        {/* Refined-palette colour bar — paper · ivory · copper · oxblood · ink */}
        <div className="mt-16 grid grid-cols-5 h-1.5 max-w-[14rem] mx-auto">
          <div className="bg-paper border-y border-l border-line" />
          <div className="bg-ivory border-y border-line" />
          <div className="bg-copper" />
          <div className="bg-oxblood" />
          <div className="bg-ink border-y border-r border-line-on-dark" />
        </div>
      </div>
    </section>
  );
}
