import { Database } from "./env.config";

export const getDatabaseConfig = (
  database: Database,
  isMigration?: boolean,
) => {
  return {
    type: "postgres",
    host: database.host,
    port: database.port,
    username: database.user,
    password: database.password,
    database: database.name,
    entities: [],
    ...(isMigration ? { migrations: ["src/_migrations/*.{ts,js}"] } : {}),
    synchronize: false,
  };
};
