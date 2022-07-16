import { SetMetadata } from "@nestjs/common";

import { AuthKey, AuthRole } from "./auth.utils";

export const Auth = (role: AuthRole) => SetMetadata(AuthKey, role);
