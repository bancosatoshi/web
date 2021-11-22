import { BusinessDetailsContent } from "app/business/BusinessDetails/BusinessDetails.types";

type BusinessCampaign = {
  expiresAt: number;
  totalSatsInvested: number;
  investmentMultiple: string;
  investors: number;
};

export type BusinessCampaignCardProps = {
  className?: string;
  campaign: BusinessCampaign;
  content: BusinessDetailsContent;
  onClick: () => void;
};
