import { Injectable } from "@nestjs/common";

import { CreateOneProfileArgs } from "@generated/profile/create-one-profile.args";
import { FindManyProfileArgs } from "@generated/profile/find-many-profile.args";
import { FindUniqueProfileArgs } from "@generated/profile/find-unique-profile.args";
import { Profile } from "@generated/profile/profile.model";

import { PrismaService } from "../prisma.service";

@Injectable()
export class ProfileService {
    constructor(private readonly prisma: PrismaService) {}

    findMany(input?: FindManyProfileArgs) {
        return this.prisma.profile.findMany(input);
    }

    findUnique(input: FindUniqueProfileArgs) {
        return this.prisma.profile.findUnique(input);
    }

    userOfProfile(profile: Profile) {
        return this.prisma.user.findUniqueOrThrow({
            where: {
                id: profile.userId,
            },
        });
    }

    create(input: CreateOneProfileArgs) {
        return this.prisma.profile.create(input);
    }
}
