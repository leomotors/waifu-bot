import { Injectable } from "@nestjs/common";

import { CreateOnePlaylistArgs } from "@generated/playlist/create-one-playlist.args";
import { FindManyPlaylistArgs } from "@generated/playlist/find-many-playlist.args";
import { FindUniquePlaylistArgs } from "@generated/playlist/find-unique-playlist.args";
import { Playlist } from "@generated/playlist/playlist.model";

import { PrismaService } from "../prisma.service";

@Injectable()
export class PlaylistService {
    constructor(private readonly prisma: PrismaService) {}

    findMany(input?: FindManyPlaylistArgs) {
        return this.prisma.playlist.findMany(input);
    }

    findUnique(input: FindUniquePlaylistArgs) {
        return this.prisma.playlist.findUnique(input);
    }

    musicOfPlaylist(playlist: Playlist) {
        return this.prisma.playlist
            .findUniqueOrThrow({ where: { id: playlist.id } })
            .music();
    }

    ownerOfPlaylist(playlist: Playlist) {
        return this.prisma.playlist
            .findUniqueOrThrow({ where: { id: playlist.id } })
            .owner();
    }

    async _count(playlist: Playlist) {
        return (
            await this.prisma.playlist.findUniqueOrThrow({
                where: { id: playlist.id },
                select: { _count: true },
            })
        )._count;
    }

    create(input: CreateOnePlaylistArgs) {
        return this.prisma.playlist.create(input);
    }
}
