import { ModelCtor } from "sequelize/dist";
import { BusinessInfoModel } from "../../business/model";
import { BusinessDAO } from "../types";

export default (model: ModelCtor<BusinessInfoModel>): BusinessDAO["business_info"]["create"] => {
  return async (args) => await model.create(args, { logging: false });
};
