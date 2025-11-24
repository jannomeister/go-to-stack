import { cleanEnv, num, str, url } from "envalid";

export enum EnvKey {
  port = "port",
  isDev = "isDev",
  isProd = "isProd",
  isTest = "isTest",
  isCi = "isCi",
  database = "database",
  defaults = "defaults",
}

export interface AppDefaults {
  secretKey: string;
  serverBaseUrl: string;
  appName: string;
}

export interface Database {
  host: string;
  port: number;
  user: string;
  password: string;
  name: string;
}

export interface Auth0 {
  domain: string;
  clientId: string;
  clientSecret: string;
}

export interface EnvConfig {
  port: number;
  isDev: boolean;
  isProd: boolean;
  isTest: boolean;
  isCi: boolean;
  defaults: AppDefaults;
  database: Database;
}

export const envConfiguration = (): EnvConfig => {
  const env = cleanEnv(process.env, {
    NODE_ENV: str({ default: "production" }),
    PORT: num({ default: 3000 }),
    APP_SECRET_KEY: str(),
    SERVER_BASE_URL: url(),

    // database
    DATABASE_HOST: str(),
    DATABASE_PORT: num(),
    DATABASE_USER: str(),
    DATABASE_PASSWORD: str(),
    DATABASE_NAME: str(),
  });

  return {
    port: env.PORT,
    isDev: env.isDev,
    isProd: env.isProd,
    isTest: env.isTest,
    isCi: env.NODE_ENV === "ci",
    defaults: {
      appName: "Changethis",
      secretKey: env.APP_SECRET_KEY,
      serverBaseUrl: env.SERVER_BASE_URL,
    },
    database: {
      host: env.DATABASE_HOST,
      name: env.DATABASE_NAME,
      user: env.DATABASE_USER,
      password: env.DATABASE_PASSWORD,
      port: env.DATABASE_PORT,
    },
  };
};
