import { Business } from "api/codegen";
import { QueryGetBusinessCampaignBySlugArgs, QueryResolvers } from "api/codegen/resolvers-types";
import { ResolversContext } from "api/graphql";
import getTotalInvestors from "providers/database/getTotalInvestors";
import getTotalSatsInvested from "providers/database/getTotalSatsInvested";

import { getPageContentByBusinessCampaignSlug } from "providers/wordpress/getPageContentByBusinessCampaignSlug";

const getBusinessCampaignBySlug: QueryResolvers["getBusinessCampaignBySlug"] = async (
  _,
  { input }: QueryGetBusinessCampaignBySlugArgs,
  { database }: ResolversContext,
): Promise<Business> => {
  try {
    const data = await database.dao.business_funding_campaign_plan.getBySlug({ slug: input.slug });

    if (!data || !data.business || !data.business.business_info) {
      throw new Error(`getBusinessCampaignBySlug: unable to find a record with slug ${input.slug}`);
    }

    const slug = data.getDataValue("slug");

    const content = await getPageContentByBusinessCampaignSlug(slug);

    const business_funding_campaign_plan_id = data.getDataValue("id")!;

    const campaignTransactions =
      await database.dao.business_funding_campaign_transactions.findAllByBusinessFundingCampaignId({
        business_funding_campaign_plan_id,
      });

    const totalInvestors = getTotalInvestors(campaignTransactions);
    const totalSatsInvested = getTotalSatsInvested(campaignTransactions);

    return {
      id: data.business.getDataValue("id")!,
      userId: data.business.getDataValue("user_id"),
      info: {
        id: data.business.business_info.getDataValue("id")!,
        businessId: data.business.business_info.getDataValue("business_id"),
        establisedAt: data.business.business_info.getDataValue("established_at"),
      },
      activeCampaign: {
        id: business_funding_campaign_plan_id,
        businessId: data.getDataValue("business_id"),
        investmentMultiple: data.getDataValue("investment_multiple"),
        minFundingInUSD: data.getDataValue("min_funding_in_usd"),
        maxFundingInUSD: data.getDataValue("max_funding_in_usd"),
        totalSatsInvested,
        daysLeft: data.days_left || 0,
        totalInvestors,
        expiresAt: data.getDataValue("expires_at"),
        maturityDate: data.getDataValue("maturity_date"),
        slug: data.getDataValue("slug"),
        btcPayServerStoreId: data.getDataValue("btcpayserver_store_id"),
        content,
      },
    };
  } catch (error) {
    // @TODO log error
    throw error;
  }
};

export default getBusinessCampaignBySlug;
