import { Wallet } from "@solana/wallet-adapter-wallets";
import React, { FC, MouseEventHandler } from "react";

import { Button } from "../../button/Button";

import { WalletIcon } from "./WalletIcon";

export type WalletListItemProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
  wallet: Wallet;
};

export const WalletListItem: FC<WalletListItemProps> = ({ handleClick, tabIndex, wallet }) => (
  <li>
    <Button
      fullWidth
      variant="outlined"
      onClick={handleClick}
      leftIcon={<WalletIcon wallet={wallet} className="wallet-adapter-button-end-icon" />}
      tabIndex={tabIndex}
      // className="wallet-adapter-button"
    >
      {wallet.name}
    </Button>
  </li>
);
