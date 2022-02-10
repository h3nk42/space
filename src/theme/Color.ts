import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const COLORNAME = {
  background1: "background1",
  background2: "background2",
  foreground1: "foreground1",
  foreground2: "foreground2",
  foreground3: "foreground3",
  background1_dark: "background1_dark",
  background2_dark: "background2_dark",
  foreground1_dark: "foreground1_dark",
  foreground2_dark: "foreground2_dark",
  foreground3_dark: "foreground3_dark",
  white: "white",
  black: "black",
} as const;

export type ColorName = keyof typeof COLORNAME;

export const COLOR = {
  [COLORNAME.background1]: "#293C4A",
  [COLORNAME.background2]: "#42647C",
  [COLORNAME.foreground1]: "#42647C",
  [COLORNAME.foreground2]: "#679CC2",
  [COLORNAME.foreground3]: "#2F678F",
  [COLORNAME.background1_dark]: "#293C4A",
  [COLORNAME.background2_dark]: "#42647C",
  [COLORNAME.foreground1_dark]: "#4487B8",
  [COLORNAME.foreground2_dark]: "#679CC2",
  [COLORNAME.foreground3_dark]: "#2F678F",
  [COLORNAME.white]: "#FFFFFF",
  [COLORNAME.black]: "#000000",
} as const;

export type ColorValue = typeof COLOR[ColorName];

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// 3. extend the theme
export const theme = extendTheme({ config });
