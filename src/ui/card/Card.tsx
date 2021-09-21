import clsx from "clsx";
import React from "react";

import styles from "./Card.module.scss";
import { CardContentProps, CardProps } from "./Card.types";

export const Card: React.FC<CardProps> & { Content: React.FC<CardContentProps> } = ({
  children,
  className,
  backgroundImageUrl,
  url,
  ...props
}) => (
  <div
    {...props}
    className={clsx(styles.card, className, {
      [styles.card__link]: !!url || !!props.onClick,
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

const Content: React.FC<CardContentProps> = ({ children, className }) => (
  <div className={clsx(styles.card__content, className)}>{children}</div>
);

Card.Content = Content;
