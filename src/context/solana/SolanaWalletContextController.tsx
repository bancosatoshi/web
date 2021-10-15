import React, { useEffect, useMemo } from "react";
import { ConnectionProvider, useConnection, useWallet, WalletProvider } from "@solana/wallet-adapter-react";
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
import { useWalletModal } from "../../ui/solana/wallet-selector-modal/useWalletModal";
import { WalletSelectorContextController } from "../wallet-selector/WalletSelectorContextController";
import { WalletSelectorChain } from "../wallet-selector/WalletSelectorContext.types";
import { useWalletState } from "../../hooks/useWalletState/useWalletState";

import { SolanaWalletContextControllerProps } from "./SolanaWalletContext.types";
import { WalletSolanaContext } from "./SolanaWalletContext";

const SolanaContextController = ({ children }: SolanaWalletContextControllerProps) => {
  const walletState = useWalletState();

  const [network, setNetwork] = walletState.network;
  const [chain, setChain] = walletState.chain;
  const [address, setAddress] = walletState.address;
  const [balance, setBalance] = walletState.balance;
  const [isConnected, setIsConnected] = walletState.isConnected;

  const { setVisible: setSolanaWalletsModalVisible } = useWalletModal();
  const { connected: isSolanaWalletConnected, publicKey } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    if (isSolanaWalletConnected) {
      setIsConnected(true);
      setAddress(publicKey!.toString());
      setNetwork(WalletAdapterNetwork.Devnet);
      setChain(WalletSelectorChain.solana);
      connection
        .getBalance(publicKey!)
        .then((solanaBalance) => setBalance(`SOL ${(solanaBalance / 1000000000).toFixed(2).toString()}`));
    }
  }, [isSolanaWalletConnected, setAddress, setBalance, setChain, setIsConnected, setNetwork, connection, publicKey]);

  const onClickConnect = () => {
    setSolanaWalletsModalVisible(true);
  };

  const onSetChain = (c: WalletSelectorChain) => {
    setChain(c);
  };

  const props = { onClickConnect, isConnected, network, chain, address, balance, onSetChain };

  return <WalletSelectorContextController {...props}>{children}</WalletSelectorContextController>;
};

export const SolanaWalletContextController = ({ children }: SolanaWalletContextControllerProps) => {
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
            <SolanaContextController>{children}</SolanaContextController>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </WalletSolanaContext.Provider>
  );
};
