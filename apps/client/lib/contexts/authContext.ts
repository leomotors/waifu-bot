import type { GetMyInfoQuery } from "$graphql";

import { createContext } from "react";

export interface IAuthContext {
  user: GetMyInfoQuery["me"] | undefined;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: undefined,
  loading: true,
  login: () => null,
  logout: () => null,
});
