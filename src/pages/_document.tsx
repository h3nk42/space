import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { theme } from "../theme/Color";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColormode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
