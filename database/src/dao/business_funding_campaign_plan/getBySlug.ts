import { ModelCtor } from "sequelize/dist";
import { BusinessFundingCampaignPlanModel, BusinessInfoModel, BusinessModel } from "../../business/model";
import { BusinessDAO } from "../types";

export default (
  model: ModelCtor<BusinessFundingCampaignPlanModel>,
  businessModel: ModelCtor<BusinessModel>,
  businessInfoModel: ModelCtor<BusinessInfoModel>,
): BusinessDAO["business_funding_campaign_plan"]["getBySlug"] => {
  return async ({ slug }) =>
    await model.findOne({
      where: {
        slug,
      },
      include: [
        {
          model: businessModel,
          include: [businessInfoModel],
        },
      ],
    });
};
