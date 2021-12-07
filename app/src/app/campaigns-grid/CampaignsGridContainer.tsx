import { useGetActiveBusinessCampaignsQuery } from "api/codegen";

import { Typography } from "ui/typography/Typography";

import { CampaignsGrid } from "./CampaignsGrid";

export const CampaignsGridContainer = () => {
  const {
    data: getBusinessCampaignsQueryData,
    error: getBusinessCampaignsQueryError,
    loading: isGetBusinessByCampaignsQueryLoading,
  } = useGetActiveBusinessCampaignsQuery();

  if (isGetBusinessByCampaignsQueryLoading) {
    // @TODO set a generic loading template
    return <Typography.Text>loading</Typography.Text>;
  }

  if (getBusinessCampaignsQueryError || !getBusinessCampaignsQueryData?.getActiveBusinessCampaigns) {
    // @TODO redirect to generic error page

    return null;
  }

  const campaigns = getBusinessCampaignsQueryData.getActiveBusinessCampaigns;

  return <CampaignsGrid campaigns={campaigns} />;
};
