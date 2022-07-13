import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CreateOnePlaylistArgs } from "@generated/playlist/create-one-playlist.args";
import { FindManyPlaylistArgs } from "@generated/playlist/find-many-playlist.args";
import { Playlist } from "@generated/playlist/playlist.model";

import { PlaylistService } from "./playlist.service";

@Resolver()
export class PlaylistResolver {
    constructor(private readonly service: PlaylistService) {}

    @Query(() => [Playlist])
    playlists(@Args() input?: FindManyPlaylistArgs) {
        return this.service.findMany(input);
    }

    @Mutation(() => Playlist)
    createPlaylist(@Args() input: CreateOnePlaylistArgs) {
        return this.service.create(input);
    }
}
