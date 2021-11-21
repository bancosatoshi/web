import database from "../index";
import business, { BusinessModels } from "../business";
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
    driver = await database.connect(config, { force: true });
    businessModels = await business.init(driver, { force: true });
  });

  test("seed business_funding_campaign_plan", async () => {
    const businessRecord = await businessModels.businessModel.create({
      user_id: "22f8adf4-9e15-4139-89dc-0369b16c2c06",
    });

    await businessModels.businessInfoModel.create({
      business_id: businessRecord.getDataValue("id"),
      established_at: new Date("2019-08-21"),
    });

    await businessModels.businessFundingCampaignPlanModel.create({
      business_id: businessRecord.getDataValue("id"),
      slug: "el-comalote-gt",
      btcpayserver_store_id: "6e39hBHXvVwWvJUhSb2wKoBden7Ze4zrEDmq3F3f3Gex",
    });
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
  });
});
