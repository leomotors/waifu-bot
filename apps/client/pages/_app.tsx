import "$styles/globals.scss";

import { Sidebar } from "$components/layouts/Sidebar";
import { createApolloClient } from "$graphql";

import { ApolloProvider } from "@apollo/client";

import type { AppProps } from "next/app";
import Head from "next/head";

const client = createApolloClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Waifu Bot Control Center</title>
        <meta
          name="description"
          content="Control Center for Waifu Bot users. Customize your music playlist in web-friendly environment."
        />
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
