import clsx from "clsx";
import styles from "./CampaignsGroup.module.scss";

import { CampaignsGroupProps } from "./CampaignsGroup.types";
import { BusinessCampaignCard } from "ui/business-campaing-card/BusinessCampaignCard";
import { Container } from "next/app";
import { Grid } from "ui/grid/Grid";

export const CampaignsGroup: React.FC<CampaignsGroupProps> = ({ campaigns, limit, filter, className }) => {
  return (
    <div className={clsx(styles["campaigns-group"], className)}>
      <Container>
        <Grid.Row>
          {campaigns.map((campaignData) => (
            <Grid.Col>
              <BusinessCampaignCard campaign={campaignData} />
            </Grid.Col>
          ))}
        </Grid.Row>
      </Container>
    </div>
  );
};
