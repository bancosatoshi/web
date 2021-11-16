import clsx from "clsx";
import styles from "./BusinessCard.module.scss";
import Link from "next/link";

import { Icon } from "ui/icon/Icon";
import { Card } from "ui/card/Card";
import { BusinessCardProps } from "./BusinessCard.types";
import { Typography } from "ui/typography/Typography";

export const BusinessCard: React.FC<BusinessCardProps> = ({ businessLink, content, isExpandable, className }) => {
  const { businessBackground, businessAvatar, title, location, description, raised, investors, daysLeft, payback } =
    content;

  //Hardcoded for now, needs a formula
  const totalFunded = `100% FUNDED`;
  const contentBehavior = isExpandable ? "expandable" : "static";

  return (
    <>
      <Link href={businessLink}>
        <a className={styles["business-card__link"]}>
          <Card className={clsx(styles["business-card"], className)}>
            <div className={styles["business-card__container"]}>
              <div
                className={styles["business-card__header"]}
                style={{ backgroundImage: `url("${businessBackground}")` }}
              >
                <Typography.Text>
                  <span>{totalFunded}</span>
                </Typography.Text>
              </div>

              <div className={styles[`business-card__content_${contentBehavior}`]}>
                <img src={businessAvatar} className={styles["business-card__avatar"]} alt="" />

                <div className={styles["business-card__content-info"]}>
                  <div className={styles["business-card__general-info"]}>
                    <div className={styles["business-card__title-section"]}>
                      <Typography.Headline4>{title}</Typography.Headline4>
                      <Typography.Text>
                        <Icon name="icon-map-marker" className={styles["business-card__location-icon"]} />
                        <span>{location}</span>
                      </Typography.Text>
                    </div>
                    <Typography.Text className={styles["business-card__description"]}>{description}</Typography.Text>
                  </div>

                  <div className={styles["business-card__investment-info"]}>
                    <div className={styles["business-card__investment-value-rigth"]}>
                      <Typography.Headline5>{raised}</Typography.Headline5>
                      <Typography.Text>Recaudado</Typography.Text>
                    </div>
                    <div className={styles["business-card__investment-value-left"]}>
                      <Typography.Headline5>{investors}</Typography.Headline5>
                      <Typography.Text>Inversores</Typography.Text>
                    </div>
                  </div>
                </div>

                {isExpandable && (
                  <div className={styles["business-card__investment-info-hidden"]}>
                    <div className={styles["business-card__investment-value-rigth"]}>
                      <Typography.Headline5>{daysLeft}</Typography.Headline5>
                      <Typography.Text>Días Restantes</Typography.Text>
                    </div>
                    <div className={styles["business-card__investment-value-left"]}>
                      <Typography.Headline5>{payback}</Typography.Headline5>
                      <Typography.Text>Payback</Typography.Text>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </a>
      </Link>
    </>
  );
};
