import React, { useState } from "react";
import { WalletSelectorContext } from "./WalletSelectorContext";
import { WalletSelectorContextControllerProps } from "./WalletSelectorContext.types";

export const WalletSelectorContextController = ({ children }: WalletSelectorContextControllerProps) => {
  const [network, setNetwork] = useState("");
  const [chain, setChain] = useState("");
  const [address, setAddress] = useState("PwDiXFxQsGra4sFFTT8r1QWRMd4vfumiWC1jfWNfdYT");
  const [balance, setBalance] = useState("0.00");

  return (
    <WalletSelectorContext.Provider value={{ chain, network, address, balance }}>
      {children}
    </WalletSelectorContext.Provider>
  );
};
