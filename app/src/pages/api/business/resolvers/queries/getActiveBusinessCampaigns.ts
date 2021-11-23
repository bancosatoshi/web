import { QueryResolvers } from "api/codegen/resolvers-types";
import { ResolversContext } from "api/graphql";
import { getPageContentByBusinessCampaignSlug } from "src/providers/wordpress/getPageContentBySlug";

const getActiveBusinessCampaigns: QueryResolvers["getActiveBusinessCampaigns"] = async (
  _,
  { database }: ResolversContext,
) => {
  try {
    const model = database.business.businessFundingCampaignPlanModel;
    const data = await model.findAll({ where: { "": "" } });

    if (!data || !data.length) {
      throw new Error(`getBusinessCampaigns: unable to find business campaigns records`);
    }

    const mergeCampaignDataWithWordpressContent = data.map(async (bc) => {
      const slug = bc.getDataValue("slug");
      const pageData = await getPageContentByBusinessCampaignSlug(slug);

      return {
        id: bc.getDataValue("id"),
        slug,
        totalSatsInvested: bc.getDataValue("total_sats_invested"),
        investmentMultiple: bc.getDataValue("investment_multiple"),
        btcPayServerStoreId: bc.getDataValue("btcpayserver_store_id"),
        content: {
          ...pageData,
        },
      };
    });

    const businessCampaignsData = await Promise.allSettled(mergeCampaignDataWithWordpressContent);

    const businessCampaigns = businessCampaignsData.reduce((bcs: any, currentBusinessCampaign) => {
      if (currentBusinessCampaign.status !== "rejected") {
        bcs.concat(currentBusinessCampaign.value);
      }
    }, []);

    return businessCampaigns;
  } catch (error) {
    return error;
  }
};

export default getActiveBusinessCampaigns;
