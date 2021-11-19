import mysql from "mysql2/promise";
import { Sequelize, SyncOptions } from "sequelize";

export default {
  async connect(config: mysql.ConnectionOptions, options?: SyncOptions) {
    try {
      const connection = await mysql.createConnection(config);

      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${config.database}\`;`);

      const sequelize = new Sequelize({
        host: config.host,
        port: config.port,
        password: config.password,
        username: config.user,
        database: config.database,
        dialect: "mysql",
      });

      await sequelize.authenticate();

      await sequelize.sync(options);

      console.log("Database Connection success");

      return sequelize;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
