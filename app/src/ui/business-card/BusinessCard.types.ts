import { ReactNode, CSSProperties } from "react";

interface BusinessCardData {
  businessBackground: string;
  businessAvatar: string;
  title: string;
  description: string;
  location: string;
  raised: string;
  investors: number;
  daysLeft?: number;
  payback?: string;
}

export type BusinessCardProps = {
  className?: string;
  businessLink: string;
  content: BusinessCardData;
  isExpandable?: boolean;
};
