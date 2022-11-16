import { Module } from "@nestjs/common";

import { AccessTokenResolver } from "./access-token.resolver";
import { AccessTokenService } from "./access-token.service";

@Module({
  providers: [AccessTokenResolver, AccessTokenService],
})
export class AccessTokenModule {}
