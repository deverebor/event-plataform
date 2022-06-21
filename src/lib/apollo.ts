import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4nkz3480byp01xm5vkmb4ja/master',
  cache: new InMemoryCache()
})