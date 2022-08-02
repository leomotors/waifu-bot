import { Injectable } from "@nestjs/common";

import { CreateOnePlaylistArgs } from "@generated/playlist/create-one-playlist.args";
import { User } from "@generated/user/user.model";

import { CreateOneUserPlaylistArgs } from "./dto/playlist.dto";

@Injectable()
export class PlaylistAdapter {
    createUserPlaylist(
        input: CreateOneUserPlaylistArgs,
        user: User
    ): CreateOnePlaylistArgs {
        return {
            data: {
                ...input.data,
                owner: {
                    connect: {
                        id: user.id,
                    },
                },
            },
        };
    }
}
