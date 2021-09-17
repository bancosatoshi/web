import { HTMLAttributes, ReactNode } from "react";

export type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export type AnchorProps = TypographyProps & HTMLAttributes<HTMLAnchorElement>;
