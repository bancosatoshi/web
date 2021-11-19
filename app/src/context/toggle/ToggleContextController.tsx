import React, { useState } from "react";
import { ToggleContext } from "./ToggleContext";
import { ToggleContextControllerProps } from "./ToggleContext.types";

export const ToggleContextController = ({ children }: ToggleContextControllerProps) => {
  const [display, setDisplay] = useState(false);

  return <ToggleContext.Provider value={{ display, setDisplay }}>{children}</ToggleContext.Provider>;
};
