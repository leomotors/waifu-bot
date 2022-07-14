import { Injectable } from "@nestjs/common";

import { CreateOnePlaylistArgs } from "@generated/playlist/create-one-playlist.args";
import { FindManyPlaylistArgs } from "@generated/playlist/find-many-playlist.args";
import { Playlist } from "@generated/playlist/playlist.model";

import { PrismaService } from "../prisma.service";

@Injectable()
export class PlaylistService {
    constructor(private readonly prisma: PrismaService) {}

    findMany(input?: FindManyPlaylistArgs) {
        return this.prisma.playlist.findMany(input);
    }

    async musicOfPlaylist(playlist: Playlist) {
        return (
            (
                await this.prisma.playlist.findUnique({
                    where: {
                        id: playlist.id,
                    },
                    select: {
                        music: true,
                    },
                })
            )?.music ?? []
        );
    }

    create(input: CreateOnePlaylistArgs) {
        return this.prisma.playlist.create(input);
    }
}
