import { createContext } from "react";

import { SolanaWalletContextType } from "./SolanaWalletContext.types";

export const WalletSolanaContext = createContext<SolanaWalletContextType | undefined>(undefined);
