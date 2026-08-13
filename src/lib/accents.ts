/**
 * Maps brand accent tokens to concrete colour classes.
 * Keeps section-specific colour bursts consistent and typed.
 */

export type Accent =
  | "cobalt"
  | "vermilion"
  | "saffron"
  | "mint"
  | "violet"
  | "ink";

export const accentHex: Record<Accent, string> = {
  cobalt: "#3157FF",
  vermilion: "#FF574D",
  saffron: "#FFB21A",
  mint: "#70DEC0",
  violet: "#8A65FF",
  ink: "#10101A",
};

export const accentText: Record<Accent, string> = {
  cobalt: "text-cobalt",
  vermilion: "text-vermilion",
  saffron: "text-saffron",
  mint: "text-mint",
  violet: "text-violet",
  ink: "text-ink",
};

export const accentBg: Record<Accent, string> = {
  cobalt: "bg-cobalt",
  vermilion: "bg-vermilion",
  saffron: "bg-saffron",
  mint: "bg-mint",
  violet: "bg-violet",
  ink: "bg-ink",
};

export const accentBgSoft: Record<Accent, string> = {
  cobalt: "bg-cobalt/12",
  vermilion: "bg-vermilion/12",
  saffron: "bg-saffron/16",
  mint: "bg-mint/18",
  violet: "bg-violet/12",
  ink: "bg-ink/8",
};

export const accentBorder: Record<Accent, string> = {
  cobalt: "border-cobalt/40",
  vermilion: "border-vermilion/40",
  saffron: "border-saffron/40",
  mint: "border-mint/40",
  violet: "border-violet/40",
  ink: "border-ink/30",
};
