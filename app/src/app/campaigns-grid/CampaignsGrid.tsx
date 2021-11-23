import clsx from "clsx";
import styles from "./CampaignsGrid.module.scss";

import { Grid } from "ui/grid/Grid";
import { Button } from "ui/button/Button";
import { Container } from "react-grid-system";
import { Typography } from "ui/typography/Typography";
import { useAuthContext } from "hooks/useAuthContext/useAuthContext";
import { CampaignsGridProps } from "./CampaignsGrid.types";
import { CampaignsGroup } from "./CampaignsGroup/CampaignsGroup";

export const CampaignsGrid: React.FC<CampaignsGridProps> = ({ campaigns, className }) => {
  const auth = useAuthContext();

  return (
    <div className={clsx(styles["campaigns-grid"], className)}>
      {!auth.hasActiveSession && (
        <section id="intro" className={styles["campaigns-grid__section"]}>
          <Container>
            <Grid.Row>
              <Grid.Col>
                <Typography.Headline1>Explora e Invierte con Bitcoin</Typography.Headline1>
                <Typography.TextLead>Diversifíca tu portafolio invirtiendo en negocios locales</Typography.TextLead>
              </Grid.Col>
              <Grid.Col>
                <Button size="l">Comienza A Invertir</Button>
              </Grid.Col>
            </Grid.Row>
          </Container>
        </section>
      )}
      <section id="favorites">
        <Container>
          <Grid.Row>
            <Grid.Col>
              <Typography.Headline3>Favoritos de Nuestros SATBackers</Typography.Headline3>
              <Typography.Link href="">Ver Más</Typography.Link>
              <CampaignsGroup campaigns={campaigns} limit={5} />
            </Grid.Col>
          </Grid.Row>
        </Container>
      </section>
    </div>
  );
};
