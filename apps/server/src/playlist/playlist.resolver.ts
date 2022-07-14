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
import { Playlist } from "@generated/playlist/playlist.model";

import { PlaylistService } from "./playlist.service";

@Resolver(() => Playlist)
export class PlaylistResolver {
    constructor(private readonly service: PlaylistService) {}

    @Query(() => [Playlist])
    playlists(@Args() input?: FindManyPlaylistArgs) {
        return this.service.findMany(input);
    }

    @ResolveField(() => [Music])
    music(@Parent() playlist: Playlist) {
        return this.service.musicOfPlaylist(playlist);
    }

    @Mutation(() => Playlist, { nullable: true })
    createPlaylist(@Args() input: CreateOnePlaylistArgs) {
        return this.service.create(input);
    }
}
