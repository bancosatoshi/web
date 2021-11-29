import clsx from "clsx";
import { SwitchProps } from "./Switch.types";
import styles from "./Switch.module.scss";

export const Switch: React.FC<SwitchProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles["switch"], className)}>
      {children}
      <input className={styles["switch__checkbox"]} {...props} />
      <div className={styles["switch__ball"]} />
    </div>
  );
};
