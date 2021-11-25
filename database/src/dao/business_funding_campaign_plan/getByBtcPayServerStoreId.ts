import { ModelCtor } from "sequelize/dist";
import { BusinessFundingCampaignPlanModel, BusinessInfoModel, BusinessModel } from "../../business/model";
import { BusinessDAO } from "../types";

export default (
  model: ModelCtor<BusinessFundingCampaignPlanModel>,
  businessModel: ModelCtor<BusinessModel>,
  businessInfoModel: ModelCtor<BusinessInfoModel>,
): BusinessDAO["business_funding_campaign_plan"]["getByBtcPayServerStoreId"] => {
  return async ({ btcpayserver_store_id }) =>
    await model.findOne({
      where: {
        btcpayserver_store_id,
      },
      include: [
        {
          model: businessModel,
          include: [businessInfoModel],
        },
      ],
    });
};
