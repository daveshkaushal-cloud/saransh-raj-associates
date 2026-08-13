/**
 * Maps brand accent tokens to the "Arguments in Colour" palette.
 * Each practice area and sector carries an accent that drives its
 * colour field, annotation marks and index treatment.
 *
 * Palette:
 *   electric  → Electric Blue  #2457FF
 *   vermilion → Vermilion      #FF493D
 *   marigold  → Marigold       #FFB000
 *   jade      → Jade           #17B890
 *   aubergine → Aubergine      #673DE6
 *   ink       → Midnight Ink   #0B1020
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
  vermilion: "#FF493D",
  marigold: "#FFB000",
  jade: "#17B890",
  aubergine: "#673DE6",
  ink: "#0B1020",
};

/** Foreground colour that meets contrast on the accent background. */
export const accentOnHex: Record<Accent, string> = {
  electric: "#FFFFFF",
  vermilion: "#FFFFFF",
  marigold: "#0B1020",
  jade: "#0B1020",
  aubergine: "#FFFFFF",
  ink: "#F3EFE5",
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
