import { Module } from "@nestjs/common";

import { EmailModule } from "./email/email.module";
import { SentryModule } from "./sentry/sentry.module";
import { StripeModule } from "./stripe/stripe.module";

@Module({
  imports: [SentryModule, StripeModule, EmailModule],
  exports: [SentryModule, StripeModule, EmailModule],
})
export class IntegrationModule {}
