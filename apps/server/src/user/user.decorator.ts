import {
  createParamDecorator,
  ExecutionContext,
  ImATeapotException,
} from "@nestjs/common";

import { User } from "@generated/user/user.model";

export const UserContext = createParamDecorator(
  (data: { allowAdmin?: true } | undefined, ctx: ExecutionContext) => {
    const user = ctx.getArgByIndex(2).req?.user as User;

    if (!user && !data?.allowAdmin) {
      // passed guard means this is Admin
      throw new ImATeapotException("Admin does not have an account");
    }

    return user ?? { admin: true };
  }
);

export type AdminUser = { admin: true };

export function isAdminUser(sus: User | AdminUser): sus is AdminUser {
  return (sus as AdminUser).admin ?? false;
}
