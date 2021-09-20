import React, { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getTorusWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import { WalletModalProvider } from "../../ui/solana/wallet-selector-modal/WalletModalProvider";
import { WalletSelectorContextController } from "../wallet-selector/WalletSelectorContextController";

import { WalletSolanaContextControllerProps } from "./WalletSolanaContext.types";
import { WalletSolanaContext } from "./WalletSolanaContext";

export const WalletSolanaContextController = ({ children }: WalletSolanaContextControllerProps) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getTorusWallet({
        options: { clientId: "Get a client ID @ https://developer.tor.us" },
      }),
      getLedgerWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [network],
  );

  return (
    <WalletSolanaContext.Provider value={{}}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <WalletSelectorContextController>{children}</WalletSelectorContextController>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </WalletSolanaContext.Provider>
  );
};
