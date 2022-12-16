import { useGetMyInfoQuery } from "@waifu-bot/graphql";

import { useRouter } from "next/router";

import { FC, PropsWithChildren, useState } from "react";

import { AuthContext, type IAuthContext } from "./authContext";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<IAuthContext["user"]>(undefined);

  const { loading, refetch } = useGetMyInfoQuery({
    onCompleted: (data) => {
      setUser(data.me);
    },
  });

  function logout() {
    localStorage.removeItem("token");
    router.push("/login");
    setUser(undefined);
  }

  async function login(token: string) {
    localStorage.setItem("token", token);
    router.push("/");

    // * Avoid caching
    const { data } = await refetch();
    setUser(data.me);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
