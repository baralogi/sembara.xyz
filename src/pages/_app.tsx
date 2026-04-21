import { Chakra } from "../app/components/Chakra";
import Fonts from "../app/components/Fonts";
import Main from "../app/components/layouts/Main";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp(props: AppProps) {
  const { Component, pageProps, router } = props;

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </Chakra>
  );
}

export default MyApp;
