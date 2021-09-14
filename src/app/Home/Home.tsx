import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { CityIcon } from "../../ui/icons/CityIcon";
import { MainPanel } from "../../ui/mainpanel/MainPanel";
import { NavBar } from "../../ui/navbar/NavBar";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import { Tab } from "../../ui/tab/Tab";
import { Typography } from "../../ui/typography/Typography";
import styles from "./Home.module.scss";
import { HomeProps } from "./Home.types";

export const Home: React.FC<HomeProps> = () => {
  const { t } = useTranslation("home");

  return (
    <div className={clsx(styles["home"])}>
      <NavBar />
      <Sidebar className={styles["home__sidebar"]}>
        <Sidebar.Item text={t("sidebar.item.real-estate")} icon={<CityIcon />} />
      </Sidebar>
      <MainPanel className={styles["home__main-panel"]}>
        <MainPanel.Container>
          <Typography.Headline1>Real Estate</Typography.Headline1>
        </MainPanel.Container>
        <Tab defaultPaneId="my-properties">
          <Tab.Navigation>
            <Tab.Item paneId="my-properties">My Properties</Tab.Item>
            <Tab.Item paneId="explore">Explore</Tab.Item>
          </Tab.Navigation>
          <Tab.Pane id="my-properties">
            <MainPanel.Container>My Properties</MainPanel.Container>
          </Tab.Pane>
          <Tab.Pane id="explore">
            <MainPanel.Container>Explore</MainPanel.Container>
          </Tab.Pane>
        </Tab>
      </MainPanel>
    </div>
  );
};
