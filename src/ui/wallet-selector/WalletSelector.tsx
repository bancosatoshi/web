import clsx from "clsx";
import { useWalletSelectorContext } from "../../hooks/useWalletSelectorContext/useWalletSelectorContext";
import { Button } from "../button/Button";
import { Typography } from "../typography/Typography";
import styles from "./WalletSelector.module.scss";
import { WalletSelectorProps } from "./WalletSelector.types";

export const WalletSelector: React.FC<WalletSelectorProps> = ({ className }) => {
  const { address, chain, network, balance } = useWalletSelectorContext();

  return (
    <div className={clsx(styles["wallet-selector"], className)}>
      <Button size="xs" variant="outlined">
        {!!chain && !!network ? "Connected" : "Connect Wallet"}
      </Button>
      <div className={styles["wallet-selector__widget"]}>
        <div className={styles["wallet-selector__chain-network-dropdowns"]}>
          <Button variant="outlined" color="secondary" size="s" fullWidth className={styles["wallet-selector__button"]}>
            {!!chain && !!network ? chain : "Chain"}
          </Button>
          <Button variant="outlined" color="secondary" size="s" fullWidth className={styles["wallet-selector__button"]}>
            {!!chain && !!network ? network : "Network"}
          </Button>
        </div>
        <div className={styles["wallet-selector__balance"]}>
          <Typography.Description>Balance</Typography.Description>
          <Typography.Text>{balance}</Typography.Text>
          <Typography.MiniDescription>
            <Typography.Anchor href="#" target="_blank">
              {!!address && address}
            </Typography.Anchor>
          </Typography.MiniDescription>
        </div>
        <div className={styles["wallet-selector__connect"]}>
          <Button size="xs">Disconnect</Button>
        </div>
      </div>
    </div>
  );
};
