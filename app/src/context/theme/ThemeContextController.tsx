import { useToggle } from "hooks/useToggle/useToggle";
import { useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeContextControllerProps } from "./ThemeContext.types";

export const ThemeContextController = ({ children }: ThemeContextControllerProps) => {
  const [themeState, switchTheme] = useToggle();

  useEffect(() => {
    /**@TODO Save and get default theme from local storage */
    const theme = themeState ? "dark" : "light";
    document.body.dataset.theme = theme;
  }, [themeState]);

  return <ThemeContext.Provider value={{ switchTheme, themeState }}>{children}</ThemeContext.Provider>;
};
