import { GetBusinessCampaignsQuery } from "api/codegen";

export type BusinessCampaigns = GetBusinessCampaignsQuery["getBusinessCampaigns"];
export type BusinessCampaign = any; //BusinessCampaigns[0];

export type CampaignsGridProps = {
  className?: string;
  campaigns: BusinessCampaigns;
};
