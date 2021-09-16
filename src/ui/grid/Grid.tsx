import clsx from "clsx";
import { Col as RGSCol, Row as RGSRow } from "react-grid-system";
import styles from "./Grid.module.scss";
import { ColProps, GridProps, RowProps } from "./Grid.types";

export const Grid: React.FC<GridProps> & { Col: React.FC<ColProps>; Row: React.FC<RowProps> } = ({
  children,
  className,
}) => {
  return <div className={clsx(styles["grid"], className)}>{children}</div>;
};

// TODO create Container and Row extensions

const Row: React.FC<RowProps> = ({ children, className, ...props }) => (
  <RGSRow className={clsx(className)} {...props}>
    {children}
  </RGSRow>
);

const Col: React.FC<ColProps> = ({ children, justifyContent, className, ...props }) => (
  <RGSCol className={clsx(className, { [styles["col__justify-content--end"]]: justifyContent === "end" })} {...props}>
    {children}
  </RGSCol>
);

Grid.Row = Row;
Grid.Col = Col;
