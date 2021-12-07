import { BusinessCampaign } from "api/codegen";
import { QueryResolvers } from "api/codegen/resolvers-types";
import { ResolversContext } from "api/graphql";

import getTotalSatsInvested from "providers/database/getTotalSatsInvested";
import getTotalInvestors from "providers/database/getTotalInvestors";
import { getPageContentByBusinessCampaignSlug } from "providers/wordpress/getPageContentByBusinessCampaignSlug";

const getActiveBusinessCampaigns: QueryResolvers["getActiveBusinessCampaigns"] = async (
  _,
  _params,
  { database }: ResolversContext,
) => {
  const activeCampaigns = await database.dao.business_funding_campaign_plan.getAllActive();

  if (!activeCampaigns || !activeCampaigns.length) {
    throw new Error(`getActiveBusinessCampaigns: unable to find business campaigns records`);
  }

  const mergeCampaignDataWithWordpressContent = activeCampaigns.map(async (campaign) => {
    const slug = campaign.getDataValue("slug");
    const content = await getPageContentByBusinessCampaignSlug(slug);
    const business_funding_campaign_plan_id = campaign.getDataValue("id");
    const transactions = await database.dao.business_funding_campaign_transactions.findAllByBusinessFundingCampaignId({
      business_funding_campaign_plan_id,
    });

    const totalInvestors = getTotalInvestors(transactions);
    const totalSatsInvested = getTotalSatsInvested(transactions);

    return {
      id: business_funding_campaign_plan_id,
      businessId: campaign.getDataValue("business_id"),
      expiresAt: campaign.getDataValue("expires_at"),
      slug,
      totalSatsInvested,
      daysLeft: campaign.days_left,
      investmentMultiple: campaign.getDataValue("investment_multiple"),
      maxFundingInUSD: campaign.getDataValue("max_funding_in_usd"),
      minFundingInUSD: campaign.getDataValue("min_funding_in_usd"),
      maturityDate: campaign.getDataValue("maturity_date"),
      btcPayServerStoreId: campaign.getDataValue("btcpayserver_store_id"),
      totalInvestors,
      content,
    } as BusinessCampaign;
  });

  return Promise.all(mergeCampaignDataWithWordpressContent);
};

export default getActiveBusinessCampaigns;
