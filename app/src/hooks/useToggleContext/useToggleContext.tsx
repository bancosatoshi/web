import React from "react";
import { ToggleContext } from "context/toggle/ToggleContext";

export const useToggleContext = () => {
  const context = React.useContext(ToggleContext);

  if (!context) {
    throw new Error(`useToggleContext must be used within a ToggleContext`);
  }

  return context;
};
