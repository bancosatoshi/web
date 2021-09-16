import clsx from "clsx";
import { Col as RGSCol, ColProps } from "react-grid-system";
import styles from "./Grid.module.scss";
import { GridProps } from "./Grid.types";

export const Grid: React.FC<GridProps> = ({ children, className }) => {
  return <div className={clsx(styles["grid"], className)}>{children}</div>;
};

// TODO create Container and Row extensions

const Col: React.FC<ColProps & { justifyContent: "end" | "center" }> = ({ children, justifyContent, className }) => (
  <RGSCol className={clsx(className, { [styles["col__justify-content--end"]]: justifyContent === "end" })}>
    {children}
  </RGSCol>
);

Grid.Col = Col;
