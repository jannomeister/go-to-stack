import * as Sentry from "@sentry/nestjs";

const dsn = process.env["SENTRY_DSN"]?.trim();
const tracesSampleRate = Number(
  process.env["SENTRY_TRACES_SAMPLE_RATE"] ?? "0",
);
const profilesSampleRate = Number(
  process.env["SENTRY_PROFILES_SAMPLE_RATE"] ?? "0",
);

Sentry.init({
  dsn: dsn || undefined,
  enabled: Boolean(dsn),
  environment: process.env["NODE_ENV"] ?? "development",
  tracesSampleRate: Number.isFinite(tracesSampleRate) ? tracesSampleRate : 0,
  profilesSampleRate: Number.isFinite(profilesSampleRate)
    ? profilesSampleRate
    : 0,
});
