import React from "react";
import clsx from "clsx";
import styles from "./BusinessCampaignCard.module.scss";

import { Card } from "ui/card/Card";
import { Grid } from "ui/grid/Grid";
import { Typography } from "ui/typography/Typography";
import { Container, Visible } from "react-grid-system";
import { BusinessCampaignCardProps } from "./BusinessCampaign.types";

export const BusinessCampaignCard: React.FC<BusinessCampaignCardProps> = ({
  content,
  campaign,
  onClick,
  className,
}) => {
  //@TODO Implement i18n

  const truncateRaisedAmount = (raised: number) => {
    if (!raised) return "0";

    const truncated = Intl.NumberFormat("en-US", {
      notation: "compact",
    }).format(raised);

    return truncated;
  };

  return (
    <div className={clsx(styles["campaign-card"], className)} onClick={onClick}>
      <Container>
        <Grid.Row>
          <Grid.Col sm={6} lg={4} xl={6}>
            <Card shadow>
              <Card.Content>
                <img
                  className={styles["campaign-card__cover"]}
                  src={content?.media.featuredImageUrl}
                  alt={`A representative image of ${content?.title}`}
                />
                <Typography.Headline4>{content?.title}</Typography.Headline4>
                <Typography.Subtitle>{content.country}</Typography.Subtitle>
                <Typography.Description>{content?.description}</Typography.Description>
                <Container fluid>
                  <Grid.Row>
                    <Grid.Col className={styles["campaign-card__short"]}>
                      <Typography.Headline6>{truncateRaisedAmount(campaign.totalSatsInvested)}</Typography.Headline6>
                      <Typography.MiniDescription>Raised</Typography.MiniDescription>
                    </Grid.Col>
                    <Grid.Col className={styles["campaign-card__short"]}>
                      <Typography.Headline6>{campaign?.investors}</Typography.Headline6>
                      <Typography.MiniDescription>
                        {campaign?.investors > 1 ? "Investors" : "Investor"}
                      </Typography.MiniDescription>
                    </Grid.Col>
                  </Grid.Row>
                  <Visible lg xl>
                    <Grid.Row>
                      <Grid.Col className={styles["campaign-card__short"]}>
                        <Typography.Headline6>{`${campaign?.investmentMultiple}x`}</Typography.Headline6>
                        <Typography.MiniDescription>Payback</Typography.MiniDescription>
                      </Grid.Col>
                      <Grid.Col className={styles["campaign-card__short"]}>
                        <Typography.Headline6>{campaign?.expiresAt}</Typography.Headline6>
                        <Typography.MiniDescription>Days Left</Typography.MiniDescription>
                      </Grid.Col>
                    </Grid.Row>
                  </Visible>
                </Container>
              </Card.Content>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Container>
    </div>
  );
};
