import clsx from "clsx";
import { MainPanelProps } from "./MainPanel.types";
import styles from "./MainPanel.module.scss";

export const MainPanel: React.FC<MainPanelProps> = ({ children, className }) => {
  return <div className={clsx(styles["main-panel"], className)}>{children}</div>;
};
