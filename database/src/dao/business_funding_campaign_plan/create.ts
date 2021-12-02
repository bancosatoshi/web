import { ModelCtor } from "sequelize/dist";
import { BusinessFundingCampaignPlanModel } from "../../business/model";
import { BusinessDAO } from "../types";

export default (
  model: ModelCtor<BusinessFundingCampaignPlanModel>,
): BusinessDAO["business_funding_campaign_plan"]["create"] => {
  return async (args) => await model.create(args, { logging: false });
};
