import { BusinessCampaign, BusinessCampaigns } from "../CampaignsGrid.types";

export type CampaignsGroupProps = {
  className?: string;
  limit?: number | undefined;
  campaigns: BusinessCampaigns;
  filter?: (bc: BusinessCampaign) => boolean;
};
