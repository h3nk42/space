import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";
import Head from "next/head";
import BackgroundDesktop from "../../../assets/desktop/background/layered-waves-haikei.svg";
import BackgroundMobile from "../../../assets/mobile/background/layered-waves-haikei-mobile.svg";
import { AppProps } from "next/app";
import { Media } from "../../../lib/responsive/Media";
import { BREAKPOINT, BREAKPOINTNAME } from "../../../theme/Breakpoints";
import { ChooseResponsive } from "../../../lib/responsive/ChooseResponsive";

export type LayoutProps = {
  router: AppProps["router"];
};

export const PageLayout: FC<LayoutProps> = (props) => {
  return (
    <Box as={"main"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Henk - Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        overflow={"hidden"}
        height={"100vh"}
        width={"100vw"}
        position={"absolute"}
        zIndex={-1}
      >
        <ChooseResponsive
          defaultComponent={<BackgroundDesktop />}
          breakpointComponents={{ [BREAKPOINTNAME.sm]: <BackgroundMobile /> }}
        />
      </Box>
      <Container maxW="container.md" pt={14}>
        {props.children}
      </Container>
    </Box>
  );
};
