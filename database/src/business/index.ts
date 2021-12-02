import { Sequelize, SyncOptions } from "sequelize";
import { BusinessFundingCampaignPlanModel, BusinessFundingCampaignTransactionsModel } from "./model";
import { BusinessDAO } from "../dao/types";
import BusinessInfoModel from "./model/BusinessInfoModel";
import BusinessModel from "./model/BusinessModel";
import dao from "../dao";

export default {
  init: async (driver: Sequelize, syncOptions?: SyncOptions): Promise<BusinessDAO> => {
    const Business = driver.define<BusinessModel>(
      BusinessModel.tableName,
      BusinessModel._attributes,
      BusinessModel.config,
    );

    const BusinessInfo = driver.define(
      BusinessInfoModel.tableName,
      BusinessInfoModel._attributes,
      BusinessInfoModel.config,
    );

    const BusinessFundingCampaignPlan = driver.define<BusinessFundingCampaignPlanModel>(
      BusinessFundingCampaignPlanModel.tableName,
      BusinessFundingCampaignPlanModel._attributes,
      BusinessFundingCampaignPlanModel.config,
    );

    const BusinessFundingCampaignTransactions = driver.define(
      BusinessFundingCampaignTransactionsModel.tableName,
      BusinessFundingCampaignTransactionsModel._attributes,
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

    console.log("Syncing Business Models");
    await driver.sync(syncOptions);

    return {
      business: {
        create: dao.business.create(Business),
      },
      business_info: {
        create: dao.business_info.create(BusinessInfo),
      },
      business_funding_campaign_plan: {
        create: dao.business_funding_campaign_plan.create(BusinessFundingCampaignPlan),
        getBySlug: dao.business_funding_campaign_plan.getBySlug(BusinessFundingCampaignPlan, Business, BusinessInfo),
        getByBtcPayServerStoreId: dao.business_funding_campaign_plan.getByBtcPayServerStoreId(
          BusinessFundingCampaignPlan,
          Business,
          BusinessInfo,
        ),
        getAllActive: dao.business_funding_campaign_plan.getAllActive(BusinessFundingCampaignPlan),
      },
      business_funding_campaign_transactions: {
        create: dao.business_funding_campaign_transactions.create(BusinessFundingCampaignTransactions),
        findAllByUserId: dao.business_funding_campaign_transactions.findAllByUserId(
          BusinessFundingCampaignTransactions,
        ),
        findAllByBusinessFundingCampaignId:
          dao.business_funding_campaign_transactions.findAllByBusinessFundingCampaignId(
            BusinessFundingCampaignTransactions,
          ),
      },
    };
  },
};
