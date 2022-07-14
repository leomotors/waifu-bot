import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Global, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MusicModule } from "./music/music.module";
import { PlaylistModule } from "./playlist/playlist.module";
import { PrismaService } from "./prisma.service";
import { UserModule } from "./user/user.module";

@Global()
@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: false,
            plugins: [
                ApolloServerPluginLandingPageLocalDefault({ embed: true }),
            ],
            autoSchemaFile: "./src/generated/schema.graphql",
        }),
        UserModule,
        PlaylistModule,
        MusicModule,
    ],
    controllers: [AppController],
    providers: [AppService, PrismaService],
    exports: [PrismaService],
})
export class AppModule {}
