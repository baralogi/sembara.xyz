import { ReactNode } from "react";
import { Provider } from "@/components/ui/provider";

interface ChakraProps {
  children?: ReactNode;
}

export const Chakra: React.FC<ChakraProps> = ({ children }) => (
  <Provider>{children}</Provider>
);
