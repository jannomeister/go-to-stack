// data-source.ts
import "dotenv/config";

import { DataSource, DataSourceOptions } from "typeorm";

import { getDatabaseConfig } from "./database.config";
import { envConfiguration } from "./env.config";

const { database } = envConfiguration();

const AppDataSource = new DataSource(
  getDatabaseConfig(database, true) as DataSourceOptions,
);

export default AppDataSource;
