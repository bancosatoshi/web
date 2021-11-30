import sequelize from "sequelize";
import { ModelCtor } from "sequelize/dist";
import {
  BusinessFundingCampaignTransactionsModel,
  BusinessFundingCampaignTransactionsModelArgs,
} from "../../business/model";
import { BusinessDAO } from "../../dao/types";

export default (
  model: ModelCtor<BusinessFundingCampaignTransactionsModel>,
): BusinessDAO["business_funding_campaign_transactions"]["findAllByBusinessFundingCampaignId"] => {
  return async ({ business_funding_campaign_plan_id }) =>
    await model.findAll({
      where: {
        business_funding_campaign_plan_id,
      },
      logging: false,
    });
};
