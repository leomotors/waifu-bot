import { useContext, useEffect, useState } from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";

import { AuthContext } from "$lib/contexts";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const { login } = useContext(AuthContext);

  const [token, setToken] = useState("");

  useEffect(() => {
    const queryToken =
      typeof router.query.token === "string"
        ? router.query.token
        : router.query.token?.[0];

    setToken(queryToken ?? localStorage.getItem("token") ?? "");
  }, [router.query.token]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="page-title">Login</h1>

      <label className="text-4xl" htmlFor="token">
        Enter your access token
      </label>
      <input
        className="m-4 h-12 w-2/3 rounded-lg border border-black bg-neutral-200 p-2"
        name="token"
        type="text"
        value={token}
        onChange={(e) => setToken(e.currentTarget.value)}
      />

      <button
        className="rounded-xl bg-gradient-to-br from-pink-200 to-pink-300 p-4 text-3xl font-bold disabled:from-gray-300 disabled:to-neutral-400"
        disabled={token.length < 10}
        onClick={() => login(token ?? "")}
      >
        Set Token
      </button>
    </main>
  );
};

export default LoginPage;
