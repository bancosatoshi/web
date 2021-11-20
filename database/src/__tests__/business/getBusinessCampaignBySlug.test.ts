import database from "../../index";
import business, { BusinessModels } from "../../business";
import { Sequelize } from "sequelize/dist";

const config = {
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

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
