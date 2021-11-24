import { ModelCtor } from "sequelize/dist";
import {
  BusinessFundingCampaignTransactionsModel,
  BusinessFundingCampaignTransactionsModelArgs,
} from "../../business/model";
import { BusinessDAO } from "../types";

export default (
  model: ModelCtor<BusinessFundingCampaignTransactionsModel>,
): BusinessDAO["business_funding_campaign_transactions"]["create"] => {
  return async (args: BusinessFundingCampaignTransactionsModelArgs) => await model.create(args, { logging: false });
};
