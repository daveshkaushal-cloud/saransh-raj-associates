import { firm } from "@/data/firm";

type BrandIdentityProps = {
  className?: string;
  size?: "compact" | "header" | "footer";
  tone?: "dark" | "light";
};

const sizes = {
  compact: {
    mark: "h-7 w-7",
    icon: "h-[18px] w-[18px]",
    name: "text-[0.72rem] sm:text-[0.82rem]",
    gap: "gap-2",
  },
  header: {
    mark: "h-8 w-8 md:h-9 md:w-9",
    icon: "h-5 w-5 md:h-[22px] md:w-[22px]",
    name: "text-[0.76rem] sm:text-[0.9rem] md:text-[0.98rem]",
    gap: "gap-2.5 md:gap-3",
  },
  footer: {
    mark: "h-10 w-10",
    icon: "h-6 w-6",
    name: "text-lg sm:text-xl",
    gap: "gap-3",
  },
} as const;

/** A restrained, custom-drawn scales-of-justice mark. */
export function ScalesMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="6.25" r="1.35" />
      <path d="M16 7.6v17.9M9 10.25h14M7.2 25.5h17.6M12 28h8" />
      <path d="M9 10.25 5.5 18.5M9 10.25l3.5 8.25M23 10.25l-3.5 8.25M23 10.25l3.5 8.25" />
      <path d="M3.7 18.5h8.6c-.55 2.6-2.15 4-4.3 4s-3.75-1.4-4.3-4ZM19.7 18.5h8.6c-.55 2.6-2.15 4-4.3 4s-3.75-1.4-4.3-4Z" />
    </svg>
  );
}

/** Shared logo and one-line wordmark used across every brand touchpoint. */
export function BrandIdentity({
  className = "",
  size = "header",
  tone = "dark",
}: BrandIdentityProps) {
  const scale = sizes[size];
  const light = tone === "light";

  return (
    <span className={`inline-flex min-w-0 items-center ${scale.gap} ${className}`}>
      <span
        className={`grid shrink-0 place-items-center ${scale.mark} ${
          light ? "bg-copper text-oxblood" : "bg-oxblood text-ivory"
        }`}
      >
        <ScalesMark className={scale.icon} />
      </span>
      <span
        className={`whitespace-nowrap font-sans font-bold leading-none tracking-[-0.035em] ${scale.name} ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {firm.name}
      </span>
    </span>
  );
}
