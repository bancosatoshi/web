import { AnchorHTMLAttributes, ReactNode } from "react";

export type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
