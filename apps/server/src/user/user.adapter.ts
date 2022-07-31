import { Injectable } from "@nestjs/common";

import { CreateOneUserArgs as PrismaCreateOneUserArgs } from "@generated/user/create-one-user.args";
import { UpdateOneUserArgs as PrismaUpdateOneUserArgs } from "@generated/user/update-one-user.args";
import { UpsertOneUserArgs as PrismaUpsertOneUserArgs } from "@generated/user/upsert-one-user.args";

import {
    CreateOneUserArgs,
    UpdateOneUserArgs,
    UpsertOneUserArgs,
} from "./dto/user.dto";

@Injectable()
export class UserAdapter {
    createUser(input: CreateOneUserArgs): PrismaCreateOneUserArgs {
        const { profile, ...user } = input.data;

        return {
            data: {
                ...user,
                profile: { create: profile },
            },
        };
    }

    updateUser(input: UpdateOneUserArgs): PrismaUpdateOneUserArgs {
        const { profile, ...user } = input.data;

        if (!profile) {
            return {
                where: input.where,
                data: user,
            };
        } else {
            return {
                where: input.where,
                data: {
                    ...user,
                    profile: {
                        upsert: {
                            create: profile,
                            update: {
                                username: { set: profile.username },
                                lastInteractGuildName: {
                                    set: profile.lastInteractGuildName,
                                },
                            },
                        },
                    },
                },
            };
        }
    }

    upsertUser(input: UpsertOneUserArgs): PrismaUpsertOneUserArgs {
        return {
            where: {
                id: input.data.id,
            },
            create: {
                id: input.data.id,
                profile: {
                    create: {
                        username: input.data.profile.username,
                        lastInteractGuildName:
                            input.data.profile.lastInteractGuildName,
                        avatarUrl: input.data.profile.avatarUrl,
                    },
                },
            },
            update: {
                profile: {
                    update: {
                        username: { set: input.data.profile.username },
                        lastInteractGuildName: {
                            set: input.data.profile.lastInteractGuildName,
                        },
                    },
                },
            },
        };
    }
}
