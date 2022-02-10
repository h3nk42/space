export const SIZE = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "v",
} as const;

export type Size = keyof typeof SIZE;

export const PADDING = {
  [SIZE.sm]: 4,
  [SIZE.md]: 8,
  [SIZE.lg]: 12,
  [SIZE.xl]: 16,
};
