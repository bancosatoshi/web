import React, { useState, useEffect } from "react";
import { useConnection as useSolanaConnection, useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import { useWalletModal as useSolanaWalletModal } from "../../../ui/solana/wallet-selector-modal/useWalletModal";

import { WalletSelectorContext } from "./WalletSelectorContext";
import {
  WalletSelectorChain,
  WalletSelectorContextControllerProps,
  WalletSelectorContextType,
} from "./WalletSelectorContext.types";

export const WalletSelectorContextController = ({ children }: WalletSelectorContextControllerProps) => {
  const [network, setNetwork] = useState<string | undefined>(undefined);
  const [chain, setChain] = useState<WalletSelectorChain | undefined>(undefined);
  const [address, setAddress] = useState<WalletSelectorContextType["address"]>(undefined);
  const [balance, setBalance] = useState("0.00");
  const [isConnected, setIsConnected] = useState(false);

  const { setVisible: setSolanaWalletsModalVisible } = useSolanaWalletModal();
  const { connected: isSolanaWalletConnected, publicKey: solanaPublicKey } = useSolanaWallet();
  const { connection: solanaConnection } = useSolanaConnection();

  useEffect(() => {
    if (isSolanaWalletConnected) {
      setIsConnected(true);
      setAddress(solanaPublicKey!.toString());
      setNetwork(WalletAdapterNetwork.Devnet);
      setChain(WalletSelectorChain.solana);
      solanaConnection
        .getBalance(solanaPublicKey!)
        .then((solanaBalance) => setBalance(`SOL ${(solanaBalance / 1000000000).toFixed(2).toString()}`));
    }
  }, [isSolanaWalletConnected, solanaConnection, solanaPublicKey]);

  const onSetChain = (c: WalletSelectorChain) => {
    setChain(c);
  };

  const onClickConnect = () => {
    if (chain === WalletSelectorChain.solana) {
      setSolanaWalletsModalVisible(true);
    }
  };

  const providerProps = { chain, network, address, balance, isConnected, onSetChain, onClickConnect };

  return <WalletSelectorContext.Provider value={providerProps}>{children}</WalletSelectorContext.Provider>;
};
