import database from "../../index";
import business, { BusinessModels } from "../../business";
import { Sequelize } from "sequelize/dist";
import { config } from "../utils/db";

describe("Business", () => {
  let driver: Sequelize;
  let businessModels: BusinessModels;

  beforeAll(async () => {
    driver = await database.connect(config);
    businessModels = await business.init(driver);
  });

  test("getBusinessCampaigns", async () => {
    const data = await businessModels.businessFundingCampaignPlanModel.findAll();

    expect(data.length).not.toBe(0);
    expect(data[0]).toBeDefined();
    expect(data[0].getDataValue("id")).toBeDefined();
    expect(data[0].getDataValue("btcpayserver_store_id")).toBeDefined();
  });
});
