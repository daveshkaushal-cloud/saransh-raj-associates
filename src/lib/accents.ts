/**
 * Maps brand accent tokens to the dark editorial palette.
 * Each practice area and sector carries an accent that drives its
 * colour field, annotation marks and index treatment.
 *
 * Approved accessible pairs (WCAG AA):
 *   electric → Cobalt Blue  #4169FF  on #FFFFFF
 *   vermilion → Coral       #FF6B5C  on #FFFFFF
 *   marigold  → Saffron     #F0A050  on #080D18
 *   jade      → Teal        #0FA98C  on #FFFFFF
 *   aubergine → Violet      #8E7BFF  on #FFFFFF
 *   ink       → Surface     #101827  on #F5F1E8
 *
 * Practice-area accents are used only for practice-area identification.
 */

export type Accent =
  | "electric"
  | "vermilion"
  | "marigold"
  | "jade"
  | "aubergine"
  | "ink";

export const accentHex: Record<Accent, string> = {
  electric: "#4169FF",
  vermilion: "#FF6B5C",
  marigold: "#F0A050",
  jade: "#0FA98C",
  aubergine: "#8E7BFF",
  ink: "#101827",
};

/** Soft tint of each accent — used for expanded/active surfaces.
 *  Always paired with light ivory text (#F5F1E8 / #FFFFFF), never dark. */
export const accentSoftHex: Record<Accent, string> = {
  electric: "#1B2A55",
  vermilion: "#3A1B22",
  marigold: "#3A2A14",
  jade: "#0E2A24",
  aubergine: "#26203E",
  ink: "#172033",
};

/** Foreground colour that meets contrast on the accent background. */
export const accentOnHex: Record<Accent, string> = {
  electric: "#FFFFFF",
  vermilion: "#FFFFFF",
  marigold: "#080D18",
  jade: "#FFFFFF",
  aubergine: "#FFFFFF",
  ink: "#F5F1E8",
};

/** Foreground colour for text on the SOFT (tinted) surface — always light. */
export const accentOnSoftHex: Record<Accent, string> = {
  electric: "#F5F1E8",
  vermilion: "#F5F1E8",
  marigold: "#F5F1E8",
  jade: "#F5F1E8",
  aubergine: "#F5F1E8",
  ink: "#F5F1E8",
};

/** Border colour for dividers inside an expanded/soft surface. */
export const accentSoftBorderHex: Record<Accent, string> = {
  electric: "rgba(245,241,232,0.18)",
  vermilion: "rgba(245,241,232,0.18)",
  marigold: "rgba(245,241,232,0.18)",
  jade: "rgba(245,241,232,0.18)",
  aubergine: "rgba(245,241,232,0.18)",
  ink: "rgba(245,241,232,0.18)",
};

export const accentText: Record<Accent, string> = {
  electric: "text-accent",
  vermilion: "text-coral",
  marigold: "text-saffron",
  jade: "text-teal",
  aubergine: "text-violet",
  ink: "text-fg",
};

export const accentBg: Record<Accent, string> = {
  electric: "bg-accent",
  vermilion: "bg-coral",
  marigold: "bg-saffron",
  jade: "bg-teal",
  aubergine: "bg-violet",
  ink: "bg-surface-soft",
};

export const accentField: Record<Accent, string> = {
  electric: "field-accent",
  vermilion: "field-coral",
  marigold: "field-saffron",
  jade: "field-teal",
  aubergine: "field-violet",
  ink: "field-surface-soft",
};

export const accentBorder: Record<Accent, string> = {
  electric: "border-accent",
  vermilion: "border-coral",
  marigold: "border-saffron",
  jade: "border-teal",
  aubergine: "border-violet",
  ink: "border-line",
};
