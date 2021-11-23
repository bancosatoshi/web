import { useGetActiveBusinessCampaignsQuery } from "api/codegen";

import { Typography } from "ui/typography/Typography";

import { CampaignsGrid } from "./CampaignsGrid";

export const CampaignsGridContainer = () => {
  const {
    data: getBusinessCampaignsQueryData,
    error: getBusinessCampaignsQueryError,
    loading: isGetBusinessByCampaignsQueryLoading,
  } = useGetActiveBusinessCampaignsQuery();

  if (getBusinessCampaignsQueryError || !getBusinessCampaignsQueryData) {
    // @TODO redirect to generic error page

    console.log(getBusinessCampaignsQueryError);

    return null;
  }

  if (isGetBusinessByCampaignsQueryLoading) {
    // @TODO set a generic loading template
    return <Typography.Text>loading</Typography.Text>;
  }

  const campaigns = getBusinessCampaignsQueryData.getActiveBusinessCampaigns;

  return <CampaignsGrid campaigns={campaigns} />;
};
