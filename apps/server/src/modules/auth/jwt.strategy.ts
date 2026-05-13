import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import { EnvConfig } from "../../common/config/env.config";

export interface JwtPayload {
  sub: string;
}

/**
 * Validates bearer JWTs minted by AuthService.createAccessToken.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService<EnvConfig, true>) {
    const defaults = config.get("defaults", { infer: true });
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: defaults.secretKey,
    });
  }

  validate(payload: JwtPayload) {
    return { userId: payload.sub };
  }
}
