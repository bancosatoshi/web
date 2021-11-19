import { useGetBusinessByCampaignSlugQuery } from "api/codegen";
import { useRouter } from "next/router";
import React from "react";

import { BusinessDetails } from "./BusinessDetails";
import { BusinessDetailsProps } from "./BusinessDetails.types";

export const BusinessDetailsContainer = ({ content }: BusinessDetailsProps) => {
  const router = useRouter();

  const { campaignSlug } = router.query;

  const {
    data: getBusinessByCampaignSlugQueryData,
    error: getBusinessByCampaignSlugQueryError,
    loading: isGetBusinessByCampaignSlugQueryLoading,
  } = useGetBusinessByCampaignSlugQuery({ variables: { input: { slug: campaignSlug as string } } });

  if (getBusinessByCampaignSlugQueryError || !getBusinessByCampaignSlugQueryData) {
    // @TODO redirect to generic error page
    console.log(getBusinessByCampaignSlugQueryError);

    return null;
  }

  if (isGetBusinessByCampaignSlugQueryLoading) {
    // @TODO set a generic loading template
    return "loading";
  }

  const campaign = getBusinessByCampaignSlugQueryData.getBusinessByCampaignSlug;

  return <BusinessDetails content={content} campaign={campaign} />;
};
