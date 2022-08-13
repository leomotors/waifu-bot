import { Injectable } from "@nestjs/common";

import { User } from "@generated/user/user.model";

import { PrismaService } from "../prisma.service";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async getUser(token: string | undefined): Promise<User | undefined> {
        if (
            (token?.length ?? 0) != 50 &&
            (process.env.npm_lifecycle_event != "dev" || !token)
        )
            return undefined;

        const found = await this.prisma.accessToken.findUnique({
            where: { token },
            include: { user: true },
        });

        if (!found) return undefined;

        if (found.expire.getTime() < Date.now()) {
            // async delete
            this.prisma.accessToken.delete({ where: { token } });
            return undefined;
        }

        return found.user;
    }
}
