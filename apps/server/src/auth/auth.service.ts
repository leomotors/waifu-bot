import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async isUser(token: string | undefined) {
        if (token?.length ?? 0 < 50) return false;

        return (await this.prisma.accessToken.count({ where: { token } })) == 1;
    }
}
