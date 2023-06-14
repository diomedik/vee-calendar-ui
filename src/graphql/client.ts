import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { message } from "antd";

console.log(process.env)

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API,
});

const authLink = setContext((_, { headers }) => {
  return {

    headers: {
      ...headers,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((error) => {
      message.error(error.message, 5000);
    });
  }
  if (networkError) {
    message.error(networkError.message, 5000);
  }
});

export const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});
