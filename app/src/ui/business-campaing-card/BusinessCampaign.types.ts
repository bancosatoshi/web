import { BusinessCampaign } from "app/campaigns-grid/CampaignsGrid.types";

export type BusinessCampaignCardProps = {
  className?: string;
  campaign: BusinessCampaign;
  onClick?: () => void | undefined;
};
