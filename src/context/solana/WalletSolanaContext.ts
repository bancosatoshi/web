import { createContext } from "react";

import { WalletSolanaContextType } from "./WalletSolanaContext.types";

export const WalletSolanaContext = createContext<WalletSolanaContextType | undefined>(undefined);
