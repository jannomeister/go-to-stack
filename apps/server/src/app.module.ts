import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { envConfiguration } from "./common/config/env.config";
import { IntegrationModule } from "./integrations/integration.module";
import { AuthModule } from "./modules/auth/auth.module";
import { EventModule } from "./modules/event/event.module";

@Module({
  imports: [
    IntegrationModule,
    ConfigModule.forRoot({ isGlobal: true, load: [envConfiguration] }),
    EventModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
