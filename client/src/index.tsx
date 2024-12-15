import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalStyles from "./styles";
import Pages from "./pages";

const root = createRoot(document.getElementById("root")!);

const client = new ApolloClient({
  uri: "https://backend-production-d3ed.up.railway.app/",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);
