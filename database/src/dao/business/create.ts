import { ModelCtor } from "sequelize/dist";
import { BusinessModel } from "../../business/model";
import { BusinessDAO } from "../types";

export default (model: ModelCtor<BusinessModel>): BusinessDAO["business"]["create"] => {
  return async (args) => await model.create(args, { logging: false });
};
