import { ForbiddenException } from "@nestjs/common";
import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from "@nestjs/graphql";

import { Music } from "@generated/music/music.model";
import { CreateOnePlaylistArgs } from "@generated/playlist/create-one-playlist.args";
import { FindManyPlaylistArgs } from "@generated/playlist/find-many-playlist.args";
import { FindUniquePlaylistArgs } from "@generated/playlist/find-unique-playlist.args";
import { PlaylistCount } from "@generated/playlist/playlist-count.output";
import { Playlist } from "@generated/playlist/playlist.model";
import { User } from "@generated/user/user.model";

import { Permission } from "../auth/auth.decorator";
import { AdminUser, isAdminUser, UserContext } from "../user/user.decorator";

import { CreateOneUserPlaylistArgs } from "./dto/playlist.dto";
import { PlaylistAdapter } from "./playlist.adapter";
import { PlaylistService } from "./playlist.service";

@Resolver(() => Playlist)
export class PlaylistResolver {
    constructor(
        private readonly service: PlaylistService,
        private readonly adapter: PlaylistAdapter
    ) {}

    @Query(() => [Playlist])
    playlists(@Args() input?: FindManyPlaylistArgs) {
        return this.service.findMany(input);
    }

    @Query(() => Playlist, { nullable: true })
    @Permission("User")
    async playlist(
        @Args() input: FindUniquePlaylistArgs,
        @UserContext({ allowAdmin: true }) user: User | AdminUser
    ) {
        const playlist = await this.service.findUnique(input);

        if (isAdminUser(user) || !playlist) {
            return playlist;
        } else {
            if (playlist.ownerId == user.id) {
                return playlist;
            } else {
                throw new ForbiddenException(
                    "You do not have access to this playlist!"
                );
            }
        }
    }

    @ResolveField(() => [Music])
    music(@Parent() playlist: Playlist) {
        return this.service.musicOfPlaylist(playlist);
    }

    @ResolveField(() => User)
    owner(@Parent() playlist: Playlist) {
        return this.service.ownerOfPlaylist(playlist);
    }

    @ResolveField(() => PlaylistCount)
    _count(@Parent() playlist: Playlist) {
        return { music: this.service.countMusics(playlist) };
    }

    @Mutation(() => Playlist)
    createPlaylist(@Args() input: CreateOnePlaylistArgs) {
        return this.service.create(input);
    }

    @Mutation(() => Playlist)
    @Permission("User")
    createUserPlaylist(
        @Args() input: CreateOneUserPlaylistArgs,
        @UserContext() user: User
    ) {
        return this.service.create(
            this.adapter.createUserPlaylist(input, user)
        );
    }
}
