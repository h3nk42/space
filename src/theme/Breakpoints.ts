export const BREAKPOINTNAME = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;

export type BreakpointName = keyof typeof BREAKPOINTNAME;

export const BREAKPOINT = {
  [BREAKPOINTNAME.sm]: 0,
  [BREAKPOINTNAME.md]: 768,
  [BREAKPOINTNAME.lg]: 1024,
  [BREAKPOINTNAME.xl]: 1192,
} as const;
