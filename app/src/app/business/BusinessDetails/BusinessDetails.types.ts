import { GetBusinessCampaignBySlugQuery } from "api/codegen";
import { ReactNode } from "react";

export type BusinessDetailsContent = {
  title: string;
  description: string;
  country: string;
  category: string;
  latitude: string;
  longitude: string;
  establishedAt: string;
  instagram: string;
  website: string;
  asHtmlString: string;
  media: BusinessDetailsMedia;
  markerIcon: string;
};

export type BusinessDetailsMedia = {
  featuredImageUrl?: string;
};

export type BusinessFundingCampaignContainerProps = {
  children?: ReactNode;
  content: BusinessDetailsContent;
};

export type BusinessDetailsProps = {
  children?: ReactNode;
  content: BusinessDetailsContent;
  campaign: GetBusinessCampaignBySlugQuery["getBusinessCampaignBySlug"];
};
