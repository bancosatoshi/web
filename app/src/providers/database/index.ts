import database from "@bancosatoshi/database";
import business from "@bancosatoshi/database/business";

const config = {
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

export const init = async () => {
  const driver = await database.connect(config);

  return {
    driver,
    business: await business.init(driver),
  };
};

export default {
  init,
};
