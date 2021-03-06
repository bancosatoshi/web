import { ModelCtor } from "sequelize/dist";
import { BusinessFundingCampaignPlanModel, BusinessInfoModel, BusinessModel } from "../../business/model";
import { BusinessDAO } from "../types";

export default (
  model: ModelCtor<BusinessFundingCampaignPlanModel>,
): BusinessDAO["business_funding_campaign_plan"]["getAllActive"] => {
  // @TODO filter by expires_at date
  return async () => await model.findAll();
};
