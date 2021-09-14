import React, { useState } from "react";
import { TabContext } from "./TabContext";
import { TabContextControllerProps } from "./TabContext.types";

export const TabContextController = ({ children }: TabContextControllerProps) => {
  const [activePane, setActivePane] = useState(undefined);

  return <TabContext.Provider value={{ setActivePane, activePane }}>{children}</TabContext.Provider>;
};
