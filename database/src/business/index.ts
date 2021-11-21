import { Sequelize } from "sequelize";
import BusinessInfoModel from "./model/BusinessInfoModel";
import BusinessModel from "./model/BusinessModel";

export default {
  init: (driver: Sequelize) => {
    const Business = driver.define(BusinessModel.tableName, BusinessModel.rawAttributes, BusinessModel.config);

    const BusinessInfo = driver.define(
      BusinessInfoModel.tableName,
      BusinessInfoModel.rawAttributes,
      BusinessInfoModel.config,
    );

    Business.hasOne(BusinessInfo, {
      foreignKey: { allowNull: true },
    });

    BusinessInfo.belongsTo(Business, {
      foreignKey: { allowNull: true },
    });

    return {
      businessModel: driver.model(BusinessModel.tableName),
      businessInfoModel: driver.model(BusinessInfoModel.tableName),
    };
  },
};
