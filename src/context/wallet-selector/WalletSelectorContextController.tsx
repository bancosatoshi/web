import React, { useState, useEffect } from "react";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";

import { useWalletModal as useSolanaWalletModal } from "../../ui/solana/wallet-selector-modal/useWalletModal";

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
  const [isConnectionRequested, setIsConnectionRequested] = useState(false);

  const { setVisible: setSolanaWalletsModalVisible } = useSolanaWalletModal();
  const { connected: isSolanaWalletConnected, publicKey: solanaAddress } = useSolanaWallet();

  useEffect(() => {
    if (isSolanaWalletConnected) {
      setIsConnected(true);
      setAddress(solanaAddress!.toString());
    }
  }, [isSolanaWalletConnected, solanaAddress]);

  const onSetChain = (c: WalletSelectorChain) => {
    setChain(c);
  };

  const onClickConnect = () => {
    setIsConnectionRequested(true);

    if (chain === WalletSelectorChain.solana) {
      setSolanaWalletsModalVisible(true);
    }
  };

  const providerProps = { chain, network, address, balance, isConnected, onSetChain, onClickConnect };

  return <WalletSelectorContext.Provider value={providerProps}>{children}</WalletSelectorContext.Provider>;
};
