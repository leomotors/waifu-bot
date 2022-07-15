import { Injectable } from "@nestjs/common";

import { AccessToken } from "@generated/access-token/access-token.model";
import { FindManyAccessTokenArgs } from "@generated/access-token/find-many-access-token.args";
import { FindUniqueUserArgs } from "@generated/user/find-unique-user.args";

import { randomUUID } from "node:crypto";

import { PrismaService } from "../prisma.service";

@Injectable()
export class AccessTokenService {
    private incrementalSeed = 0;

    constructor(private readonly prisma: PrismaService) {}

    findMany(input?: FindManyAccessTokenArgs) {
        return this.prisma.accessToken.findMany(input);
    }

    async userOfToken(token: AccessToken) {
        return (
            await this.prisma.accessToken.findUniqueOrThrow({
                where: { token: token.token },
                select: { user: true },
            })
        ).user;
    }

    generateToken(input: FindUniqueUserArgs) {
        this.incrementalSeed = (this.incrementalSeed + 1) % 10;

        const token = randomUUID() + Date.now() + this.incrementalSeed;
        const expire = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        return this.prisma.accessToken.upsert({
            where: {
                userId: input.where.id,
            },
            create: {
                user: {
                    connect: input.where,
                },
                token,
                expire,
            },
            update: {
                token,
                expire,
            },
        });
    }
}
