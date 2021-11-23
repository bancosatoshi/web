import { GetActiveBusinessCampaignsQuery } from "api/codegen";

export type BusinessCampaigns = GetActiveBusinessCampaignsQuery["getActiveBusinessCampaigns"];

export type CampaignsGridProps = {
  className?: string;
  campaigns: BusinessCampaigns;
};
