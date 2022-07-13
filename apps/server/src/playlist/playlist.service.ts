import { Injectable } from "@nestjs/common";

import { CreateOnePlaylistArgs } from "@generated/playlist/create-one-playlist.args";
import { FindManyPlaylistArgs } from "@generated/playlist/find-many-playlist.args";

import { PrismaService } from "../prisma.service";

@Injectable()
export class PlaylistService {
    constructor(private readonly prisma: PrismaService) {}

    async findMany(input: FindManyPlaylistArgs) {
        return this.prisma.playlist.findMany(input);
    }

    async create(input: CreateOnePlaylistArgs) {
        return this.prisma.playlist.create(input);
    }
}
