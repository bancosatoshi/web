import database from "../../index";
import business, { BusinessModels } from "../../business";
import { Sequelize } from "sequelize/dist";
import { config } from "../utils/db";

describe("init", () => {
  let driver: Sequelize;
  let businessModels: BusinessModels;

  beforeAll(async () => {
    driver = await database.connect(config);
    businessModels = await business.init(driver);
  });

  test("getBusinessCampaignBySlug", async () => {
    const data = await businessModels.businessFundingCampaignPlanModel.findOne({
      where: {
        slug: "el-comalote-gt",
      },
      include: [
        {
          model: businessModels.businessModel,
          include: [businessModels.businessInfoModel],
        },
      ],
    });

    expect(data.getDataValue("id")).toBeDefined();
    expect(data.business.getDataValue("user_id")).toBeDefined();
    expect(data.business.business_info.getDataValue("established_at"));
  });
});
