import { useGetBusinessCampaignBySlugQuery } from "api/codegen";
import { useRouter } from "next/router";
import React from "react";

import { BusinessDetails } from "./BusinessDetails";
import { BusinessDetailsProps } from "./BusinessDetails.types";

export const BusinessDetailsContainer = ({ content }: BusinessDetailsProps) => {
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
    return "loading";
  }

  const campaign = getBusinessCampaignBySlugQueryData.getBusinessCampaignBySlug;

  return <BusinessDetails content={content} campaign={campaign} />;
};
