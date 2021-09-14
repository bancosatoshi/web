import clsx from "clsx";
import { Item } from "./item/Item";
import styles from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.types";

export const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  return <div className={clsx(styles["sidebar"], className)}>{children}</div>;
};

Sidebar.Item = Item;
