import { createContext } from "react";
import { ToggleContextType } from "./ToggleContext.types";

export const ToggleContext = createContext<ToggleContextType | undefined>(undefined);
