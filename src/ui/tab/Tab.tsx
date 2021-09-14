import clsx from "clsx";
import { TabContextController } from "../../context/tab/TabContextController";
import { Item } from "./item/Item";
import { Navigation } from "./navigation/Navigation";
import { Pane } from "./pane/Pane";
import styles from "./Tab.module.scss";
import { TabProps } from "./Tab.types";

export const Tab: React.FC<TabProps> = ({ children, className, defaultPaneId }) => {
  return (
    <TabContextController defaultPaneId={defaultPaneId}>
      <div className={clsx(styles["tab"], className)}>{children}</div>
    </TabContextController>
  );
};

Tab.Navigation = Navigation;
Tab.Item = Item;
Tab.Pane = Pane;
