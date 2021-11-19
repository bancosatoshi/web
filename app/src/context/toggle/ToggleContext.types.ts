import { ReactNode } from "react";

export type ToggleContextType = {
  display: boolean;
  setDisplay: (display: boolean) => void;
};

export type ToggleContextControllerProps = {
  children: ReactNode;
};
