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

    async musicOfPlaylist(playlist: Playlist) {
        return (
            await this.prisma.playlist.findUniqueOrThrow({
                where: { id: playlist.id },
                select: { music: true },
            })
        ).music;
    }

    async ownerOfPlaylist(playlist: Playlist) {
        return (
            await this.prisma.playlist.findUniqueOrThrow({
                where: { id: playlist.id },
                select: { owner: true },
            })
        ).owner;
    }

    countMusics(playlist: Playlist) {
        return this.prisma.music.count({
            where: { playlist: { some: { id: playlist.id } } },
        });
    }

    create(input: CreateOnePlaylistArgs) {
        return this.prisma.playlist.create(input);
    }
}
