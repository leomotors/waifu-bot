import { SetMetadata } from "@nestjs/common";

import { AuthKey, AuthRole } from "./auth.utils";

export const Permission = (role: AuthRole) => SetMetadata(AuthKey, role);
