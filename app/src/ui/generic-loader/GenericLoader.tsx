import clsx from "clsx";
import { GenericLoaderProps } from "./GenericLoader.types";
import styles from "./GenericLoader.module.scss";
import { BancoSatoshiLogo } from "ui/icons/BancoSatoshiLogo";

export const GenericLoader: React.FC<GenericLoaderProps> = ({ className }) => {
  return (
    <div className={clsx(styles["generic-loader"], className)}>
      <div className={clsx(styles["generic-loader__logo"], className)}>
        <BancoSatoshiLogo />
      </div>
    </div>
  );
};
