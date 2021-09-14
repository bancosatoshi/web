import clsx from "clsx";
import styles from "./Headline1.module.scss";
import { Headline1Props } from "./Headline1.types";

export const Headline1: React.FC<Headline1Props> = ({ children, className }) => {
  return <h1 className={clsx(styles["headline1"], className)}>{children}</h1>;
};
