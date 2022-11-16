import { Module } from "@nestjs/common";

import { UserAdapter } from "./user.adapter";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
  providers: [UserService, UserResolver, UserAdapter],
})
export class UserModule {}
