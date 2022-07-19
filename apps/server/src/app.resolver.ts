import { Query, Resolver } from "@nestjs/graphql";

import { AppService } from "./app.service";

import { Permission } from "./auth/auth.decorator";

@Resolver()
@Permission("Public")
export class AppResolver {
    constructor(private readonly service: AppService) {}

    @Query(() => String)
    version() {
        return this.service.getVersion();
    }

    @Query(() => Boolean)
    viewerIsGay() {
        return this.service.viewerIsGay();
    }
}
