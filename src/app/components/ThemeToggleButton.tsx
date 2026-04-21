import { AnimatePresence, motion } from "framer-motion";
import { useColorMode, useColorModeValue } from "../../components/ui/color-mode";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeToggleButtonInner: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorPalette={useColorModeValue("purple", "orange")}
          onClick={toggleColorMode}
          variant="outline"
        >
          {useColorModeValue(<FaMoon />, <FaSun />)}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

const ThemeToggleButton: React.FC = () => (
  <ClientOnly fallback={<Skeleton boxSize="8" display="inline-block" />}>
    <ThemeToggleButtonInner />
  </ClientOnly>
);

export default ThemeToggleButton;
