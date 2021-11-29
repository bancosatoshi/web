import React from "react";
import { ThemeContext } from "context/theme/ThemeContext";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContext");
  }

  return context;
};
