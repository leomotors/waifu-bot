import { AppVersion } from "@waifu-bot/constants";

import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getVersion() {
        return AppVersion;
    }
}
