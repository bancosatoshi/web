import React from "react";
import clsx from "clsx";
import { Visible } from "react-grid-system";

import { Card } from "ui/card/Card";
import { Grid } from "ui/grid/Grid";
import { Typography } from "ui/typography/Typography";

import styles from "./BusinessCampaignCard.module.scss";
import { BusinessCampaignCardProps } from "./BusinessCampaign.types";

const truncateRaisedAmount = (raised: number) => {
  if (!raised) return "0";

  const truncated = Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(raised);

  return truncated;
};

export const BusinessCampaignCard: React.FC<BusinessCampaignCardProps> = ({ campaign, className, ...props }) => (
  // @TODO Implement i18n

  <div className={clsx(styles["campaign-card"], className)} {...props}>
    <Card shadow backgroundImageUrl={campaign.content.media.featuredImageUrl}>
      <Card.Content>
        <Typography.Headline4>{campaign.content.title}</Typography.Headline4>
        <Typography.Description>
          {campaign.content.country} - {campaign.content.category}
        </Typography.Description>
        <Typography.Text>{campaign.content.description}</Typography.Text>
        <Grid.Row>
          <Grid.Col className={styles["campaign-card__short"]}>
            <Typography.Headline6>{truncateRaisedAmount(campaign.totalSatsInvested)}</Typography.Headline6>
            <Typography.MiniDescription>Recaudado</Typography.MiniDescription>
          </Grid.Col>
          <Grid.Col className={styles["campaign-card__short"]}>
            <Typography.Headline6>{campaign.totalInvestors}</Typography.Headline6>
            <Typography.MiniDescription>
              {campaign.totalInvestors > 1 ? "Inversionistas" : "Inversionista"}
            </Typography.MiniDescription>
          </Grid.Col>
        </Grid.Row>
        <Visible lg xl>
          <Grid.Row>
            <Grid.Col className={styles["campaign-card__short"]}>
              <Typography.Headline6>{campaign.investmentMultiple}x</Typography.Headline6>
              <Typography.MiniDescription>Retorno</Typography.MiniDescription>
            </Grid.Col>
            <Grid.Col className={styles["campaign-card__short"]}>
              <Typography.Headline6>{campaign.daysLeft}</Typography.Headline6>
              <Typography.MiniDescription>Días Restantes</Typography.MiniDescription>
            </Grid.Col>
          </Grid.Row>
        </Visible>
      </Card.Content>
    </Card>
  </div>
);
