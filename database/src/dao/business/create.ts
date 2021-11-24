import { ModelCtor } from "sequelize/dist";
import { BusinessModel, BusinessModelArgs } from "../../business/model";
import { BusinessDAO } from "../types";

export default (model: ModelCtor<BusinessModel>): BusinessDAO["business"]["create"] => {
  return async (args: BusinessModelArgs) => await model.create(args, { logging: false });
};
