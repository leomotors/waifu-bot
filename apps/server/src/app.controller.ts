import { Controller, Get, Redirect } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
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
