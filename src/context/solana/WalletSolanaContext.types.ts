import { ReactNode } from "react";

export type WalletSolanaContextControllerProps = {
  children: ReactNode;
};

export enum WalletSelectorChain {
  solana = "solana",
}

export type WalletSolanaContextType = {
  // isConnected: boolean;
};
