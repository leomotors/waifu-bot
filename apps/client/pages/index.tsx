import { useGetVersionQuery } from "@graphql";
import type { NextPage } from "next";
import { useMemo } from "react";

const Home: NextPage = () => {
  const { data, loading, error } = useGetVersionQuery();

  const errorStr = useMemo(() => JSON.stringify(error, null, 4), [error]);

  return (
    <div>
      <p>Current app version is {loading ? "loading..." : data?.version}</p>
      {errorStr && <p>Has error: {errorStr}</p>}
    </div>
  );
};

export default Home;
