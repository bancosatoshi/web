import { QueryResolvers } from "api/codegen/resolvers-types";
import { ResolversContext } from "api/graphql";
import { getPageContentByBusinessCampaignSlug } from "lib/wordpress/getPageContentBySlug";

const getBusinessCampaigns: QueryResolvers["getBusinessCampaigns"] = async (_, { database }: ResolversContext) => {
  try {
    const data = await database.business.businessFundingCampaignPlanModel.findAll();

    if (!data || !data.length) {
      throw new Error(`getBusinessCampaigns: unable to find business campaigns records: ${JSON.stringify(database)}`);
    }

    const businessCampaignsData = data.map(async (bc) => {
      const slug = bc.getDataValue("slug");
      const pageData = await getPageContentByBusinessCampaignSlug(slug);

      return {
        id: bc.getDataValue("id") as string,
        slug,
        totalSatsInvested: bc.getDataValue("total_sats_invested"),
        investmentMultiple: bc.getDataValue("investment_multiple"),
        btcPayServerStoreId: bc.getDataValue("btcpayserver_store_id"),
        content: {
          ...pageData,
        },
      };
    });

    const businessCampaignsDataResolved = await Promise.allSettled(businessCampaignsData);

    const businessCampaigns = businessCampaignsDataResolved.reduce((bcs: any, currentBusinessCampaign) => {
      if (currentBusinessCampaign.status !== "rejected") {
        bcs.concat(currentBusinessCampaign.value);
      }
    }, []);

    return businessCampaigns;
  } catch (error) {
    return error;
  }
};

export default getBusinessCampaigns;
