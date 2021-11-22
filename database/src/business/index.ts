import { Model, ModelCtor, Sequelize, SyncOptions } from "sequelize";
import {
  BusinessFundingCampaignPlanModel,
  BusinessFundingCampaignPlanModelArgs,
  BusinessModelArgs,
  BusinessInfoModelArgs,
} from "./model";
import BusinessInfoModel from "./model/BusinessInfoModel";
import BusinessModel from "./model/BusinessModel";

export type BusinessModels = {
  businessModel: ModelCtor<BusinessModel>;
  businessInfoModel: ModelCtor<BusinessInfoModel>;
  businessFundingCampaignPlanModel: ModelCtor<BusinessFundingCampaignPlanModel>;
};

export default {
  init: async (driver: Sequelize, syncOptions?: SyncOptions): Promise<BusinessModels> => {
    const Business = driver.define(BusinessModel.tableName, BusinessModel.rawAttributes, BusinessModel.config);

    const BusinessInfo = driver.define(
      BusinessInfoModel.tableName,
      BusinessInfoModel.rawAttributes,
      BusinessInfoModel.config,
    );

    const BusinessFundingCampaignPlan = driver.define(
      BusinessFundingCampaignPlanModel.tableName,
      BusinessFundingCampaignPlanModel.rawAttributes,
      BusinessFundingCampaignPlanModel.config,
    );

    Business.hasOne(BusinessInfo, {
      foreignKey: { allowNull: true },
    });

    BusinessInfo.belongsTo(Business, {
      foreignKey: { allowNull: true },
    });

    Business.hasMany(BusinessFundingCampaignPlan, {
      foreignKey: { allowNull: true },
      constraints: false,
    });

    BusinessFundingCampaignPlan.belongsTo(Business, {
      foreignKey: { allowNull: true },
    });

    console.log("Syncing Business Models");
    await driver.sync(syncOptions);

    return {
      businessModel: driver.model(BusinessModel.tableName),
      businessInfoModel: driver.model(BusinessInfoModel.tableName),
      businessFundingCampaignPlanModel: driver.model(BusinessFundingCampaignPlanModel.tableName),
    };
  },
};
