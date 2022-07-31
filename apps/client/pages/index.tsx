import { useGetVersionQuery } from "$graphql";

import type { NextPage } from "next";
import Head from "next/head";

import { useMemo } from "react";

const HomePage: NextPage = () => {
  const { data, loading, error } = useGetVersionQuery();

  const errorStr = useMemo(() => JSON.stringify(error, null, 4), [error]);

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center gap-4">
      <Head>
        <title>Welcome to Waifu Bot Control Center</title>
      </Head>
      <h1 className="page-title">Welcome to Waifu Bot Control Center!!!</h1>
      <p className="text-3xl font-semibold">
        Current app version is {loading ? "loading..." : data?.version}
      </p>
      {errorStr && <p>Has error: {errorStr}</p>}
    </main>
  );
};

export default HomePage;
