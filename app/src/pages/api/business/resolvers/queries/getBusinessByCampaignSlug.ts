import { QueryGetBusinessByCampaignSlugArgs } from "api/codegen";
import { QueryResolvers } from "api/codegen/resolvers-types";
import { ResolversContext } from "api/graphql";
import { client as supabase } from "src/providers/supabase/client";

const getBusinessByCampaignSlug: QueryResolvers["getBusinessByCampaignSlug"] = async (
  _,
  { input }: QueryGetBusinessByCampaignSlugArgs,
  { database }: ResolversContext,
) => {
  try {
    database.business.businessInfoModel.findOrCreate({
      where: {
        user_id: "123",
      },
    });

    const { data: campaignData, error: campaignError } = await supabase
      .from("business_funding_campaign_plan")
      .select(
        `
        *,
        business:business_id
      `,
      )
      .eq("slug", input.slug)
      .single();

    if (campaignError) {
      throw campaignError;
    }

    const { data: businessInfoData, error: businessInfoError } = await supabase
      .from("business_info")
      .select(
        `
        *,
        business:business_id (
          business_info.business_id, business.user_id
        )
      `,
      )
      .eq("business_id", campaignData.business_id)
      .single();

    if (businessInfoError) {
      throw businessInfoError;
    }

    return {
      id: campaignData.business_id,
      userId: businessInfoData.user_id,
      info: {
        id: businessInfoData.id,
        establisedAt: businessInfoData.established_at,
      },
      activeCampaign: {
        wordpressPageSlug: campaignData.slug,
        btcPayServerStoreId: campaignData.btcpayserver_store_id,
      },
    };
  } catch (error) {
    return error;
  }
};

export default getBusinessByCampaignSlug;
