import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Stripe from "stripe";

import { EnvConfig } from "../../common/config/env.config";

@Injectable()
export class StripeService {
  private readonly stripe: InstanceType<typeof Stripe>;

  constructor(config: ConfigService<EnvConfig, true>) {
    const stripeCfg = config.get("stripe", { infer: true });
    if (!stripeCfg.secretKey) {
      throw new Error(
        "STRIPE_SECRET_KEY is required when StripeModule is imported.",
      );
    }
    this.stripe = new Stripe(stripeCfg.secretKey, {
      typescript: true,
    });
  }

  raw(): InstanceType<typeof Stripe> {
    return this.stripe;
  }
}
