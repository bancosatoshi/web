import { ModelCtor } from "sequelize/dist";
import {
  BusinessFundingCampaignTransactionsModel,
  BusinessFundingCampaignTransactionsModelArgs,
} from "../../business/model";
import { BusinessDAO } from "../types";

export default (
  model: ModelCtor<BusinessFundingCampaignTransactionsModel>,
): BusinessDAO["business_funding_campaign_transactions"]["findAllByUserId"] => {
  return async ({ user_id }) =>
    await model.findAll({
      where: {
        user_id,
      },
      logging: false,
    });
};
