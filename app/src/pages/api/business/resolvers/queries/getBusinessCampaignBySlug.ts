import { QueryGetBusinessCampaignBySlugArgs, QueryResolvers } from "api/codegen/resolvers-types";
import { ResolversContext } from "api/graphql";

const getBusinessCampaignBySlug: QueryResolvers["getBusinessCampaignBySlug"] = async (
  _,
  { input }: QueryGetBusinessCampaignBySlugArgs,
  { database }: ResolversContext,
) => {
  try {
    const data = await database.business.businessFundingCampaignPlanModel.findOne({
      where: {
        slug: input.slug,
      },
      include: [
        {
          model: database.business.businessModel,
          include: [database.business.businessInfoModel],
        },
      ],
    });

    if (!data || !data.business || !data.business.business_info) {
      throw new Error(`getBusinessCampaignBySlug: unable to find a record with slug ${input.slug}`);
    }

    return {
      id: data.getDataValue("id"),
      userId: data.business.getDataValue("user_id"),
      info: {
        id: data.business.business_info.getDataValue("id"),
        establisedAt: data.business.business_info.getDataValue("established_at"),
      },
      activeCampaign: {
        id: data.getDataValue("id"),
        slug: data.getDataValue("slug"),
        btcPayServerStoreId: data.getDataValue("btcpayserver_store_id"),
      },
    };
  } catch (error) {
    return error;
  }
};

export default getBusinessCampaignBySlug;
