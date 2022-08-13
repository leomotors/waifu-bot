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
import { MusicCount } from "@generated/music/music-count.output";
import { Music } from "@generated/music/music.model";
import { Playlist } from "@generated/playlist/playlist.model";
import { User } from "@generated/user/user.model";

import { Permission } from "../auth/auth.decorator";
import { AdminUser, UserContext } from "../user/user.decorator";

import {
    AddMusicFromUrlArgs,
    removeMusicFromPlaylistArgs,
} from "./dto/music.dto";
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

    @ResolveField(() => MusicCount)
    _count(@Parent() music: Music) {
        return { playlist: this.service.countPlaylists(music) };
    }

    @Mutation(() => Music)
    createMusic(@Args() input: CreateOneMusicArgs) {
        return this.service.create(input);
    }

    @Mutation(() => Music)
    @Permission("User")
    async addMusicToPlaylist(
        @Args() input: AddMusicFromUrlArgs,
        @UserContext({ allowAdmin: true }) user: User | AdminUser
    ) {
        await this.service.assertCanAddToPlaylist(input.playlistId, user);
        return this.service.addMusicToPlaylist(input);
    }

    @Mutation(() => Music)
    @Permission("User")
    removeMusicFromPlaylist(
        @Args() input: removeMusicFromPlaylistArgs,
        @UserContext() user: User
    ) {
        return this.service.attemptRemoveFromPlaylist(input, user);
    }
}
