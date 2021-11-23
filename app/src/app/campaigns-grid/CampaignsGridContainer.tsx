import { useGetBusinessCampaignsQuery } from "api/codegen";
import { Typography } from "ui/typography/Typography";
import { CampaignsGrid } from "./CampaignsGrid";

export const CampaignsGridContainer = () => {
  const {
    data: getBusinessCampaignsQueryData,
    error: getBusinessCampaignsQueryError,
    loading: isGetBusinessByCampaignsQueryLoading,
  } = useGetBusinessCampaignsQuery();

  if (!getBusinessCampaignsQueryData || getBusinessCampaignsQueryError) {
    console.log(getBusinessCampaignsQueryError?.graphQLErrors);
    return null;
  }

  if (isGetBusinessByCampaignsQueryLoading) {
    // @TODO set a generic loading template
    return <Typography.Text>loading</Typography.Text>;
  }

  if (getBusinessCampaignsQueryData) {
    console.log(getBusinessCampaignsQueryData.getBusinessCampaigns);
  }

  const campaigns = getBusinessCampaignsQueryData.getBusinessCampaigns;

  return <CampaignsGrid campaigns={campaigns} />;
};
