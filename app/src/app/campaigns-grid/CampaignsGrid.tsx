import clsx from "clsx";
import { Container } from "react-grid-system";

import { Grid } from "ui/grid/Grid";
import { Button } from "ui/button/Button";
import { Typography } from "ui/typography/Typography";
import { useAuthContext } from "hooks/useAuthContext/useAuthContext";

import styles from "./CampaignsGrid.module.scss";
import { CampaignsGridProps } from "./CampaignsGrid.types";
import { CampaignsGroup } from "./CampaignsGroup/CampaignsGroup";

export const CampaignsGrid: React.FC<CampaignsGridProps> = ({ campaigns, className }) => {
  const auth = useAuthContext();

  return (
    <div className={clsx(styles["campaigns-grid"], className)}>
      {!auth.hasActiveSession && (
        <section
          id="intro"
          className={clsx(styles["campaigns-grid__section"], styles["campaigns-grid__section--intro"])}
        >
          <Container>
            <Grid.Row>
              <Grid.Col>
                <Typography.Headline1>Explora e Invierte con Bitcoin</Typography.Headline1>
                <Typography.TextLead>
                  Diversifica tu portafolio con ingresos pasivos desde 1{" "}
                  <abbr title="La unidad más pequeña de Bitcoin">SAT</abbr>
                </Typography.TextLead>
                <div className={styles["campaigns-grid__intro--cta"]}>
                  <Button size="l">Crea una Cuenta</Button>
                </div>
              </Grid.Col>
            </Grid.Row>
          </Container>
        </section>
      )}
      <section
        id="favorites"
        className={clsx(styles["campaigns-grid__section"], styles["campaigns-grid__section--favorites"])}
      >
        <Container>
          <Grid.Row>
            <Grid.Col>
              <Typography.Headline3>Campañas Recientes</Typography.Headline3>
              <Typography.Link href="">Ver Más</Typography.Link>
              <CampaignsGroup campaigns={campaigns} />
            </Grid.Col>
          </Grid.Row>
        </Container>
      </section>
    </div>
  );
};
