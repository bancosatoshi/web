import { PublicKey } from "@solana/web3.js";
import { ReactNode } from "react";

export type WalletSelectorContextControllerProps = {
  children: ReactNode;
};

export enum WalletSelectorChain {
  solana = "solana",
}

export type WalletSelectorContextType = {
  address?: string | null | PublicKey;
  network?: string;
  balance: string;
  chain?: WalletSelectorChain;
  isConnected: boolean;
  onSetChain: (chain: WalletSelectorChain) => void;
  onClickConnect: () => void;
};
