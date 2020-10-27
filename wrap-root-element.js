import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "isomorphic-fetch";

const client = new ApolloClient({
  link: new HttpLink({
    uri:
      "https://gatsby-faunadb-bookmark.netlify.app/.netlify/functions/bookmark",
    fetch,
  }),
  cache: new InMemoryCache(),
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
