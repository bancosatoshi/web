import database from "../../../index";
import business from "../../../business";
import { Sequelize } from "sequelize/dist";
import faker from "faker";
import { BusinessDAO } from "../../../dao/types";
import connectionOptions from "../../utils/connectionOptions";
import moment, { max } from "moment";

describe("business_funding_campaign_plan: getBySlug", () => {
  let driver: Sequelize;
  let businessDAO: BusinessDAO;

  const user_id = faker.datatype.uuid();
  const slug = faker.lorem.slug();
  const established_at = new Date("2019-08-21");
  const maturity_date = moment().add(5, "years").toDate();
  const min_funding_in_usd = "20000.00";
  const max_funding_in_usd = "30000.00";

  beforeAll(async () => {
    driver = await database.connect(connectionOptions, { force: true, logging: false });
    businessDAO = await business.init(driver, { force: true, logging: false });
  });

  test("seed business_funding_campaign_plan", async () => {
    const businessRecord = await businessDAO.business.create({
      user_id,
    });

    await businessDAO.business_info.create({
      business_id: businessRecord.getDataValue("id"),
      established_at,
    });

    await businessDAO.business_funding_campaign_plan.create({
      business_id: businessRecord.getDataValue("id"),
      investment_multiple: 0,
      expires_at: new Date(),
      slug,
      btcpayserver_store_id: faker.datatype.uuid(),
      maturity_date,
      min_funding_in_usd: Number(min_funding_in_usd),
      max_funding_in_usd: Number(max_funding_in_usd),
    });
  });

  test("getBusinessCampaignBySlug", async () => {
    const data = await businessDAO.business_funding_campaign_plan.getBySlug({ slug });

    expect(data.getDataValue("id")).toBeDefined();
    expect(data.getDataValue("slug")).toEqual(slug);
    expect(data.business.getDataValue("user_id")).toEqual(user_id);
    expect(data.getDataValue("min_funding_in_usd")).toEqual(min_funding_in_usd);
    expect(data.getDataValue("max_funding_in_usd")).toEqual(max_funding_in_usd);
    expect(data.business.business_info.getDataValue("established_at")).toBeDefined();
  });
});
