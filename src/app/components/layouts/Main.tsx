import Footer from "../Footer";
import Head from "next/head";
import Navbar from "../NavBar";
import type { NextRouter } from "next/router";
import React, { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";

interface MainProps {
  children?: ReactNode;
  router: NextRouter;
}

const Main: React.FC<MainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sembara's homepage" />
        <meta name="author" content="Sebastianus Sembara" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          property="og:site_name"
          content="Sebastianus Sembara's Homepage"
        />
        <meta property="og:type" content="website" />
        <title>Sebastianus Sembara - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
