import { Sequelize, SyncOptions } from "sequelize";
import { BusinessFundingCampaignPlanModel, BusinessFundingCampaignTransactionsModel } from "./model";
import { BusinessDAO } from "../dao/types";
import BusinessInfoModel from "./model/BusinessInfoModel";
import BusinessModel from "./model/BusinessModel";
import dao from "../dao";

export default {
  init: async (driver: Sequelize, syncOptions?: SyncOptions): Promise<BusinessDAO> => {
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

    const BusinessFundingCampaignTransactions = driver.define(
      BusinessFundingCampaignTransactionsModel.tableName,
      BusinessFundingCampaignTransactionsModel.rawAttributes,
      BusinessFundingCampaignTransactionsModel.config,
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

    BusinessFundingCampaignTransactions.hasMany(BusinessFundingCampaignPlan, {
      foreignKey: { allowNull: true },
      constraints: false,
    });

    BusinessFundingCampaignPlan.belongsTo(Business, {
      foreignKey: { allowNull: true },
    });

    BusinessFundingCampaignPlan.belongsTo(BusinessFundingCampaignTransactions, {
      foreignKey: { allowNull: true },
    });

    console.log("Syncing Business Models");
    await driver.sync(syncOptions);

    return {
      business: {
        create: dao.business.create(driver.model(BusinessModel.tableName)),
      },
      business_info: {
        create: dao.business_info.create(driver.model(BusinessInfoModel.tableName)),
      },
      business_funding_campaign_plan: {
        create: dao.business_funding_campaign_plan.create(driver.model(BusinessFundingCampaignPlanModel.tableName)),
        getBySlug: dao.business_funding_campaign_plan.getBySlug(
          driver.model(BusinessFundingCampaignPlanModel.tableName),
          driver.model(BusinessModel.tableName),
          driver.model(BusinessInfoModel.tableName),
        ),
        getAllActive: dao.business_funding_campaign_plan.getAllActive(
          driver.model(BusinessFundingCampaignPlanModel.tableName),
        ),
      },
      business_funding_campaign_transactions: {
        create: dao.business_funding_campaign_transactions.create(
          driver.model(BusinessFundingCampaignTransactionsModel.tableName),
        ),
        findAllByUserId: dao.business_funding_campaign_transactions.findAllByUserId(
          driver.model(BusinessFundingCampaignTransactionsModel.tableName),
        ),
        findAllByBusinessFundingCampaignId:
          dao.business_funding_campaign_transactions.findAllByBusinessFundingCampaignId(
            driver.model(BusinessFundingCampaignTransactionsModel.tableName),
          ),
      },
    };
  },
};
