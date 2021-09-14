import clsx from "clsx";
import { Headline1 } from "./headline1/Headline1";
import styles from "./Typography.module.scss";
import { TypographyProps } from "./Typography.types";

export const Typography: React.FC<TypographyProps> = ({ children, className }) => {
  return <div className={clsx(styles["typography"], className)}>{children}</div>;
};

Typography.Headline1 = Headline1;
