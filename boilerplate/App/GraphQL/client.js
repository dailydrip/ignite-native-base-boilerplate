import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import Config from "react-native-config";
import { createLink } from "@dailydrip/apollo-absinthe-upload-link";

let CreateApolloClient = () => {
  let httpLink = createLink({ uri: `${Config.GRAPHQL_ENDPOINT}/graphql` });
  console.tron.plog("httpLink", httpLink);
  let inner = function(operation, forward) {
    operation.setContext({
      headers: {}
    });

    return forward(operation);
  };

  let middlewareLink = new ApolloLink(inner);
  let clientToReturn = new ApolloClient({
    link: middlewareLink.concat(httpLink),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
  });

  return clientToReturn;
};

export default CreateApolloClient;
