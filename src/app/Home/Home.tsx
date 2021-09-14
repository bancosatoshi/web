import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { FilesIcon } from "../../ui/icons/FilesIcon";
import { MainPanel } from "../../ui/mainpanel/MainPanel";
import { NavBar } from "../../ui/navbar/NavBar";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import { Typography } from "../../ui/typography/Typography";
import styles from "./Home.module.scss";
import { HomeProps } from "./Home.types";

export const Home: React.FC<HomeProps> = () => {
  const { t } = useTranslation("home");

  return (
    <div className={clsx(styles["home"])}>
      <NavBar />
      <Sidebar className={styles["home__sidebar"]}>
        <Sidebar.Item text={t("sidebar.item.real-estate")} icon={<FilesIcon />} />
      </Sidebar>
      <MainPanel className={styles["home__main-panel"]}>
        <Typography.Headline1>Real Estate</Typography.Headline1>
      </MainPanel>
    </div>
  );
};
