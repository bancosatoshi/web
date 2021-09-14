import { ReactNode } from "react";

export type TabContextControllerProps = {
  children: ReactNode;
};

export type TabContextType = {
  activePane: string;
  setActivePane: (id: string) => void;
};
