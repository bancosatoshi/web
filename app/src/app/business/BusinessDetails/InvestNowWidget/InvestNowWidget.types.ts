import { BusinessCampaignContent } from "api/codegen";
import { ReactNode } from "react";

export type InvestNowWidgetProps = {
  children?: ReactNode;
  className?: string;
  content: BusinessCampaignContent;
};
