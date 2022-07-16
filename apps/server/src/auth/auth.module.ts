import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";

import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";

@Module({
    providers: [
        AuthService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
    ],
})
export class AuthModule {}
