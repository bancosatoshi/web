import { useContext } from "react";

import { WalletSolanaContext } from "../../context/wallet-solana/WalletSolanaContext";

export const useSolanaContext = () => {
  const context = useContext(WalletSolanaContext);

  if (context === undefined) {
    throw new Error("useSolanaContext must be used within a WalletSolanaContext");
  }

  return context;
};
