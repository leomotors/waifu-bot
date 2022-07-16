import { Query, Resolver } from "@nestjs/graphql";

import { AppService } from "./app.service";

import { Auth } from "./auth/auth.decorator";
import { AuthRole } from "./auth/auth.utils";

@Resolver()
export class AppResolver {
    constructor(private readonly service: AppService) {}

    @Query(() => String)
    @Auth(AuthRole.Public)
    version() {
        return this.service.getVersion();
    }
}
