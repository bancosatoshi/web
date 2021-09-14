import clsx from "clsx";
import styles from "./Card.module.scss";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({ children, className, backgroundImageUrl, url }) => {
  return (
    <div
      className={clsx(styles["card"], className, {
        [styles["card__link"]]: !!url,
      })}
    >
      {backgroundImageUrl && (
        <div
          className={clsx({
            [styles["card__background-image"]]: !!backgroundImageUrl,
          })}
          style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined }}
        />
      )}
      {children}
    </div>
  );
};

const Content = ({ children, className }) => <div className={clsx(styles["card__content"], className)}>{children}</div>;

Card.Content = Content;
