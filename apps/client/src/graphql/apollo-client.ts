import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT as string,
  cache: new InMemoryCache(),
});
