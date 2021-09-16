import { ReactNode } from "react";

export type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export type AnchorProps = TypographyProps & { target?: string; href: string };
