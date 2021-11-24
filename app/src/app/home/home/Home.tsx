import clsx from "clsx";
import { Container } from "react-grid-system";

import { Typography } from "ui/typography/Typography";
import { Grid } from "ui/grid/Grid";
import { Icon } from "ui/icon/Icon";
import { useRoutes } from "hooks/useRoutes/useRoutes";

import styles from "./Home.module.scss";
import { HomeProps } from "./Home.types";

export const Home: React.FC<HomeProps> = ({ className }) => {
  const routes = useRoutes();

  return (
    <div className={clsx(styles.home, className)}>
      <section id="intro" className={clsx(styles.home__section, styles["home__section--intro"])}>
        <Container>
          <Grid.Row>
            <Grid.Col lg={7}>
              <Typography.Headline1 className={styles["home__intro--headline"]}>
                Invierte en Negocios
                <br />
                con Bitcoin.
              </Typography.Headline1>
              <div className={styles["home__intro--text-block"]}>
                <Typography.Text>Como inversionista</Typography.Text>
                <Typography.TextLead>
                  Diversifica tu portafolio con ingresos pasivos
                  <br />
                  <strong>desde 1 SAT</strong>.
                </Typography.TextLead>
              </div>
              <div className={styles["home__intro--text-block"]}>
                <Typography.Text>Como empresarix</Typography.Text>
                <Typography.TextLead>
                  Accede a capital de inversión global
                  <br />y ejecuta tus ideas.
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
                Bienvenido a tu banco de inversión y desarrollo,
                <br />
                con Bitcoin.
              </Typography.Headline4>
            </Grid.Col>
            <Grid.Col lg={5}>
              <Typography.Link className={styles["home__section--cta-banner--cta"]} href={routes.invest.grid}>
                Visita la Sala de Inversión <Icon name="icon-chevron-right-circle" />
              </Typography.Link>
            </Grid.Col>
          </Grid.Row>
        </Container>
      </section>
    </div>
  );
};
