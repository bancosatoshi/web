import { Wallet } from "@solana/wallet-adapter-wallets";
import React, { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";

export type WalletIconProps = {
  wallet: Wallet | null;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export const WalletIcon: FC<WalletIconProps> = ({ wallet, ...props }) =>
  wallet && <img src={wallet.icon} alt={`${wallet.name} icon`} {...props} />;
