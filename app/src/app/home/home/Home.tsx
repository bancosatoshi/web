import clsx from "clsx";
import { Container } from "react-grid-system";

import { Typography } from "ui/typography/Typography";
import { Grid } from "ui/grid/Grid";
import { Icon } from "ui/icon/Icon";
import { useRoutes } from "hooks/useRoutes/useRoutes";

import styles from "./Home.module.scss";
import { HomeProps } from "./Home.types";
import { Trans, useTranslation } from "react-i18next";

export const Home: React.FC<HomeProps> = ({ className }) => {
  const routes = useRoutes();
  const { t } = useTranslation("home");

  return (
    <div className={clsx(styles.home, className)}>
      <section id="intro" className={clsx(styles.home__section, styles["home__section--intro"])}>
        <Container>
          <Grid.Row>
            <Grid.Col lg={7}>
              <Typography.Headline1 className={styles["home__intro--headline"]}>
                {t("intro.h1.top")}
                <br />
                {t("intro.h1.main")}
              </Typography.Headline1>
              <div className={styles["home__intro--text-block"]}>
                <Typography.Text>{t("intro.asInvestor.title")}</Typography.Text>
                <Typography.TextLead>
                  <Trans>{t("intro.asInvestor.description")}</Trans>
                </Typography.TextLead>
              </div>
              <div className={styles["home__intro--text-block"]}>
                <Typography.Text>{t("intro.asBusinessOwner.title")}</Typography.Text>
                <Typography.TextLead>
                  <Trans>{t("intro.asBusinessOwner.description")}</Trans>
                </Typography.TextLead>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Container>
      </section>
      <section id="cta-banner" className={clsx(styles.home__section, styles["home__section--cta-banner"])}>
        <Container>
          <Grid.Row>
            <Grid.Col lg={7}>
              <Typography.Headline4 className={styles["home__section--cta-banner--welcome"]}>
                <Trans>{t("intro.bottomBanner.welcome")}</Trans>
              </Typography.Headline4>
            </Grid.Col>
            <Grid.Col lg={5}>
              <Typography.Link className={styles["home__section--cta-banner--cta"]} href={routes.invest.grid}>
                {t("intro.bottomBanner.cta")} <Icon name="icon-chevron-right-circle" />
              </Typography.Link>
            </Grid.Col>
          </Grid.Row>
        </Container>
      </section>
    </div>
  );
};
