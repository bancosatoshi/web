import { BusinessCampaign } from "api/codegen";
import { QueryResolvers } from "api/codegen/resolvers-types";
import { ResolversContext } from "api/graphql";

import { getPageContentByBusinessCampaignSlug } from "providers/wordpress/getPageContentBySlug";

const getActiveBusinessCampaigns: QueryResolvers["getActiveBusinessCampaigns"] = async (
  _,
  _params,
  { database }: ResolversContext,
) => {
  try {
    const { businessFundingCampaignPlanModel } = database.business;

    // @TODO we should get this from the business DAO. My bad, I noticed the need of the DAO today
    const activeCampaigns = await businessFundingCampaignPlanModel.findAll();

    if (!activeCampaigns || !activeCampaigns.length) {
      throw new Error(`getActiveBusinessCampaigns: unable to find business campaigns records`);
    }

    const mergeCampaignDataWithWordpressContent = activeCampaigns.map(async (campaign) => {
      const slug = campaign.getDataValue("slug");
      const content = await getPageContentByBusinessCampaignSlug(slug);

      return {
        id: campaign.getDataValue("id"),
        businessId: campaign.getDataValue("business_id"),
        expiresAt: campaign.getDataValue("expires_at"),
        slug,
        totalSatsInvested: campaign.getDataValue("total_sats_invested"),
        investmentMultiple: campaign.getDataValue("investment_multiple"),
        btcPayServerStoreId: campaign.getDataValue("btcpayserver_store_id"),
        content,
      } as BusinessCampaign;
    });

    return await Promise.all(mergeCampaignDataWithWordpressContent);
  } catch (error) {
    return error;
  }
};

export default getActiveBusinessCampaigns;
