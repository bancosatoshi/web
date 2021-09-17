import clsx from "clsx";
import { useState } from "react";

import { useWalletSelectorContext } from "../../hooks/useWalletSelectorContext/useWalletSelectorContext";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { ChevronIcon } from "../icons/ChevronIcon";
import { Typography } from "../typography/Typography";

import styles from "./WalletSelector.module.scss";
import { WalletSelectorProps } from "./WalletSelector.types";

export const WalletSelector: React.FC<WalletSelectorProps> = ({ className }) => {
  const wallet = useWalletSelectorContext();

  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  const [isChainsListVisible, setIsChainsListVisible] = useState(false);
  const [isNetworksListVisible, setIsNetworksListVisible] = useState(false);

  const handleOnConnectWalletClick = () => {
    setIsWidgetVisible(!isWidgetVisible);
    setIsNetworksListVisible(false);
    setIsChainsListVisible(false);
  };

  const handleOnChainsListClick = () => {
    setIsChainsListVisible(!isChainsListVisible);
    setIsNetworksListVisible(false);
  };

  const handleOnNetworksListClick = () => {
    setIsNetworksListVisible(!isNetworksListVisible);
    setIsChainsListVisible(false);
  };

  return (
    <div className={clsx(styles["wallet-selector"], className)}>
      <Button size="xs" variant="outlined" onClick={handleOnConnectWalletClick}>
        {wallet.isConnected ? "Connected" : "Connect Wallet"}
      </Button>
      {isWidgetVisible && (
        <>
          <div
            className={styles["wallet-selector__widget--backdrop"]}
            onClick={handleOnConnectWalletClick}
            role="presentation"
          />
          <div className={styles["wallet-selector__widget"]}>
            <div className={styles["wallet-selector__chain-network-dropdowns"]}>
              <Button
                variant="outlined"
                color="secondary"
                size="s"
                fullWidth
                className={styles["wallet-selector__button"]}
                rightIcon={<ChevronIcon variant="down" />}
                onClick={handleOnChainsListClick}
              >
                {wallet.isConnected ? wallet.chain : "Chain"}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="s"
                fullWidth
                className={styles["wallet-selector__button"]}
                rightIcon={<ChevronIcon variant="down" />}
                onClick={handleOnNetworksListClick}
              >
                {wallet.isConnected ? wallet.network : "Network"}
              </Button>
              {isChainsListVisible && (
                <div className={styles["wallet-selector__chain-network-dropdowns--chains-list"]}>
                  <Card
                    className={styles["wallet-selector__chain-network-dropdowns--chains-list-card"]}
                    onClick={() => null}
                  >
                    <Card.Content>
                      <Typography.Text>Solana</Typography.Text>
                      <Typography.Description>
                        Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with
                        over 400 projects spanning DeFi, NFTs, Web3 and more.
                      </Typography.Description>
                    </Card.Content>
                  </Card>
                  <Card url="#" className={styles["wallet-selector__chain-network-dropdowns--chains-list-card"]}>
                    <Card.Content>
                      <Typography.Text>Ethereum</Typography.Text>
                      <Typography.Description>
                        Ethereum is the fastest blockchain in the world and the fastest growing ecosystem in crypto,
                        with over 400 projects spanning DeFi, NFTs, Web3 and more.
                      </Typography.Description>
                    </Card.Content>
                  </Card>
                </div>
              )}
              {isNetworksListVisible && (
                <div className={styles["wallet-selector__chain-network-dropdowns--networks-list"]}>
                  <Card>
                    <Card.Content>
                      <Typography.Text>mainnet-beta</Typography.Text>
                      <Typography.Description>https://mainnet.solana.com</Typography.Description>
                    </Card.Content>
                  </Card>
                </div>
              )}
            </div>
            <div className={styles["wallet-selector__balance"]}>
              <Typography.Description>Balance</Typography.Description>
              <Typography.Text>{wallet.balance}</Typography.Text>
              <Typography.MiniDescription>
                <Typography.Anchor href="#" target="_blank">
                  {wallet.isConnected && wallet.address}
                </Typography.Anchor>
              </Typography.MiniDescription>
            </div>
            <div className={styles["wallet-selector__connect"]}>
              <Button size="xs">{wallet.isConnected ? "Disconnect" : "Connect"}</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
