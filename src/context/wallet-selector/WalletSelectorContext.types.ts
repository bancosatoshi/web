import { ReactNode } from "react";

export type WalletSelectorContextControllerProps = {
  children: ReactNode;
};

export enum WalletSelectorChain {
  solana = "solana",
}

export type WalletSelectorContextType = {
  address?: string;
  network?: string;
  balance: string;
  chain?: WalletSelectorChain;
  isConnected: boolean;
  onSetChain: (chain: WalletSelectorChain) => void;
};
