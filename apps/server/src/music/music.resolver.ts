import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from "@nestjs/graphql";

import { CreateOneMusicArgs } from "@generated/music/create-one-music.args";
import { FindManyMusicArgs } from "@generated/music/find-many-music.args";
import { FindUniqueMusicArgs } from "@generated/music/find-unique-music.args";
import { Music } from "@generated/music/music.model";
import { Playlist } from "@generated/playlist/playlist.model";

import { MusicService } from "./music.service";

@Resolver(() => Music)
export class MusicResolver {
    constructor(private readonly service: MusicService) {}

    @Query(() => [Music])
    musics(input?: FindManyMusicArgs) {
        return this.service.findMany(input);
    }

    @Query(() => Music, { nullable: true })
    music(@Args() input: FindUniqueMusicArgs) {
        return this.service.findUnique(input);
    }

    @ResolveField(() => [Playlist])
    playlist(@Parent() music: Music) {
        return this.service.playlistOfMusic(music);
    }

    @Mutation(() => Music)
    createMusic(@Args() input: CreateOneMusicArgs) {
        return this.service.create(input);
    }
}
