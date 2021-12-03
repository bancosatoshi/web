import database from "../../index";
import business from "../../business";
import { Sequelize } from "sequelize/dist";
import faker from "faker";
import connectionOptions from "../utils/connectionOptions";
import { BusinessDAO } from "../../dao/types";
import moment from "moment";

describe("dao", () => {
  let driver: Sequelize;
  let businessDAO: BusinessDAO;
  let business_funding_campaign_plan_id: string;
  const user_id = faker.datatype.uuid();
  const maturity_date = moment().add(5, "years").toDate();
  const min_funding_in_usd = 20000;
  const max_funding_in_usd = 30000;

  beforeAll(async () => {
    driver = await database.connect(connectionOptions, { force: true, logging: false });
    businessDAO = await business.init(driver, { force: true, logging: false });
  });

  test("create business_funding_campaign_transactions record", async () => {
    const businessRecord = await businessDAO.business.create({
      user_id,
    });

    const business_id = businessRecord.getDataValue("id");

    await businessDAO.business_info.create({
      business_id,
      established_at: new Date("2019-08-21"),
    });

    const businessFundingCampaignRecord = await businessDAO.business_funding_campaign_plan.create({
      business_id,
      investment_multiple: 0,
      expires_at: new Date(),
      slug: faker.lorem.slug(),
      btcpayserver_store_id: faker.datatype.uuid(),
      maturity_date,
      min_funding_in_usd,
      max_funding_in_usd,
    });

    business_funding_campaign_plan_id = businessFundingCampaignRecord.getDataValue("id");
    const transaction_amount_in_sats = 12345678;
    const btc_invoice_id = faker.datatype.uuid();

    const businessFundingCampaignTransactionsRecord = await businessDAO.business_funding_campaign_transactions.create({
      user_id,
      business_funding_campaign_plan_id,
      btc_invoice_id,
      transaction_amount_in_sats,
    });

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
        businessDAO.business_funding_campaign_transactions.create({
          user_id,
          business_funding_campaign_plan_id,
          btc_invoice_id: invoice_id,
          transaction_amount_in_sats,
        }),
      ),
    );
  });

  test("findAll business_funding_campaign_transactions records by business_funding_campaign_plan_id", async () => {
    const businessFundingCampaignTransactionsRecords =
      await businessDAO.business_funding_campaign_transactions.findAllByBusinessFundingCampaignId({
        business_funding_campaign_plan_id,
      });

    expect(businessFundingCampaignTransactionsRecords).toHaveLength(3);
  });

  test("findAll business_funding_campaign_transactions records by user_id", async () => {
    const businessFundingCampaignTransactionsRecords =
      await businessDAO.business_funding_campaign_transactions.findAllByUserId({ user_id });

    expect(businessFundingCampaignTransactionsRecords).toHaveLength(3);
  });
});
