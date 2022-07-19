import { Injectable } from "@nestjs/common";

import { CreateOneUserArgs as PrismaCreateOneUserArgs } from "@generated/user/create-one-user.args";
import { UpdateOneUserArgs as PrismaUpdateOneUserArgs } from "@generated/user/update-one-user.args";

import { CreateOneUserArgs, UpdateOneUserArgs } from "./dto/user.dto";

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
}
