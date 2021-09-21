import { HTMLAttributes, ReactNode } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  backgroundImageUrl?: string;
  url?: string;
};

export type CardContentProps = {
  children: ReactNode;
  className?: string;
};
