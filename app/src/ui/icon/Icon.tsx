import clsx from "clsx";

import { IconProps } from "./Icon.types";
import styles from "./Icon.module.scss";

export const Icon: React.FC<IconProps> = ({ className, name }) => (
  <span className={clsx(styles.icon, className, styles[name], "icon-")} />
);
