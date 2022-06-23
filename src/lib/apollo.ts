import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_VERCEL_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
})