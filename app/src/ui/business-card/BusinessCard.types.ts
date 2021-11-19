type BusinessCardData = {
  cover: string;
  name: string;
  description: string;
  location: string;
  raised: number;
  investors: number;
  daysLeft?: number;
  payback?: string;
};

export type BusinessCardProps = {
  className?: string;
  pageLink: string;
  content: BusinessCardData;
};
