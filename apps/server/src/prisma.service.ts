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

        if (process.env.npm_lifecycle_event == "dev") {
            let queries = 0;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (this as PrismaClient<unknown, "query">).$on(
                "query",
                (e: Prisma.QueryEvent) => {
                    queries++;
                    console.log("Query: " + e.query);
                    console.log("Params: " + e.params);
                    console.log("Duration: " + e.duration + "ms");
                    console.log(`Total Queries since begin: ${queries}\n`);
                }
            );
        }
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on("beforeExit", async () => {
            await app.close();
        });
    }
}