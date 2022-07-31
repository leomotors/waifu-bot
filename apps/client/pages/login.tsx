import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const [token, setToken] = useState("");

  function login() {
    localStorage.setItem("token", token);
    router.push("/");
  }

  useEffect(() => {
    const queryToken =
      typeof router.query.token == "string"
        ? router.query.token
        : router.query.token?.[0];

    setToken(queryToken ?? localStorage.getItem("token") ?? "");
  }, [router.query.token]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="page-title">Login</h1>

      <label htmlFor="token" className="text-4xl">
        Enter your access token
      </label>
      <input
        type="text"
        name="token"
        className="m-4 h-12 w-2/3 rounded-lg border border-black bg-neutral-200 p-2"
        value={token}
        onChange={(e) => setToken(e.currentTarget.value)}
      />

      <button
        className="rounded-xl bg-gradient-to-br from-pink-200 to-pink-300 p-4 text-3xl font-bold disabled:from-gray-300 disabled:to-neutral-400"
        disabled={token.length < 10}
        onClick={login}
      >
        Set Token
      </button>
    </main>
  );
};

export default LoginPage;
