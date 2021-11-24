import { useGetBusinessCampaignBySlugQuery } from "api/codegen";
import { useRouter } from "next/router";
import React from "react";

import { Typography } from "ui/typography/Typography";

import { BusinessDetails } from "./BusinessDetails";

export const BusinessDetailsContainer = () => {
  const router = useRouter();

  const { campaignSlug } = router.query;

  const {
    data: getBusinessCampaignBySlugQueryData,
    error: getBusinessCampaignBySlugQueryError,
    loading: isGetBusinessByCampaignSlugQueryLoading,
  } = useGetBusinessCampaignBySlugQuery({ variables: { input: { slug: campaignSlug as string } } });

  if (isGetBusinessByCampaignSlugQueryLoading) {
    // @TODO set a generic loading template
    return <Typography.Text>loading</Typography.Text>;
  }

  if (
    getBusinessCampaignBySlugQueryError ||
    !getBusinessCampaignBySlugQueryData?.getBusinessCampaignBySlug?.activeCampaign
  ) {
    // @TODO redirect to generic error page
    console.log(getBusinessCampaignBySlugQueryError);

    return null;
  }

  const campaign = getBusinessCampaignBySlugQueryData.getBusinessCampaignBySlug.activeCampaign;

  return <BusinessDetails campaign={campaign} />;
};
