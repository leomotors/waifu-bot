import { Module } from "@nestjs/common";

import { ProfileResolver } from "./profile.resolver";
import { ProfileService } from "./profile.service";

@Module({
    providers: [ProfileResolver, ProfileService],
})
export class ProfileModule {}
