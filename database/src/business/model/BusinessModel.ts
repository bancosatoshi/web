import { DataTypes, Model, ModelAttributes, ModelOptions, Optional } from "sequelize";
import { BusinessInfoModel } from ".";

export type BusinessModelArgs = {
  id: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
};

export type BusinessModelCreationArgs = Optional<BusinessModelArgs, "id">;

export class BusinessModel extends Model<BusinessModelArgs, BusinessModelCreationArgs> {
  public static tableName = "business";

  public business_info?: BusinessInfoModel;

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
