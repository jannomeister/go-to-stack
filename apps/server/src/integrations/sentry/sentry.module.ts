import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import {
  SentryGlobalFilter,
  SentryModule as SentrySdkModule,
} from "@sentry/nestjs/setup";

/**
 * Sentry Nest wiring (SDK init runs first from `src/instrument.ts`).
 */
@Module({
  imports: [SentrySdkModule.forRoot()],
  providers: [{ provide: APP_FILTER, useClass: SentryGlobalFilter }],
})
export class SentryModule {}
