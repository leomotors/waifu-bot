import { Controller, Get, Redirect } from "@nestjs/common";

import { AppService } from "./app.service";

import { Auth } from "./auth/auth.decorator";
import { AuthRole } from "./auth/auth.utils";

@Controller()
@Auth(AuthRole.Public)
export class AppController {
    constructor(private readonly service: AppService) {}

    @Get()
    @Redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    get() {
        return;
    }

    @Get("/version")
    getVersion() {
        return this.service.getVersion();
    }
}
