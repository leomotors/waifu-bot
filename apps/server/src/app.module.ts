import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Global, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlaylistModule } from "./playlist/playlist.module";
import { PrismaService } from "./prisma.service";
import { UserModule } from "./user/user.module";

@Global()
@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true,
            autoSchemaFile: "./src/generated/schema.graphql",
        }),
        UserModule,
        PlaylistModule,
    ],
    controllers: [AppController],
    providers: [AppService, PrismaService],
    exports: [PrismaService],
})
export class AppModule {}
