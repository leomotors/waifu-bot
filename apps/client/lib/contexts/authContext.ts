import type { GetMyInfoQuery } from "$graphql";

import { createContext } from "react";

export interface IAuthContext {
  user: GetMyInfoQuery["me"] | undefined;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: undefined,
  login: () => null,
  logout: () => null,
});
