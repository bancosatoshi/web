import { ModelCtor } from "sequelize/dist";
import { BusinessInfoModel, BusinessInfoModelArgs } from "../../business/model";
import { BusinessDAO } from "../types";

export default (model: ModelCtor<BusinessInfoModel>): BusinessDAO["business_info"]["create"] => {
  return async (args: BusinessInfoModelArgs) => await model.create(args, { logging: false });
};
