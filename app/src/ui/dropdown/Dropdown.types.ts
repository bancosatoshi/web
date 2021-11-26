import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ColProps, ContainerProps } from "ui/grid/Grid.types";

export type DropdownProps = {
  children: ReactNode;
  className?: string;
};

export type ToggleProps = {
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type MenuProps = {
  children: ReactNode;
  className?: string;
  open: boolean;
} & ContainerProps;

export type ItemProps = {
  children: ReactNode;
  className?: string;
} & ColProps;
