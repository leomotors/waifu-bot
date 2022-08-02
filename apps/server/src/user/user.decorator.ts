import {
    createParamDecorator,
    ExecutionContext,
    ImATeapotException,
} from "@nestjs/common";

import { User } from "@generated/user/user.model";

export const UserContext = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const user = ctx.getArgByIndex(2).req?.user as User;

        if (!user) {
            // passed guard means this is Admin
            throw new ImATeapotException("Admin does not have an account");
        }

        return user;
    }
);
