import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../views/layout/Layout/Layout";
import { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { COLOR, COLORNAME } from "../theme/Color";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      // styles for the `body`
      body: {
        bg: mode(
          COLOR[COLORNAME.background1],
          COLOR[COLORNAME.background1_dark]
        )(props),
        color: "white",
      },
    }),
  },
});

const Website = (props: AppProps) => {
  const { router, pageProps, Component } = props;
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
