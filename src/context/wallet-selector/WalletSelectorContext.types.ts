import { ReactNode } from "react";

export type WalletSelectorContextControllerProps = {
  children: ReactNode;
};

export type WalletSelectorContextType = {
  address: string;
  network: string;
  balance: string;
  chain: string;
};
