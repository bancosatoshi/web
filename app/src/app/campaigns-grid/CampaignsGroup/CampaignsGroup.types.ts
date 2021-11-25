import { BusinessCampaign, GetActiveBusinessCampaignsQuery } from "api/codegen";

export type CampaignsGroupProps = {
  className?: string;
  singleLine?: boolean;
  campaigns: GetActiveBusinessCampaignsQuery["getActiveBusinessCampaigns"];
  onCampaignClick: (...params: any) => void;
  campaignsFilter?: (value: BusinessCampaign, index: number, array: BusinessCampaign[]) => BusinessCampaign[] | [];
};
