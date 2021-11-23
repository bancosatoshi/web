import database from "../../index";
import business, { BusinessModels } from "../../business";
import { Sequelize } from "sequelize/dist";
import { databaseConfig } from "../util/database-config";
import faker from "faker";

describe("init", () => {
  let driver: Sequelize;
  let businessModels: BusinessModels;

  const user_id = faker.datatype.uuid();
  const slug = faker.lorem.slug();
  const established_at = new Date("2019-08-21");

  beforeAll(async () => {
    driver = await database.connect(databaseConfig, { force: true, logging: false });
    businessModels = await business.init(driver, { force: true, logging: false });
  });

  test("seed business_funding_campaign_plan", async () => {
    const businessRecord = await businessModels.businessModel.create({
      user_id,
    });

    await businessModels.businessInfoModel.create({
      business_id: businessRecord.getDataValue("id"),
      established_at,
    });

    await businessModels.businessFundingCampaignPlanModel.create({
      business_id: businessRecord.getDataValue("id"),
      slug,
      btcpayserver_store_id: "6e39hBHXvVwWvJUhSb2wKoBden7Ze4zrEDmq3F3f3Gex",
    });
  });

  test("getBusinessCampaignBySlug", async () => {
    const data = await businessModels.businessFundingCampaignPlanModel.findOne({
      where: {
        slug,
      },
      include: [
        {
          model: businessModels.businessModel,
          include: [businessModels.businessInfoModel],
        },
      ],
    });

    expect(data.getDataValue("id")).toBeDefined();
    expect(data.getDataValue("slug")).toEqual(slug);
    expect(data.business.getDataValue("user_id")).toEqual(user_id);
    expect(data.business.business_info.getDataValue("established_at")).toBeDefined();
  });
});
