import clsx from "clsx";
import { Col as RGSCol, ColProps, Row as RGSRow, RowProps } from "react-grid-system";
import styles from "./Grid.module.scss";
import { GridProps } from "./Grid.types";

export const Grid: React.FC<GridProps> = ({ children, className }) => {
  return <div className={clsx(styles["grid"], className)}>{children}</div>;
};

// TODO create Container and Row extensions

const Row: React.FC<RowProps> = ({ children, className, ...props }) => (
  <RGSRow className={clsx(className)} {...props}>
    {children}
  </RGSRow>
);

const Col: React.FC<ColProps & { justifyContent: "end" | "center" }> = ({
  children,
  justifyContent,
  className,
  ...props
}) => (
  <RGSCol className={clsx(className, { [styles["col__justify-content--end"]]: justifyContent === "end" })} {...props}>
    {children}
  </RGSCol>
);

Grid.Row = Row;
Grid.Col = Col;
