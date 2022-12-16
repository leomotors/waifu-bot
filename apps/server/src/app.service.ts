import { Injectable } from "@nestjs/common";

import { AppVersion } from "@waifu-bot/constants";

@Injectable()
export class AppService {
  getVersion() {
    return AppVersion;
  }

  viewerIsGay() {
    return Math.random() >= 0.5;
  }
}
