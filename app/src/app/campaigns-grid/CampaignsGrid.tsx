import clsx from "clsx";
import { Container } from "react-grid-system";
import { useRouter } from "next/router";
import { BusinessCampaign } from "api/codegen";

import { Grid } from "ui/grid/Grid";
import { Button } from "ui/button/Button";
import { Typography } from "ui/typography/Typography";
import { useAuthContext } from "hooks/useAuthContext/useAuthContext";
import { useRoutes } from "hooks/useRoutes/useRoutes";

import styles from "./CampaignsGrid.module.scss";
import { CampaignsGridProps } from "./CampaignsGrid.types";
import { CampaignsGroup } from "./CampaignsGroup/CampaignsGroup";

export const CampaignsGrid: React.FC<CampaignsGridProps> = ({ campaigns, className }) => {
  const auth = useAuthContext();
  const router = useRouter();
  const routes = useRoutes();

  const redirectToSignIn = () => {
    router.push(routes.auth.signIn);
  };

  const onCampaignClickHandler = (campaign: BusinessCampaign) => {
    router.push(routes.campaign(campaign.slug));
  };

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
                  <Button size="l" onClick={redirectToSignIn}>
                    Crea una Cuenta
                  </Button>
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
        <Grid.Container>
          <Grid.Row>
            <Grid.Col>
              <Typography.Headline3>Campañas Recientes</Typography.Headline3>
              <Typography.Text>Descubre nuevas oportunidades y comienza a invertir</Typography.Text>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
        <CampaignsGroup onCampaignClick={onCampaignClickHandler} campaigns={campaigns} />
      </section>
    </div>
  );
};
