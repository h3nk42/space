import { createMedia } from "@artsy/fresnel";
import { BREAKPOINT } from "../../theme/Breakpoints";

const ExampleAppMedia = createMedia({
  interactions: {
    landscape: "not all and (orientation: landscape)",
    portrait: "not all and (orientation: portrait)",
    hover: "(hover: hover)",
    notHover: "(hover: none)",
  },
  breakpoints: {
    sm: BREAKPOINT.sm,
    md: BREAKPOINT.md,
    lg: BREAKPOINT.lg,
    xl: BREAKPOINT.xl,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = ExampleAppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = ExampleAppMedia;
