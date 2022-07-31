import "$styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@graphql";
import type { AppProps } from "next/app";

const client = createApolloClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
