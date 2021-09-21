import router from "next/router";
import { useTranslation } from "react-i18next";

import { useRoutes } from "../../../../hooks/useRoutes/useRoutes";
import { Button } from "../../../../ui/button/Button";
import { Card } from "../../../../ui/card/Card";
import { Grid } from "../../../../ui/grid/Grid";
import { MainPanel } from "../../../../ui/mainpanel/MainPanel";
import { Tab } from "../../../../ui/tab/Tab";
import { Typography } from "../../../../ui/typography/Typography";

import styles from "./Properties.module.scss";
import { PropertiesProps } from "./Properties.types";

export const Properties: React.FC<PropertiesProps> = () => {
  const { t } = useTranslation("home");
  const routes = useRoutes();

  const myProperties = [
    {
      img: "https://i.pinimg.com/564x/fc/62/18/fc62180f74d38deb00a4f63a88eae76a.jpg",
      tokenMetadataId: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
    },
  ];

  return (
    <main className={styles.properties__main}>
      <MainPanel.Container className={styles["properties__main-panel--container"]}>
        <Grid.Row>
          <Grid.Col>
            <Typography.Subtitle>Solana</Typography.Subtitle>
            <Typography.Headline1>Real Estate</Typography.Headline1>
          </Grid.Col>
          <Grid.Col justifyContent="end">
            <Button size="xs" variant="outlined" as="a" href={routes.realEstate.solana.listProperty}>
              List A Property
            </Button>
          </Grid.Col>
        </Grid.Row>
      </MainPanel.Container>
      <Tab defaultPaneId="my-properties">
        <Tab.Navigation>
          <Tab.Item paneId="my-properties">My Properties</Tab.Item>
          <Tab.Item paneId="explore">Explore</Tab.Item>
        </Tab.Navigation>
        <Tab.Pane id="my-properties">
          <MainPanel.Container className={styles["properties__tab-pane--container"]}>
            <Grid.Container fluid>
              <Grid.Row>
                {myProperties.map((property) => (
                  <Grid.Col lg={4}>
                    <Card
                      backgroundImageUrl={property.img}
                      className={styles["properties__my-properties--card"]}
                      onClick={() => router.push(routes.realEstate.solana.property(property.tokenMetadataId))}
                    >
                      <Card.Content>
                        <Typography.MiniDescription>Antigua, Guatemala</Typography.MiniDescription>
                        <Typography.Text>Villas de San Isidro</Typography.Text>
                        <Grid.Row>
                          <Grid.Col>
                            <Typography.Description>23% Share</Typography.Description>
                          </Grid.Col>
                          <Grid.Col>
                            <Typography.Description>$122k Valuation</Typography.Description>
                          </Grid.Col>
                        </Grid.Row>
                      </Card.Content>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid.Row>
            </Grid.Container>
          </MainPanel.Container>
        </Tab.Pane>
        <Tab.Pane id="explore">
          <MainPanel.Container>Explore</MainPanel.Container>
        </Tab.Pane>
      </Tab>
    </main>
  );
};
