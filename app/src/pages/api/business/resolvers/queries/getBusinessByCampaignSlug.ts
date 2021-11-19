import { QueryGetBusinessByCampaignSlugArgs } from "api/codegen";
import { QueryResolvers } from "api/codegen/resolvers-types";
import { ResolversContext } from "api/graphql";

const getBusinessByCampaignSlug: QueryResolvers["getBusinessByCampaignSlug"] = async (
  _,
  { input }: QueryGetBusinessByCampaignSlugArgs,
  { database }: ResolversContext,
) => {
  try {
    const [data] = await database.business.businessModel.findOrCreate({
      where: {
        user_id: "123",
      },
    });

    return {
      id: data.getDataValue("id"),
      userId: data.getDataValue("user_id"),
      info: {
        id: data.getDataValue("id"),
        establisedAt: data.getDataValue("established_at"),
      },
      activeCampaign: {
        wordpressPageSlug: data.getDataValue("slug"),
        btcPayServerStoreId: data.getDataValue("btcpayserver_store_id"),
      },
    };
  } catch (error) {
    return error;
  }
};

export default getBusinessByCampaignSlug;
