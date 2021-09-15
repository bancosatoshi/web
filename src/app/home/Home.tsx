import clsx from "clsx";
import { Col, Container, Row } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { Card } from "../../ui/card/Card";
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
  const myProperties = [
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
    "https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg",
  ];

  return (
    <div className={clsx(styles["home"])}>
      <NavBar />
      <Sidebar className={styles["home__sidebar"]}>
        <Sidebar.Item text={t("sidebar.item.real-estate")} icon={<CityIcon />} />
      </Sidebar>
      <MainPanel className={styles["home__main-panel"]}>
        <MainPanel.Container>
          <Typography.Subtitle>Solana</Typography.Subtitle>
          <Typography.Headline1>Real Estate</Typography.Headline1>
        </MainPanel.Container>
        <Tab defaultPaneId="my-properties">
          <Tab.Navigation>
            <Tab.Item paneId="my-properties">My Properties</Tab.Item>
            <Tab.Item paneId="explore">Explore</Tab.Item>
          </Tab.Navigation>
          <Tab.Pane id="my-properties">
            <MainPanel.Container className={styles["home__tab-pane--container"]}>
              <Container fluid>
                <Row>
                  {myProperties.map((property) => (
                    <Col lg={4}>
                      <Card backgroundImageUrl={property} className={styles["home__my-properties--card"]} url="#">
                        <Card.Content>
                          <Typography.MiniDescription>Antigua, Guatemala</Typography.MiniDescription>
                          <Typography.Text>Villas de San Isidro</Typography.Text>
                          <Row>
                            <Col>
                              <Typography.Description>23% Share</Typography.Description>
                            </Col>
                            <Col>
                              <Typography.Description>$122k Valuation</Typography.Description>
                            </Col>
                          </Row>
                        </Card.Content>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </MainPanel.Container>
          </Tab.Pane>
          <Tab.Pane id="explore">
            <MainPanel.Container>Explore</MainPanel.Container>
          </Tab.Pane>
        </Tab>
      </MainPanel>
    </div>
  );
};
