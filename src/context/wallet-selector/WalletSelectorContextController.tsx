import React, { useState } from "react";

import { WalletSelectorContext } from "./WalletSelectorContext";
import { WalletSelectorChain, WalletSelectorContextControllerProps } from "./WalletSelectorContext.types";

export const WalletSelectorContextController = ({ children }: WalletSelectorContextControllerProps) => {
  const [network, setNetwork] = useState<string | undefined>(undefined);
  const [chain, setChain] = useState<WalletSelectorChain | undefined>(undefined);
  const [address, setAddress] = useState("PwDiXFxQsGra4sFFTT8r1QWRMd4vfumiWC1jfWNfdYT");
  const [balance, setBalance] = useState("0.00");
  const [isConnected, setIsConnected] = useState(false);

  const onSetChain = (c: WalletSelectorChain) => {
    setChain(c);
  };

  return (
    <WalletSelectorContext.Provider value={{ chain, network, address, balance, isConnected, onSetChain }}>
      {children}
    </WalletSelectorContext.Provider>
  );
};
