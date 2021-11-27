import {
  BusinessFundingCampaignPlanModel,
  BusinessFundingCampaignPlanModelArgs,
  BusinessFundingCampaignTransactionsModel,
  BusinessFundingCampaignTransactionsModelArgs,
  BusinessInfoModel,
  BusinessInfoModelArgs,
  BusinessModel,
  BusinessModelArgs,
} from "../business/model";

export type BusinessDAO = {
  business: {
    create: (args: BusinessModelArgs) => Promise<BusinessModel>;
  };
  business_info: {
    create: (args: BusinessInfoModelArgs) => Promise<BusinessInfoModel>;
  };
  business_funding_campaign_plan: {
    create: (args: BusinessFundingCampaignPlanModelArgs) => Promise<BusinessFundingCampaignPlanModel>;
    getBySlug: (args: Pick<BusinessFundingCampaignPlanModelArgs, "slug">) => Promise<BusinessFundingCampaignPlanModel>;
    getAllActive: () => Promise<BusinessFundingCampaignPlanModel[]>;
    getByBtcPayServerStoreId: (
      args: Pick<BusinessFundingCampaignPlanModelArgs, "btcpayserver_store_id">,
    ) => Promise<BusinessFundingCampaignPlanModel>;
  };
  business_funding_campaign_transactions: {
    create: (args: BusinessFundingCampaignTransactionsModelArgs) => Promise<BusinessFundingCampaignTransactionsModel>;
    findAllByBusinessFundingCampaignId: (
      args: Pick<BusinessFundingCampaignTransactionsModelArgs, "business_funding_campaign_plan_id">,
    ) => Promise<BusinessFundingCampaignTransactionsModel[]>;
    findAllByUserId: (
      args: Pick<BusinessFundingCampaignTransactionsModelArgs, "user_id">,
    ) => Promise<BusinessFundingCampaignTransactionsModel[]>;
  };
};
