import { LegacyRef, ReactNode } from "react";
import { Col, ColProps as RGSColProps, Row, RowProps as RGSRowProps } from "react-grid-system";

export type GridProps = {
  children: ReactNode;
  className?: string;
};

export type ColProps = RGSColProps & {
  justifyContent?: "end" | "center";
  children: ReactNode;
  className?: string;
  ref?: LegacyRef<Col>;
};

export type RowProps = RGSRowProps & {
  children: ReactNode;
  className?: string;
  ref?: LegacyRef<Row>;
};
