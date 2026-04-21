import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    style={{ marginBottom: "1.5rem" }}
  >
    {children}
  </motion.div>
);

export default Section;
