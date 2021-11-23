import database from "../../index";
import business, { BusinessModels } from "../../business";
import { Sequelize } from "sequelize/dist";
import { databaseConfig } from "../util/database-config";
import faker from "faker";

describe("init", () => {
  let driver: Sequelize;
  let businessModels: BusinessModels;
  let business_funding_campaign_plan_id: string;
  const user_id = faker.datatype.uuid();

  beforeAll(async () => {
    driver = await database.connect(databaseConfig, { force: true, logging: false });
    businessModels = await business.init(driver, { force: true, logging: false });
  });

  test("create business_funding_campaign_transactions record", async () => {
    const businessRecord = await businessModels.businessModel.create({
      user_id,
    });

    const business_id = businessRecord.getDataValue("id");

    await businessModels.businessInfoModel.create(
      {
        business_id,
        established_at: new Date("2019-08-21"),
      },
      { logging: false },
    );

    const businessFundingCampaignRecord = await businessModels.businessFundingCampaignPlanModel.create(
      {
        business_id,
        slug: faker.lorem.slug(),
        btcpayserver_store_id: faker.datatype.uuid(),
      },
      { logging: false },
    );

    business_funding_campaign_plan_id = businessFundingCampaignRecord.getDataValue("id");
    const transaction_amount_in_sats = 12345678;
    const btc_invoice_id = faker.datatype.uuid();

    const businessFundingCampaignTransactionsRecord =
      await businessModels.businessFundingCampaignTransactionsModel.create(
        {
          user_id,
          business_funding_campaign_plan_id,
          btc_invoice_id,
          transaction_amount_in_sats,
        },
        { logging: false },
      );

    expect(businessFundingCampaignTransactionsRecord.getDataValue("id")).toBeDefined();
    expect(businessFundingCampaignTransactionsRecord.getDataValue("user_id")).toEqual(user_id);
    expect(businessFundingCampaignTransactionsRecord.getDataValue("business_funding_campaign_plan_id")).toEqual(
      business_funding_campaign_plan_id,
    );
    expect(businessFundingCampaignTransactionsRecord.getDataValue("transaction_amount_in_sats")).toEqual(
      transaction_amount_in_sats,
    );
    expect(businessFundingCampaignTransactionsRecord.getDataValue("btc_invoice_id")).toEqual(btc_invoice_id);

    // Create more records to check multiple transactions for a campaign
    await Promise.all(
      [faker.datatype.uuid(), faker.datatype.uuid()].map((invoice_id) =>
        businessModels.businessFundingCampaignTransactionsModel.create(
          {
            user_id,
            business_funding_campaign_plan_id,
            btc_invoice_id: invoice_id,
            transaction_amount_in_sats,
          },
          { logging: false },
        ),
      ),
    );
  });

  test("findAll business_funding_campaign_transactions records by business_funding_campaign_plan_id", async () => {
    const businessFundingCampaignTransactionsRecords =
      await businessModels.businessFundingCampaignTransactionsModel.findAll({
        where: {
          business_funding_campaign_plan_id,
        },
        logging: false,
      });

    expect(businessFundingCampaignTransactionsRecords).toHaveLength(3);
  });

  test("findAll business_funding_campaign_transactions records by user_id", async () => {
    const businessFundingCampaignTransactionsRecords =
      await businessModels.businessFundingCampaignTransactionsModel.findAll({
        where: {
          user_id,
        },
        logging: false,
      });

    expect(businessFundingCampaignTransactionsRecords).toHaveLength(3);
  });
});
