import clsx from "clsx";
import styles from "./BusinessCard.module.scss";
import Link from "next/link";

import { BusinessCardProps } from "./BusinessCard.types";

export const BusinessCard: React.FC<BusinessCardProps> = ({ businessLink, content, isExpandable, className }) => {
  const { businessBackground, businessAvatar } = content;

  return (
    <>
      <Link href={businessLink}>
        <a>
          <div className={clsx(styles["business-card"], className)}>
            <div className={styles["business-card__container"]}>
              <div className={styles["business-card__image"]}>
                <img src={businessBackground} alt="business background image" />
                <span className={styles["business-card__tag"]}>{``}</span>
              </div>
              <div className={styles[`${isExpandable ? "business-card__expandable" : "business-card__normal"}`]}>
                <div className={styles["business-card__content"]}></div>
                {isExpandable && <div className={styles["business-card_hidden-content"]}></div>}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};
