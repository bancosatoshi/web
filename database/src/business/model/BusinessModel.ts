import { DataTypes, Model, ModelOptions } from "sequelize";
import { BusinessInfoModel } from ".";

export type BusinessModelArgs = {
  id?: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
};

export class BusinessModel extends Model<BusinessModelArgs> {
  public static tableName = "business";

  public business_info?: BusinessInfoModel;

  public static rawAttributes = {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
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
    tableName: BusinessModel.tableName,
    timestamps: true,
  };
}

export default BusinessModel;
