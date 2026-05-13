import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { JwtPayload } from "./jwt.strategy";

@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService) {}

  createAccessToken(userId: string): string {
    const payload: JwtPayload = { sub: userId };
    return this.jwt.sign(payload);
  }
}
