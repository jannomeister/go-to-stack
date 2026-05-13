import { bool, cleanEnv, email, num, str, url } from "envalid";

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

export interface StripeConfig {
  secretKey: string;
  webhookSecret: string;
}

export interface EmailConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  from: string;
  secure: boolean;
}

export interface Auth0 {
  domain: string;
  clientId: string;
  clientSecret: string;
}

export interface SentryConfig {
  dsn: string;
  tracesSampleRate: number;
  profilesSampleRate: number;
}

export interface EnvConfig {
  port: number;
  isDev: boolean;
  isProd: boolean;
  isTest: boolean;
  isCi: boolean;
  defaults: AppDefaults;
  database: Database;
  stripe: StripeConfig;
  email: EmailConfig;
  sentry: SentryConfig;
}

export const envConfiguration = (): EnvConfig => {
  const env = cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ["development", "production", "test", "ci"],
      default: "production",
    }),
    PORT: num({ default: 3000 }),
    APP_SECRET_KEY: str(),
    SERVER_BASE_URL: url(),

    // database
    DATABASE_HOST: str(),
    DATABASE_PORT: num(),
    DATABASE_USER: str(),
    DATABASE_PASSWORD: str(),
    DATABASE_NAME: str(),

    // stripe
    STRIPE_SECRET_KEY: str(),
    STRIPE_WEBHOOK_SECRET: str({ default: "" }),

    // email (SMTP)
    SMTP_HOST: str({ default: "localhost" }),
    SMTP_PORT: num({ default: 587 }),
    SMTP_USER: str({ default: "" }),
    SMTP_PASSWORD: str({ default: "" }),
    SMTP_FROM: email({ default: "noreply@localhost" }),
    SMTP_SECURE: bool({ default: false }),

    // Sentry (optional; leave DSN empty to disable at runtime)
    SENTRY_DSN: str({ default: "" }),
    SENTRY_TRACES_SAMPLE_RATE: num({ default: 0 }),
    SENTRY_PROFILES_SAMPLE_RATE: num({ default: 0 }),
  });

  const isDev = env.NODE_ENV === "development";
  const isProd = env.NODE_ENV === "production";
  const isTest = env.NODE_ENV === "test";

  return {
    port: env.PORT,
    isDev,
    isProd,
    isTest,
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
    stripe: {
      secretKey: env.STRIPE_SECRET_KEY,
      webhookSecret: env.STRIPE_WEBHOOK_SECRET,
    },
    email: {
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      user: env.SMTP_USER,
      password: env.SMTP_PASSWORD,
      from: env.SMTP_FROM,
      secure: env.SMTP_SECURE,
    },
    sentry: {
      dsn: env.SENTRY_DSN,
      tracesSampleRate: env.SENTRY_TRACES_SAMPLE_RATE,
      profilesSampleRate: env.SENTRY_PROFILES_SAMPLE_RATE,
    },
  };
};
