import { ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
  className?: string;
  backgroundImageUrl?: string;
  url?: string;
};

export type CardContentProps = {
  children: ReactNode;
  className?: string;
};
