import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export type SwitchProps = {
  children?: ReactNode;
  className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
