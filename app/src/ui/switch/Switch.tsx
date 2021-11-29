import clsx from "clsx";
import { SwitchProps } from "./Switch.types";
import styles from "./Switch.module.scss";

export const Switch: React.FC<SwitchProps> = ({ children, className, ...props }) => {
  return (
    <label className={clsx(styles["switch"], className)}>
      <input {...props} />
      {children}
    </label>
  );
};
