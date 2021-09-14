import clsx from "clsx";
import styles from "./MainPanel.module.scss";
import { MainPanelProps } from "./MainPanel.types";

export const MainPanel: React.FC<MainPanelProps> = ({ children, className }) => {
  return <div className={clsx(styles["main-panel"], className)}>{children}</div>;
};

const Container = ({ children }) => <div className={styles["main-panel__container"]}>{children}</div>;

MainPanel.Container = Container;
