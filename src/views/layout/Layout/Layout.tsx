import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";
import Head from "next/head";
import { LayoutProps } from "./Layout.types";

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <Box as={"main"} pb={8}>
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
      <Container maxW="container.md" pt={14}>
        {props.children}
      </Container>
    </Box>
  );
};