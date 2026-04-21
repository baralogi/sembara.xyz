import Head from "next/head";
import React from "react";
import { GridItemStyle } from "../GridItem";
import { motion } from "framer-motion";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Body: React.FC<LayoutProps> = ({ children, title }) => {
  const pageTitle = `${title} - Sebastianus Sembara`;

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Head>
            <title>{pageTitle}</title>
            <meta name="twitter:title" content={pageTitle} />
            <meta property="og:title" content={pageTitle} />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  );
};

export default Body;
