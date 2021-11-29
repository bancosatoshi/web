import { ReactNode } from "react";

export type ThemeContextControllerProps = {
  children: ReactNode;
};

export type ThemeContextType = {
  themeState: boolean;
  switchTheme: () => void;
};
