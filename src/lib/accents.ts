/**
 * Maps brand accent tokens to the "Arguments in Colour" palette.
 * Each practice area and sector carries an accent that drives its
 * colour field, annotation marks and index treatment.
 *
 * Approved accessible pairs (WCAG AA):
 *   electric  → Electric Blue  #2457FF  on #FFFFFF
 *   vermilion → Vermilion      #D94038  on #FFFFFF
 *   marigold  → Marigold       #FFC247  on #0B1020
 *   jade      → Jade           #087E68  on #FFFFFF
 *   aubergine → Violet         #5E3FD3  on #FFFFFF
 *   ink       → Midnight Ink   #0B1020  on #F8FAFD
 *
 * Soft-blue expanded surface:  #C9D7F2 (always paired with dark ink text).
 */

export type Accent =
  | "electric"
  | "vermilion"
  | "marigold"
  | "jade"
  | "aubergine"
  | "ink";

export const accentHex: Record<Accent, string> = {
  electric: "#2457FF",
  vermilion: "#D94038",
  marigold: "#FFC247",
  jade: "#087E68",
  aubergine: "#5E3FD3",
  ink: "#0B1020",
};

/** Soft-blue tint of each accent — used for expanded/active surfaces.
 *  Always paired with dark ink text (#0B1020 / #273047), never white.
 *  The "ink" accent uses the same light cool-blue as electric so its
 *  expanded surface stays light and readable (not a second dark header). */
export const accentSoftHex: Record<Accent, string> = {
  electric: "#C9D7F2",
  vermilion: "#F2C9CD",
  marigold: "#FFE5B0",
  jade: "#C2DED5",
  aubergine: "#D2C7F0",
  ink: "#C9D7F2",
};

/** Foreground colour that meets contrast on the accent background. */
export const accentOnHex: Record<Accent, string> = {
  electric: "#FFFFFF",
  vermilion: "#FFFFFF",
  marigold: "#0B1020",
  jade: "#FFFFFF",
  aubergine: "#FFFFFF",
  ink: "#F8FAFD",
};

/** Foreground colour for text on the SOFT (tinted) surface — always dark. */
export const accentOnSoftHex: Record<Accent, string> = {
  electric: "#0B1020",
  vermilion: "#0B1020",
  marigold: "#0B1020",
  jade: "#0B1020",
  aubergine: "#0B1020",
  ink: "#0B1020",
};

/** Border colour for dividers inside an expanded/soft surface. */
export const accentSoftBorderHex: Record<Accent, string> = {
  electric: "#9FB2D2",
  vermilion: "#D9A8AC",
  marigold: "#E8C078",
  jade: "#9CC0B5",
  aubergine: "#A89BD8",
  ink: "#9FB2D2",
};

export const accentText: Record<Accent, string> = {
  electric: "text-electric",
  vermilion: "text-vermilion",
  marigold: "text-marigold",
  jade: "text-jade",
  aubergine: "text-aubergine",
  ink: "text-ink",
};

export const accentBg: Record<Accent, string> = {
  electric: "bg-electric",
  vermilion: "bg-vermilion",
  marigold: "bg-marigold",
  jade: "bg-jade",
  aubergine: "bg-aubergine",
  ink: "bg-ink",
};

export const accentField: Record<Accent, string> = {
  electric: "field-electric",
  vermilion: "field-vermilion",
  marigold: "field-marigold",
  jade: "field-jade",
  aubergine: "field-aubergine",
  ink: "field-ink",
};

export const accentBorder: Record<Accent, string> = {
  electric: "border-electric",
  vermilion: "border-vermilion",
  marigold: "border-marigold",
  jade: "border-jade",
  aubergine: "border-aubergine",
  ink: "border-ink",
};
