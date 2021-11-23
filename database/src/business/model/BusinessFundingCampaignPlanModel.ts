import moment from "moment";
import { DataTypes, Model, ModelOptions } from "sequelize";
import { BusinessModel } from ".";

type ModelAttributes = typeof Model.rawAttributes;

export type BusinessFundingCampaignPlanModelArgs = {
  id?: string;
  business_id: string;
  slug: string;
  btcpayserver_store_id: string;
  investment_multiple: number;
  total_sats_invested?: number;
  expires_at: Date;
  is_active?: boolean;
  days_left?: number;
  created_at?: Date;
  updated_at?: Date;
};

export class BusinessFundingCampaignPlanModel extends Model<BusinessFundingCampaignPlanModelArgs> {
  public static tableName = "business_funding_campaign_plan";

  public business?: BusinessModel;

  public static rawAttributes: ModelAttributes = {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    business_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    btcpayserver_store_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    investment_multiple: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    total_sats_invested: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0.0,
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.VIRTUAL(DataTypes.BOOLEAN, ["expires_at"]),
      get() {
        const expirationDate = this.getDataValue("expires_at");
        const isActive = moment().isBefore(expirationDate);

        return isActive;
      },
    },
    days_left: {
      type: DataTypes.VIRTUAL(DataTypes.NUMBER, ["expires_at"]),
      get() {
        const expirationDate = this.getDataValue("expires_at");
        const daysLeft = moment(expirationDate).diff(moment(), "days");

        return daysLeft >= 0 ? daysLeft : 0;
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: new Date(),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: new Date(),
    },
  };

  public static config: ModelOptions = {
    paranoid: true,
    underscored: true,
    tableName: BusinessFundingCampaignPlanModel.tableName,
  };
}

export default BusinessFundingCampaignPlanModel;
