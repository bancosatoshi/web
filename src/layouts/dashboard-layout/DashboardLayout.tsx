import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { CityIcon } from "../../ui/icons/CityIcon";
import { MainPanel } from "../../ui/mainpanel/MainPanel";
import { NavBar } from "../../ui/navbar/NavBar";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import { WalletSelector } from "../../ui/wallet-selector/WalletSelector";

import styles from "./DashboardLayout.module.scss";
import { DashboardLayoutProps } from "./DashboardLayout.types";

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { t } = useTranslation("common");

  return (
    <div className={clsx(styles["dashboard-layout"])}>
      <NavBar>
        <WalletSelector />
      </NavBar>
      <Sidebar className={styles["dashboard-layout__sidebar"]}>
        <Sidebar.Item text={t("sidebar.item.real-estate")} icon={<CityIcon />} />
      </Sidebar>
      <MainPanel className={styles["dashboard-layout__main-panel"]}>{children}</MainPanel>
    </div>
  );
};
