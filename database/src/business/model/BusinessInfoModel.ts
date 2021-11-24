import { DataTypes, Model, ModelOptions } from "sequelize";
import { BusinessModel } from ".";

export type BusinessInfoModelArgs = {
  id?: string;
  business_id: string;
  established_at: Date;
  created_at?: Date;
  updated_at?: Date;
};

export class BusinessInfoModel extends Model<BusinessInfoModelArgs> {
  public static tableName = "business_info";

  public business?: BusinessModel;

  public static rawAttributes = {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    business_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    established_at: {
      type: DataTypes.DATE,
      allowNull: true,
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
    tableName: BusinessInfoModel.tableName,
  };
}

export default BusinessInfoModel;
