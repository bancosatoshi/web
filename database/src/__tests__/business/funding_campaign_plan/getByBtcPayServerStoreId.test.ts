import database from "../../../index";
import business from "../../../business";
import { Sequelize } from "sequelize/dist";
import faker from "faker";
import { BusinessDAO } from "../../../dao/types";
import connectionOptions from "../../utils/connectionOptions";
import moment from "moment";

describe("business_funding_campaign_plan: getByBtcPayServerStoreId", () => {
  let driver: Sequelize;
  let businessDAO: BusinessDAO;

  const user_id = faker.datatype.uuid();
  const slug = faker.lorem.slug();
  const established_at = new Date("2019-08-21");
  const maturity_date = moment().add(5, "years").toDate();
  const btcpayserver_store_id = faker.datatype.uuid();

  beforeAll(async () => {
    driver = await database.connect(connectionOptions, { force: true, logging: false });
    businessDAO = await business.init(driver, { force: true, logging: false });
  });

  test("seed business_funding_campaign_plan", async () => {
    const businessRecord = await businessDAO.business.create({
      user_id,
    });

    const business_id = businessRecord.getDataValue("id");

    await businessDAO.business_info.create({
      business_id,
      established_at,
    });

    await businessDAO.business_funding_campaign_plan.create({
      business_id,
      investment_multiple: 0,
      expires_at: new Date(),
      slug,
      btcpayserver_store_id,
      maturity_date,
    });
  });

  test("getByBtcPayServerStoreId", async () => {
    const data = await businessDAO.business_funding_campaign_plan.getByBtcPayServerStoreId({ btcpayserver_store_id });

    expect(data.getDataValue("id")).toBeDefined();
    expect(data.getDataValue("slug")).toEqual(slug);
    expect(data.getDataValue("btcpayserver_store_id")).toEqual(btcpayserver_store_id);
    expect(data.business.getDataValue("user_id")).toEqual(user_id);
    expect(data.business.business_info.getDataValue("established_at")).toBeDefined();
  });
});
