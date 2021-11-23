import { GetActiveBusinessCampaignsQuery } from "api/codegen";

export type CampaignsGroupProps = {
  className?: string;
  campaigns: GetActiveBusinessCampaignsQuery["getActiveBusinessCampaigns"];
};
