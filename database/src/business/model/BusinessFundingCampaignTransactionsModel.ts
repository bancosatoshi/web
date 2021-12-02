import { DataTypes, Model, ModelAttributes, ModelOptions, Optional } from "sequelize";
import { BusinessFundingCampaignPlanModel } from ".";

export type BusinessFundingCampaignTransactionsModelArgs = {
  id: string;
  user_id: string;
  business_funding_campaign_plan_id: string;
  btc_invoice_id: string;
  transaction_amount_in_sats: number;
  created_at?: Date;
  updated_at?: Date;
};

export type BusinessFundingCampaignTransactionsModelCreationArgs = Optional<
  BusinessFundingCampaignTransactionsModelArgs,
  "id"
>;

export class BusinessFundingCampaignTransactionsModel extends Model<
  BusinessFundingCampaignTransactionsModelArgs,
  BusinessFundingCampaignTransactionsModelCreationArgs
> {
  public static tableName = "business_funding_campaign_transactions";

  public businessFundingCampaignPlan?: BusinessFundingCampaignPlanModel;

  public static _attributes: ModelAttributes = {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: false,
    },
    business_funding_campaign_plan_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: false,
    },
    btc_invoice_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    transaction_amount_in_sats: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
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
    tableName: BusinessFundingCampaignTransactionsModel.tableName,
  };
}

export default BusinessFundingCampaignTransactionsModel;
