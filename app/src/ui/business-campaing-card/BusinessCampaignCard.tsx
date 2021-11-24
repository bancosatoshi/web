import React from "react";
import clsx from "clsx";
import { Container, Visible } from "react-grid-system";

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
    <Card shadow>
      <Card.Content>
        <img
          className={styles["campaign-card__cover"]}
          src={campaign.content.media.featuredImageUrl}
          alt={campaign.content.title}
        />
        <Typography.Headline4>{campaign.content.title}</Typography.Headline4>
        <Typography.Subtitle>{campaign.content.country}</Typography.Subtitle>
        <Typography.Description>{campaign.content.description}</Typography.Description>
        <Container fluid>
          <Grid.Row>
            <Grid.Col className={styles["campaign-card__short"]}>
              <Typography.Headline6>{truncateRaisedAmount(campaign.totalSatsInvested)}</Typography.Headline6>
              <Typography.MiniDescription>Recaudado</Typography.MiniDescription>
            </Grid.Col>
            <Grid.Col className={styles["campaign-card__short"]}>
              {/* @TODO add investors count */}
              <Typography.Headline6>123</Typography.Headline6>
              <Typography.MiniDescription>{2 > 1 ? "Inversionistas" : "Inversionista"}</Typography.MiniDescription>
            </Grid.Col>
          </Grid.Row>
          <Visible lg xl>
            <Grid.Row>
              <Grid.Col className={styles["campaign-card__short"]}>
                <Typography.Headline6>{`${campaign?.investmentMultiple}x`}</Typography.Headline6>
                <Typography.MiniDescription>Payback</Typography.MiniDescription>
              </Grid.Col>
              <Grid.Col className={styles["campaign-card__short"]}>
                <Typography.Headline6>0</Typography.Headline6>
                <Typography.MiniDescription>Días Restantes</Typography.MiniDescription>
              </Grid.Col>
            </Grid.Row>
          </Visible>
        </Container>
      </Card.Content>
    </Card>
  </div>
);
