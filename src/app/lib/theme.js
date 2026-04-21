import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    body: {
      bg: "pageBg",
    },
    a: {
      color: "linkColor",
      textUnderlineOffset: "3px",
    },
  },
  theme: {
    tokens: {
      colors: {
        grassTeal: { value: "#88ccca" },
      },
      fonts: {
        heading: { value: "'M PLUS Rounded 1c'" },
      },
    },
    semanticTokens: {
      colors: {
        pageBg: { value: { base: "#f0e7db", _dark: "#202023" } },
        linkColor: { value: { base: "#3d7aed", _dark: "#ff63c3" } },
        navbarBg: { value: { base: "#ffffff40", _dark: "#FFFFFF14" } },
        navLinkInactive: {
          value: { base: "gray.200", _dark: "whiteAlpha.900" },
        },
        welcomeBg: {
          value: {
            base: "#FFFFFF40",
            _dark: "#FFFFFF14",
          },
        },
        logoText: { value: { base: "gray.800", _dark: "whiteAlpha.900" } },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
