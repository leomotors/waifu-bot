import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

import { IncomingMessage } from "http";

import { AuthService } from "./auth.service";
import { AuthKey, AuthRole } from "./auth.utils";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly service: AuthService,
        private readonly reflector: Reflector
    ) {}

    async canActivate(context: ExecutionContext) {
        const role: AuthRole =
            this.reflector.getAllAndOverride<AuthRole>(AuthKey, [
                context.getClass(),
                context.getHandler(),
            ]) ?? "Admin";

        if (role == "Public") return true;

        // * expect context to be graphql, is undefined if is rest
        const req = context.getArgByIndex<{ req: IncomingMessage }>(2).req;

        const token = req?.headers.authorization;

        if (token == process.env.ADMIN_SECRET) {
            return true;
        } else if (role == "Admin") {
            return false;
        }

        const user = await this.service.getUser(token);

        // @ts-expect-error I did not declare anything
        req.user = user;

        return !!user;
    }
}
