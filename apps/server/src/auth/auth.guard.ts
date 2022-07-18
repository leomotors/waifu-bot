import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
} from "@nestjs/common";
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
        const role =
            this.reflector.getAllAndOverride<AuthRole>(AuthKey, [
                context.getClass(),
                context.getHandler(),
            ]) ?? AuthRole.Admin;

        if (role == AuthRole.Public) return true;

        // * expect context to be graphql, is undefined if is rest
        const req = context.getArgByIndex<{ req: IncomingMessage }>(2).req;

        const token = req?.headers.authorization;

        const isValidUser =
            token == process.env.ADMIN_SECRET ||
            (await this.service.isUser(token));

        if (!isValidUser) throw new UnauthorizedException();

        if (role == AuthRole.Admin) return token == process.env.ADMIN_SECRET;

        return true;
    }
}
