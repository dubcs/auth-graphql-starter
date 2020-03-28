import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({ uri: "http://localhost:4000/graphql" });
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem("token") || null
    }
  });
  return forward(operation);
});

// use with apollo-client
const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
  link
});

ReactDOM.render(
  <HashRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </HashRouter>,
  document.getElementById("root")
);
