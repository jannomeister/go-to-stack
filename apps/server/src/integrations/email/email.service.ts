import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";

import { EnvConfig } from "../../common/config/env.config";

@Injectable()
export class EmailService {
  private readonly transport: nodemailer.Transporter;
  private readonly defaultFrom: string;

  constructor(config: ConfigService<EnvConfig, true>) {
    const emailCfg = config.get("email", { infer: true });
    this.defaultFrom = emailCfg.from;

    const hasCredentials = Boolean(emailCfg.user && emailCfg.password);
    this.transport = nodemailer.createTransport({
      host: emailCfg.host,
      port: emailCfg.port,
      secure: emailCfg.secure,
      ...(hasCredentials
        ? {
            auth: {
              user: emailCfg.user,
              pass: emailCfg.password,
            },
          }
        : {}),
    });
  }

  async send(
    opts: Omit<nodemailer.SendMailOptions, "from"> & { from?: string },
  ) {
    const { from, ...rest } = opts;
    return this.transport.sendMail({
      from: from ?? this.defaultFrom,
      ...rest,
    });
  }
}
