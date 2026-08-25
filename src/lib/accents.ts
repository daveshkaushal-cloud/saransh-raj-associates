/**
 * Maps brand accent tokens to the warm editorial palette.
 * Practice-area and sector accents drive colour fields, annotation
 * marks and index treatment.
 *
 * Approved accessible pairs (WCAG AA):
 *   rose       → Rose Gold     #B76E79  on #FFFFFF
 *   burgundy   → Burgundy      #603A40  on #F7F1E8
 *   espresso   → Espresso      #2B2422  on #F7F1E8
 *   blush      → Blush Beige   #E3C8BE  on #2B2422 (dark text)
 *   beige      → Soft Beige   #E8D8C8   on #2B2422 (dark text)
 *   porcelain  → Porcelain     #FFFDF9  on #2B2422 (dark text)
 */

export type Accent =
  | "rose"
  | "burgundy"
  | "espresso"
  | "blush"
  | "beige"
  | "porcelain";

export const accentHex: Record<Accent, string> = {
  rose: "#B76E79",
  burgundy: "#603A40",
  espresso: "#2B2422",
  blush: "#E3C8BE",
  beige: "#E8D8C8",
  porcelain: "#FFFDF9",
};

/** Soft tint of each accent — used for expanded/active surfaces. */
export const accentSoftHex: Record<Accent, string> = {
  rose: "#F4E0E3",
  burgundy: "#E8D8DA",
  espresso: "#E8E0DC",
  blush: "#E3C8BE",
  beige: "#E8D8C8",
  porcelain: "#FFFDF9",
};

/** Foreground colour that meets contrast on the accent background. */
export const accentOnHex: Record<Accent, string> = {
  rose: "#FFFFFF",
  burgundy: "#F7F1E8",
  espresso: "#F7F1E8",
  blush: "#2B2422",
  beige: "#2B2422",
  porcelain: "#2B2422",
};

/** Foreground colour for text on the SOFT (tinted) surface — always dark. */
export const accentOnSoftHex: Record<Accent, string> = {
  rose: "#2B2422",
  burgundy: "#2B2422",
  espresso: "#2B2422",
  blush: "#2B2422",
  beige: "#2B2422",
  porcelain: "#2B2422",
};

/** Border colour for dividers inside an expanded/soft surface. */
export const accentSoftBorderHex: Record<Accent, string> = {
  rose: "rgba(43,36,34,0.12)",
  burgundy: "rgba(43,36,34,0.12)",
  espresso: "rgba(43,36,34,0.12)",
  blush: "rgba(43,36,34,0.12)",
  beige: "rgba(43,36,34,0.12)",
  porcelain: "rgba(43,36,34,0.12)",
};

export const accentText: Record<Accent, string> = {
  rose: "text-rose",
  burgundy: "text-burgundy",
  espresso: "text-espresso",
  blush: "text-blush",
  beige: "text-beige",
  porcelain: "text-porcelain",
};

export const accentBg: Record<Accent, string> = {
  rose: "bg-rose",
  burgundy: "bg-burgundy",
  espresso: "bg-espresso",
  blush: "bg-blush",
  beige: "bg-beige",
  porcelain: "bg-porcelain",
};

export const accentField: Record<Accent, string> = {
  rose: "field-rose",
  burgundy: "field-burgundy",
  espresso: "field-espresso",
  blush: "field-blush",
  beige: "field-beige",
  porcelain: "field-porcelain",
};

export const accentBorder: Record<Accent, string> = {
  rose: "border-rose",
  burgundy: "border-burgundy",
  espresso: "border-espresso",
  blush: "border-blush",
  beige: "border-beige",
  porcelain: "border-porcelain",
};
