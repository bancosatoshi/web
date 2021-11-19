import React from "react";
import clsx from "clsx";
import styles from "./BusinessCard.module.scss";

import { Card } from "ui/card/Card";
import { Grid } from "ui/grid/Grid";
import { Container, Visible } from "react-grid-system";
import { Typography } from "ui/typography/Typography";
import { BusinessCardProps } from "./BusinessCard.types";
import { useRouter } from "next/router";

export const BusinessCard: React.FC<BusinessCardProps> = ({ pageLink, content, className }) => {
  //@TODO Implement i18n

  const router = useRouter();

  const truncateRaisedAmount = (raised: number) => {
    if (!raised) return "0";

    const truncated = Intl.NumberFormat("en-US", {
      notation: "compact",
    }).format(raised);

    return truncated;
  };

  const redirectToBusinessPage = (_event: React.MouseEvent<HTMLElement>) => {
    router.push(pageLink);
  };

  return (
    <div className={clsx(styles["business-card"], className)} onClick={redirectToBusinessPage}>
      <Container>
        <Grid.Row>
          <Grid.Col sm={6} lg={4} xl={6}>
            <Card shadow>
              <Card.Content>
                <img
                  className={styles["business-card__cover"]}
                  src={content?.cover}
                  alt={`A representative image of ${content?.name}`}
                />
                <Typography.Headline4>{content?.name}</Typography.Headline4>
                <Typography.Subtitle>{content?.location}</Typography.Subtitle>
                <Typography.Description>{content?.description}</Typography.Description>
                <Container fluid>
                  <Grid.Row>
                    <Grid.Col className={styles["business-card__short"]}>
                      <Typography.Headline6>{truncateRaisedAmount(content.raised)}</Typography.Headline6>
                      <Typography.MiniDescription>Raised</Typography.MiniDescription>
                    </Grid.Col>
                    <Grid.Col className={styles["business-card__short"]}>
                      <Typography.Headline6>{content?.investors}</Typography.Headline6>
                      <Typography.MiniDescription>
                        {content?.investors > 1 ? "Investors" : "Investor"}
                      </Typography.MiniDescription>
                    </Grid.Col>
                  </Grid.Row>
                  <Visible lg xl>
                    <Grid.Row>
                      <Grid.Col className={styles["business-card__short"]}>
                        <Typography.Headline6>{content?.payback}</Typography.Headline6>
                        <Typography.MiniDescription>Payback</Typography.MiniDescription>
                      </Grid.Col>
                      <Grid.Col className={styles["business-card__short"]}>
                        <Typography.Headline6>{content?.daysLeft}</Typography.Headline6>
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
