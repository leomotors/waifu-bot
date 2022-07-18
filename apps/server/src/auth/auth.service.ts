import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async isUser(token: string | undefined) {
        if ((token?.length ?? 0) != 50) return false;

        const found = await this.prisma.accessToken.findUnique({
            where: { token },
        });

        if (!found) return false;

        if (found.expire.getTime() < Date.now()) {
            await this.prisma.accessToken.delete({ where: { token } });
            return false;
        }

        return true;
    }
}
