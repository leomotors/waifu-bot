import { Injectable } from "@nestjs/common";

import { CreateOneUserArgs } from "@generated/user/create-one-user.args";
import { FindManyUserArgs } from "@generated/user/find-many-user.args";
import { FindUniqueUserArgs } from "@generated/user/find-unique-user.args";
import { UpdateOneUserArgs } from "@generated/user/update-one-user.args";
import { User } from "@generated/user/user.model";

import { PrismaService } from "../prisma.service";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    findMany(input?: FindManyUserArgs) {
        return this.prisma.user.findMany(input);
    }

    findUnique(input: FindUniqueUserArgs) {
        return this.prisma.user.findUnique(input);
    }

    playlistOfUser(user: User) {
        return this.prisma.playlist.findMany({
            where: {
                ownerId: user.id,
            },
        });
    }

    async countPlaylists(input: FindUniqueUserArgs) {
        return this.prisma.playlist.count({
            where: { ownerId: input.where.id },
        });
    }

    create(input: CreateOneUserArgs) {
        return this.prisma.user.create(input);
    }

    update(input: UpdateOneUserArgs) {
        return this.prisma.user.update(input);
    }
}
