import createBusiness from "./business/create";
import createBusinessInfo from "./business_info/create";
import createBusinessFundingCampaignPlan from "./business_funding_campaign_plan/create";
import getBySlug from "./business_funding_campaign_plan/getBySlug";
import getAllActive from "./business_funding_campaign_plan/getAllActive";
import createBusinessFundingCampaignTransaction from "./business_funding_campaign_transactions/create";
import findAllByBusinessFundingCampaignId from "./business_funding_campaign_transactions/findAllByBusinessFundingCampaignId";
import findAllByUserId from "./business_funding_campaign_transactions/findAllByUserId";

export default {
  business: {
    create: createBusiness,
  },
  business_info: {
    create: createBusinessInfo,
  },
  business_funding_campaign_plan: {
    create: createBusinessFundingCampaignPlan,
    getBySlug,
    getAllActive,
  },
  business_funding_campaign_transactions: {
    create: createBusinessFundingCampaignTransaction,
    findAllByBusinessFundingCampaignId,
    findAllByUserId,
  },
};
