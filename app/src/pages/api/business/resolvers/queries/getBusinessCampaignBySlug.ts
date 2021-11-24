import { Business } from "api/codegen";
import { QueryGetBusinessCampaignBySlugArgs, QueryResolvers } from "api/codegen/resolvers-types";
import { ResolversContext } from "api/graphql";

import { getPageContentByBusinessCampaignSlug } from "providers/wordpress/getPageContentBySlug";

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

    return {
      id: data.business.getDataValue("id")!,
      userId: data.business.getDataValue("user_id"),
      info: {
        id: data.business.business_info.getDataValue("id")!,
        businessId: data.business.business_info.getDataValue("business_id"),
        establisedAt: data.business.business_info.getDataValue("established_at"),
      },
      activeCampaign: {
        id: data.getDataValue("id")!,
        businessId: data.getDataValue("business_id"),
        investmentMultiple: data.getDataValue("investment_multiple"),
        totalSatsInvested: 12345678,
        expiresAt: data.getDataValue("expires_at"),
        slug: data.getDataValue("slug"),
        btcPayServerStoreId: data.getDataValue("btcpayserver_store_id"),
        content,
      },
    };
  } catch (error) {
    return error;
  }
};

export default getBusinessCampaignBySlug;
