import { ReactNode } from "react";

export type BusinessDetailsMedia = {
  featuredImageUrl?: string;
};

export type BusinessDetailsProps = {
  children?: ReactNode;
  content: string;
  media: BusinessDetailsMedia;
};
