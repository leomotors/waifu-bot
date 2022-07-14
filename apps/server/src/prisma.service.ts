import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";

import { Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        if (process.env.npm_lifecycle_event == "dev")
            super({
                log: [
                    {
                        emit: "event",
                        level: "query",
                    },
                ],
            });
        else super();
    }

    async onModuleInit() {
        await this.$connect();

        if (process.env.npm_lifecycle_event == "dev")
            (this as PrismaClient<unknown, "query">).$on(
                "query",
                (e: Prisma.QueryEvent) => {
                    console.log("Query: " + e.query);
                    console.log("Params: " + e.params);
                    console.log("Duration: " + e.duration + "ms");
                    console.log("\n");
                }
            );
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on("beforeExit", async () => {
            await app.close();
        });
    }
}
