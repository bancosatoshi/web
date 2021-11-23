import clsx from "clsx";
import { Container } from "next/app";

import { BusinessCampaignCard } from "ui/business-campaing-card/BusinessCampaignCard";
import { Grid } from "ui/grid/Grid";

import styles from "./CampaignsGroup.module.scss";
import { CampaignsGroupProps } from "./CampaignsGroup.types";

export const CampaignsGroup: React.FC<CampaignsGroupProps> = ({ campaigns, className }) => (
  <div className={clsx(styles["campaigns-group"], className)}>
    <Container>
      <Grid.Row>
        {campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <Grid.Col key={campaign!.id}>
              <BusinessCampaignCard campaign={campaign!} />
            </Grid.Col>
          ))}
      </Grid.Row>
    </Container>
  </div>
);
