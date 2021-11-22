import { useGetBusinessCampaignBySlugQuery } from "api/codegen";
import { useRouter } from "next/router";
import React from "react";

import { Typography } from "ui/typography/Typography";

import { BusinessDetails } from "./BusinessDetails";
import { BusinessFundingCampaignContainerProps } from "./BusinessDetails.types";

export const BusinessDetailsContainer = ({ content }: BusinessFundingCampaignContainerProps) => {
  const router = useRouter();

  const { campaignSlug } = router.query;

  const {
    data: getBusinessCampaignBySlugQueryData,
    error: getBusinessCampaignBySlugQueryError,
    loading: isGetBusinessByCampaignSlugQueryLoading,
  } = useGetBusinessCampaignBySlugQuery({ variables: { input: { slug: campaignSlug as string } } });

  if (getBusinessCampaignBySlugQueryError || !getBusinessCampaignBySlugQueryData) {
    // @TODO redirect to generic error page
    console.log(getBusinessCampaignBySlugQueryError);

    return null;
  }

  if (isGetBusinessByCampaignSlugQueryLoading) {
    // @TODO set a generic loading template
    return <Typography.Text>loading</Typography.Text>;
  }

  const campaign = getBusinessCampaignBySlugQueryData.getBusinessCampaignBySlug;

  return <BusinessDetails content={content} campaign={campaign} />;
};
