import "$styles/globals.scss";

import { RenderWaifuPage } from "$components/layouts/RenderWaifuPage";
import { Sidebar } from "$components/layouts/Sidebar";
import { AuthProvider } from "$lib/contexts";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@waifu-bot/graphql";

import type { AppProps } from "next/app";
import Head from "next/head";

console.log({ ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT });
const client = createApolloClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Waifu Bot Control Center</title>
        <meta
          content="Control Center for Waifu Bot users. Customize your music playlist in web-friendly environment."
          name="description"
        />
      </Head>
      <AuthProvider>
        <div className="flex">
          <Sidebar />
          <div className="min-h-screen w-full">
            <RenderWaifuPage page={Component} props={pageProps} />
          </div>
        </div>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
