import { useToggle } from "hooks/useToggle/useToggle";
import { useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeContextControllerProps } from "./ThemeContext.types";

const changeTheme = (themeState: boolean) => {
  const theme = themeState ? "dark" : "light";
  const root = document.querySelector("html");
  root?.setAttribute("data-theme", theme);
};

export const ThemeContextController = ({ children }: ThemeContextControllerProps) => {
  const [themeState, switchTheme] = useToggle();

  useEffect(() => {
    /**@TODO Save and get default theme from local storage */
    changeTheme(themeState);
  }, [themeState]);

  return <ThemeContext.Provider value={{ switchTheme, themeState }}>{children}</ThemeContext.Provider>;
};
