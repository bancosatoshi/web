import clsx from "clsx";
import { Container } from "react-grid-system";

import { BusinessCampaignCard } from "ui/business-campaing-card/BusinessCampaignCard";
import { Grid } from "ui/grid/Grid";

import styles from "./CampaignsGroup.module.scss";
import { CampaignsGroupProps } from "./CampaignsGroup.types";

export const CampaignsGroup: React.FC<CampaignsGroupProps> = ({
  campaigns,
  singleLine = true,
  onCampaignClick,
  className,
  ...props
}) => {
  const variant = singleLine ? "line" : "collection";

  return (
    <div className={clsx(styles[`campaigns-group`], styles[`campaigns-group__${variant}`], className)}>
      <Container>
        <Grid.Row nowrap={singleLine}>
          {campaigns.length &&
            campaigns.map((campaign) => (
              <Grid.Col sm={5} lg={4} xl={3} key={campaign!.id}>
                <BusinessCampaignCard campaign={campaign!} onClick={() => onCampaignClick(campaign)} />
              </Grid.Col>
            ))}
        </Grid.Row>
      </Container>
    </div>
  );
};
