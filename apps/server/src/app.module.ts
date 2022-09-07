import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import { PrismaService } from "./prisma.service";

import { AppController } from "./app.controller";
import { AppResolver } from "./app.resolver";
import { AppService } from "./app.service";

import { AccessTokenModule } from "./access-token/access-token.module";
import { AuthModule } from "./auth/auth.module";
import { MusicModule } from "./music/music.module";
import { PlaylistModule } from "./playlist/playlist.module";
import { ProfileModule } from "./profile/profile.module";
import { TodoItemModule } from "./todo-item/todo-item.module";
import { TodoListModule } from "./todo-list/todo-list.module";
import { UserModule } from "./user/user.module";

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: "../../.env",
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: false,
            plugins: [
                ApolloServerPluginLandingPageLocalDefault({ embed: true }),
            ],
            autoSchemaFile: "./src/@generated/schema.graphql",
        }),
        AccessTokenModule,
        AuthModule,
        MusicModule,
        PlaylistModule,
        ProfileModule,
        UserModule,
        TodoItemModule,
        TodoListModule,
    ],
    controllers: [AppController],
    providers: [AppService, AppResolver, PrismaService],
    exports: [PrismaService],
})
export class AppModule {}
