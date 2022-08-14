import "$styles/globals.scss";

import { RenderWaifuPage } from "$components/layouts/RenderWaifuPage";
import { Sidebar } from "$components/layouts/Sidebar";
import { createApolloClient } from "$graphql";
import { AuthProvider } from "$lib/contexts";

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