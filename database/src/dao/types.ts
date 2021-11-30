import {
  BusinessFundingCampaignPlanModel,
  BusinessFundingCampaignPlanModelArgs,
  BusinessFundingCampaignTransactionsModel,
  BusinessFundingCampaignTransactionsModelArgs,
  BusinessInfoModel,
  BusinessModel,
} from "../business/model";
import { BusinessFundingCampaignPlanModelCreationArgs } from "../business/model/BusinessFundingCampaignPlanModel";
import { BusinessFundingCampaignTransactionsModelCreationArgs } from "../business/model/BusinessFundingCampaignTransactionsModel";
import { BusinessInfoModelCreationArgs } from "../business/model/BusinessInfoModel";
import { BusinessModelCreationArgs } from "../business/model/BusinessModel";

export type BusinessDAO = {
  business: {
    create: (args: BusinessModelCreationArgs) => Promise<BusinessModel>;
  };
  business_info: {
    create: (args: BusinessInfoModelCreationArgs) => Promise<BusinessInfoModel>;
  };
  business_funding_campaign_plan: {
    create: (args: BusinessFundingCampaignPlanModelCreationArgs) => Promise<BusinessFundingCampaignPlanModel>;
    getBySlug: (args: Pick<BusinessFundingCampaignPlanModelArgs, "slug">) => Promise<BusinessFundingCampaignPlanModel>;
    getAllActive: () => Promise<BusinessFundingCampaignPlanModel[]>;
    getByBtcPayServerStoreId: (
      args: Pick<BusinessFundingCampaignPlanModelArgs, "btcpayserver_store_id">,
    ) => Promise<BusinessFundingCampaignPlanModel>;
  };
  business_funding_campaign_transactions: {
    create: (
      args: BusinessFundingCampaignTransactionsModelCreationArgs,
    ) => Promise<BusinessFundingCampaignTransactionsModel>;
    findAllByBusinessFundingCampaignId: (
      args: Pick<BusinessFundingCampaignTransactionsModelArgs, "business_funding_campaign_plan_id">,
    ) => Promise<BusinessFundingCampaignTransactionsModel[]>;
    findAllByUserId: (
      args: Pick<BusinessFundingCampaignTransactionsModelArgs, "user_id">,
    ) => Promise<BusinessFundingCampaignTransactionsModel[]>;
  };
};
