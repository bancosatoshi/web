import clsx from "clsx";
import { Container } from "react-grid-system";
import dynamic from "next/dynamic";

import { Typography } from "../../../ui/typography/Typography";
import { Card } from "../../../ui/card/Card";
import { AuthEmailFormProps } from "../../../ui/form/auth-email-form/AuthEmailForm.types";
import { Grid } from "../../../ui/grid/Grid";

import styles from "./Home.module.scss";
import { HomeProps } from "./Home.types";

const AuthEmailForm = dynamic<AuthEmailFormProps>(
  () => import("../../../ui/form/auth-email-form/AuthEmailForm").then((mod) => mod.AuthEmailForm),
  { ssr: false },
);

export const Home: React.FC<HomeProps> = ({ className }) => (
  <div className={clsx(styles.home, className)}>
    <section id="intro" className={styles.home__section}>
      <Container>
        <Grid.Row>
          <Grid.Col lg={6}>
            <Typography.Headline1>
              Invierte en Negocios
              <br />
              con Bitcoin
            </Typography.Headline1>
            <Typography.TextLead>
              Invierte en empresarixs dedicados a cumplir sus metas,
              <br /> desde 1 SAT.
            </Typography.TextLead>
            <Card className={styles["home__auth-email-card"]} shadow>
              <Card.Content className={styles["home__auth-email-card--content"]}>
                <AuthEmailForm autoFocus />
              </Card.Content>
            </Card>
          </Grid.Col>
          <Grid.Col lg={6}>
            <div className={styles["home__intro--image"]}>
              <img src="/home/emprendedor-home.png" alt="Emprendedor" />
            </div>
          </Grid.Col>
        </Grid.Row>
      </Container>
    </section>
    {/* <Typography.Text>
          Tu inversión te convierte en Socio del Desarrollo de Empresarios
          <br />
          dedicados a cumplir sus metas.
        </Typography.Text>
        <Typography.Text>
          Banco Satoshi es el nuevo banco de inversión en proyectos productivos, con Bitcoin.
        </Typography.Text>
        <Typography.Text>Invierte en proyectos productivos con Bitcoin</Typography.Text> */}
    {/* <Button variant="outlined">Aplicar como inversionista</Button>
        <Button variant="outlined">Aplicar como empresarix</Button> */}
    <section id="perfil-del-empresario" className={styles.home__section}>
      <Typography.Headline2>Perfil del Empresarix</Typography.Headline2>
    </section>
    <section id="perfil-del-empresario" className={styles.home__section}>
      <Typography.Headline2>0 Volatilidad, con DAI</Typography.Headline2>
    </section>
    <section id="proceso-de-evaluacion" className={styles.home__section}>
      <Typography.Headline2>Nuestro Proceso de Evaluación</Typography.Headline2>
      <Typography.Text>Protocolo de Inversión</Typography.Text>
    </section>
    <section id="beneficios" className={styles.home__section}>
      <Typography.Headline2>Beneficios de Invertir con Banco Satoshi</Typography.Headline2>
    </section>
  </div>
);
